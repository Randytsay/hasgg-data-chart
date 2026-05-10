# Page Topology - hasgg.com/data-chart

## Overview

A Chinese-language data visualization tools catalog page with a simple static layout. The page displays 86 chart types organized in a single list without categories or filtering.

## Sections (top to bottom)

### 1. Navigation Bar (sticky)
- **Structure:** Transparent header with logo on left, nav links in center, login/register on right
- **Logo:** "聚集工具" (Aggregation Tools) with site logo image
- **Nav links:** 金融理財 | 數據圖表 | 單位換算 | 地理坐標 | 文檔辦公 | 文本處理 | 站長開發 | 圖片處理 | 日常生活 | 命理運勢
- **User actions:** Search icon, Login/Register link
- **Height:** 80px
- **Position:** Fixed top, transparent background initially

### 2. Breadcrumbs
- **Structure:** Home > 數據圖表
- **Style:** Small muted text

### 3. Page Title Section
- **h1:** "數據圖表" (Data Charts)
- **Description:** Chinese paragraph explaining the page purpose

### 4. Chart Items Grid
- **Structure:** 86 chart type headings (h3) in a list
- **Items include:** 折線圖, 縱向柱狀圖, 基礎餅圖, 散點圖, K線圖, 雷達圖, 盒須圖, 樹狀圖, 矩形樹圖, 旭日圖, 桑基圖, 漏斗圖, 熱力圖, 直方圖, 儀錶盤圖, 主題河流圖, 南丁格爾玫瑰圖, 3D charts, 日曆圖, 思維導圖, etc.
- **Style:** Each is a link styled heading, 20px font, black color
- **Interaction:** Hover shows underline or color change (static, no animation)

### 5. Comment Section (placeholder)
- **Heading:** "撰寫評論" / "Leave a Reply"
- **Style:** Minimal form placeholder

### 6. Footer
- **Background:** Dark green `rgb(20, 30, 15)`
- **Content:** Copyright text, site links
- **Stats:** "Files:164 - Queries:0 - Time:0.032 - Mem:3.4277"

### 7. Floating "To Top" Button
- **Text:** "缘"
- **Position:** Fixed, appears on scroll (bottom right area)

## Z-Index Layers
1. Navigation bar (z-index not specified, natural stacking)
2. Floating button (fixed positioning)
3. Comment form (modal-like overlay with shadow)

## Responsive Behavior

- **Desktop (1440px):** Full layout, 80px nav, standard content
- **Tablet/Mobile:** Layout adjusts, nav may collapse or become scrollable

## Interaction Model

**Static page** — no scroll-driven animations, no tab switching, no accordions. Simple hover effects on links and chart items. The floating "to top" button appears to be always visible or appears on scroll.