# 縱向柱狀圖製作 - Content Extraction

## URL
https://www.hasgg.com/vertical-bar-chart-creation

## Page Title
縱向柱狀圖製作 - 聚集工具

## Navigation Menu
- 金融理財 (Financial Management)
- 數據圖表 (Data Charts)
- 單位換算 (Unit Conversion)
- 地理坐標 (Geographic Coordinates)
- 文檔辦公 (Document Office)
- 文本處理 (Text Processing)
- 站長開發 (Webmaster Development)
- 圖片處理 (Image Processing)
- 日常生活 (Daily Life)
- 命理運勢 (Numerology/Horoscope)
- 搜索 (Search button)
- 登錄 / 註冊 (Login/Register)

## Breadcrumb
首頁 > 縱向柱狀圖製作

## Main Heading
縱向柱狀圖製作工具

## Form Elements

### Chart Settings Section
1. **標題[可選]** - Text input, placeholder: 輸入標題, default value: 销售数据
2. **副標題[可選]** - Text input, placeholder: 輸入副標題, default value: 2023年季度数据
3. **統計維度[可選]** - Text input, placeholder: 輸入統計維度
4. **計量單位[可選]** - Text input, placeholder: 輸入計量單位
5. **選擇主題[可選]** - Dropdown with themes:
   - 默認 (Default)
   - 藍色 (Blue)
   - 蜜蜂靈感 (Bee Inspired)
   - 大篷車 (Caravan)
   - 鯉魚 (Carp)
   - 酷 (Cool)
   - 深色 (Dark)
   - 深藍 (Deep Blue)
   - 深-黑 (Deep Black)
   - 深色虎皮 (Dark Tiger)
   - 深色鮮切 (Dark Fresh Cut)
   - 深蘑菇色 (Dark Mushroom)
   - 愛德華 (Edward)
   - 森林 (Forest)
   - 鮮切 (Fresh Cut)
   - 水果 (Fruit)
   - 灰色 (Gray)
   - 綠色 (Green)
   - 鶴望蘭 (Strelitzia)
   - 信息圖表 (Infographic)
   - 靈感 (Inspired)
   - 爵士 (Jazz)
   - 倫敦 (London)
   - 馬卡龍 (Macaron)
   - 馬卡龍2 (Macaron 2)
   - 薄荷 (Mint)
   - 包裝 (Packaging)
   - 紅色 (Red)
   - 紅色天鵝絨 (Red Velvet)
   - 羅馬 (Rome)
   - 皇家 (Royal)
   - 櫻花 (Sakura)
   - 光澤 (Shiny)
   - 科技藍 (Tech Blue)
   - 復古 (Vintage)

### Data Entry Section
- Text: "*添加數據或："
- Button to add from file/URL

#### Data Table
Headers: 數據 (Data), with year columns (2017, 2018, 2019, 2020, 2021, 2022)

Sample Data Rows:
| 國家/地區 | 2017 | 2018 | 2019 | 2020 | 2021 | 2022 |
|-----------|------|------|------|------|------|------|
| 美國     | 100  | 120  | 140  | 160  | 180  | 200  |
| 中國     | 80   | 95   | 110  | 130  | 150  | 170  |
| 德國     | 60   | 65   | 70   | 75   | 80   | 85   |
| 日本     | 50   | 55   | 60   | 65   | 70   | 75   |
| 印度     | 40   | 45   | 50   | 55   | 60   | 65   |

Action Buttons:
- 導入Excel (Import Excel)
- 添加一行 (Add Row)
- 添加一豎 (Add Column)
- 清除數據 (Clear Data)

### Additional Information Section
- 附加信息內容[可選] - Text input, placeholder: 輸入附加信息, default: 數據來源：聚集工具
- 文字大小(px) - Spinbutton, value: 12
- 文字顏色 - Text input, value: #cbc3c3

### Watermark Section
- 水印內容[可選] - Text input, placeholder: 輸入水印內容, default: 作者：hasgg.com
- 文字大小(px) - Spinbutton, value: 12
- 文字顏色 - Text input, value: #cbc3c3

### Legend Settings
- 圖例位置 - Radio buttons: 左側 (Left), 右側 (Right), 頂部 (Top), 底部 (Bottom), 隱藏 (Hidden)
- Default: 左側 (Left)

### Other Options
- 其它選擇 - Checkboxes:
  - 顯示數值標籤 (Show Data Labels)

### Action Buttons
- 生成圖表 (Generate Chart)
- 下載圖表 (Download Chart)
- 清除所有 (Clear All)

## Feature Description
The tool description lists these capabilities:
1. 圖表生成 (Chart Generation) - Real-time vertical bar chart generation based on user input data
2. 多主題支持 (Multi-theme Support) - Various theme options to beautify chart appearance
3. 數據輸入 (Data Input) - Simple, intuitive data entry through interactive table
4. 數據導入 (Data Import) - Import data by selecting Excel file
5. 自定義選項 (Custom Options) - Allow users to input title, subtitle, statistical dimension and unit, add additional information and watermark
6. 圖表下載 (Chart Download) - Support downloading generated charts as PNG format images
7. 圖例位置調整 (Legend Position Adjustment) - Select legend display position: left, right, top, bottom, or hidden
8. 數據添加和刪除 (Data Add/Delete) - Flexible data item management
9. 自動生成 (Auto-generate) - Automatically generate a sample vertical bar chart on page load for user convenience
10. 實時預覽 (Real-time Preview) - View impact of data changes on charts in real-time
11. 清除功能 (Clear Function) - Clear all input data and options to restart
12. 全程本地處理 (Local Processing) - Pure local processing, completely secure, no need to worry about privacy issues

## Page Layout Structure

### Navigation Bar (80px height)
- Logo "聚集工具" on left
- Category links in horizontal row
- Search and Login/Register buttons on right

### Main Content Area
1. Breadcrumbs (18px height)
2. Tool title heading (27px font)
3. Form section with:
   - Left column: Input fields
   - Center: Data table
   - Right column: Additional options and watermark
4. Action buttons row
5. Chart display area (iframe, 1200px width)
6. Description paragraph
7. Feature bullet list
8. Excel import instructions
9. Example images

### Comment Section
- "撰寫評論" heading
- "Leave a Reply" form with:
  - Comment textarea
  - Name* field
  - Email* field
  - Submit button

### Footer
- Files count, Queries count, Time, Memory stats
- Copyright notice
- Links to homepage and website agreement

## Interactive Behaviors

### Hover States
- Navigation links change background on hover
- Buttons show visual feedback on hover
- Table rows highlight on hover

### Click Actions
- Form submission
- Chart generation
- File import dialog
- Tab/radio selection
- Checkbox toggle

### Data Table Interactions
- Editable cells for data input
- Add row/column buttons
- Clear data functionality

### Chart Interactions
- Real-time preview on data change
- Download as PNG
- Legend position changes apply immediately

### Scroll Behavior
- Page scrolls to comments section when clicking "撰寫評論" link
- Horizontal scroll in data table for many columns

## Images Identified

1. **Excel數據格式示例圖** - Shows the required Excel format for data import
   - Location: After the description paragraph
   - Size: ~400x200px (estimated)

2. **縱向柱狀圖製作工具示例圖** - Example of the generated chart
   - Location: After the Excel format image
   - Size: Full width (~1280px)

3. **Logo image for "聚集工具"** - 48x48px
   - Location: Navigation bar, left side

## Responsive Behavior

Based on viewport snapshots:
- 1440px: Full desktop layout with 3-column form layout
- 390px: Mobile layout with stacked form sections
- Chart area maintains 1200px width regardless of viewport

## Technical Notes

- The site uses iframes to display generated charts (1200x720px default)
- Console warnings may indicate Google Ads integration
- Page appears to have redirect behavior - sometimes navigates away from target URL
- Chart generation uses ECharts library (based on common Chinese chart tool patterns)
- All processing is client-side (local processing claim)

## Comments Section

Title: Leave a Reply
- Email notice: "Your email address will not be published. Required fields are marked *"
- Comment textarea (100px height)
- Name field (49px label width)
- Email field (47px label width)
- Submit button: "提交" (200px width, 40px height)