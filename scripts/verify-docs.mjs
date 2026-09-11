import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const defaultRoot = path.resolve(scriptDir, '..');
const args = process.argv.slice(2);

function valueAfter(flag) {
  const index = args.indexOf(flag);
  return index >= 0 ? args[index + 1] : undefined;
}

const root = path.resolve(valueAfter('--root') || defaultRoot);
const sourceValue = valueAfter('--source');
const source = sourceValue ? path.resolve(sourceValue) : null;
const expectedVersion = valueAfter('--version') || '1.3.11';
const failures = [];

function fail(message) {
  failures.push(message);
}

function check(condition, message) {
  if (!condition) fail(message);
}

function readUtf8(filePath) {
  const buffer = fs.readFileSync(filePath);
  let text;
  try {
    text = new TextDecoder('utf-8', { fatal: true }).decode(buffer);
  } catch {
    fail(filePath + ' is not valid UTF-8');
    return '';
  }
  check(!text.includes('\uFFFD'), filePath + ' contains a replacement character');
  return text;
}

function requiredFile(relativePath) {
  const filePath = path.join(root, relativePath);
  check(fs.existsSync(filePath), 'missing ' + relativePath);
  return filePath;
}

function has(text, value, label) {
  check(text.includes(value), label + ' is missing: ' + value);
}

function parseFrontMatter(text, label) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  check(Boolean(match), label + ' has no YAML front matter');
  const front = match?.[1] || '';
  for (const key of ['version:', 'name:', 'description:', 'source:', 'stack:', 'colors:', 'typography:']) {
    has(front, key, label + ' front matter');
  }
  has(front, 'version: "' + expectedVersion + '"', label + ' front matter');
  has(front, 'commit: "9cf88f5f04f5f4bdac55687f0257ccb36c44584e"', label + ' front matter');
  return front;
}

const files = [
  'README.md',
  'README.en-US.md',
  'LICENSE',
  '.gitignore',
  'versions/' + expectedVersion + '/DESIGN.md',
  'versions/' + expectedVersion + '/DESIGN.zh-CN.md',
  'versions/' + expectedVersion + '/AUDIT.md',
  'scripts/verify-docs.mjs'
];

const texts = new Map();
for (const relativePath of files) {
  const filePath = requiredFile(relativePath);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    texts.set(relativePath, readUtf8(filePath));
  }
}

const english = texts.get('versions/' + expectedVersion + '/DESIGN.md') || '';
const chinese = texts.get('versions/' + expectedVersion + '/DESIGN.zh-CN.md') || '';
parseFrontMatter(english, 'DESIGN.md');
parseFrontMatter(chinese, 'DESIGN.zh-CN.md');

const markers = text => [...text.matchAll(/<!-- section:([a-z-]+) -->/g)].map(match => match[1]);
check(JSON.stringify(markers(english)) === JSON.stringify(markers(chinese)), 'bilingual section markers differ');

const literals = [
  expectedVersion,
  '9cf88f5f04f5f4bdac55687f0257ccb36c44584e',
  '#646cff',
  '#2080f0',
  '#52c41a',
  '#faad14',
  '#f5222d',
  '56px',
  '44px',
  '220px',
  '64px',
  '90px',
  '200px',
  '48px',
  '100',
  'vertical',
  'vertical-mix',
  'horizontal',
  'horizontal-mix',
  'chrome',
  'button',
  'zh-CN',
  'en-US',
  'AdminLayout',
  'PageTab',
  'AButton',
  'AForm',
  'ATable',
  'ADrawer',
  'AModal',
  'ATree',
  'light',
  'dark',
  'auto',
  'https://github.com/soybeanjs/soybean-admin-antd'
];

for (const literal of literals) {
  has(english, literal, 'English DESIGN.md');
  has(chinese, literal, 'Chinese DESIGN.md');
}

const readme = texts.get('README.md') || '';
const readmeEn = texts.get('README.en-US.md') || '';
for (const url of [
  'https://antd.soybeanjs.cn/',
  'https://github.com/soybeanjs/soybean-admin-antd',
  'https://gitee.com/soybeanjs/soybean-admin-antd',
  'https://gitcode.com/soybeanjs/soybean-admin-antd',
  'https://stitch.withgoogle.com/docs/design-md/overview/',
  'versions/' + expectedVersion + '/DESIGN.md',
  'versions/' + expectedVersion + '/DESIGN.zh-CN.md'
]) {
  has(readme, url, 'README.md');
  has(readmeEn, url, 'README.en-US.md');
}

check(!fs.existsSync(path.join(root, 'soybean-admin-antd-1.3.11')), 'source snapshot must not be in the documentation repository');

if (source) {
  const packagePath = path.join(source, 'package.json');
  check(fs.existsSync(packagePath), 'source package.json is missing');
  if (fs.existsSync(packagePath)) {
    const pkg = JSON.parse(readUtf8(packagePath));
    check(pkg.version === expectedVersion, 'source package version is ' + pkg.version + ', expected ' + expectedVersion);
    check(pkg.dependencies?.['ant-design-vue'] === '4.2.6', 'source Ant Design Vue version mismatch');
    check(pkg.dependencies?.vue === '3.5.13', 'source Vue version mismatch');
    check(pkg.devDependencies?.vite === '6.0.7', 'source Vite version mismatch');
    check(pkg.devDependencies?.typescript === '5.7.3', 'source TypeScript version mismatch');
    check(pkg.dependencies?.pinia === '2.3.0', 'source Pinia version mismatch');
  }

  const settingsPath = path.join(source, 'src', 'theme', 'settings.ts');
  const settings = fs.existsSync(settingsPath) ? readUtf8(settingsPath) : '';
  for (const value of ['#646cff', '#2080f0', '#52c41a', '#faad14', '#f5222d', 'height: 56', 'height: 44', 'width: 220', 'collapsedWidth: 64', 'height: 48']) {
    has(settings, value, 'source theme settings');
  }

  const layoutPath = path.join(source, 'packages', 'materials', 'src', 'libs', 'admin-layout', 'index.vue');
  const layout = fs.existsSync(layoutPath) ? readUtf8(layoutPath) : '';
  for (const value of ['headerHeight: 56', 'tabHeight: 48', 'siderWidth: 220', 'siderCollapsedWidth: 64', 'footerHeight: 48']) {
    has(layout, value, 'source AdminLayout');
  }
}

if (failures.length) {
  console.error('verify-docs: ' + failures.length + ' failure(s)');
  for (const failure of failures) console.error('- ' + failure);
  process.exitCode = 1;
} else {
  console.log('verify-docs: passed (' + files.length + ' documents, version ' + expectedVersion + ')');
}
