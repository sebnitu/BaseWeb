---
layout: page
title: "Mixins"
order: 4
---

Global mixins for our framework. These mixins are global and don't apply specifically to a single element/block component.

<div id="toc" class="toc"></div>

<section id="mixin-add-clearfix" class="docs-item" markdown="1">

### add-clearfix

Allows you to clear an element that contains floats.

```scss
@include add-clearfix();
```

<p class="subheading">Example Usage</p>

```scss
// SCSS input
.wrapper {
  @include add-clearfix();
}

// CSS output
.wrapper:after {
  content: '';
  display: table;
  clear: both;
}
```

</section><!-- .docs-item -->

<section id="mixin-remove-clearfix" class="docs-item" markdown="1">

### remove-clearfix

Removes the clearfix styles from an element. This is typically used when a clearfix is inherited on an element and you'd like it removed.

```scss
@include remove-clearfix();
```

</section><!-- .docs-item -->

<section id="mixin-add-float-modifiers" class="docs-item" markdown="1">

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
  </tr>
  <tr>
    <td><code>$left</code></td>
    <td class="text-nowrap">Class name</td>
    <td><code>$class-float-left</code></td>
  </tr>
  <tr>
    <td><code>$right</code></td>
    <td class="text-nowrap">Class name</td>
    <td><code>$class-float-right</code></td>
  </tr>
</table>

<p class="subheading">Example Usage</p>

```scss
// SCSS input
.wrapper .block {
  display: block;
  @include add-float-modifiers();
}

// CSS output
.wrapper .block {
  display: block;
}
.wrapper .block.float-left {
  float: left;
}
.wrapper .block.float-right {
  float: right;
}
```

</section><!-- .docs-item -->

<section id="mixin-add-size" class="docs-item" markdown="1">

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
  </tr>
  <tr>
    <td><code>$width</code></td>
    <td>Unit (number, pixel, percentage)</td>
    <td><span class="text-soften">None</span></td>
  </tr>
  <tr>
    <td><code>$height</code></td>
    <td>Unit (number, pixel, percentage)</td>
    <td><code>false</code></td>
  </tr>
</table>

<p class="subheading">Example Usage</p>

```scss
// SCSS input
.my-special-box {
  @include add-size(100px, 50px);
  ...
}

// CSS output
.my-special-box {
  width: 100px;
  height: 50px;
  ...
}
```

</section><!-- .docs-item -->

<section id="mixin-add-vertical-center" class="docs-item" markdown="1">

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
  </tr>
  <tr>
    <td><code>$percent</code></td>
    <td>Unit (percentage)</td>
    <td><code>50%</code></td>
  </tr>
</table>

<p class="subheading">Example Usage</p>

```scss
// SCSS input
.box {
  @include add-vertical-center();
}

// CSS output
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

<section id="mixin-add-scrollable" class="docs-item" markdown="1">

### add-scrollable

Makes touch devices use momentum-based scrolling for the given element.

```scss
@include add-scrollable();
```

</section><!-- .docs-item -->

<section id="mixin-make-triangle" class="docs-item" markdown="1">

### make-triangle

Creates the base styles for creating CSS triangles.

```scss
@include make-triangle();
```

</section><!-- .docs-item -->

<section id="mixin-add-triangle-styles" class="docs-item" markdown="1">

### add-triangle-styles

Uses the `0x0` element with borders trick to draw arrow size, color and direction.

```scss
@include add-triangle-styles( $size, $color, $direction );
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

</section><!-- .docs-item -->

<section id="mixin-add-text-truncate" class="docs-item" markdown="1">

### add-text-truncate

Truncates text with an ellipsis. Element this is applied to must be block or inline-block.

```scss
@include add-text-truncate( $display );
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
// SCSS input
.demo-text-truncate {
  @include add-text-truncate();
}

// CSS output
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

<section id="mixin-text-hide" class="docs-item" markdown="1">

### add-text-hide

Hides text from an element. This is most commonly used as an image replacement technique for hiding text in an element to reveal a background image.

```scss
@include add-text-hide();
```

<p class="subheading">Example Usage</p>

```scss
// SCSS input
.logo {
  ...
  @include add-text-hide();
}

// CSS output
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

<section id="mixin-make-anchor" class="docs-item" markdown="1">

### make-anchor

Creates the base anchor styles using the `$anchors` map for defaults.

```scss
@include make-anchor( $options );
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$options</code></td>
    <td>Map</td>
    <td><code>$anchors</code></td>
  </tr>
</table>

<p class="subheading">Example Usage</p>

This example is how BaseWeb outputs base anchor styles. This can also be used to style context specific anchors such as in footers or sidebars.

```scss
// SCSS input
a {
  @include make-anchor();
}

// CSS output
a {
  color: #2196F3;
  text-decoration: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
a:hover {
  color: #1976D2;
  border-color: inherit;
}
```

</section><!-- .docs-item -->

<section id="mixin-build-headings" class="docs-item" markdown="1">

### build-headings

Creates the base styles for headings using the `$headings` map for defaults.

```scss
@include build-headings( $options );
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$options</code></td>
    <td>Map</td>
    <td><code>$headings</code></td>
  </tr>
</table>

<p class="subheading">Example Usage</p>

```scss
// SCSS input
@include build-headings();

// CSS output
h1, h2, h3, h4, h5, h6,
.h1, .h2, .h3, .h4, .h5, .h6 {
  margin: 1rem 0;
  font-family: inherit;
  line-height: 1.25em;
  font-weight: 600;
  color: #212121;
}

h1 a, h2 a, h3 a, h4 a, h5 a, h6 a,
.h1 a, .h2 a, .h3 a, .h4 a, .h5 a, .h6 a {
  color: #212121;
  text-decoration: none;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

h1 a:hover, h2 a:hover, h3 a:hover, h4 a:hover, h5 a:hover, h6 a:hover,
.h1 a:hover, .h2 a:hover, .h3 a:hover, .h4 a:hover, .h5 a:hover, .h6 a:hover {
  color: #2196F3;
  border-color: inherit;
}

h1, .h1 {
  font-size: 2.5em;
}
h2, .h2 {
  font-size: 2em;
}
h3, .h3 {
  font-size: 1.75em;
}
h4, .h4 {
  font-size: 1.5em;
}
h5, .h5 {
  font-size: 1.25em;
}
h6, .h6 {
  font-size: 1em;
}
```

</section><!-- .docs-item -->

<section id="mixin-add-styles" class="docs-item" markdown="1">

### add-styles

Output styles from a component map based on the approved properties and pseudo-classes.

```scss
@include add-styles( $input, $settings );
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$input</code></td>
    <td>Map</td>
    <td><span class="text-soften">none</span></td>
  </tr>
  <tr>
    <td><code>$settings</code></td>
    <td>Map</td>
    <td><code>$add-styles</code></td>
  </tr>
</table>

<p class="subheading">Example Usage</p>

For basic usage, take a look at how we can output text styles through a default map. Notice how the properties that don't match in our settings map of approved properties get ignored:

```scss
// SCSS input
$example: (
  'other' : 'Option to ignore',
  'cursor' : pointer,
  'color' : $blue,
  'padding' : 0.5em 0,
  'border-top' : 1px solid $blue,
  'transition' : $transition,
  'hover' : (
    'color' : $purple,
    'border-color' : $purple
  )
);
.text-example {
  @include add-styles($example);
}

// CSS output
.text-example {
  cursor: pointer;
  padding: 0.5em 0;
  color: #2196F3;
  border-top: 1px solid #2196F3;
  -webkit-transition: all 0.25s linear;
  transition: all 0.25s linear;
}
.text-example:hover {
  color: #9C27B0;
  border-color: #9C27B0;
}
```

<div class="demo">
  <p class="add-styles-example">Example Text</p>
</div>

</section><!-- .docs-item -->

<section id="mixin-add-modifiers" class="docs-item" markdown="1">

### add-modifiers

Output an array of modifiers for flat components. Flat components are ones who's modifiers typically only alter the appearance of the parent element itself. For example: `buttons`, `badges`, `notices`, etc.

```scss
@include add-modifiers( $input, $key, $selector, $settings );
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$input</code></td>
    <td>Map</td>
    <td><span class="text-soften">none</span></td>
  </tr>
  <tr>
    <td><code>$key</code></td>
    <td>String or null</td>
    <td><code>null</code></td>
  </tr>
  <tr>
    <td><code>$selector</code></td>
    <td>Boolean</td>
    <td><code>true</code></td>
  </tr>
  <tr>
    <td><code>$settings</code></td>
    <td>Map</td>
    <td><code>$add-styles</code></td>
  </tr>
</table>

<p class="subheading">Example Usage</p>

For the initial example, we'll make up a random component map with a few modifier options.

```scss
$example: (
  'color' : $white,
  'background' : $blue,
  'modifiers' : (
    'red' : (
      'background' : $red
    ),
    'green' : (
      'background' : $green
    )
  )
);
```

Now, we'll pass this item to the add-modifiers mixin wrapped by our selector class.

```scss
// SCSS input
.example {
  @include add-modifiers( $example );
}

// CSS output
.example.red {
  background: #F44336;
}
.example.green {
  background: #4CAF50;
}
```

</section><!-- .docs-item -->
