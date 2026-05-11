# hasgg.com Layout Architecture

## Page Structure

### Header Zone
- Sticky or fixed header (not sticky in docs)
- Logo left-aligned
- Navigation centered or right
- Search/Login right-aligned

### Main Content Zone
- Centered container ~1200px max
- Two-column layout on desktop:
  - Left: Form/configuration panel (~400px)
  - Right: Chart preview area (~remaining width)

### Footer Zone
- Stats bar (Files, Queries, Time, Memory)
- Copyright + links

## Responsive Behavior

### 1440px Desktop
- Full two-column layout
- All form fields visible
- Full chart preview

### 390px Mobile
- Stacked single column
- Form fields collapse to full width
- Chart scales to container width
- Navigation becomes scrollable horizontal

## Chart Area Layout

### Configuration Panel (Left)
1. Title + Subtitle inputs
2. Dimension + Unit inputs
3. Theme selector dropdown
4. Data table (main interaction area)
5. Excel import, add row/column buttons
6. Extra info section (text, size, color)
7. Watermark section (text, size, color)
8. Legend position radios
9. Options checkboxes
10. Action buttons (generate, download, clear)

### Preview Area (Right)
- ECharts canvas
- Responsive to container size
- Interactive on hover

## Grid System
- CSS Grid or Flexbox
- 8px base unit
- Form fields on 16px vertical rhythm

## Z-Index Layers
- Header: 100
- Dropdowns/modals: higher
- Chart tooltip: highest