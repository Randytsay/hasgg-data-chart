# hasgg.com Page Topology

## Site: https://www.hasgg.com

### Page-Level Structure
1. **Fixed Navigation Bar** - Sticky top navbar with mega-menu dropdowns
2. **Main Content Area** - Tool-specific content
3. **Footer** - Copyright, language toggle, back-to-top

---

## Page: scatter-histogram-chart-creation

### Section 1: Top Navigation
- **Type:** Fixed/sticky navbar
- **Contains:** Logo, site title, mega-menu dropdowns, language toggle
- **Menu categories:** 金融理財, 數據圖表, 單位換算, 地理坐標, 文檔辦公, 文本處理, 站長開發, 圖片處理, 日常生活, 命理運勢

### Section 2: Tool Header
- **Contains:** Page title "直方圖製作"
- **Type:** Static header section

### Section 3: Tool Form
- **Type:** Interactive form with multiple sections
- **Layout:** Left side form controls, right side chart preview area

**Form Controls:**
- 標題 [可選] - Text input
- 副標題 [可選] - Text input
- 統計維度 [可選] - Text input
- 計量單位 [可選] - Text input
- X軸標籤 - Text input
- Y軸標籤 - Text input
- 選擇主題 [可選] - Dropdown (40+ themes)
- 散點大小 - Number input
- 散點類型 - Dropdown (普通散點 / 動效散點)

**Data Entry Table:**
- Import Excel button
- Add row button (添加一行)
- Add column button (添加一豎)
- Clear data button (清除數據)
- Editable cells for data

**Chart Options:**
- 附加信息內容 [可選] - Text area
- 文字大小(px) - Number input
- 文字顏色 - Color picker
- 水印內容 [可選] - Text input
- 圖例位置 - Radio buttons (左側/右側/頂部/底部/隱藏)

**Action Buttons:**
- 生成圖表 (Generate)
- 下載圖表 (Download PNG)
- 清除所有 (Clear all)

### Section 4: Chart Preview Area
- **Type:** Real-time chart preview
- **Location:** Right side of form (or below on mobile)
- **Behavior:** Updates live when form values change

### Section 5: Feature List
- **Type:** Static text section
- **Contains:** Feature descriptions

### Section 6: Footer
- **Type:** Static
- **Contains:** Copyright, language toggle, back-to-top button

---

## Page: bar-stack-brush-creation

### Section 1-6: Same as scatter-histogram-chart-creation (Navigation, Header, Form, Preview, Features, Footer)

### Key Differences in Form:
- **Chart Type:** Stacked bar chart with brush selection
- **Extra Options:**
  - 顯示數值標籤 - Checkbox
  - 數值標籤旋轉角度 - Number input
  - 數據列配置 - Text input with format: `2,3#8/4,5#5/6,7#10`
  - 標記連線數據列 - Text input with format: `2,3`

### Sample Data (pre-populated):
- Years: 2017年, 2018年, 2019年, 2020年, 2021年, 2022年
- Countries: 美國, 中國, 德國, 日本, 印度 with numeric values

---

## Page: rounded-corner-circle-chart-creation

### Section 1-6: Same structure (Navigation, Header, Form, Preview, Features, Footer)

### Key Differences in Form:
- **Chart Type:** Rounded corner donut chart
- **Data Type:** Radio buttons (整數 / 小數)
- **Legend Position:** Radio buttons (左側/右側/底部/隱藏) - no 頂部 option
- **No:** 散點大小, 散點類型, X軸標籤, Y軸標籤

---

## Page: line-polar-chart-creation2

### Section 1-6: Same structure (Navigation, Header, Form, Preview, Features, Footer)

### Key Differences in Form:
- **Chart Type:** Polar coordinate dual-axis line chart
- **Extra Field:**
  - 輸入函數 - Text input (e.g., Math.sin(2 * x) * Math.cos(2 * x))
- **Legend Position:** Same options (左側/右側/頂部/底部/隱藏)

---

## Layout Grid (Desktop 1440px)
```
| Nav (full width, fixed) |
|--------------------------|
| Header (centered, max-width) |
|--------------------------|
| Form (left ~50%) | Preview (right ~50%) |
|--------------------------|
| Features (centered) |
|--------------------------|
| Footer (full width) |
```

## Responsive Behavior
- **Desktop (1440px):** Two-column layout (form + preview side by side)
- **Tablet (768px):** May stack to single column
- **Mobile (390px):** Single column, form above preview

## Z-Index Layers
1. Fixed navbar (z-index: high)
2. Mega-menu dropdowns (z-index: below navbar)
3. Chart preview area
4. Footer
5. Back-to-top button (floating, appears on scroll)
6. Fixed advertisements (can be closed)