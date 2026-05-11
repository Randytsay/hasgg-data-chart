# Heatmap (Cartesian) Chart Creation - Research Documentation

## Page URL
https://www.hasgg.com/heatmap-cartesian-chart-creation

## Page Title
熱力圖製作 - 聚集工具

## Navigation Categories
金融理財 (Financial Management), 數據圖表 (Data Charts), 單位換算 (Unit Conversion), 地理坐標 (Geographic Coordinates), 文檔辦公 (Document Office), 文本處理 (Text Processing), 站長開發 (Webmaster Development), 圖片處理 (Image Processing), 日常生活 (Daily Life), 命理運勢 (Numerology/Horoscope)

## Form Fields
- **標題[可選]** (Title - optional) - text input
- **副標題[可選]** (Subtitle - optional) - text input
- **統計維度[可選]** (Statistical dimension - optional) - text input
- **計量單位[可選]** (Unit of measurement - optional) - text input
- **選擇主題[可選]** (Theme selection) - dropdown with themes: 默認, 藍色, 蜜蜂靈感, 大篷車, 鯉魚, 酷, 深色, 深藍, 深-黑, 深色虎皮, 深色鮮切, 深蘑菇色, 愛德華, 森林, 鮮切, 水果, 灰色, 綠色, 鶴望蘭, 信息圖表, 靈感, 爵士, 倫敦, 馬卡龍, 馬卡龍2, 薄荷, 包裝, 紅色, 紅色天鵝絨, 羅馬, 皇家, 櫻花, 光澤, 科技藍, 復古

## Data Input Section
- **Time slots (24 columns):** 12a, 1a-11a, 12p, 1p-11p
- **Days (7 rows):** 星期一, 星期二, 星期三, 星期四, 星期五, 星期六, 星期日
- Each cell contains editable numerical data

## Action Buttons
- 導入Excel (Import Excel)
- 添加一行 (Add a row)
- 添加一豎 (Add a column)
- 清除數據 (Clear data)
- 生成圖表 (Generate chart)
- 下載圖表 (Download chart)
- 清除所有 (Clear all)

## Additional Options
- **附加信息內容[可選]** (Additional info content)
  - 文字大小(px): numeric input (default: 12)
  - 文字顏色: color input (default: #cbc3c3)
- **水印內容[可選]** (Watermark content)
  - 文字大小(px): numeric input (default: 12)
  - 文字顏色: color input (default: #cbc3c3)

## Legend Position Options (Radio buttons)
左側 (Left), 右側 (Right), 頂部 (Top), 底部 (Bottom), 隱藏 (Hidden)

## Chart Direction (Radio buttons)
切向 (Tangential), 徑向 (Radial)

## Checkbox Options
顯示數值標籤 (Display value labels)

## Feature Descriptions
"熱力圖製作工具是一款直觀易用的在線工具，旨在幫助用戶快速生成美觀實用的熱力圖，從而有效可視化數據指標和趨勢。"

Features list:
- 圖表生成 (Chart generation)
- 多主題支持 (Multi-theme support)
- 數據輸入 (Data input)
- 數據導入 (Data import)
- 自定義選項 (Customization options)
- 圖表下載 (Chart download)
- 圖例位置調整 (Legend position adjustment)
- 數據添加和刪除 (Data addition/deletion)
- 自動生成 (Auto-generation)
- 實時預覽 (Real-time preview)
- 清除功能 (Clear function)
- 全程本地處理 (Full local processing)

## Images
1. /wp-content/themes/wndt-master/static/images/jft5.webp
2. /wp-content/themes/wndt-master/static/images/heatmap-cartesian-chart-creation-excel.png (Excel data format example)
3. /wp-content/themes/wndt-master/static/images/heatmap-cartesian-chart-creation.png (Tool example image)
4. Site logo: /wp-content/themes/wndt-master/static/images/hasgg.png

## CSS Styles
```css
.box { width: 100%; overflow: auto; }
input[type="text"], input[type="number"], input[type="color"], select, option {
  border-color: #c1ddd2 !important;
  border: 1px solid black;
  font-weight: bold;
  border-radius: 5pt;
  color: #fa7c0c;
}
table { border-collapse: collapse; width: 100%; margin-bottom: 20px; }
th, td { border: 1px solid #ddd; padding: 8px; }
th { background-color: #f2f2f2; text-align: center; }
td[contenteditable="true"] { background-color: #fff; outline: none; }
.chart { margin-top: 20px; width: 1280px; height: 720px; margin: 0 auto; overflow: auto; }
.legend { display: flex; align-items: center; gap: 10px; }
```

## Component Inventory
- Navigation with category links
- Breadcrumbs (首頁 / 熱力圖製作)
- Form with input fields and dropdowns
- Data table with editable cells
- Action buttons (primary actions)
- Chart preview area (iframe)
- Feature list (paragraph with list)
- Comment section
- Footer with copyright
