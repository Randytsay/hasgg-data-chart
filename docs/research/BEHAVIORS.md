# BEHAVIORS.md - https://www.hasgg.com/data-chart

## Interaction Model: STATIC

This is a static content listing page with no scroll-driven animations, no tab switching, no carousel, and no scroll-snap.

## Observed Behaviors

### 1. Navbar Sticky
- **Behavior**: Navbar stays fixed at top on scroll
- **Implementation**: `position: sticky` or `position: fixed` on the nav element

### 2. Standard Link Hover States
- **Nav links**: Underline appears on hover (text-decoration)
- **Chart cards**: opacity changes to 0.8 on hover, transition 0.2s

### 3. Form Interactions
- **Input focus**: Border color changes (standard browser focus)
- **Button hover**: Background darkens slightly

### 4. Responsive Behavior
- **Desktop (1440px)**: 4-column grid
- **Tablet (768px)**: 4-column grid (same as desktop based on wrapper max-width 1200px)
- **Mobile (390px)**: Single column stack, full-width cards

## No Active Behaviors Found
- No IntersectionObserver animations
- No scroll-snap
- No Lenis/smooth scroll libraries
- No tab switching or state changes
- No auto-playing content

## CSS Transitions Used
- Card hover: `opacity 0.2s ease`
- Button hover: `background-color 0.2s ease`
- Nav link hover: `text-decoration transition`