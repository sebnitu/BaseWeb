---
layout: page
title: "Mixins"
order: 2
---

Global mixins for our framework. These mixins are global and don't apply specifically to a single element/block component.

<div id="toc" class="toc"></div>

<section id="core-mixin-add-clearfix" class="docs-item" markdown="1">

### add-clearfix

Allows you to clear an element that contains floats.

```scss
@include add-clearfix();
```

<p class="subheading">Example Usage</p>

```scss
// SCSS
.wrapper {
  @include add-clearfix();
}

// CSS Output
.wrapper:after {
  content: '';
  display: table;
  clear: both;
}
```

</section><!-- .docs-item -->

<section id="core-mixin-remove-clearfix" class="docs-item" markdown="1">

### remove-clearfix

Removes the clearfix styles from an element. This is typically used when a clearfix is inherited on an element and you'd like it removed.

```scss
@include remove-clearfix();
```

</section><!-- .docs-item -->

<section id="core-mixin-add-styles" class="docs-item" markdown="1">

### add-styles

...

```scss
@include add-styles();
```

</section><!-- .docs-item -->

<section id="core-mixin-add-modifiers" class="docs-item" markdown="1">

### add-modifiers

...

```scss
@include add-modifiers();
```

</section><!-- .docs-item -->

<section id="core-mixin-add-float-modifiers" class="docs-item" markdown="1">

### add-float-modifiers

Adds the float modifier classes to an element.

```scss
@include add-float-modifiers( $left, $right );
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>$left</code></td>
    <td class="text-nowrap">Class name</td>
    <td><code>$class-float-left</code></td>
    <td rowspan="2">Float left and right modifier class names. Set to <code>none</code> to not output.</td>
  </tr>
  <tr>
    <td><code>$right</code></td>
    <td class="text-nowrap">Class name</td>
    <td><code>$class-float-right</code></td>
  </tr>
</table>

<p class="subheading">Example Usage</p>

```scss
// SCSS
.button-group-wrapper .button-group {
  display: block;
  @include add-float-modifiers();
}

// CSS Output
.button-group-wrapper .button-group {
  display: block;
}
.button-group-wrapper .button-group.float-left {
  float: left;
}
.button-group-wrapper .button-group.float-right {
  float: right;
}
```

</section><!-- .docs-item -->

<section id="core-mixin-add-size" class="docs-item" markdown="1">

### add-size

Shorthand for adding width and height dimensions to an element. If you only pass in a width, the height will be set to equal the width and create a square. If either the width or height are unit-less, it defaults to pixels.

```scss
@include add-size( $height, $width );
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>$width</code></td>
    <td>Unit (number, pixel, percentage)</td>
    <td><span class="text-soften">None</span></td>
    <td>The width to set on element.</td>
  </tr>
  <tr>
    <td><code>$height</code></td>
    <td>Unit (number, pixel, percentage)</td>
    <td><code>false</code></td>
    <td>The height to set on element. Uses the set width if set to false.</td>
  </tr>
</table>

<p class="subheading">Example Usage</p>

```scss
// SCSS
.my-special-box {
  @include add-size(100px, 50px);
  ...
}

// CSS Output
.my-special-box {
  width: 100px;
  height: 50px;
  ...
}
```

</section><!-- .docs-item -->

<section id="core-mixin-add-vertical-center" class="docs-item" markdown="1">

### add-vertical-center

Centers an element vertically within it's parent. Parent element may need to have `transform-style:` `preserve-3d;` to prevent half pixel bluring.

```scss
@include add-vertical-center( $percent );
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>$percent</code></td>
    <td>Unit (percentage)</td>
    <td><code>50%</code></td>
    <td>Percent from the top to be set.</td>
  </tr>
</table>

<p class="subheading">Example Usage</p>

```scss
// SCSS
.box {
  @include add-vertical-center();
}

// CSS Output
.box {
  position: relative;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
```

<div class="demo demo-vertical-center">
  <div class="box"></div>
</div>

</section><!-- .docs-item -->

<section id="core-mixin-add-scrollable" class="docs-item" markdown="1">

### add-scrollable

Makes touch devices use momentum-based scrolling for the given element.

```scss
@include add-scrollable();
```

</section><!-- .docs-item -->

<section id="core-mixin-add-text-truncate" class="docs-item" markdown="1">

### add-text-truncate

Truncates text with an ellipsis. Element this is applied to must be block or inline-block.

```scss
@include add-text-truncate();
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$display</code></td>
    <td>Display property (block, inline-block)</td>
    <td><code>block</code></td>
  </tr>
</table>

<p class="subheading">Example Usage</p>

```scss
// SCSS
.demo-text-truncate {
  @include add-text-truncate();
}

// CSS Output
.demo-text-truncate {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

<div class="demo demo-add-text-truncate">
  <div class="box">This is some text that will get truncated</div>
</div>

</section><!-- .docs-item -->

<section id="core-mixin-text-hide" class="docs-item" markdown="1">

### add-text-hide

Hides text from an element. This is most commonly used as an image replacement technique for hiding text in an element to reveal a background image.

```scss
@include add-text-hide();
```

<p class="subheading">Example Usage</p>

```scss
// SCSS
.logo {
  ...
  @include add-text-hide();
}

// CSS Output
.logo {
  ...
  font-size: 0;
  line-height: 0;
  text-indent: 100%;
  white-space: nowrap;
  overflow: hidden;
}
```

```html
<div class="logo">Demo Logo Image Replace</div>
```

<div class="demo demo-logo-image">
  <div class="logo">Demo Logo Image Replace</div>
</div>

</section><!-- .docs-item -->

<section id="core-mixin-add-triangle" class="docs-item" markdown="1">

### add-triangle

Uses the `0*0` element with borders trick to draw arrows. The base styles for creating CSS triangles must be applied either through mixin, class or extend.

```scss
@include add-triangle-base();
```

```scss
@include add-triangle( $size, $color, $direction );
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Options</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$size</code></td>
    <td colspan="2">Unit (pixel, em, rem)</td>
    <td><span class="text-soften">None</span></td>
  </tr>
  <tr>
    <td><code>$color</code></td>
    <td colspan="2">Color</td>
    <td><span class="text-soften">None</span></td>
  </tr>
  <tr>
    <td><code>$direction</code></td>
    <td>String</td>
    <td>
      <code>'up'</code>, <code>'right'</code>,
      <code>'down'</code>, <code>'left'</code>,
      <code>'up-right'</code>, <code>'up-left'</code>,
      <code>'down-right'</code>, <code>'down-left'</code>
    </td>
    <td><span class="text-soften">None</span></td>
  </tr>
</table>

<p class="subheading">Example Usage</p>

```scss
// SCSS
%triangle {
  @include add-triangle-base();
}
.example-triangle-1 {
  @extend %triangle;
  @include add-triangle( 14px, $blue, 'left' );
}
.example-triangle-2 {
  @extend %triangle;
  @include add-triangle( 14px, $purple, 'down' );
}
.example-triangle-3 {
  @extend %triangle;
  @include add-triangle( 14px, $red, 'right' );
}

// CSS Output
.example-triangle-1,
.example-triangle-2,
.example-triangle-3 {
  content: '';
  display: inline-block;
  width: 0;
  height: 0;
  border: 0 none;
  border-style: solid;
  border-color: transparent;
}
.example-triangle-1 {
  border-color: transparent;
  border-width: 14px 14px 14px 0;
  border-right-color: #2196F3;
}
.example-triangle-2 {
  border-color: transparent;
  border-width: 14px 14px 0 14px;
  border-top-color: #9C27B0;
}
.example-triangle-3 {
  border-color: transparent;
  border-width: 14px 0 14px 14px;
  border-left-color: #F44336;
}
```

<div class="demo demo-triangle">
  <div class="col col-4"><span class="example-triangle-1"></span></div>
  <div class="col col-4"><span class="example-triangle-2"></span></div>
  <div class="col col-4"><span class="example-triangle-3"></span></div>
</div>

</section><!-- .docs-item -->

<section id="core-mixin-make-anchor" class="docs-item" markdown="1">

### make-anchor

...

```scss
@include make-anchor();
```

</section><!-- .docs-item -->

<section id="core-mixin-build-headings" class="docs-item" markdown="1">

### build-headings

...

```scss
@include build-headings();
```

</section><!-- .docs-item -->
