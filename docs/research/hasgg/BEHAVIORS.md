# hasgg.com Behaviors

## Scroll Behaviors

### Back to Top Button
- **Trigger:** Scroll position > 600px
- **Behavior:** Button appears in bottom-right corner
- **Action:** Smooth scroll to top of page

### Fixed Navigation
- **Behavior:** Navbar remains fixed at top on scroll
- **No visual changes** (no shrink, no shadow gain on scroll)

### Sticky Advertisements
- **Behavior:** Fixed position ads on page
- **Action:** Can be closed with X button

---

## Click/Hover Behaviors

### Navigation Mega-Menus
- **Trigger:** Hover over navbar item with dropdown
- **Behavior:** Dropdown menu appears below navbar item
- **Animation:** Fade in (CSS transition)
- **Items:** 金融理財, 數據圖表 (with 90+ sub-items)

### Form Interactions
- **Input fields:** Standard text/number/color input behavior
- **Dropdowns:** Standard select behavior
- **Radio buttons:** Click to select option
- **Checkboxes:** Click to toggle

### Chart Action Buttons
- **導入Excel:** Opens file picker for Excel upload
- **添加一行:** Adds new row to data table
- **添加一豎:** Adds new column to data table
- **清除數據:** Clears all data from table
- **粘貼示例:** Pastes pre-populated sample data
- **生成圖表:** Generates chart from current data
- **下載圖表:** Downloads chart as PNG image
- **清除所有:** Resets entire form to default state

### Language Toggle
- **Location:** Top-right of navbar (small image button)
- **Behavior:** Switches between 简体中文 and 繁體中文
- **Effect:** Page content updates to selected language variant

---

## Theme System

### Available Themes (40+)
1. 默認 (Default)
2. 藍色 (Blue)
3. 蜜蜂靈感 (Bee Inspired)
4. 藍色大篷車 (Blue Caravan)
5. 鯉魚 (Carp)
6. 酷 (Cool)
7. 深色 (Dark)
8. 深藍 (Deep Blue)
9. 深-黑 (Deep Black)
10. 深色虎皮 (Dark Tiger)
11. 深色鮮切 (Dark Fresh Cut)
12. 深蘑菇色 (Dark Mushroom)
13. 愛德華 (Edward)
14. 森林 (Forest)
15. 鮮切 (Fresh Cut)
16. 水果 (Fruit)
17. 灰色 (Gray)
18. 綠色 (Green)
19. 鶴望蘭 (Bird of Paradise)
20. 信息圖表 (Infographic)
21. 靈感 (Inspiration)
22. 爵士 (Jazz)
23. 倫敦 (London)
24. 馬卡龍 (Macaron)
25. 馬卡龍2 (Macaron 2)
26. 薄荷 (Mint)
27. 包裝 (Packing)
28. 紅色 (Red)
29. 紅色天鵝絨 (Red Velvet)
30. 羅馬 (Rome)
31. 皇家 (Royal)
32. 櫻花 (Sakura)
33. 光澤 (Shine)
34. 科技藍 (Tech Blue)
35. 復古 (Vintage)

---

## Form State Transitions

### Default State
- Form fields empty or with default values
- Chart preview area shows placeholder or last generated chart

### Data Entry State
- User inputs data via keyboard
- Table updates immediately
- Chart preview may update in real-time

### Generation State
- User clicks "生成圖表"
- Chart renders based on current form values
- Preview area shows generated chart

### Download State
- User clicks "下載圖表"
- PNG file is generated and downloaded

### Clear State
- User clicks "清除所有"
- All form fields reset to defaults
- Chart preview clears

---

## Chart Type-Specific Behaviors

### Histogram (scatter-histogram-chart-creation)
- X軸標籤 and Y軸標籤 for axis labeling
- 散點大小 for controlling point size
- 散點類型: 普通散點 (normal) / 動效散點 (animated)

### Stacked Bar with Brush (bar-stack-brush-creation)
- Brush selection for selecting data range
- 數據列配置 for defining stacked columns
- 標記連線數據列 for marking connected data

### Rounded Donut (rounded-corner-circle-chart-creation)
- 數據類型: 整數 / 小數 toggle
- Legend on left/right/bottom

### Polar Line Chart (line-polar-chart-creation2)
- 輸入函數 supports mathematical expressions
- Dual Y-axes support

---

## Responsive Breakpoints
- **Desktop:** 1440px - Two-column layout
- **Tablet:** ~768px - May switch to single column
- **Mobile:** 390px - Full single column, form stacked above preview

---

## Global JavaScript Dependencies
- **Vue.js** (vue.global.prod.js) - Used for reactive UI
- **Axios** - HTTP client for potential API calls
- **Bulma CSS** - CSS framework
- **Font Awesome** - Icon library

---

## Error/Empty States
- If JavaScript disabled: Warning message shown
- Form validation: [可選] fields are truly optional
- Empty data table: Shows placeholder rows

---

## Animations
- Mega-menu dropdown: Fade in on hover
- Chart preview: Real-time updates on data change
- Back-to-top button: Fade in/out on scroll threshold
- Theme changes: Immediate color transition in preview