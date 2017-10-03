---
layout: page
title: "Base Styles"
link:
  text: "Base"
order: 1
---

Some general styles and global resets are defined here. This is where we store any styles that effect the `<body>` or `<html>` elements, set HTML5 elements to display as block and output our global modifier classes.

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

// Reset table font-size
table {
  font-size: 1em;
}
```

<div id="toc" class="toc"></div>

<section id="var-base" class="docs-item" markdown="1">

### Variables

Base variables are used in setting utility classes. These are component agnostic and can be used throughout your projects or components.

```scss
// Sets global box sizing property
// @type border-box, null
$box-sizing: border-box !default;

// Class name used in clearfix and remove-clearfix classes
// @type class-name, null
$class-clearfix: 'clearfix' !default;
$class-remove-clearfix: 'remove-clearfix' !default;

// Class name used in float left and right classes
// @type class-name, null
$class-float-left: 'float-left' !default;
$class-float-right: 'float-right' !default;

$class-show: 'show' !default;
$class-hide: 'hide' !default;

// Whether or not to output media based show-hide classes
$class-show-hide-min: 'down' !default;
$class-show-hide-max: 'up' !default;
```

</section><!-- .docs-item -->

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

Utility show and hide classes along with media based toggles. These are created using the values set in the `$breakpoints` and named based on the values set in the golbal settings:

* `$class-show`
* `$class-hide`
* `$class-show-hide-min`
* `$class-show-hide-max`.

```html
<div class="show"></div>
<div class="hide"></div>
...
```

<div class="demo">
  <div class="show"><code>show</code></div>
  <div class="hide"><code>hide</code></div>
  <hr>
  <div class="show-small-down"><code>show-small-down</code></div>
  <div class="hide-small-down"><code>hide-small-down</code></div>
  <div class="show-medium-down"><code>show-medium-down</code></div>
  <div class="hide-medium-down"><code>hide-medium-down</code></div>
  <div class="show-large-down"><code>show-large-down</code></div>
  <div class="hide-large-down"><code>hide-large-down</code></div>
  <div class="show-huge-down"><code>show-huge-down</code></div>
  <div class="hide-huge-down"><code>hide-huge-down</code></div>
  <hr>
  <div class="show-small-up"><code>show-small-up</code></div>
  <div class="hide-small-up"><code>hide-small-up</code></div>
  <div class="show-medium-up"><code>show-medium-up</code></div>
  <div class="hide-medium-up"><code>hide-medium-up</code></div>
  <div class="show-large-up"><code>show-large-up</code></div>
  <div class="hide-large-up"><code>hide-large-up</code></div>
  <div class="show-huge-up"><code>show-huge-up</code></div>
  <div class="hide-huge-up"><code>hide-huge-up</code></div>
</div>

<div class="notice info">
  <p>Resize your browser window to see how the above HTML example toggles between the utility classes.</p>
</div>

</section><!-- .docs-item -->
