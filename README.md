# soybean-admin-antd-md

[简体中文](README.md) | [English](README.en-US.md)

[![AntDesignVue](https://img.shields.io/badge/AntDesignVue-1.3.11-1677ff)](https://github.com/soybeanjs/soybean-admin-antd/releases/tag/v1.3.11)
[![DESIGN.md](https://img.shields.io/badge/DESIGN.md-AI%20ready-198754)](https://stitch.withgoogle.com/docs/design-md/overview/)
[![License](https://img.shields.io/badge/license-MIT-212529)](LICENSE)

面向 AI 编码 Agent、按上游版本维护的 Soybean Admin **AntDesignVue 版本** DESIGN.md 设计系统规范。

本仓库将 [soybean-admin-antd](https://github.com/soybeanjs/soybean-admin-antd) 的视觉令牌、应用壳层、Ant Design Vue 组件组合、交互状态和响应式规则整理为可直接读取的纯文本规范。它描述应生成的界面结果，不替代 Vue、Vite、Ant Design Vue 或业务 API 文档。

## 当前版本：AntDesignVue 版本

| 版本 | 英文标准版 | 简体中文版 | 首次发布 |
| --- | --- | --- | --- |
| `1.3.11` | [DESIGN.md](versions/1.3.11/DESIGN.md) | [DESIGN.zh-CN.md](versions/1.3.11/DESIGN.zh-CN.md) | [v1.3.11 Release](https://github.com/turtoncarllyle/soybean-admin-antd-md/releases/tag/v1.3.11) |

- [预览地址](https://antd.soybeanjs.cn/)
- [Github 仓库](https://github.com/soybeanjs/soybean-admin-antd)
- [Gitee 仓库](https://gitee.com/soybeanjs/soybean-admin-antd)
- [Gitcode 仓库](https://gitcode.com/soybeanjs/soybean-admin-antd)

英文 `DESIGN.md` 是生态兼容的标准文件；中文文件与英文文件保持相同章节、数值和规则。`1.3.11` 表示上游前端版本，同一版本的文档维护继续提交到 `main`，新的上游版本再新增版本目录。

## DESIGN.md 的用途

`DESIGN.md` 是 Google Stitch 提出的设计系统文档格式，用纯文本记录颜色、字体、布局、组件、状态和响应式行为，让 AI 编码 Agent 在生成或修改后台界面前拥有稳定的视觉上下文。本仓库适合：

- 新建仪表盘、列表、详情、表单和权限管理页面
- 复用 Soybean Admin 的顶栏、侧栏、页签、主题和内容区
- 保持 Ant Design Vue 组件的尺寸、密度、状态和暗色适配一致
- 在升级上游版本时选择匹配的规范，避免混入其他 UI 框架的约定

## 使用方法

1. 选择与项目依赖一致的版本目录。
2. 下载英文版或中文版，并放到项目根目录命名为 `DESIGN.md`。
3. 要求 AI Agent 在编写 UI 前先读取该文件。
4. 同时提供真实的业务路由、权限、接口、数据和允许修改范围；规范不会替代这些业务契约。

下载 `1.3.11` 英文标准版：

```powershell
Invoke-WebRequest `
  -Uri "https://raw.githubusercontent.com/turtoncarllyle/soybean-admin-antd-md/main/versions/1.3.11/DESIGN.md" `
  -OutFile ".\DESIGN.md"
```

下载 `1.3.11` 简体中文版：

```powershell
Invoke-WebRequest `
  -Uri "https://raw.githubusercontent.com/turtoncarllyle/soybean-admin-antd-md/main/versions/1.3.11/DESIGN.zh-CN.md" `
  -OutFile ".\DESIGN.md"
```

示例提示词：

```text
请先读取项目根目录的 DESIGN.md，按照 Soybean Admin AntDesignVue 1.3.11
的应用壳、主题令牌、Ant Design Vue 组件状态、页签和响应式规则实现后台页面。
保留真实的路由、权限、接口和数据契约；不要把演示页或 Mock 行为当成业务实现。
```

## 规范覆盖范围

- `#646cff` 主色和 info/success/warning/error 语义色，以及动态色板
- light、dark、auto 主题、灰度/色弱辅助模式和 Ant Design Vue 算法继承
- 顶栏、侧栏、混合布局、面包屑、页签、页脚、内容滚动和移动端遮罩
- `chrome` / `button` 页签、缓存、关闭、刷新和溢出滚动
- Button、Input、Select、Form、Table、Card、Drawer、Modal、Tree、Tag、Upload 等组件状态
- 仪表盘、统计图表、用户/角色/菜单管理、登录、异常页、权限切换和多级菜单
- zh-CN/en-US 国际化、Day.js 本地化、全屏、主题抽屉和版本更新通知
- 加载、禁用、校验、空数据、失败恢复、键盘焦点、长文本和窄屏表格边界

## 来源与边界

规范基于 [soybean-admin-antd v1.3.11 固定提交](https://github.com/soybeanjs/soybean-admin-antd/tree/9cf88f5f04f5f4bdac55687f0257ccb36c44584e)，源码快照位于本地分析目录 `E:\github\admin-ui-design-md\soybean-admin-antd-md\soybean-admin-antd-1.3.11`，不会被复制进本仓库。源码版本为 Vue `3.5.13`、Vite `6.0.7`、TypeScript `5.7.3`、Pinia `2.3.0`、Ant Design Vue `4.2.6`、UnoCSS `65.4.2`、vue-router `4.5.0` 和 vue-i18n `11.0.1`。

文档明确区分源码事实、Ant Design Vue 继承行为、应用层建议和未验证运行行为。静态核对不等同于浏览器截图、屏幕阅读器或真实后端工作流验收。完整证据和覆盖矩阵见 [版本审计记录](versions/1.3.11/AUDIT.md)。

本仓库是独立维护的设计系统文档，不隶属于 Soybean、Ant Design、Ant Design Vue 或 Google Stitch，也不代表其官方认可。相关名称和标识归各自权利人所有。

## 许可证

本仓库原创文档使用 [MIT License](LICENSE)。Soybean Admin、Ant Design Vue 及其依赖继续遵循各自的许可证。
