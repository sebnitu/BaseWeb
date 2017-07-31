---
layout: page
title: "Images"
order: 7
---

Images in BaseWeb are handles responsively be default. You're also provided a few class modifiers for commonly used image styles as well as image alignment classes.

```html
<img src="...">
```

<div class="demo">
  <img alt="Placeholder image" src="/dist/img/example-01.jpg">
</div>

## Image Classes

Alignment modifiers are classes for images that help position them within the context of a document. There are also a few stylistic modifiers for commonly used image effects.

<ul class="list list-docs">

<li markdown="1">

### img.align-left

Floats an image to the left and adds top, right and bottom margins so that text wraps around the image properly.

```html
<img class="align-left" src="...">
```

<div class="demo">
  <img class="align-left" alt="Placeholder image" src="/dist/img/example-02.jpg">
</div>

</li>

<li markdown="1">

### img.align-center

Centers an image by making it block and giving it left and right margins of `auto`.

```html
<img class="align-center" src="...">
```

<div class="demo">
  <img class="align-center" alt="Placeholder image" src="/dist/img/example-02.jpg">
</div>

</li>

<li markdown="1">

### img.align-right

Floats an image to the right and adds top, left and bottom margins so that text wraps around the image properly.

```html
<img class="align-right" src="...">
```

<div class="demo">
  <img class="align-right" alt="Placeholder image" src="/dist/img/example-02.jpg">
</div>

</li>

<li markdown="1">

### img.rounded

Adds rounded border radius based on the default border-radius setting `$border-radius`.

```html
<img class="rounded" src="...">
```

<div class="demo">
  <img class="align-center rounded" alt="Placeholder image" src="/dist/img/example-03.jpg">
</div>

</li>

<li markdown="1">

### img.circle

Makes a circle effect on an image by adding `50%` border radius.

```html
<img class="circle" src="...">
```

<div class="demo">
  <img class="align-center circle" alt="Placeholder image" src="/dist/img/example-03.jpg">
</div>

</li>

<li markdown="1">

### img.polaroid

Adds a polaroid effect to an image.

```html
<img class="polaroid" src="...">
```

<div class="demo">
  <img class="align-center polaroid" alt="Placeholder image" src="/dist/img/example-03.jpg">
</div>

</li>

</ul>
