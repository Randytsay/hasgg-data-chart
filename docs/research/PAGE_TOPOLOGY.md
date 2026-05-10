# PAGE_TOPOLOGY.md - https://www.hasgg.com/data-chart

## Page Structure (Top to Bottom)

### 1. Navbar (sticky, fixed at top)
- **Visual**: Dark green background (rgb(34, 51, 25)), white text, 80px height
- **Layout**: Flex row with logo left, nav links center, search + login right
- **Links**: 金融理財 | 數據圖表 | 單位換算 | 地理坐標 | 文檔辦公 | 文本處理 | 站長開發 | 圖片處理 | 日常生活 | 命理運勢
- **Sticky behavior**: Stays fixed at top on scroll

### 2. Breadcrumbs
- **Visual**: Small text (15px), dark gray color
- **Content**: 首頁 / 數據圖表

### 3. Page Title
- **Visual**: H1, 24px, weight 500, black
- **Text**: "數據圖表"

### 4. Chart Category Grid (main content)
- **Layout**: 4-column CSS grid at desktop (1440px), stacks at mobile (390px)
- **Items**: 85 chart type cards in white boxes
- **Card style**: White bg, 311px wide, 80px tall, 20px padding, 6px border-radius, box-shadow
- **Link style**: 20px, weight 500, dark gray, no underline

### 5. Descriptive Paragraph
- **Text**: "歡迎訪問我們的數據圖表分類頁面，這裡彙集了各種可視化數據工具和資源..."
- **Style**: Below the grid, gray text on light gray bg

### 6. Comment Section
- **Heading**: "撰寫評論" linking to #comments
- **Form**: Name*, Email*, Comment textarea, Submit button

### 7. Footer
- **Visual**: Very dark green bg (rgb(20, 30, 15)), white text
- **Content**: Copyright ©2026, links to 聚集工具, 網站協議

## Grid Layout Details
- Desktop: 4 columns, gap 24px, padding 20px
- Items per row: 4 (85 items total = 22 rows approximately)
- Item dimensions: 311px x 80px
- Mobile: stacks to 1 column

## Interaction Model: **Static**
- No scroll-driven animations
- No tab switching
- No hover effects beyond standard link hover
- Cards are simple links to other pages