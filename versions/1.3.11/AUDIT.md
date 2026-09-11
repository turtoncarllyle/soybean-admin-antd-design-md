# Soybean Admin AntDesignVue 1.3.11 审计与验收记录

[中文规范](DESIGN.zh-CN.md) | [English specification](DESIGN.md) | [仓库首页](../../README.md)

## 范围

本仓库为 Soybean Admin **AntDesignVue 版本**的 DESIGN.md 设计规范，基线是上游 v1.3.11，固定提交 9cf88f5f04f5f4bdac55687f0257ccb36c44584e。源码快照位于 E:\github\admin-ui-design-md\soybean-admin-antd-md\soybean-admin-antd-1.3.11，仅作为分析依据，不纳入本仓库，也不修改上游源码。

本次发布创建全新的文档仓库，使用 versions\1.3.11、Git 标签 v1.3.11 和对应 Release。后续同版本维护只更新 main；新的上游版本再增加目录。

## 证据与覆盖

| 模块 | 证据 | 规范覆盖 | 剩余边界 |
| --- | --- | --- | --- |
| 版本与依赖 | package.json、pnpm-lock.yaml、固定上游提交 | Vue 3.5.13、Vite 6.0.7、Ant Design Vue 4.2.6、UnoCSS 65.4.2 等 | 依赖升级需重新审计 |
| 主题令牌 | src\theme\settings.ts、src\theme\vars.ts、store\modules\theme\shared.ts | 主色、语义色、色板、light/dark/auto、Ant Design Vue 算法和 CSS 变量 | 浏览器最终对比度待验证 |
| 应用壳 | src\layouts\base-layout、packages\materials\src\libs\admin-layout | 顶栏、页签、侧栏、四种布局、滚动、移动遮罩、z-index | 不同视口的实际渲染待验证 |
| 页签 | packages\materials\src\libs\page-tab、src\layouts\modules\global-tab | chrome/button、激活、关闭、缓存、横向滚动和右键操作 | 关闭焦点与极端溢出待验证 |
| 组件 | src\views、src\components、packages\materials | 表单、表格、卡片、抽屉、弹窗、树、标签、图表、反馈 | Ant Design Vue 默认行为继承自依赖 |
| 页面与路由 | src\router\elegant\routes.ts、src\views | 仪表盘、管理、登录、异常、功能和多级菜单模式 | 业务 API、权限和真实数据不在规范内 |
| 国际化 | src\locales、src\store\modules\app | zh-CN/en-US、Day.js、菜单/页签/标题同步 | 全部翻译文案需使用方继续核对 |
| 可访问性 | reset.css、Ant Design Vue 组件契约 | 名称、焦点、错误关联、对比度、减少动效责任 | 未运行屏幕阅读器或 axe |

## 关键源码事实

- themeSettings 默认主色为 #646cff，info/success/warning/error 为 #2080f0、#52c41a、#faad14、#f5222d。
- 顶栏 56px、应用页签 44px、侧栏 220px、折叠侧栏 64px、混合侧栏 90px、混合子菜单 200px、页脚 48px。
- AdminLayout 最大布局 z-index 为 100；组件材料包含 AdminLayout、PageTab、SimpleScrollbar、ColorPicker。
- 页面布局支持 vertical、vertical-mix、horizontal、horizontal-mix；页签支持 chrome、button。
- 移动判断使用 VueUse breakpointsTailwind 的 smaller('sm')，移动侧栏使用 rgba(0,0,0,0.2) 遮罩。
- 真实路由包含 /home、/manage/*、/login/:module?、/403、/404、/500、/function/*、/multi-menu/*、/user-center、/about 和 /iframe-page/:url。
- 生产主题设置和混合侧栏设置使用 localStorage；应用通过 App.useApp 提供 message、modal、notification。

## 静态验收标准

- 两份 DESIGN.md 和首页均为 UTF-8，无替换字符或截断内容。
- 两份 DESIGN.md 的 front matter 版本、源码提交、依赖版本、颜色和 typography 字段齐全。
- 双语文件的 section 标识、关键数值、组件名称、布局名称和来源 URL 一致。
- 版本目录为 versions\1.3.11，根首页链接、Raw 下载地址和 Release 地址正确。
- 校验脚本在指定源码目录下通过，git diff --check 通过。
- git ls-files 不包含 soybean-admin-antd-1.3.11 源码。

## 运行验证边界

本次不安装前端依赖、不启动参考项目、不进行浏览器截图、触控、屏幕阅读器、axe 或真实后端工作流测试。因此不能宣称最终页面布局、焦点返回、对比度、接口失败恢复或第三方 iframe 已运行验收。使用方接入时应至少验证 360px 和桌面视口、light/dark/auto、表格横向滚动、长中英文、键盘焦点、重复提交、权限变化和请求失败恢复。

## 发布记录

发布前验证当前 GitHub 登录账号为 turtoncarllyle，目标仓库不存在。发布动作应依次完成：

1. 初始化 E:\github\admin-ui-design-md\soybean-admin-antd\soybean-admin-antd-design-md 的 main 分支并提交文档。
2. 创建公开仓库 turtoncarllyle/soybean-admin-antd-design-md，推送 main。
3. 创建并推送 v1.3.11 标签。
4. 创建标题为 Soybean Admin AntDesignVue DESIGN.md v1.3.11 的 Release，并附加 DESIGN.md、DESIGN.zh-CN.md。
5. 只读核对远端默认分支、标签、Release、附件和工作区干净状态。
