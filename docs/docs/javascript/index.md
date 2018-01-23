---
layout: page
title: JavaScript
order: 6
---

BaseWeb JavaScript is written without any plugins or frameworks (also known as "vanilla JavaScript"), so it works right out of the box. This section of the documentation highlights the global utility object as well as any abstracted JavaScript components with common behaviors. All other component specific scripts are documented in their respective sections.

BaseWeb includes JS components through `baseweb.js` and by default includes everything. It's possible to use any combination of JS components as long as you include `utility.js` at minimum. Don't forget to initialize the components you want to use:

```js
// Initialize BaseWeb components
dismissible.init()
dropdowns.init()
tabs.init()
offcanvas.init()
```

## Browser Support

BaseWeb scripts make heavy use of ECMAScript 5 (more commonly known as ES5) methods and APIs.
That generally means browser support begins with IE9 and above. For further browser support, consider using [polyfill.io](https://polyfill.io/v2/docs/).

```html
<script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
```
