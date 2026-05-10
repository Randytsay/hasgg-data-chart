# Navbar Specification

## Overview
- **Target file:** `src/components/Navbar.tsx`
- **Interaction model:** static (sticky, hover dropdowns)

## DOM Structure
```
<nav class="navbar">
  <div class="navbar-brand">
    <div class="navbar-item" id="site-logo">
      <span class="iconlogo"><a href="/"><img src="..." alt="聚集工具"/></a></span>
    </div>
    <div class="navbar-item" id="site-title">
      <a href="/"><span>聚集工具</span></a>
    </div>
    <div class="navbar-burger wnd-side-burger">...</div>
    <div class="navbar-item">
      <a id="switch"><img src="..."/></a>
    </div>
  </div>
  <div class="navbar-menu">
    <div class="navbar-start">
      <!-- 10 category items with hover dropdowns -->
      <div class="navbar-item has-dropdown is-hoverable is-mega">
        <a class="navbar-link">金融理財</a>
        <div class="navbar-dropdown">...</div>
      </div>
      <div class="navbar-item has-dropdown is-hoverable is-mega">
        <a class="navbar-link">數據圖表</a>
        <div class="navbar-dropdown">...</div>
      </div>
      <!-- ... 8 more categories -->
    </div>
    <div class="navbar-end">
      <a class="navbar-item"><span class="icon"></span>搜索</a>
      <div class="navbar-item has-dropdown is-hoverable">...</div>
      <a class="navbar-item"><span class="icon"></span>登錄 / 註冊</a>
    </div>
  </div>
</nav>
```

## Computed Styles (exact values)

### Navbar Container
- display: flex
- position: relative
- height: 80px
- backgroundColor: rgba(0, 0, 0, 0) - transparent
- fontSize: 15px
- fontFamily: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Arial, sans-serif

### Navbar Brand
- display: flex with navbar items side by side

### Navbar Link Items
- Font-size: 15px
- Color: rgb(51, 51, 51) - dark gray
- Padding: 0px
- Links: 金融理財 | 數據圖表 | 單位換算 | 地理坐標 | 文檔辦公 | 文本處理 | 站長開發 | 圖片處理 | 日常生活 | 命理運勢

### Search/Login
- Right side of navbar-end
- Search icon + text
- Login/Register text with user icon

### Hover States
- Navbar links: standard underline on hover
- Dropdowns: appear on hover with white background

## States & Behaviors
- **Sticky**: No - position: relative
- **Hover dropdowns**: Each category has a mega-menu dropdown that appears on hover
- **Mobile hamburger**: `.navbar-burger` toggles `.is-active` on `.navbar-menu` for mobile view

## Responsive Behavior
- Desktop (1440px): Full horizontal navbar with all items visible
- Tablet (768px): May collapse to hamburger
- Mobile (390px): Hamburger menu, `.navbar-menu` hidden until burger clicked

## Text Content
- Site name: 聚集工具
- Nav items: 金融理財, 數據圖表, 單位換算, 地理坐標, 文檔辦公, 文本處理, 站長開發, 圖片處理, 日常生活, 命理運勢
- Search label: 搜索
- Login label: 登錄 / 註冊