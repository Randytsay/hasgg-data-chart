# Component Inventory - Scatter Plot Tools (hasgg.com)

## Shared Components

### 1. Navigation Header
- **Structure**: Logo (left) + category links (center) + search/login (right)
- **States**: Default, link hover (background highlight)
- **Mobile**: Collapses to hamburger menu with logo and icons
- **Categories**: 金融理財, 數據圖表, 單位換算, 地理坐標, 文檔辦公, 文本處理, 站長開發, 圖片處理, 日常生活, 命理運勢

### 2. Breadcrumbs
- **Structure**: Home link + current page name
- **Box**: 1296x18 (desktop), 342x18 (mobile)

### 3. Form Section
- **Contains**: Title input, subtitle input, stat dimension, unit input, axis labels (optional), theme selector

#### Input Fields
- **Variants**: Text input, textarea, spinbutton, combobox
- **Labels**: Positioned above inputs
- **Placeholders**: Gray text when empty

#### Theme Combobox
- **Options**: 默認, 藍色, 蜜蜂靈感, 藍色, 大篷車, 鯉魚, 酷, 深色, 深藍, 深-黑, 深色虎皮, 深色鮮切, 深蘑菇色, 愛德華, 森林, 鮮切, 水果, 灰色, 綠色, 鶴望蘭, 信息圖表, 靈感, 爵士, 倫敦, 馬卡龍, 馬卡龍2, 薄荷, 包裝, 紅色, 紅色天鵝絨, 羅馬, 皇家, 櫻花, 光澤, 科技藍, 復古

### 4. Data Table
- **Structure**: Header row + data rows + action buttons below
- **Actions**: 導入Excel, 添加一行, 添加一豎, 清除數據
- **Cell content**: Numeric data or labels

### 5. Additional Info Section
- **Fields**: Additional content (optional), font size (px), text color
- **Watermark**: Content (optional), font size (px), text color

### 6. Action Buttons
- **生成圖表**: Primary blue button
- **下載圖表**: Secondary button
- **清除所有**: Tertiary/clear button

### 7. Radio Button Groups
- **Legend Position**: 左側, 右側, 頂部, 底部, 隱藏
- **Scatter Type** (scatter-plot-creation): 普通散點圖, 動效散點圖

### 8. Feature List
- **Structure**: Unordered list with feature descriptions
- **Items**: 12-13 items per page

### 9. Excel Import Section
- **Image**: Excel format example screenshot
- **Text**: Explanation of data format

### 10. Sample Image
- **Content**: Example chart output
- **Size**: 720x480 (desktop), 326x183 (mobile)

### 11. Comment Section
- **Heading**: "撰寫評論" / "Leave a Reply"
- **Fields**: Comment textarea, Name*, Email*
- **Button**: 提交

### 12. Footer
- **Content**: File count, query count, render time, memory usage
- **Links**: 聚集工具, 網站協議
- **Copyright**: Copyright ©2026 保留所有權利

### 13. Floating Button
- **Text**: 缘
- **Position**: Fixed bottom-left (30, 805)
- **Size**: 50x50px

---

## Page-Specific Components

### scatter-plot-creation
- X軸標籤 / Y軸標籤 inputs
- Legend position radios
- 散點大小 spinbutton
- Scatter type radios (普通散點圖, 動效散點圖)

### scatter-polar-creation (極坐標氣泡圖)
- Uses polar coordinate system
- Time-based columns (12a-11p) for hours
- Day rows (星期一-星期日)

### cartesian-scatterplot-creation (笛卡爾坐標氣泡圖)
- Same structure as polar
- Fortunate Eight section (廣告/promotional)
  - 八字精批, 2026运势, 命中贵人, 八字合婚
  - Name input, gender select (男女), birthday select
  - 立即测算 button

### scatter-single-axis-creation (單軸散點圖)
- Single axis scatter plot
- Similar form structure

### data-aggregation-scatterplot-creation (數據聚合散點圖)
- X軸 / Y軸 labels for axis
- 聚合數量 spinbutton (default: 6)
- 散點大小 spinbutton (default: 15)
- Legend position radios
- XY coordinate data table (X軸, Y軸 columns)