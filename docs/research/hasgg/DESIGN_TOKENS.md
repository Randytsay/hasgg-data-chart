# hasgg.com Design Tokens - Chart Tool Pages

## Colors

### Primary Palette
- **Background (page):** `rgb(255, 255, 255)` - White
- **Background (sections):** `rgb(244, 244, 244)` - Light gray
- **Footer background:** `rgb(20, 30, 15)` - Dark green
- **Text (primary):** `rgb(51, 51, 51)` - Dark gray
- **Text (muted):** `rgb(153, 153, 153)` - Light gray
- **Link color:** `rgb(0, 174, 205)` - Cyan accent

### Navigation
- **Nav background:** Transparent (or white with shadow on scroll)
- **Nav link color:** White or dark depending on state
- **Nav height:** 80px

### Form Elements
- **Input border:** `#dbdbdb`
- **Input focus border:** Primary blue
- **Input focus shadow:** `0 0 0 2px rgba(50, 115, 220, 0.2)`

### Buttons
- **Primary:** Teal/cyan based on Bulma's `is-primary`
- **Secondary:** Gray based on Bulma
- **Danger:** Red based on Bulma

## Typography

### Font Family
```
"PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Arial, sans-serif
```

### Font Sizes (Bulma)
- `size-1`: 3rem (48px) - Page titles
- `size-2`: 2.5rem (40px)
- `size-3`: 2rem (32px)
- `size-4`: 1.5rem (24px) - Section headings
- `size-5`: 1.25rem (20px) - H3
- `size-6`: 1rem (16px) - Body
- `size-7`: 0.875rem (14px) - Small text

### Font Weights
- Light: 300
- Normal: 400
- Medium: 500
- Semi-bold: 600
- Bold: 700

## Spacing

### Spacing Scale (Bulma)
- `0.25rem` (4px)
- `0.5rem` (8px)
- `0.75rem` (12px)
- `1rem` (16px)
- `1.5rem` (24px)
- `2rem` (32px)
- `3rem` (48px)
- `4rem` (64px)

### Section Padding
- Section padding: 3rem 1.5rem
- Container: max-width 1200px, centered

## Border Radius

### Bulma defaults
- `radius-small`: 2px
- `radius`: 4px
- `radius-medium`: 6px
- `radius-large`: 8px
- `radius-rounded`: 9999px (full circle/button)

## Shadows

### Box Shadows
- Card: `0 2px 3px rgba(0,0,0,0.1)`
- Elevated: `0 4px 6px rgba(0,0,0,0.1)`
- Dropdown: `0 4px 6px rgba(0,0,0,0.1)`

### Navbar
- Transparent initially, no shadow
- May gain shadow on scroll (not confirmed)

## Breakpoints (Bulma)

- **Mobile:** up to 768px
- **Tablet:** 769px - 1023px
- **Desktop:** 1024px - 1215px
- **Widescreen:** 1216px - 1407px
- **Fullhd:** 1408px+

## Z-Index Scale
- Navbar: 30
- Dropdown: 30
- Fixed elements: 50
- Back-to-top: 99