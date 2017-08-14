---
layout: page
title: Dismissible
order: 2
---

The dismissible component allows for elements to be hidden using a trigger. This is a global component and is used by default on the notices to make them dismissible.

```html
<div class="dismissible">
  <p>This is a random div. <a href="#" class="close">Let's make it dismissible</a></p>
</div>

<div class="notice dismissible">
  <button class="button button-icon close">{% include icons/x.svg %}</button>
  <p>This is a dismissible notice</p>
</div>
```

<div class="demo demo-1">
  <div class="dismissible">
    <p>This is a random div. <a href="#" class="close">Let's make it dismissible</a></p>
  </div>
  <div class="notice dismissible">
    <button class="button button-icon close">{% include icons/x.svg %}</button>
    <p>This is a dismissible notice</p>
  </div>
  <button class="button small" onclick="dismissible.showAll('.demo-1');">Reset</button>
</div>
