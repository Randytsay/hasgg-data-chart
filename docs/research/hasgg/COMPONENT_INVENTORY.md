# hasgg.com Component Inventory - Chart Tool Pages

## Navigation Components

### Navbar
- **Structure:** Fixed top, full-width, ~80px height
- **States:** Transparent (scroll position 0), may have shadow after scroll
- **Children:**
  - Logo/brand (left): hasgg.png + "聚集工具" text
  - Nav links (center): 金融理財, 數據圖表, 單位換算, etc.
  - Language toggle (right): jft5.webp small image
- **Mobile:** Hamburger menu (wnd-side-burger)

### Mega Menu Dropdown
- **Structure:** Full-width dropdown below navbar link
- **Layout:** Multi-column grid of links (3-4 columns)
- **Animation:** Fade in on hover, 150ms
- **Examples:**
  - 金融理財: 15+ sub-links in 4-column grid
  - 數據圖表: 90+ chart type links

---

## Form Components

### Text Input
- **Height:** 40px (2.5em)
- **Border:** 1px solid #dbdbdb
- **Border radius:** 4px
- **Padding:** 0.5rem 0.75rem
- **Focus:** Blue border + box-shadow
- **Label:** Above input, medium weight

### Select Dropdown
- **Same styling as text input**
- **Arrow:** Custom Font Awesome arrow

### Number Input
- **Same styling as text input**
- **Spinner:** Native browser spinners

### Color Picker
- **Input type:** color
- **Default:** #000000

### Radio Button (Bulma style)
- **Shape:** Rounded circles
- **States:** Unchecked, checked (filled primary color), disabled

### Checkbox
- **Style:** Bulma checkbox (rounded square)
- **States:** Unchecked, checked, disabled

### Textarea
- **Border:** 1px solid #dbdbdb
- **Border radius:** 4px
- **Padding:** 0.75rem
- **Resize:** Vertical only

### Data Entry Table
- **Header row:** Bold text, light gray background
- **Data cells:** Editable text/number inputs
- **Action column:** Delete button (×)
- **Buttons row:** 導入Excel, 添加一行, 添加一豎, 清除數據

### Form Sections
Each chart tool has these sections:
1. 基本信息: 標題, 副標題, 統計維度, 計量單位
2. 主題選擇: 選擇主題 dropdown
3. 數據輸入: Table + action buttons
4. 附加信息: 內容, 文字大小, 文字顏色
5. 水印: 內容, 文字大小, 文字顏色
6. 圖例位置: Radio buttons

---

## Button Components

### Primary Button (生成圖表)
- **Class:** `button is-primary`
- **Background:** Teal/primary
- **Text:** White, semi-bold
- **Padding:** 0.5rem 1rem
- **Radius:** 4px
- **Hover:** Darken 5%

### Secondary Button (下載圖表, 清除所有)
- **Class:** `button`
- **Background:** White/light gray
- **Border:** 1px solid #dbdbdb
- **Text:** Dark gray
- **Hover:** Light gray background

### Small Action Buttons
- **Examples:** 添加一行, 添加一豎, 清除數據, 粘貼示例
- **Size:** Smaller padding than primary

### Submit Button (提交)
- **Class:** `button is-link` or similar

---

## Display Components

### Chart Preview Area
- **Container:** Right side of form (desktop) or below (mobile)
- **Background:** White
- **Border:** 1px solid #eaeaea
- **Border radius:** 4px
- **Min-height:** 400px
- **Padding:** 1rem
- **Content:** Generated chart or placeholder

### Feature List Section
- **Layout:** Unordered list
- **Items:** Icon + description text
- **Features include:**
  - 圖表生成 (Chart generation)
  - 多主題支持 (Multi-theme support)
  - 數據輸入 (Data input)
  - 數據導入 (Data import)
  - 自定義選項 (Custom options)
  - 圖表下載 (Chart download)
  - 圖例位置調整 (Legend position)
  - 數據添加和刪除 (Data add/delete)
  - 自動生成 (Auto-generate)
  - 實時預覽 (Real-time preview)
  - 清除功能 (Clear function)
  - 全程本地處理 (Local processing)

---

## Interactive Components

### Language Toggle
- **Location:** Top-right of navbar
- **Image:** jft5.webp (25x25px)
- **Action:** Toggles 簡體/繁體

### Back-to-Top Button
- **Position:** Fixed bottom-right
- **Trigger:** Scroll > 600px
- **Style:** Circular button
- **Animation:** Fade in/out

### Close Button (Ads)
- **Style:** × icon or "X" text
- **Action:** Hides advertisement

### Comment Form
- **Fields:** 顯示名稱*, 電子郵箱地址*
- **Button:** 提交
- **Location:** Bottom of page

---

## Footer Component
- **Background:** Dark green `rgb(20, 30, 15)`
- **Text:** White/gray
- **Content:** Copyright, site links
- **Stats line:** Files, Queries, Time, Mem

---

## Page-Specific Components

### scatter-histogram-chart-creation (直方圖)
- **Extra fields:** X軸標籤, Y軸標籤
- **Extra fields:** 散點大小, 散點類型 (普通散點 / 動效散點)
- **Sample data:** 2021年 with year-value pairs

### bar-stack-brush-creation (堆疊框選柱狀圖)
- **Extra fields:** 數據列配置, 標記連線數據列
- **Extra fields:** 顯示數值標籤 (checkbox), 數值標籤旋轉角度
- **Sample data:** 2017-2022年, 5 countries

### rounded-corner-circle-chart-creation (圓角環形圖)
- **Extra field:** 數據類型 (整數 / 小數) radio
- **Legend options:** 左側, 右側, 底部, 隱藏 (no 頂部)
- **Extra button:** 添加新的區域數據

### line-polar-chart-creation2 (極座標折線圖)
- **Extra field:** 輸入函數 (e.g., Math.sin(2 * x) * Math.cos(2 * x))
- **Chart type:** Line in polar coordinates with dual axes