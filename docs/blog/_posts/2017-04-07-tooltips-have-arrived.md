---
layout: post
title: "Tooltips Have Arrived"
date: 2017-04-07
version: "2.4.5"
---

Tooltips have arrived for version 2.4.5 of BaseWeb. They are a very common and simple tool for displaying content on a page. Usually in the form of helper text, descriptions or clarifications. To get started using them, simply include `blocks/_tooltips.scss` into your router file and customize as you see fit.

Out of the box, you should be able to use the `.tooltip` class which adds the base styles for tooltips along with the default positioning of a tooltip which is above the element. Then simply add the `data-tooltip` data attribute with the value of the text you want displayed in the tooltip.

```html
<a class="tooltip" data-tooltip="...">...</a>
```

<div class="demo demo-tooltips">
  <p class="text-center">
    <a class="tooltip" data-tooltip="That means it's not complicated">It's simple</a>
  </p>
</div>

For more information on this component block and how you can use the available mixins and variable map, check out the [documentation on tooltips](/docs/blocks/tooltips/).
