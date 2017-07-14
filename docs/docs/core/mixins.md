---
layout: page
title: "Mixins"
order: 2
---

Global mixins for our framework. These mixins are global and don't apply specifically to a single element/block component.

<ul class="list list-docs">

<li markdown="1">

## clearfix

Allows you to clear an element that contains floats.

```scss
@include clearfix();
```

### Example Usage

```scss
// SCSS
.wrapper {
  @include clearfix();
}

// CSS Output
.wrapper:after {
  content: '';
  display: table;
  clear: both;
}
```

</li>

<li markdown="1">

## remove-clearfix

Removes the clearfix styles from an element. This is typically used when a clearfix is inherited on an element and you'd like it removed.

```scss
@include remove-clearfix();
```

</li>

<li markdown="1">

## float-modifiers

Adds the float modifier classes to an element.

```scss
@include float-modifiers( $left, $right );
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

### Example Usage

```scss
// SCSS
.button-group-wrapper .button-group {
  display: block;
  @include float-modifiers();
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

</li>

<li markdown="1">

## size

Shorthand for adding width and height dimensions to an element. If you only pass in a width, the height will be set to equal the width and create a square. If either the width or height are unit-less, it defaults to pixels.

```scss
@include size( $height, $width );
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

### Example Usage

```scss
// SCSS
.my-special-box {
  @include size(100px, 50px);
  ...
}

// CSS Output
.my-special-box {
  width: 100px;
  height: 50px;
  ...
}
```

</li>

<li markdown="1">

## vertical-center

Centers an element vertically within it's parent. Parent element may need to have `transform-style:` `preserve-3d;` to prevent half pixel bluring.

```scss
@include vertical-center( $percent );
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

### Example Usage

```scss
// SCSS
.box {
  @include vertical-center();
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

</li>

<li markdown="1">

## scrollable

Makes touch devices use momentum-based scrolling for the given element.

```scss
@include scrollable();
```

</li>

<li markdown="1">

## border-radius

Define border radius using mixin shorthand and global defaults.

```scss
@include border-top-radius( $radius );
@include border-left-radius( $radius );
@include border-right-radius( $radius );
@include border-bottom-radius( $radius );
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$radius</code></td>
    <td>Unit (pixel, percent)</td>
    <td><code>$border-radius</code></td>
  </tr>
</table>

### Example Usage

```scss
// SCSS
.box-1 {
  @include border-left-radius(20px);
}
.box-2 {
  @include border-top-radius(50%);
}

// CSS Output
.box-1 {
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}
.box-2 {
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}
```

### Available Mixins

<table class="table table-docs">
  <tr>
    <th>Mixin</th>
    <th>Example</th>
  </tr>
  <tr>
    <td><code>@include border-top-radius()</code></td>
    <td><span class="demo-border-radius mixin-border-top-radius"></span></td>
  </tr>
  <tr>
    <td><code>@include border-bottom-radius()</code></td>
    <td><span class="demo-border-radius mixin-border-bottom-radius"></span></td>
  </tr>
  <tr>
    <td><code>@include border-left-radius()</code></td>
    <td><span class="demo-border-radius mixin-border-left-radius"></span></td>
  </tr>
  <tr>
    <td><code>@include border-right-radius()</code></td>
    <td><span class="demo-border-radius mixin-border-right-radius"></span></td>
  </tr>
</table>

<div class="notice warning">
  <p>For the list above of available mixins, I'm passing in a border-radius of <code>50%</code> so the effect is more obvious.</p>
</div>

</li>

<li markdown="1">

## text-truncate

Truncates text with an ellipsis. Element this is applied to must be block or inline-block.

```scss
@include text-truncate();
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

### Example Usage

```scss
// SCSS
.demo-text-truncate {
  @include text-truncate();
}

// CSS Output
.demo-text-truncate {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

<div class="demo demo-text-truncate">
  <div class="box">This is some text that will get truncated</div>
</div>

</li>

<li markdown="1">

## text-hide

Hides text from an element. This is most commonly used as an image replacement technique for hiding text in an element to reveal a background image.

```scss
@include text-hide();
```

### Example Usage

```scss
// SCSS
.logo {
  ...
  @include text-hide();
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

</li>

<li markdown="1">

<h2>make-triangle</h2>

<p>Uses the <code>0*0</code> element with borders trick to draw arrows. The base styles for creating CSS triangles must be applied either through mixin, class or extend.</p>

```scss
@include make-triangle-base();
```

```scss
@include make-triangle( $size, $color, $direction );
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>$size</code></td>
    <td>Unit (pixel, em, rem)</td>
    <td><span class="text-soften">None</span></td>
    <td></td>
  </tr>
  <tr>
    <td><code>$color</code></td>
    <td>Color</td>
    <td><span class="text-soften">None</span></td>
    <td></td>
  </tr>
  <tr>
    <td><code>$direction</code></td>
    <td>String ('up', 'right', 'down', 'left', 'up-right', 'up-left', 'down-right', 'down-left')</td>
    <td><span class="text-soften">None</span></td>
    <td>The direction that the triangle will point.</td>
  </tr>
</table>

### Example Usage

```scss
// SCSS
%triangle {
  @include make-triangle-base();
}
.example-triangle-1 {
  @extend %triangle;
  @include make-triangle( 14px, $blue, 'left' );
}
.example-triangle-2 {
  @extend %triangle;
  @include make-triangle( 14px, $purple, 'down' );
}
.example-triangle-3 {
  @extend %triangle;
  @include make-triangle( 14px, $red, 'right' );
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

</li>

</ul>
