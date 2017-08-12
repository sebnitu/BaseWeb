---
layout: page
title: JavaScript
order: 6
---

BaseWeb JavaScript is written without any plugins or frameworks (also known as "vanilla JavaScript"), so it works right out of the box. This section of the documentation highlights the global utility object as well as any abstracted JavaScript components with common behaviors. All other component specific scripts are documented in their respective sections.

BaseWeb initiates JS components through `baseweb.js` and by default includes everything. It's possible to use any combination of JS components as long as you include `_utility.js` at minimum.

```js
/*
require
  _utility.js
  _dismissible.js
  _dropdowns.js
  _tabs.js
  _offcanvas.js
*/

// Default initializations
;(function (window, document, undefined) {

  'use strict';

  dismissible.init();
  dropdowns.init();
  tabs.init();
  offcanvas.init();

})(window, document);
```

<div class="notice yellow" markdown="1">
Currently being developed is a way to create a custom download of BaseWeb scripts in an "a la carte" style for component selection. Currently that's best accomplished manually in your own build scripts.
</div>
