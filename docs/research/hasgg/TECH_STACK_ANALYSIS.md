# hasgg.com Tech Stack Analysis

## Framework
- **CMS/Platform:** WordPress (based on wp-content paths, wp-json REST API)
- **Frontend Framework:** Vue.js 3 (vue.global.prod.js from CDN)
- **Version:** Vue 3.x, identified by `vue.global.prod.js?ver=0.9.72`

## CSS Framework
- **Framework:** Bulma CSS 0.9.72
- **Icons:** Font Awesome 6.6 (all.min.css)
- **Custom CSS:** WordPress theme `wndt-master` (style.css?ver=0.26.7)

## JavaScript Libraries
- **Vue.js:** 3.x production build
- **Axios:** HTTP client for API calls
- **Prism.js:** Syntax highlighting for code (v6.6)

## WordPress Plugins
- **wnd-frontend:** Custom plugin providing frontend functionality
  - REST API endpoints
  - Vue-based interactive components
  - Comment system

## API Endpoints Used
- `https://www.hasgg.com/wp-json/` - WordPress REST API base
- `module_api` - Custom module system
- `action_api` - Custom action system
- `posts_api` - Posts query endpoint

## Chart Implementation
Based on the tool functionality:
- **Likely Library:** ECharts (Apache ECharts) or similar
- **Reasoning:** Complex chart types (polar, stacked bars, histograms) suggest a full-featured charting library
- **Theme System:** Custom theme palette with 40+ themes matches ECharts' theme format

## File Structure
```
wp-content/
  plugins/wnd-frontend/
    static/css/
    static/js/
  themes/wndt-master/
    style.css
    static/
      images/
      prism/
```

## Responsive Strategy
- Bulma CSS framework handles responsive breakpoints
- Mobile-first approach via Bulma's grid system
- Viewport meta tag: `width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no`

## Browser Support
Based on modern JavaScript usage (Vue 3, ES6+):
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Performance Notes
- External resources loaded from CDN
- Vue.js and Axios loaded from local wp-content
- Font Awesome loaded remotely (cdnjs)

## Localization
- **Primary language:** Traditional Chinese (zh-TW)
- **Secondary:** Simplified Chinese (zh-Hans)
- **Japanese:** ja locale available
- **Implementation:** URL parameters for variant switching