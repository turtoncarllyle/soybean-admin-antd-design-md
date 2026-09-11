---
version: "1.3.11"
name: "Soybean Admin AntDesignVue"
description: "面向 Soybean Admin AntDesignVue 版本的版本化视觉与交互设计系统。"
source:
  repository: "https://github.com/soybeanjs/soybean-admin-antd"
  tag: "v1.3.11"
  commit: "9cf88f5f04f5f4bdac55687f0257ccb36c44584e"
stack:
  vue: "3.5.13"
  vite: "6.0.7"
  typescript: "5.7.3"
  pinia: "2.3.0"
  ant-design-vue: "4.2.6"
  unocss: "65.4.2"
  vue-router: "4.5.0"
  vue-i18n: "11.0.1"
colors:
  primary: "#646cff"
  info: "#2080f0"
  success: "#52c41a"
  warning: "#faad14"
  error: "#f5222d"
typography:
  font-family: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif"
  body-size: "14px (Ant Design Vue 默认令牌)"
  base-line-height: "1.5 (reset.css)"
---

<!-- section:overview -->
# 概览

本文档是 Soybean Admin AntDesignVue 1.3.11 面向实现的设计系统。创建或修改需要保持参考项目风格的后台界面前，应先读取本文档。内容覆盖视觉结果、组件组合、交互状态、响应式行为和集成边界，不替代 Ant Design Vue API 文档，也不替代使用方的路由、权限、接口和数据契约。

参考项目使用 Vue 3、Ant Design Vue 4、Vite、TypeScript、Pinia、UnoCSS、Vue Router、Vue I18n、Day.js 和 ECharts。源码快照只用于分析，不属于本仓库。不要混入其他 Soybean Admin 版本、Naive UI 版本或更新依赖版本的规则。

文档陈述分为源码事实、继承行为、应用补充和待验证。源码事实来自固定源码；继承行为来自锁定依赖；应用补充必须由使用方实现并测试；待验证内容需要浏览器、辅助技术、后端或集成证据。

<!-- section:baseline -->
## 版本基线与源码证据

| 项目 | 固定值 | 证据 |
| --- | --- | --- |
| 上游版本 | 1.3.11 | https://github.com/soybeanjs/soybean-admin-antd/tree/v1.3.11 |
| 固定提交 | 9cf88f5f04f5f4bdac55687f0257ccb36c44584e | https://github.com/soybeanjs/soybean-admin-antd/tree/9cf88f5f04f5f4bdac55687f0257ccb36c44584e |
| UI 库 | ant-design-vue@4.2.6 | package.json |
| 运行时 | vue@3.5.13 | package.json |
| 构建与语言 | vite@6.0.7、typescript@5.7.3 | package.json |
| 状态与样式 | pinia@2.3.0、unocss@65.4.2 | package.json、uno.config.ts |
| 路由与国际化 | vue-router@4.5.0、vue-i18n@11.0.1 | src\router、src\locales |

上游标签代表产品版本。同一版本在 main 上维护文档时不修改 version；新的上游版本使用新的 versions\<version> 目录和源码提交。

<!-- section:principles -->
## 视觉语言与设计原则

Soybean Admin 是安静、清爽、高信息密度的运营工作区。表面以平整浅色为主，使用克制阴影区分顶栏、侧栏和页签。颜色用于主操作、状态、导航选中和数据强调。桌面内容要易扫描，窄屏收缩后仍需可用。

1. 先保持应用壳和间距，再增加装饰。
2. 复用 Ant Design Vue 以及 AdminLayout、PageTab、SimpleScrollbar、ColorPicker。
3. 表单和表格保持紧凑，标签和值对齐，为帮助和错误文案留出空间。
4. 通过颜色、边框、不透明度、加载指示和反馈表达状态，不能只依赖颜色。
5. 将明暗主题、语言切换、焦点和窄屏行为纳入同一组件契约。

<!-- section:colors -->
## 颜色与主题

以下默认值来自 src\theme\settings.ts，属于源码事实。主题仓库可以在运行时替换颜色，因此组件应使用 CSS 变量和 Ant Design Vue 令牌。

| 角色 | 默认值 | 用途 |
| --- | --- | --- |
| Primary | #646cff | 主操作、选中导航、Logo、激活页签、焦点强调 |
| Info | #2080f0 | 信息操作和中性提示 |
| Success | #52c41a | 成功结果和启用状态 |
| Warning | #faad14 | 警告、等待或需要关注 |
| Error | #f5222d | 校验失败、危险操作或请求失败 |

createThemeToken 为五种语义色生成 50、100、200、300、400、500、600、700、800、900、950 色阶，500 是基础色。推荐颜色设置可以从所选颜色派生色板。

浅色默认值为 container rgb(255, 255, 255)、layout rgb(247, 250, 252)、inverted rgb(0, 20, 40)、base-text rgb(31, 31, 31)。暗色默认值为 container rgb(28, 28, 28)、layout rgb(18, 18, 18)、base-text rgb(224, 224, 224)。顶栏、侧栏、页签阴影分别为 0 1px 2px rgb(0, 21, 41, 0.08)、2px 0 8px 0 rgb(29, 35, 41, 0.05)、0 1px 2px rgb(0, 21, 41, 0.08)。

使用 --primary-color、--primary-500-color、--container-bg-color、--layout-bg-color、--inverted-bg-color、--base-text-color、--header-box-shadow、--sider-box-shadow 和 --tab-box-shadow。PageTab 使用 --soy-primary-color 变量。

支持 light、dark、auto；auto 跟随操作系统偏好。Ant Design Vue 使用 defaultAlgorithm 或 darkAlgorithm，将语义色映射到 colorPrimary、colorInfo、colorSuccess、colorWarning、colorError。grayscale 使用 grayscale(100%)；colourWeakness 使用 invert(80%)。浮层必须继承同一个 provider 和算法。

<!-- section:typography -->
## 字体、间距、形状与动效

重置样式使用 ui-sans-serif、system-ui、-apple-system、BlinkMacSystemFont、Segoe UI、Roboto、Helvetica Neue、Arial、Noto Sans 和 Emoji 回退。Ant Design Vue 默认正文令牌为 14px，reset.css 基础行高为 1.5。页面标题和用户身份使用 16px，正文和控件使用 14px，混合菜单标签使用 12px，行内图标通常使用 16px。

使用已有 UnoCSS 间距节奏：4px、6px、8px、12px、16px、18px、24px。搜索栅格使用 [16, 16] gutter，纵向卡片组使用 16px 间距。页签/控件圆角为 4px，布局预览 6px，混合菜单项 8px，关闭图标 50%。不要把所有表面做成胶囊。

标准壳层过渡为 300ms；页面模式包括 fade (0.3s)、fade-bottom (0.25–0.3s)、fade-scale (0.28s)、zoom-fade (0.2–0.3s) 和 zoom-out (0.1–0.15s)。应尊重减少动效偏好。

<!-- section:elevation -->
## 阴影与层级

AdminLayout 最大布局 z-index 为 100。默认最大值下，顶栏 97，页签和页脚 95，纵向侧栏 99，移动遮罩 98，横向侧栏 96。保持这些关系，避免固定壳、抽屉和通知互相覆盖。

壳层使用 shadow-header、shadow-sider、shadow-tab。卡片主要通过容器表面和 Ant Design Vue 边框区分；浮动菜单或预览块才使用局部阴影。

<!-- section:layout -->
## 应用壳层与导航

AdminLayout 渲染顶栏、可选页签、侧栏、移动侧栏及遮罩、主内容和页脚。fixedTop 为 true 时顶栏和页签固定，并由占位元素保留高度。scrollMode content 让主内容滚动，scrollMode wrapper 让外层滚动。fullContent 隐藏壳层。

| 元素 | 默认值 |
| --- | --- |
| 顶栏 | 56px |
| 页签栏 | 应用设置 44px，组件回退 48px |
| 侧栏 | 220px |
| 折叠侧栏 | 64px |
| 混合侧栏 | 90px |
| 混合折叠侧栏 | 64px |
| 混合子菜单 | 200px |
| 页脚 | 48px |
| 布局最大 z-index | 100 |

主题抽屉可以修改这些值；覆盖时必须同步更新占位空间和响应式行为。

- vertical：完整左侧栏，顶栏可含菜单切换和面包屑。
- vertical-mix：窄一级菜单和可选子菜单面板，mixSiderFixed 控制持久显示。
- horizontal：Logo 和主菜单位于顶栏，不显示完整高度侧栏。
- horizontal-mix：顶栏菜单加可选混合侧栏，反向模式可将子菜单放到另一侧。

sm 断点以下，监听器强制 vertical、折叠侧栏、备份旧设置，视口变宽后恢复。移动侧栏是覆盖层，带 rgba(0,0,0,0.2) 遮罩；点击遮罩折叠；移动端隐藏桌面全屏控件。

顶栏顺序为 Logo/切换、菜单/面包屑、全屏、语言切换、主题模式、主题设置和用户头像。菜单使用 Iconify 或本地 SVG，选中项使用主色和选中表面。面包屑可显示图标，移动顶栏隐藏。

<!-- section:tabs -->
## 页面页签

全局页签使用 PageTab，支持 mode chrome 或 mode button、运行时激活色、暗色、可关闭、前缀图标和关闭事件。

- chrome 使用 SVG 形状背景，重叠 18px，水平内边距 24px、垂直 6px，激活 z-index 为 10。
- button 使用 1px 边框、4px 圆角、水平 12px、垂直 4px 内边距，激活时使用半透明主色背景。
- 激活使用运行时主题色，悬停只改变表面和边框。
- 关闭图标为 16px 圆形控件，字形 14px，悬停字形 12px；保留页签不可关闭。
- Better Scroll 提供横向滚动，切换时尽可能居中；长标签最大 240px 并省略。
- tab store 负责路由身份、缓存、添加/移除/切换、右键操作和语言更新。

<!-- section:components -->
## 组件模式

优先使用已注册的 Ant Design Vue 组件和项目包装器。

### 操作与反馈

使用 AButton 的 primary、default、text、ghost、danger、small 变体。ButtonIcon 是图标按钮包装器，需要提示或可访问名称。没有选中行时禁用危险批量操作。不可逆操作使用 Popconfirm；大型表单或权限树使用 Modal。通过 App.useApp 提供的 message、modal、notification 反馈，使其继承全局主题。

触发请求的控件显示 loading，阻止重复提交，失败时保留输入并提供重试或取消。成功消息不等于持久化成功。

### 表单与数据

AForm、AFormItem 要明确 name、标签、placeholder、规则和错误状态。抽屉使用纵向表单，搜索卡使用紧凑响应式栅格。按数据类型使用 AInput、AInputPassword、AInputNumber、ASelect、ARadioGroup、ACheckbox、ASwitch、AUpload。

常见内容表面使用 ACard、bordered false、card-wrapper。ATable 使用 size small、稳定 row-key、列宽/最小宽度、行选择、滚动、loading 和移动端分页。Tag 用于短语义状态，颜色必须配合文字。搜索使用 ARow/ACol 的 24、12、6 跨度和 16px gutter。新增、删除、刷新、列设置放在 TableHeaderOperation。空、加载、错误必须可区分。

### 浮层、树、列表与图表

ADrawer 用于新增/编辑表单，源码用户/角色抽屉为 360px；AModal 用于菜单操作和权限树。ATree 保留展开、勾选和半选状态。详情和仪表盘使用 ADescriptions、AList、AStatistic、ASpace、ADivider。

图表通过共享 hook 使用 ECharts，应有标题卡、响应式高度和有意义的加载/空状态。复用 SimpleScrollbar、ColorPicker、PageTab、AdminLayout 的 DOM 契约。

<!-- section:pages -->
## 页面组合与路由

| 页面族 | 路由或视图 | 组合方式 |
| --- | --- | --- |
| 仪表盘 | /home | Banner、指标卡、折线/饼图、项目动态、响应式行 |
| 系统管理 | /manage/user、/manage/role、/manage/menu、/manage/user-detail/:id | 搜索卡、可选小型表格、标签、分页、抽屉/弹窗、确认操作 |
| 登录认证 | /login/:module? | 密码、验证码、注册、重置密码、微信绑定；空白布局和波浪背景 |
| 异常页面 | /403、/404、/500、/exception/* | 空白布局、插图、说明、返回首页 |
| 功能示例 | /function/* | 页签操作、请求/错误反馈、权限切换、隐藏子项 |
| 导航示例 | /multi-menu/*、/user-center、/about、/iframe-page/:url | 多级菜单、用户详情、iframe、关于和前进状态 |

运营页面使用 BaseLayout，认证/异常/iframe 使用 BlankLayout。路由元数据、激活菜单、keep-alive、角色检查和 i18n key 属于路由契约。

<!-- section:states -->
## 交互与状态契约

每个组件应覆盖默认、悬停、激活/选中、焦点、禁用、加载、空数据、校验错误、请求错误、成功和恢复状态。

- 导航选中和激活页签使用主色；折叠和移动遮罩保留路由。
- 表单提交前校验；登录支持 Enter；提交 loading 并阻止重复；失败保留值。
- 表格在表内显示 loading；选中行才启用批量操作；分页保留查询状态；请求错误提供恢复。
- 危险操作需要确认；关闭抽屉/弹窗后焦点回到触发器；未完成请求不能留下不可见遮罩。
- 切换 zh-CN/en-US 同步路由、菜单、页签、标题和 Day.js；主题切换同步 CSS 变量和 Ant Design Vue 算法。
- 检测到新部署时，通知提供取消和刷新；有未保存表单时不能无选择刷新。

<!-- section:responsive -->
## 响应式行为与内容规则

源码使用 VueUse breakpointsTailwind 和 smaller('sm') 判断移动端。断点数值继承自锁定工具预设，升级依赖时重新核对。移动端强制 vertical、折叠侧栏、保留覆盖层和遮罩、隐藏桌面全屏，并允许表格横向滚动。

使用响应式 ACol 跨度，保证操作按钮可触达。只有数据列确有需要才设置 min-width，其他内容换行或省略。至少测试 360px、项目移动断点和宽桌面视口。中英文长标签、数字、日期、校验消息和翻译菜单不能破坏壳层。

<!-- section:accessibility -->
## 可访问性与内容

Ant Design Vue 提供许多语义和键盘行为，但标签、可访问名称、焦点顺序、焦点返回和错误播报由应用负责。图标按钮需要名称，状态标签需要文字，表单错误要关联字段，抽屉/弹窗关闭后焦点回到触发器。测试菜单、页签、表单、表格、树、对话框和确认框的键盘操作。

检查每个主题及主色/状态表面上的对比度。灰度和色弱模式只是诊断工具。遵守 prefers-reduced-motion，通过 i18n 和 Day.js 显示本地化日期和数字。

<!-- section:resources -->
## 资源、依赖与集成边界

图标来自 Iconify 或本地 SVG。现有资源包括 logo、avatar、banner、empty、network-error、no-permission、not-found、service-error 插图。新增资源前核对第三方许可证。@sa 工作区材料和 hooks 属于参考组件契约。

不要复制 Mock 账号、API 地址或演示成功路径。认证 token、路由角色 R_ADMIN/R_SUPER、响应映射、重试、持久化和服务端校验属于应用层。覆盖 Ant Design Vue 或 UnoCSS 时记录作用域，并同步覆盖暗色、移动端和浮层。

<!-- section:agent -->
## Agent 提示词指南

    请先读取 DESIGN.md，按照 Soybean Admin AntDesignVue 1.3.11 风格实现页面。
    复用 AdminLayout、PageTab、Ant Design Vue 组件、主题 CSS 变量以及已有的路由、
    i18n 和 store 契约。匹配 56px 顶栏、44px 页签栏、220px/64px 侧栏、紧凑表格/
    表单密度、light/dark/auto 主题和移动端侧栏行为。实现加载、禁用、校验、空数据、
    错误、成功、焦点和恢复状态。保留真实 API、路由、权限和数据契约，不要虚构后端
    行为或复制演示账号。

验收前检查壳层对齐、语义颜色、组件尺寸、窄屏表格、暗色浮层、翻译文本、键盘焦点和错误恢复。应用补充和待验证值要在实现说明中标出。

<!-- section:dodont -->
## 应做与避免

| 应做 | 避免 |
| --- | --- |
| 复用锁定的 Ant Design Vue 和 @sa/materials | 重建组件库或混用 Naive UI |
| 通过主题变量和 getAntdTheme() 驱动颜色 | 在每个组件硬编码主色 |
| 保持表格、表单、卡片、抽屉紧凑 | 把运营页做成营销布局 |
| 状态同时显示文字和颜色 | 只用颜色表达状态 |
| 保留真实路由、RBAC、API、i18n | 把演示、Mock、console logging 当生产行为 |
| 测试主题、移动、键盘、加载、空、失败 | 只凭静态标记声明运行时合格 |
| 明确 1.3.11 边界 | 混用其他版本规则 |

<!-- section:gaps -->
## 已知缺口与验证限制

静态检查可以确认源码值和组合，但不能确认最终浏览器布局、字体渲染、屏幕阅读器播报、自定义覆盖后的对比度、触控手势、真实接口时序或第三方 iframe 行为。这些场景必须由使用方验证。

本文档不定义后端 schema、真实认证、授权策略、生产上传存储、图表数据语义或部署策略，只记录呈现契约。证据、覆盖矩阵、自动校验和未验证范围见 AUDIT.md。
