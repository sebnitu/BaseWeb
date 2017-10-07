---
layout: page
title: "Base Styles"
link:
  text: "Base"
order: 1
---

Global base styles are applied here. A few of the first things this component does is remove margin and padding from `<html>` and `<body>`, prevent automatic text resizing on mobile devices and set HTML5 elements to display block.

```scss
// Remove margins and padding from HTML and Body elements
html, body {
  margin: 0;
  padding: 0;
}

// Prevents automatic text resizing on mobile devices.
html {
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}

// Make HTML5 elements act like blocks
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
```

We also set the default box layout model on `<html>` to `$box-sizing` where `border-box` is the default. Then we apply a natural box layout model to all elements, while still allowing components to change. This method was originally conceived by [Paul Irish](http://www.paulirish.com/2012/box-sizing-border-box-ftw/) and improved on by [Chris Coyier](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/).

```scss
html {
  box-sizing: $box-sizing;
}
*, *:before, *:after {
  box-sizing: inherit;
}
```

Custom text highlight color is added if a color is set in `$bg-selection`.

```scss
@if $bg-selection {
  ::selection {
    background: $bg-selection;
    text-shadow: none;
  }
}
```

Lastly, the grid system is also applied based on the output values set in `$grid`.

```scss
// Check if we should output grid system
@if map-get($grid, 'output') {

  // Check if we should output mobile grid system
  @if map-get($grid, 'output-mobile') {
    @include build-grid-system('mobile');
  }

  @include media-min('medium') {
    @include build-grid-system();
  }

}
```

<div id="toc" class="toc"></div>

<header class="docs-header" markdown="1">

## Classes

Base classes are primarily element and block neutral classes that can apply to anything. They are typically utility classes for commonly used CSS techniques (such as a clearfix or floats).

</header><!-- .docs-header -->

<section id="class-clearfix" class="docs-item" markdown="1">

### .clearfix

Use this class to clear an element that contains floats. Whether or not this class is output depends on the <code>$class-clearfix</code> and if set to `null` will not output the class styles.

```html
<div class="clearfix"></div>
```

<p class="subheading">Example Usage</p>

```html
<div class="wrapper clearfix">
  <aside class="sidebar">
  ...
  </aside>
  <div class="content">
  ...
  </div>
</div>
```

</section><!-- .docs-item -->

<section id="class-remove-clearfix" class="docs-item" markdown="1">

### .remove-clearfix

Use this class to remove the styles that would clear an element. Whether or not this class is output depends on the `$class-remove-clearfix` and if set to `null` will not output the class styles. This class is typically used when a clearfix is inherited on an element and you'd like it removed.

```html
<div class="remove-clearfix"></div>
```

</section><!-- .docs-item -->

<section id="class-float-left" class="docs-item" markdown="1">

### .float-left

A quick way for floating an element to the left. If global variable `$class-float-left` is set to `null`, no class styles will be output.

```html
<div class="float-left"></div>
```

</section><!-- .docs-item -->

<section id="class-float-right" class="docs-item" markdown="1">

### .float-right

A quick way for floating an element to the right. If global variable `$class-float-right` is set to `null`, no class styles will be output.

```html
<div class="float-right"></div>
```

</section><!-- .docs-item -->

<section id="class-show-hide" class="docs-item" markdown="1">

### .show and .hide

Utility show and hide classes along with media based toggles. These are created using the values set in the `$breakpoints` and named based on the values set in the global settings:

<table class="tabls table-docs">
  <tr>
    <th>Variable</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$class-show</code></td>
    <td><code>'show'</code></td>
  </tr>
  <tr>
    <td><code>$class-hide</code></td>
    <td><code>'hide'</code></td>
  </tr>
  <tr>
    <td><code>$class-show-hide-min</code></td>
    <td><code>'down'</code></td>
  </tr>
  <tr>
    <td><code>$class-show-hide-max</code></td>
    <td><code>'up'</code></td>
  </tr>
</table>

<p class="subheading">Available Classes</p>

<div class="demo demo-naked demo-show-hide">
  <div class="item">
    <div class="inner"><div class="show"><code>show</code></div><code>show</code></div>
  </div>
  <div class="item">
    <div class="inner"><div class="hide"><code>hide</code></div><code>hide</code></div>
  </div>

  <div class="item">
    <div class="inner"><div class="show-small-down"><code>show-small-down</code></div><code>show-small-down</code></div>
  </div>
  <div class="item">
    <div class="inner"><div class="hide-small-down"><code>hide-small-down</code></div><code>hide-small-down</code></div>
  </div>

  <div class="item">
    <div class="inner"><div class="show-medium-down"><code>show-medium-down</code></div><code>show-medium-down</code></div>
  </div>
  <div class="item">
    <div class="inner"><div class="hide-medium-down"><code>hide-medium-down</code></div><code>hide-medium-down</code></div>
  </div>

  <div class="item">
    <div class="inner"><div class="show-large-down"><code>show-large-down</code></div><code>show-large-down</code></div>
  </div>
  <div class="item">
    <div class="inner"><div class="hide-large-down"><code>hide-large-down</code></div><code>hide-large-down</code></div>
  </div>

  <div class="item">
    <div class="inner"><div class="show-huge-down"><code>show-huge-down</code></div><code>show-huge-down</code></div>
  </div>
  <div class="item">
    <div class="inner"><div class="hide-huge-down"><code>hide-huge-down</code></div><code>hide-huge-down</code></div>
  </div>

  <div class="item">
    <div class="inner"><div class="show-small-up"><code>show-small-up</code></div><code>show-small-up</code></div>
  </div>
  <div class="item">
    <div class="inner"><div class="hide-small-up"><code>hide-small-up</code></div><code>hide-small-up</code></div>
  </div>

  <div class="item">
    <div class="inner"><div class="show-medium-up"><code>show-medium-up</code></div><code>show-medium-up</code></div>
  </div>
  <div class="item">
    <div class="inner"><div class="hide-medium-up"><code>hide-medium-up</code></div><code>hide-medium-up</code></div>
  </div>

  <div class="item">
    <div class="inner"><div class="show-large-up"><code>show-large-up</code></div><code>show-large-up</code></div>
  </div>
  <div class="item">
    <div class="inner"><div class="hide-large-up"><code>hide-large-up</code></div><code>hide-large-up</code></div>
  </div>

  <div class="item">
    <div class="inner"><div class="show-huge-up"><code>show-huge-up</code></div><code>show-huge-up</code></div>
  </div>
  <div class="item">
    <div class="inner"><div class="hide-huge-up"><code>hide-huge-up</code></div><code>hide-huge-up</code></div>
  </div>
</div>

<div class="notice info">
  <p>Resize your browser window to see how the above HTML example toggles between the utility classes.</p>
</div>

</section><!-- .docs-item -->
