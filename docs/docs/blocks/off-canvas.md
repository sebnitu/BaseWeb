---
layout: page
title: "Off-Canvas"
order: 6
---

The off-canvas component block is a design pattern that hides aside content outside of the default viewport which can be revealed using a trigger. This is most commonly used for navigation elements on mobile viewports. The structure of an off-canvas block is encompassed with four elements: `oc-wrap`, `oc-content`, `oc-inner` and `oc-aside`.

```html
<div class="oc-wrap">
  <section class="oc-content">
    <div class="oc-inner">
      ...
    </div>
  </section>
  <aside class="oc-aside oc-aside-id">
    ...
  </aside>
</div>
```

The off-canvas aside is triggered using a button or link with the class of `oc-trigger` and a `data-target` attribute with the unique id of the aside element.

```html
<button class="oc-trigger" data-target="oc-aside-id">Menu</button>
```
