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

## box-sizing

The box-sizing CSS property is used to alter the default CSS box model used to calculate widths and heights of elements.

```scss
@include box-sizing( $box-sizing );
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$box-sizing</code></td>
    <td>box-sizing value (content-box, padding-box, border-box, inherit)</td>
    <td><code>$box-sizing</code></td>
  </tr>
</table>

</li>

<li markdown="1">

## box-shadow

The box-shadow CSS property describes one or more shadow effects as a comma-separated list.

```scss
@include box-shadow( $shadow... );
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$shadow</code></td>
    <td>box-shadow value ([horizontal offset] [vertical offset] [blur radius] [spread radius] [color])</td>
    <td><code>$box-shadow</code></td>
  </tr>
</table>

</li>

<li markdown="1">

## border-radius

Define border radius using mixin shorthand and global defaults.

```scss
@include border-radius( $radius );
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
  @include border-radius();
}
.box-2 {
  @include border-radius-left(20px);
}
.box-3 {
  @include border-radius-top(50%);
}

// CSS Output
.box-1 {
  border-radius: 3px;
}
.box-2 {
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}
.box-3 {
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
    <td><code>@include border-radius()</code></td>
    <td><span class="demo-border-radius mixin-border-radius"></span></td>
  </tr>

  <tr>
    <td><code>@include border-radius-top()</code></td>
    <td><span class="demo-border-radius mixin-border-radius-top"></span></td>
  </tr>
  <tr>
    <td><code>@include border-radius-top-left()</code></td>
    <td><span class="demo-border-radius mixin-border-radius-top-left"></span></td>
  </tr>
  <tr>
    <td><code>@include border-radius-top-right()</code></td>
    <td><span class="demo-border-radius mixin-border-radius-top-right"></span></td>
  </tr>

  <tr>
    <td><code>@include border-radius-bottom()</code></td>
    <td><span class="demo-border-radius mixin-border-radius-bottom"></span></td>
  </tr>
  <tr>
    <td><code>@include border-radius-bottom-left()</code></td>
    <td><span class="demo-border-radius mixin-border-radius-bottom-left"></span></td>
  </tr>
  <tr>
    <td><code>@include border-radius-bottom-right()</code></td>
    <td><span class="demo-border-radius mixin-border-radius-bottom-right"></span></td>
  </tr>

  <tr>
    <td><code>@include border-radius-left()</code></td>
    <td><span class="demo-border-radius mixin-border-radius-left"></span></td>
  </tr>
  <tr>
    <td><code>@include border-radius-left-top()</code></td>
    <td><span class="demo-border-radius mixin-border-radius-left-top"></span></td>
  </tr>
  <tr>
    <td><code>@include border-radius-left-bottom()</code></td>
    <td><span class="demo-border-radius mixin-border-radius-left-bottom"></span></td>
  </tr>

  <tr>
    <td><code>@include border-radius-right()</code></td>
    <td><span class="demo-border-radius mixin-border-radius-right"></span></td>
  </tr>
  <tr>
    <td><code>@include border-radius-right-top()</code></td>
    <td><span class="demo-border-radius mixin-border-radius-right-top"></span></td>
  </tr>
  <tr>
    <td><code>@include border-radius-right-bottom()</code></td>
    <td><span class="demo-border-radius mixin-border-radius-right-bottom"></span></td>
  </tr>
</table>

<div class="notice warning">
  <p>For the list above of available mixins, I'm passing in a border-radius of <code>50%</code> so the effect is more obvious.</p>
</div>

</li>

<li markdown="1">

## transform

The CSS transform property lets you modify the coordinate space of the CSS visual formatting model.

```scss
@include transform( $function... );
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$function</code></td>
    <td>transform-function ([matrix] [perspective] [rotate] [scale] [skew] [translate])</td>
    <td><span class="text-soften">None</span></td>
  </tr>
</table>

### Example Usage

```scss
// SCSS
.box {
  @include transform(skew(30deg, 10deg));
}

// CSS Output
.box {
  -webkit-transform: skew(30deg, 10deg);
  -ms-transform: skew(30deg, 10deg);
  transform: skew(30deg, 10deg);
}
```

<div class="demo demo-transform-skew">
  <div class="box"></div>
</div>

<div class="notice info">
  <p>For a full list of transform functions, checkout the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function">CSS documentation at MDN</a>.</p>
</div>

</li>

<li markdown="1">

## transform-style

The transform-style CSS property determines if the children of the element are positioned in the 3D-space or are flattened in the plane of the element.

```scss
@include transform-style( $style... );
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$style</code></td>
    <td>transform value (flat, preserve-3d, inherit)</td>
    <td><span class="text-soften">None</span></td>
  </tr>
</table>

</li>

<li markdown="1">

## rotate

Adds transform rotate styles using a degree and the transform mixin.

```scss
@include rotate( $deg );
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$deg</code></td>
    <td>Unit (degree)</td>
    <td><span class="text-soften">None</span></td>
  </tr>
</table>

### Example Usage

```scss
// SCSS
.box {
  @include rotate(45deg);
}

// CSS Output
.box {
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
```

<div class="demo demo-rotate">
  <div class="box"></div>
</div>

</li>

<li markdown="1">

## transition

The CSS transition property is a shorthand property for transition-property, transition-duration, transition-timing-function, and transition-delay. It allows to define the transition between two states of an element. Different states may be defined using pseudo-classes like :hover or :active or dynamically set using JavaScript.

```scss
@include transition( $transition... );
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$transition</code></td>
    <td>transition value ([transition-property] [transition-duration] [transition-timing-function] [transition-delay])</td>
    <td><code>$transition</code></td>
  </tr>
</table>

### Example Usage

```scss
// SCSS
.box {
  background-color: $blue;
  @include transition();

  &:hover {
    background-color: $red;
  }
}

// CSS Output
.box {
  background-color: #2ab0ea;
  -webkit-transition: all 0.25s linear;
  transition: all 0.25s linear;
}
.box:hover {
  background-color: #de5151;
}
```

<div class="demo demo-transition">
  <div class="box"></div>
</div>

### Available Mixins

You can also set transition properties separately using the transition property, duration, timing-function and delay mixins.

```scss
@include transition-property( $trans... );
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$trans</code></td>
    <td>property name</td>
    <td><code>$transition-property</code></td>
  </tr>
</table>

```scss
@include transition-duration( $trans... );
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$trans</code></td>
    <td>time value (seconds, milliseconds)</td>
    <td><code>$transition-duration</code></td>
  </tr>
</table>

```scss
@include transition-timing-function( $trans... );
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$trans</code></td>
    <td>timing function (linear, ease, ease-in, ease-out, ease-in-out, step-start, step-end)</td>
    <td><code>$transition-timing-function</code></td>
  </tr>
</table>

```scss
@include transition-delay( $trans... );
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$trans</code></td>
    <td>time value (seconds, milliseconds)</td>
    <td><code>$transition-delay</code></td>
  </tr>
</table>

</li>

<li markdown="1">

## keyframes

The `@keyframes` CSS at-rule lets you control the intermediate steps in a CSS animation sequence by establishing keyframes (or waypoints) along the animation sequence that must be reached during the animation.

```scss
@include keyframes( $name ) {
  @content
}
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>$name</code></td>
    <td>String</td>
    <td><span class="text-soften">None</span></td>
    <td>The name to be used to name the animation.</td>
  </tr>
  <tr>
    <td><code>@content</code></td>
    <td>Style block</td>
    <td><span class="text-soften">None</span></td>
    <td>The animation styles, passed using brackets.</td>
  </tr>
</table>

### Example Usage

```scss
// SCSS
@include keyframes('example') {
  0%   { background-color: $red; }
  50%  { background-color: $blue; }
  100% { background-color: $red; }
}

// CSS Output
@-webkit-keyframes example {
  0% {
    background-color: #de5151;
  }
  50% {
    background-color: #2ab0ea;
  }
  100% {
    background-color: #de5151;
  }
}
@keyframes example {
  0% {
    background-color: #de5151;
  }
  50% {
    background-color: #2ab0ea;
  }
  100% {
    background-color: #de5151;
  }
}
```

</li>

<li markdown="1">

## animation

The animation CSS property is a shorthand property for animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, animation-direction, animation-fill-mode and animation-play-state.

```scss
@include animation( $animation... );
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$animation</code></td>
    <td>animation value ([animation-name] [animation-duration] [animation-timing-function] [animation-delay] [animation-iteration-count] [animation-direction] [animation-fill-mode] [animation-play-state])</td>
    <td><span class="text-soften">None</span></td>
  </tr>
</table>

### Example Usage

```scss
// SCSS
.box {
  @include animation(example 10s linear 1s infinite normal);
}

// CSS Output
.box {
  -webkit-animation: example 10s linear 1s infinite normal;
  animation: example 10s linear 1s infinite normal;
}
```

<div class="demo demo-animation">
  <div class="box"></div>
</div>

### Available Mixins

You can also set animation properties separately using the animation name, duration, timing-function, delay, iteration, direction, fill mode and play stay mixins.

```scss
@include animation-name( $name... );
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$name</code></td>
    <td>Animation name</td>
    <td><span class="text-soften">None</span></td>
  </tr>
</table>

```scss
@include animation-duration( $duration... );
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$duration</code></td>
    <td>Time value (seconds, milliseconds)</td>
    <td><span class="text-soften">None</span></td>
  </tr>
</table>

```scss
@include animation-timing-function( $timing-function... );
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$timing-function</code></td>
    <td>Timing function (linear, ease, ease-in, ease-out, ease-in-out)</td>
    <td><span class="text-soften">None</span></td>
  </tr>
</table>

```scss
@include animation-delay( $delay... );
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$delay</code></td>
    <td>Time value (seconds, milliseconds)</td>
    <td><span class="text-soften">None</span></td>
  </tr>
</table>

```scss
@include animation-iteration-count( $iteration-count... );
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$iteration-count</code></td>
    <td>Unit (number, infinite)</td>
    <td><span class="text-soften">None</span></td>
  </tr>
</table>

```scss
@include animation-direction( $direction... );
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$direction</code></td>
    <td>Direction (normal, reverse, alternate, alternate-reverse)</td>
    <td><span class="text-soften">None</span></td>
  </tr>
</table>

```scss
@include animation-fill-mode( $fill-mode... );
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$fill-mode</code></td>
    <td>Fill mode (none, forwards, backwards, both, initial, inherit)</td>
    <td><span class="text-soften">None</span></td>
  </tr>
</table>

```scss
@include animation-play-stay( $play-stay... );
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$play-state</code></td>
    <td>Play state (running, paused)</td>
    <td><span class="text-soften">None</span></td>
  </tr>
</table>

</li>

<li markdown="1">

## linear-gradient

Creates an image which represents a linear gradient of colors.

```scss
@include linear-gradient( $gradient... );
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$gradient</code></td>
    <td>Gradient ([side-or-corner] [angle] [color-stop])</td>
    <td><span class="text-soften">None</span></td>
  </tr>
</table>

### Example Usage

```scss
// SCSS
.box {
  @include linear-gradient(to right, $green, $blue, $purple);
}

// CSS Output
.box {
  background-image: -webkit-linear-gradient(to right, #4CAF50, #2196F3, #9C27B0);
  background-image: -moz-linear-gradient(to right, #4CAF50, #2196F3, #9C27B0);
  background-image: -ms-linear-gradient(to right, #4CAF50, #2196F3, #9C27B0);
  background-image: linear-gradient(to right, #4CAF50, #2196F3, #9C27B0);
}
```

<div class="demo demo-linear-gradient">
  <div class="box"></div>
</div>

</li>

<li markdown="1">

## radial-gradient

Creates an image which represents a gradient of colors radiating from an origin, the center of the gradient.

```scss
@include radial-gradient( $gradient... );
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$gradient</code></td>
    <td>Gradient ([position] [shape] [size] [color-stop] [color-stop] [extent-keyword])</td>
    <td><span class="text-soften">None</span></td>
  </tr>
</table>

### Example Usage

```scss
// SCSS
.box {
  @include radial-gradient(circle, $purple, $deep-purple);
}

// CSS Output
.box {
  background-image: -webkit-radial-gradient(circle, #9C27B0, #673AB7);
  background-image: -moz-radial-gradient(circle, #9C27B0, #673AB7);
  background-image: -ms-radial-gradient(circle, #9C27B0, #673AB7);
  background-image: radial-gradient(circle, #9C27B0, #673AB7);
}
```

<div class="demo demo-radial-gradient">
  <div class="box"></div>
</div>

</li>

<li markdown="1">

## font-weight

Output the font weight using the weight key to output the number weight.

```scss
@include font-weight( $weight );
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$weight</code></td>
    <td>Font-weight keyword (hairline, thin, light, regular, medium, semi-bold, bold, extra-bold, black)</td>
    <td><span class="text-soften">None</span></td>
  </tr>
</table>

### Example Usage

```scss
// SCSS
h1 {
  @include font-weight('light');
}

//CSS
h1 {
  font-weight: 300;
}
```

<table class="table table-docs">
  <tr>
    <th>Weight Name</th>
    <th>Value Output</th>
  </tr>
  <tr>
    <td><code>hairline</code></td>
    <td><code>100</code></td>
  </tr>
  <tr>
    <td><code>thin</code></td>
    <td><code>200</code></td>
  </tr>
  <tr>
    <td><code>light</code></td>
    <td><code>300</code></td>
  </tr>
  <tr>
    <td><code>regular</code></td>
    <td><code>400</code></td>
  </tr>
  <tr>
    <td><code>medium</code></td>
    <td><code>500</code></td>
  </tr>
  <tr>
    <td><code>semi-bold</code></td>
    <td><code>600</code></td>
  </tr>
  <tr>
    <td><code>bold</code></td>
    <td><code>700</code></td>
  </tr>
  <tr>
    <td><code>extra-bold</code></td>
    <td><code>800</code></td>
  </tr>
  <tr>
    <td><code>black</code></td>
    <td><code>900</code></td>
  </tr>
</table>

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

## reverse-index

Sets the index of a set of elements to stack in reverse order.

```scss
@include reverse-index( $items );
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>$items</code></td>
    <td>Number</td>
    <td><span class="text-soften">None</span></td>
    <td>The number of elements in the set.</td>
  </tr>
</table>

### Example Usage

```scss
// SCSS
ul.example-reverse-index li {
  @include reverse-index( 3 );
}

// CSS Output
ul.example-reverse-index li:nth-child(1) {
  z-index: 1;
}
ul.example-reverse-index li:nth-child(2) {
  z-index: 2;
}
ul.example-reverse-index li:nth-child(3) {
  z-index: 3;
}
```

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

## make-text-mask

Lets you easily create text masks using background-clip.

```scss
@include make-text-mask( $bg-image, $text-color ) {
  @content
}
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>$bg-image</code></td>
    <td>Background-image property</td>
    <td><span class="text-soften">None</span></td>
    <td>The background image to be masked by text.</td>
  </tr>
  <tr>
    <td><code>$text-color</code></td>
    <td>Transparent color</td>
    <td><code>transparent</code></td>
    <td>The text fill color to be used.</td>
  </tr>
  <tr>
    <td><code>@content</code></td>
    <td>Style block</td>
    <td><span class="text-soften">None</span></td>
    <td>Use this to set custom background styles (such as gradients).</td>
  </tr>
</table>

### Example Usage

```scss
// SCSS
// Applied to a wrapping text element
.mask {
  @include make-text-mask(url('../img/demo-mask.jpg'), rgba($black, 0.25));

  // Style text, or whatever...
  p {
    ...
  }
}

// CSS Output
.mask {
  -webkit-text-fill-color: rgba(0, 0, 0, 0.25);
  -webkit-background-clip: text;
  background-clip: text;
  background-image: url('../img/demo-mask.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
```

```html
<div class="mask">
  <p>Demo Text Mask</p>
</div>
```

<div class="demo demo-text-mask">
  <div class="mask">
    <p>Demo Text Mask</p>
  </div>
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
