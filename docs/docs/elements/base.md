---
layout: page
title: "Base Styles"
link:
  text: "Base"
order: 1
---

Some general styles and global resets are defined here. This is where we store any styles that effect the `<body>` or `<html>` elements, set HTML5 elements to display as block and output our global modifier classes.

<ul class="list list-docs">
  <li>Set the height for <code>&lt;html&gt;</code> and <code>&lt;body&gt;</code> to <code>100%</code></li>
  <li>Remove margins and padding from <code>&lt;html&gt;</code> and <code>&lt;body&gt;</code></li>
  <li>Prevents automatic text resizing on mobile devices.</li>
  <li>Make HTML5 elements act like blocks.</li>
  <li>Set default box sizing model to our global variable <code>$global-box-sizing.</code></li>
  <li>Outputs our clear fix class if one is set in <code>$class-clearfix</code>.</li>
  <li>Outputs our remove clear fix class if one is set in <code>$class-remove-clearfix</code>.</li>
  <li>Outputs our float left class if one is set in <code>$class-float-left</code>.</li>
  <li>Outputs our float right class if one is set in <code>$class-float-right</code>.</li>
  <li>Add custom text highlight color if a color is set in <code>$bg-selection</code>.</li>
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

</ul>
</section>
