# hasgg.com Interaction Patterns

## Hover States
- Buttons: opacity 0.9 or background darken
- Links: color change or underline
- Table cells: highlight on hover
- Chart elements: tooltip display

## Click Behaviors
- Generate chart: renders chart preview
- Download chart: exports PNG
- Import Excel: opens file picker
- Add row/column: inserts new editable cell row
- Clear data: empties table
- Submit comment: posts to WordPress

## Focus States
- Form inputs: border-color accent
- Buttons: outline ring

## Keyboard Navigation
- Tab through form fields
- Enter to submit forms
- Arrow keys in table cells

## Animations
- Chart render: smooth canvas draw
- No explicit CSS animations detected
- ECharts internal transitions

## Loading States
- Page load: auto-generates example chart
- Chart generation: instant (client-side)

## Error Handling
- Form validation on submit
- Invalid data: show error message
- Excel parse error: alert dialog

## Data Flow
1. User inputs data in form/table
2. Click "生成圖表"
3. JavaScript parses inputs
4. ECharts renders chart
5. Chart displayed in preview area