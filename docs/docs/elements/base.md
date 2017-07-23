---
layout: page
title: "Base Styles"
link:
  text: "Base"
order: 1
---

Some general styles and global resets are defined here. This is where we store any styles that effect the `<body>` or `<html>` elements, set HTML5 elements to display as block and output our global modifier classes.

<ul class="list list-docs">
  <li>Remove margins and padding from <code>&lt;html&gt;</code> and <code>&lt;body&gt;</code></li>
  <li>Prevents automatic text resizing on mobile devices.</li>
  <li>Make HTML5 elements act like blocks.</li>
  <li>Set default box sizing model to our global variable <code>$global-box-sizing.</code></li>
  <li>Add custom text highlight color if a color is set in <code>$bg-selection</code>.</li>
  <li>Outputs our clear fix class if one is set in <code>$class-clearfix</code>.</li>
  <li>Outputs our remove clear fix class if one is set in <code>$class-remove-clearfix</code>.</li>
  <li>Outputs our float left class if one is set in <code>$class-float-left</code>.</li>
  <li>Outputs our float right class if one is set in <code>$class-float-right</code>.</li>
  <li>Outputs our show class if one is set in <code>$class-show</code>.</li>
  <li>Outputs our hide class if one is set in <code>$class-hide</code>.</li>
  <li>Outputs our show-hide min classes if one is set in <code>$class-show-hide-min</code>.</li>
  <li>Outputs our show-hide max classes if one is set in <code>$class-show-hide-max</code>.</li>
</ul>

<section class="subsection subsection-classes" markdown="1">

# Base Classes

Base classes are primarily element and block neutral classes that can apply to anything. They are typically utility classes for commonly used CSS techniques (such as a clearfix).

<ul class="list list-docs">

<li markdown="1">

## .clearfix

Use this class to clear an element that contains floats. Whether or not this class is output depends on the <code>$class-clearfix</code> and if set to `null` will not output the class styles.

```html
<div class="clearfix"></div>
```

### Example Usage

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

</li>

<li markdown="1">

## .remove-clearfix

Use this class to remove the styles that would clear an element. Whether or not this class is output depends on the `$class-remove-clearfix` and if set to `null` will not output the class styles. This class is typically used when a clearfix is inherited on an element and you'd like it removed.

```html
<div class="remove-clearfix"></div>
```

</li>

<li markdown="1">

## .float-left

A quick way for floating an element to the left. If global variable `$class-float-left` is set to `null`, no class styles will be output.

```html
<div class="float-left"></div>
```

</li>

<li markdown="1">

## .float-right

A quick way for floating an element to the right. If global variable `$class-float-right` is set to `null`, no class styles will be output.

```html
<div class="float-right"></div>
```

</li>

<li markdown="1">

## Utility Classes

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

</li>

</ul>
</section>
