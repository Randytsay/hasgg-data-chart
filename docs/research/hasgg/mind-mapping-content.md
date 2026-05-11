# 思維導圖製作 - Mind Mapping Tool

## Page Information
- **URL**: https://www.hasgg.com/mind-mapping
- **Title**: 思維導圖製作 - 聚集工具
- **Language**: Traditional Chinese (繁體中文)

## Page Structure

### Navigation
- Logo: 聚集工具 (https://www.hasgg.com)
- Navigation links:
  - 金融理財
  - 數據圖表
  - 單位換算
  - 地理坐標
  - 文檔辦公
  - 文本處理
  - 站長開發
  - 圖片處理
  - 日常生活
  - 命理運勢
- Search icon
- Login/Register: 登錄 / 註冊

### Breadcrumbs
- 首頁 / 思維導圖製作

## Main Content

### Page Title
思維導圖製作工具

### Tool Interface

#### Markdown Editor
- Large textarea input field for Markdown content
- Example default content:
```
# 一級標題
## 二級標題1
### 三級標題1
- Katex: $\displaystyle \left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)$
- 多行 文本
- Katex: $x = {-b \pm \sqrt{b^2-4ac} \over 2a}$
- [更多](mind-mapping)

### 三級標題2
- **加粗** ~~刪除~~ *斜體* ==高亮==
- `單行內聯代碼`
- [x] 複選框

## 二級標題2
- [超級鏈接](https://www.hasgg.com/) for hasgg.com
- [聚集工具](https://www.hasgg.com/mind-mapping) 思維導圖製作工具

## 二級標題3
```js
console.log('hello, JavaScript')
```
```

#### SVG Preview Area
- Displays rendered mind map from Markdown input
- Supports KaTeX mathematical formulas
- Supports checkboxes, code blocks, links, emphasis

#### Action Button
- **下載為 SVG** button to download the mind map as SVG file

### Tool Description

思維導圖製作工具是一款直觀易用的在線工具，專為幫助個人和團隊快速創建、編輯和分享思維導圖而設計。通過輸入的內容生成思維導圖，用戶可以快速整理思維、規劃項目和提升創意能力。無論是學習、工作還是個人成長，這款工具都能助您高效思考和協作，提升成果。

#### Features:
1. 自動生成：工具會將您輸入的內容自動生成思維導圖。
2. 下載為SVG：將生成的思維導圖以SVG的形式下載到本地。
3. 本地處理: 純本地處理，完全安全，無需擔心隱私問題。

### Comments Section

#### Title
撰寫評論 / Leave a Reply

#### Form Fields
- Comment text area (評論、意見或反饋)
- Name * (text input)
- Email * (text input)

#### Submit Button
提交

### Footer

#### Copyright
Copyright ©2026 保留所有權利

#### Links
- 聚集工具 (https://www.hasgg.com/)
- 網站協議 (https://www.hasgg.com/website-agreement)

## Layout Specifications

### Header
- Height: 80px
- Logo size: 48x48px
- Navigation links: 116px width each

### Main Content Area
- Max width: ~1320px
- Padding: ~40px horizontal

### Markdown Editor
- Width: 500px (desktop)
- Height: calc(75vh - 4px)
- Border: 1px solid #ddd
- Font size: 16px

### Buttons
- Height: 40px
- Padding: 0 24px
- Border radius: 4px

### Colors
- Text primary: #333333
- Text secondary: #666666
- Background: #ffffff
- Border: #dddddd
- Accent/buttons: #007bff

## Images
- Logo: hasgg.png (48x48px)
- No additional images on the mind-mapping page itself (unlike other chart tools which have example images)

## Interactive Behaviors

1. **Markdown Editor**
   - Real-time rendering to SVG preview
   - Supports Markdown syntax including:
     - Headers (#, ##, ###)
     - Lists (- and [x])
     - Bold (**text**)
     - Strikethrough (~~text~~)
     - Italic (*text*)
     - Highlight (==text==)
     - Code (`code` and ```blocks```)
     - Links ([text](url))
     - KaTeX math ($...$)

2. **Download Button**
   - Click to download mind map as SVG file

3. **Form Interactions**
   - Text input for comments
   - Name and email fields
   - Submit button for comment posting

## CSS Styles

```css
/* Responsive layout */
@media (min-width: 768px) {
    .markdownC {
        flex-direction: row;
    }
    .markdownC textarea {
        width: 500px;
        height: calc(75vh - 4px);
    }
}

/* Editor styling */
#markdown {
    border: 1px solid #ddd;
    font-size: 16px;
}
```

## Technical Notes

- Pure client-side processing (privacy-safe)
- Uses markmap library for Markdown to SVG conversion
- Supports KaTeX for mathematical formulas
- SVG export functionality for saving mind maps