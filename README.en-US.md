# soybean-admin-antd-md

[简体中文](README.md) | [English](README.en-US.md)

[![AntDesignVue](https://img.shields.io/badge/AntDesignVue-1.3.11-1677ff)](https://github.com/soybeanjs/soybean-admin-antd/releases/tag/v1.3.11)
[![DESIGN.md](https://img.shields.io/badge/DESIGN.md-AI%20ready-198754)](https://stitch.withgoogle.com/docs/design-md/overview/)
[![License](https://img.shields.io/badge/license-MIT-212529)](LICENSE)

A versioned DESIGN.md design-system specification for AI coding agents, based on the **AntDesignVue edition** of Soybean Admin.

This repository turns the visual tokens, application shell, Ant Design Vue compositions, interaction states, and responsive rules of [soybean-admin-antd](https://github.com/soybeanjs/soybean-admin-antd) into plain text that an AI agent can read directly. It describes the intended UI result; it does not replace Vue, Vite, Ant Design Vue, or business API documentation.

## Current edition: AntDesignVue

| Version | Canonical English | Simplified Chinese | Initial release |
| --- | --- | --- | --- |
| `1.3.11` | [DESIGN.md](versions/1.3.11/DESIGN.md) | [DESIGN.zh-CN.md](versions/1.3.11/DESIGN.zh-CN.md) | [v1.3.11 Release](https://github.com/turtoncarllyle/soybean-admin-antd-md/releases/tag/v1.3.11) |

- [Preview](https://antd.soybeanjs.cn/)
- [GitHub repository](https://github.com/soybeanjs/soybean-admin-antd)
- [Gitee repository](https://gitee.com/soybeanjs/soybean-admin-antd)
- [Gitcode repository](https://gitcode.com/soybeanjs/soybean-admin-antd)

The English `DESIGN.md` is the ecosystem-compatible canonical file. The Chinese file preserves the same sections, values, and rules. `1.3.11` identifies the upstream frontend version; maintenance for this version continues on `main`, while a new upstream version gets a new directory.

## Purpose and use

`DESIGN.md` is a design-system document format introduced by Google Stitch. It records colors, typography, layout, components, states, and responsive behavior in plain text so an AI coding agent has stable visual context before generating or changing an admin interface. Use this repository to:

- Build dashboards, lists, detail views, forms, and access-management pages
- Reuse the Soybean Admin header, sider, tabs, themes, and content area
- Keep Ant Design Vue component dimensions, density, states, and dark-mode behavior consistent
- Select a specification that matches the source version during an upstream upgrade

## Usage

1. Select the directory matching your project's dependency version.
2. Download either language edition and save it as `DESIGN.md` in the project root.
3. Ask the AI agent to read the file before writing UI code.
4. Supply real routes, permissions, APIs, data, and the allowed scope; the specification does not replace those business contracts.

Download the canonical English edition for `1.3.11`:

```powershell
Invoke-WebRequest `
  -Uri "https://raw.githubusercontent.com/turtoncarllyle/soybean-admin-antd-md/main/versions/1.3.11/DESIGN.md" `
  -OutFile ".\DESIGN.md"
```

Download the Simplified Chinese edition for `1.3.11`:

```powershell
Invoke-WebRequest `
  -Uri "https://raw.githubusercontent.com/turtoncarllyle/soybean-admin-antd-md/main/versions/1.3.11/DESIGN.zh-CN.md" `
  -OutFile ".\DESIGN.md"
```

Example prompt:

```text
Read DESIGN.md in the project root first. Implement the admin page using the
Soybean Admin AntDesignVue 1.3.11 shell, theme tokens, Ant Design Vue states,
tabs, and responsive rules. Preserve the real route, permission, API, and data
contracts; do not treat demo pages or Mock behavior as business implementation.
```

## Coverage

- `#646cff` primary color, info/success/warning/error semantic colors, and generated palettes
- Light, dark, and auto schemes, auxiliary grayscale/color-weakness modes, and Ant Design Vue algorithm inheritance
- Header, sider, mixed layouts, breadcrumbs, tabs, footer, content scrolling, and the mobile sider mask
- `chrome` / `button` tabs, caching, closing, reload, and overflow scrolling
- Button, Input, Select, Form, Table, Card, Drawer, Modal, Tree, Tag, Upload, and related states
- Dashboard charts, user/role/menu management, authentication, exception pages, auth switching, and multi-level menus
- zh-CN/en-US internationalization, Day.js locale setup, fullscreen, theme drawer, and update notifications
- Loading, disabled, validation, empty, failure recovery, focus, long-content, and narrow-table boundaries

## Source and boundaries

The specification is based on the [fixed soybean-admin-antd v1.3.11 commit](https://github.com/soybeanjs/soybean-admin-antd/tree/9cf88f5f04f5f4bdac55687f0257ccb36c44584e). The local analysis snapshot is `E:\github\admin-ui-design-md\soybean-admin-antd-md\soybean-admin-antd-1.3.11`; it is not copied into this repository. The source stack is Vue `3.5.13`, Vite `6.0.7`, TypeScript `5.7.3`, Pinia `2.3.0`, Ant Design Vue `4.2.6`, UnoCSS `65.4.2`, vue-router `4.5.0`, and vue-i18n `11.0.1`.

The documents distinguish source facts, inherited Ant Design Vue behavior, application recommendations, and unverified runtime behavior. Static checks are not browser screenshots, screen-reader tests, or real backend workflow acceptance. See the [version audit record](versions/1.3.11/AUDIT.md) for evidence and coverage.

This is an independently maintained design-system document. It is not affiliated with or endorsed by Soybean, Ant Design, Ant Design Vue, or Google Stitch. Related names and marks belong to their respective owners.

## License

Original documentation in this repository is released under the [MIT License](LICENSE). Soybean Admin, Ant Design Vue, and their dependencies remain subject to their respective licenses.
