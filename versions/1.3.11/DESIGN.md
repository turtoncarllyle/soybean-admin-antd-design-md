---
version: "1.3.11"
name: "Soybean Admin AntDesignVue"
description: "A versioned visual and interaction design system for the AntDesignVue edition of Soybean Admin."
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
  body-size: "14px (Ant Design Vue default token)"
  base-line-height: "1.5 (reset.css)"
---

<!-- section:overview -->
# Overview

This is the implementation-oriented design system for Soybean Admin AntDesignVue 1.3.11. Read it before creating or changing an admin interface that should look and behave like the reference project. It covers visual results, component composition, interaction states, responsive behavior, and integration boundaries. It does not replace Ant Design Vue API documentation or the consuming application's route, permission, API, and data contracts.

The reference is a Vue 3 admin template using Ant Design Vue 4, Vite, TypeScript, Pinia, UnoCSS, Vue Router, Vue I18n, Day.js, and ECharts. The source snapshot is analyzed locally but is not part of this documentation repository. Do not mix rules from another Soybean Admin edition, the Naive UI edition, or a newer dependency release.

Statements are classified as Source fact, Inherited, Application addition, or Unverified. Source facts come from the pinned files. Inherited behavior comes from locked dependencies. Application additions must be implemented and tested in the consuming app. Unverified behavior needs browser, assistive-technology, backend, or integration evidence.

<!-- section:baseline -->
## Version baseline and source evidence

| Item | Locked value | Evidence |
| --- | --- | --- |
| Upstream release | 1.3.11 | https://github.com/soybeanjs/soybean-admin-antd/tree/v1.3.11 |
| Pinned commit | 9cf88f5f04f5f4bdac55687f0257ccb36c44584e | https://github.com/soybeanjs/soybean-admin-antd/tree/9cf88f5f04f5f4bdac55687f0257ccb36c44584e |
| UI library | ant-design-vue@4.2.6 | package.json |
| Runtime | vue@3.5.13 | package.json |
| Build and language | vite@6.0.7, typescript@5.7.3 | package.json |
| State and styling | pinia@2.3.0, unocss@65.4.2 | package.json, uno.config.ts |
| Routing and i18n | vue-router@4.5.0, vue-i18n@11.0.1 | src\router, src\locales |

The upstream tag identifies the product version. Documentation maintenance on main does not change version. A future upstream release gets a new versions\<version> directory and source commit.

<!-- section:principles -->
## Visual language and design principles

Soybean Admin is a calm, clean, high-density operations workspace. Surfaces are mostly flat and light, with restrained shadows separating the header, sider, and tab strip. Color is reserved for primary actions, status, navigation selection, and data emphasis. Content should remain scannable at desktop widths and usable when the layout collapses.

1. Preserve the application shell and spacing before decoration.
2. Reuse Ant Design Vue and project materials: AdminLayout, PageTab, SimpleScrollbar, and ColorPicker.
3. Keep forms and tables compact, align labels and values, and leave room for helper and error text.
4. Show state through color, border, opacity, loading indicators, and clear feedback; never rely on color alone.
5. Keep light/dark themes, language switching, focus, and narrow-screen behavior in one component contract.

<!-- section:colors -->
## Colors and themes

The defaults below are Source facts from src\theme\settings.ts. The theme store may replace them at runtime, so components should use CSS variables and Ant Design Vue tokens.

| Role | Default | Use |
| --- | --- | --- |
| Primary | #646cff | Main action, selected navigation, logo, active tab, focus accents |
| Info | #2080f0 | Informational action and neutral notice |
| Success | #52c41a | Successful result and enabled status |
| Warning | #faad14 | Caution, pending, or attention-needed state |
| Error | #f5222d | Validation failure, destructive action, or request failure |

createThemeToken generates palette steps 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950. Step 500 is the base color. A recommended-color setting may derive the palette from the selected color.

Light defaults are container rgb(255, 255, 255), layout rgb(247, 250, 252), inverted rgb(0, 20, 40), and base-text rgb(31, 31, 31). Dark defaults are container rgb(28, 28, 28), layout rgb(18, 18, 18), and base-text rgb(224, 224, 224). Header, sider, and tab shadows are 0 1px 2px rgb(0, 21, 41, 0.08), 2px 0 8px 0 rgb(29, 35, 41, 0.05), and 0 1px 2px rgb(0, 21, 41, 0.08).

Use --primary-color, --primary-500-color, --container-bg-color, --layout-bg-color, --inverted-bg-color, --base-text-color, --header-box-shadow, --sider-box-shadow, and --tab-box-shadow. PageTab receives --soy-primary-color variables.

light, dark, and auto schemes are supported; auto follows the operating-system preference. Ant Design Vue receives defaultAlgorithm or darkAlgorithm and maps semantic colors to colorPrimary, colorInfo, colorSuccess, colorWarning, and colorError. grayscale applies grayscale(100%); colourWeakness applies invert(80%). Floating components inherit the same provider and algorithm.

<!-- section:typography -->
## Typography, spacing, shapes, and motion

The reset uses ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, and emoji fallbacks. Ant Design Vue supplies a default body token of 14px; reset.css supplies base line-height 1.5. Use 16px for page titles and user identity, 14px for body and controls, 12px for compact mix-menu labels, and usually 16px for inline icons.

Use the existing UnoCSS spacing rhythm: 4px, 6px, 8px, 12px, 16px, 18px, and 24px. Search grids use [16, 16] gutter; vertical card groups use 16px gaps. Default rounding is 4px for tabs and controls, 6px for layout previews, 8px for mix-menu items, and 50% for circular close icons. Avoid making every surface a pill.

The standard shell transition is 300ms. Page modes include fade (0.3s), fade-bottom (0.25–0.3s), fade-scale (0.28s), zoom-fade (0.2–0.3s), and zoom-out (0.1–0.15s). Respect reduced-motion preferences.

<!-- section:elevation -->
## Elevation and layering

AdminLayout caps layout z-index at 100. With the default maximum, header is 97, tab and footer are 95, vertical sider is 99, mobile mask is 98, and horizontal sider is 96. Keep these relationships so fixed shell elements, drawers, and notifications do not cover one another unexpectedly.

Use shadow-header, shadow-sider, and shadow-tab for the shell. Cards are primarily separated by container surfaces and Ant Design Vue borders. Use local shadows only for floating menus or preview tiles.

<!-- section:layout -->
## Application shell and navigation

AdminLayout renders header, optional tab strip, sider, mobile sider and mask, main content, and footer. With fixedTop true, header and tabs are fixed and placement elements reserve their heights. scrollMode content scrolls main content; scrollMode wrapper scrolls the outer wrapper. fullContent hides the shell for a focused page.

| Element | Default |
| --- | --- |
| Header | 56px |
| Tab strip | 44px in application settings; 48px component fallback |
| Sider | 220px |
| Collapsed sider | 64px |
| Mix sider | 90px |
| Mix collapsed sider | 64px |
| Mix child menu | 200px |
| Footer | 48px |
| Layout max z-index | 100 |

The theme drawer can change these values. An override must update reserved space and responsive behavior together.

- vertical: full left sider; header may contain menu toggler and breadcrumb.
- vertical-mix: narrow first-level menu with optional child-menu panel; mixSiderFixed controls persistence.
- horizontal: logo and primary menu in the header, without a full-height sider.
- horizontal-mix: header menu plus optional mix sider; reversed mode can put the child menu on the opposite side.

Below the sm breakpoint, the watcher forces vertical, collapses the sider, backs up previous settings, and restores them when the viewport grows. Mobile sider is an overlay with rgba(0,0,0,0.2) mask; tapping the mask collapses it. Desktop-only fullscreen controls are hidden on mobile.

Header order is logo or toggler, menu or breadcrumb, then fullscreen, language switch, theme scheme switch, theme settings, and user avatar. Menu items use Iconify or local SVG icons; selected items use the primary palette and a selected surface. Breadcrumbs can show an icon and are hidden in the mobile header.

<!-- section:tabs -->
## Page tabs

The global strip uses PageTab with mode chrome or mode button, runtime active color, dark mode, closability, prefix icon, and close event.

- chrome tabs use an SVG-shaped background, overlap by 18px, use 24px horizontal and 6px vertical padding, and put the active tab at z-index 10.
- button tabs use a 1px border, 4px radius, 12px horizontal and 4px vertical padding, and a translucent primary active background.
- Active tabs use the runtime theme color; hover changes surface and border without replacing it.
- Close icons are 16px circular controls with a 14px glyph and a 12px hover glyph. Retained tabs are not closable.
- Better Scroll provides horizontal scrolling. Switching tabs centers the active tab when possible; labels are capped at 240px and ellipsized.
- The tab store owns route identity, caching, add/remove/switch operations, context actions, and locale updates.

<!-- section:components -->
## Component patterns

Use registered Ant Design Vue components and project wrappers.

### Actions and feedback

Use AButton variants primary, default, text, ghost, danger, and small. ButtonIcon is the icon-only wrapper and needs a tooltip or accessible name. Disable destructive bulk actions when no rows are selected. Use Popconfirm for irreversible row actions and Modal for larger forms or permission trees. Use message, modal, and notification from App.useApp so feedback inherits the global theme.

Show loading on the initiating control, prevent duplicate submission, retain input on failure, and offer retry or cancel. A success message alone does not prove persistence.

### Forms

Use AForm and AFormItem with explicit name, labels, placeholders, rules, and visible errors. The source uses vertical forms in drawers and compact responsive grids in search cards. Use AInput, AInputPassword, AInputNumber, ASelect, ARadioGroup, ACheckbox, ASwitch, and AUpload according to data type. Validation errors stay beside the field and preserve entered values. Server errors belong to the form or an alert with recovery.

### Tables and data

Common surfaces use ACard with bordered false and card-wrapper. ATable uses size small, stable row-key, explicit widths/min-widths, row selection, scroll configuration, loading, and mobile-aware pagination. Use Tag for short semantic statuses and pair color with text. Search cards use ARow/ACol with spans 24, 12, and 6 and a 16px gutter. Put add/delete/refresh/column settings in TableHeaderOperation. Empty, loading, and error states must be distinct.

### Overlays, trees, lists, and charts

Use ADrawer for focused add/edit forms; the source uses 360px user/role drawers. Use AModal for menu operations and permission trees. ATree handles button/menu authorization; preserve expand, check, and indeterminate states. ADescriptions, AList, AStatistic, ASpace, and ADivider provide structured detail.

Dashboard charts use ECharts through the shared hook. Give charts a titled card, responsive height, and meaningful loading/empty states. Reuse SimpleScrollbar, ColorPicker, PageTab, and AdminLayout instead of duplicating their DOM contracts.

<!-- section:pages -->
## Page compositions and routes

| Family | Routes or views | Composition |
| --- | --- | --- |
| Dashboard | /home | Header banner, metric cards, line/pie charts, project news, responsive rows |
| System management | /manage/user, /manage/role, /manage/menu, /manage/user-detail/:id | Search card, small selectable table, tags, pagination, drawer/modal forms, confirmation |
| Authentication | /login/:module? | Password, code, register, reset-password, bind-wechat; blank layout and wave background |
| Exceptions | /403, /404, /500, /exception/* | Blank layout, illustration, explanation, return-home action |
| Function demos | /function/* | Tab operations, request/error feedback, permission toggling, hidden children |
| Navigation demos | /multi-menu/*, /user-center, /about, /iframe-page/:url | Nested menus, user detail, iframe, about and forward states |

Use BaseLayout for operations and BlankLayout for authentication, exception, and iframe states. Keep route metadata, active menu, keep-alive, role checks, and i18n keys in the router contract.

<!-- section:states -->
## Interaction and state contracts

Every interactive component should cover default, hover, active/selected, focus, disabled, loading, empty, validation-error, request-error, success, and recovery states where applicable.

- Navigation selection and active tabs use the primary palette; collapse and mobile overlay preserve the route.
- Forms validate before submit; login supports Enter; submit controls load and block duplicate requests; failures retain values.
- Tables show loading in the table, enable bulk actions only for selected rows, preserve query state through pagination, and offer recovery for request errors.
- Destructive operations require confirmation. Closing a drawer or modal returns focus to its trigger. Pending requests must not leave an invisible mask.
- Changing zh-CN/en-US updates route labels, menus, tabs, title, and Day.js locale. Theme changes update CSS variables and Ant Design Vue algorithm together.
- Update notification offers cancel and reload when build time changes; never reload an unsaved form without an explicit choice.

<!-- section:responsive -->
## Responsive behavior and content rules

The source uses VueUse breakpointsTailwind and smaller('sm') for mobile. The exact breakpoint value is inherited from the locked utility preset and must be rechecked when dependencies change. At mobile widths, force vertical layout, collapse the sider, allow the overlay to open, keep its mask, hide desktop-only fullscreen, and allow table horizontal scrolling.

Use responsive ACol spans and preserve reachable operation buttons. Apply min-width only where a data column needs it; otherwise wrap or ellipsize. Test 360px, the project mobile threshold, and a wide desktop viewport. Long Chinese and English labels, numbers, dates, validation messages, and translated menus must not break the shell.

<!-- section:accessibility -->
## Accessibility and content

Ant Design Vue supplies many semantic and keyboard behaviors, but the application owns labels, accessible names, focus order, focus return, and error announcements. Icon-only controls need a name; status tags need text; form errors must be associated with fields; drawers and modals return focus to their trigger. Test menus, tabs, forms, tables, trees, dialogs, and confirmations with the keyboard.

Check contrast in every theme and over primary/status surfaces. Grayscale and color-weakness modes are diagnostic aids, not a guarantee. Honor prefers-reduced-motion. Use locale-aware dates and numbers through the existing i18n and Day.js setup.

<!-- section:resources -->
## Resources, dependencies, and integration boundaries

Icons come from Iconify or the local SVG registry. Existing assets include logo, avatar, banner, empty, network-error, no-permission, not-found, and service-error illustrations. Verify third-party licenses before adding resources. @sa workspace materials and hooks are part of the reference component contract.

Do not copy Mock credentials, API endpoints, or demo-only success paths into production. Keep authentication tokens, route roles R_ADMIN and R_SUPER, response mappings, retry behavior, persistence, and server validation in the application layer. Document the scope of any Ant Design Vue or UnoCSS override and apply it to dark, mobile, and overlay states.

<!-- section:agent -->
## Agent prompt guide

Use this prompt when asking an AI coding agent to implement a page:

    Read DESIGN.md first and implement the page in the Soybean Admin AntDesignVue 1.3.11 style.
    Reuse AdminLayout, PageTab, Ant Design Vue components, theme CSS variables, and the
    existing route/i18n/store contracts. Match the 56px header, 44px tab strip, 220px/64px
    sider widths, compact table/form density, light/dark/auto themes, and mobile sider
    behavior. Include loading, disabled, validation, empty, error, success, focus, and
    recovery states. Preserve real API, route, permission, and data contracts; do not invent
    backend behavior or copy demo credentials.

Before accepting a result, verify shell alignment, semantic colors, component sizes, narrow-table behavior, dark overlays, translated labels, keyboard focus, and error recovery. Mark application additions and unverified values in implementation notes.

<!-- section:dodont -->
## Do and don't

| Do | Don't |
| --- | --- |
| Reuse locked Ant Design Vue components and @sa/materials | Rebuild a second component library or mix Naive UI conventions |
| Drive colors through theme variables and getAntdTheme() | Hard-code the primary color in every component |
| Keep tables, forms, cards, and drawers compact | Turn an operations page into a marketing layout |
| Show text together with color for status | Convey status by color alone |
| Preserve real route, RBAC, API, and i18n contracts | Treat demo, Mock, or console logging as production behavior |
| Test themes, mobile, keyboard, loading, empty, and failure | Declare runtime acceptance from static markup |
| Keep 1.3.11 boundaries explicit | Mix another Soybean Admin or UI-library version |

<!-- section:gaps -->
## Known gaps and verification limits

Static inspection establishes source values and composition but not final browser layout, font rendering, screen-reader announcements, custom-override contrast, touch gestures, real API timing, or third-party iframe behavior. The consuming application must verify those scenarios.

This specification does not define backend schemas, real authentication, authorization policy, production upload storage, chart data semantics, or deployment policy. It documents the presentation contract around them. See AUDIT.md for evidence, coverage, automated checks, and intentionally unverified areas.
