# Layout Architecture - Scatter Plot Tools (hasgg.com)

## Page Layout Structure

### Desktop (1440px viewport)

```
[Navigation Header - 80px height]
  Logo | Category Links (10 items) | Search | Login/Register

[Breadcrumbs - 18px height]
  首頁 / PageName

[Main Content Area]
  [Tool Form Section - ~1466px height]
    H1: Tool Title

    [Form Grid - 3 columns on desktop]
      Left Column (417px): Basic inputs
        - 標題[可選]
        - 副標題[可選]
        - 統計維度[可選]
        - 計量單位[可選]
        - X軸標籤/Y軸標籤 (when applicable)
        - 選擇主題

      Center Column (417px): Data Table
        - "*添加數據或：" + Import button
        - Table with rows/columns
        - Action buttons: 導入Excel, 添加一行, 添加一豎, 清除數據

      Right Column (417px): Additional Options
        - 附加信息內容[可選]
        - 水印內容[可選]

    [Action Buttons - 62px height]
      生成圖表 | 下載圖表 | 清除所有

    [Options Panel - 856px height]
      - Legend position radios
      - Scatter size (when applicable)
      - Chart type (when applicable)

  [Description Section - 1412px height]
    - Description paragraph
    - Feature list (12-13 items)
    - Excel import instructions
    - Excel format example image
    - Sample output image

  [Comment Section - 372px height]
    - "撰寫評論" banner
    - "Leave a Reply" heading
    - Comment form
    - Name/Email inputs

[Footer - 101px height]
  Stats (Files, Queries, Time, Mem)
  Copyright + Links
```

### Mobile (390px viewport)

```
[Navigation - 79px]
  Logo | Hamburger/Search/Login icons

[Breadcrumbs - 18px]

[Main Content - Stacked layout]
  [Form Section - Single column]
    All inputs full-width (366px)

    [Data Table - Full width]
      Horizontal scroll enabled

    [Action Buttons - Stacked or wrapped]

    [Options - Single column]

  [Description - Single column]

  [Comment Section]

[Footer]
```

## Responsive Behavior

### Breakpoints
- Navigation collapses at 1440px when needed
- Form columns stack at ~768px
- Table enables horizontal scroll on mobile

### Content Widths
- Desktop container: 1320px
- Mobile container: 366-390px

## Interactive Behaviors

### Chart Generation
- Real-time preview on data entry
- Auto-generates sample chart on page load
- Chart appears in iframe below form

### Form Interactions
- Spinbutton for numeric values
- Combobox dropdown for theme selection
- Radio buttons for chart options

### Data Table
- Add row/column buttons
- Import from Excel
- Clear data button

## Common Layout Pattern
All 5 pages share identical layout structure, differing only in:
1. Page title
2. Specific form options (axis labels, chart type selectors)
3. Data table columns
4. Description content