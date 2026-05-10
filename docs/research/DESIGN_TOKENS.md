# DESIGN_TOKENS.md - https://www.hasgg.com/data-chart

## Colors

### Primary Colors
- **Background (page)**: rgb(244, 244, 244) - light gray (#f4f4f4)
- **Text (primary)**: rgb(51, 51, 51) - dark gray (#333333)
- **Nav background**: rgb(34, 51, 25) - dark forest green
- **Footer background**: rgb(20, 30, 15) - very dark green

### Card Colors
- **Card background**: rgb(255, 255, 255) - white
- **Card text**: rgb(0, 0, 0) - black (h3 links)

### Accent/Interactive
- **Link hover**: opacity 0.8
- **Button primary**: default state with darken on hover

## Typography

### Font Family
```
"PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Arial, sans-serif
```

### Font Sizes
- **Body**: 15px
- **H1 (page title)**: 24px, weight 500, line-height 27px
- **H3 (card titles)**: 20px, weight 500
- **Nav links**: 16px, weight 900
- **Breadcrumbs**: 15px
- **Footer text**: 15px (implied)

## Spacing

### Page Layout
- **Container max-width**: 1200px
- **Grid gap**: 24px
- **Section padding**: 20px
- **Card padding**: 20px
- **Card margin-bottom**: 24px

### Card Dimensions
- **Card width**: 311px
- **Card height**: 80px
- **Card border-radius**: 6px

### Navbar
- **Height**: 80px
- **Nav link padding**: 0 (implicit via height)

## Shadows

### Card Shadow
```
rgba(10, 10, 10, 0.1) 0px 7.5px 15px -1.875px, rgba(10, 10, 10, 0.02) 0px 0px 0px 1px
```
Equivalent to: `0 7.5px 15px -1.875px rgba(10,10,10,0.1), 0 0 0 1px rgba(10,10,10,0.02)`

## Responsive Breakpoints
- **Desktop**: 1440px - 4 columns
- **Tablet**: 768px - 4 columns (content max-width 1200px constrains)
- **Mobile**: 390px - 1 column stack

## Z-Index Layers
- **Navbar**: Fixed at top (z-index should be high)
- **Content**: Below navbar
- **Footer**: Below content