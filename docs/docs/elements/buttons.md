---
layout: page
title: "Buttons"
order: 11
---

There are four ways you can markup a button. An anchor, button or input element that has a type set to `button` or `submit`. BaseWeb styles buttons the same, regardless of the method you use to mark them up.

```html
<a class="button" href="#" role="button">Anchor Button</a>
<button class="button" type="submit">Button</button>
<input class="button" type="button" value="Input Button">
<input class="button" type="submit" value="Input Submit">
```

<div class="demo demo-buttons">
  <p>
    <a class="button" href="#" role="button">Anchor Button</a>
    <button class="button" type="submit">Button</button>
    <input class="button" type="button" value="Input Button">
    <input class="button" type="submit" value="Input Submit">
  </p>
</div>

## Modifiers

Buttons includes semantic color modifiers that change the urgency of buttons to highlight specific contexts as shown below.

```html
<button class="button">Default</button>
<button class="button primary">Primary</button>
<button class="button secondary">Secondary</button>
<button class="button success">Success</button>
<button class="button warning">Warning</button>
<button class="button danger">Danger</button>
<button class="button light">Light</button>
<button class="button dark">Dark</button>
```

<div class="demo demo-buttons">
  <p>
    <button class="button">Default</button>
    <button class="button primary">Primary</button>
    <button class="button secondary">Secondary</button>
    <button class="button success">Success</button>
    <button class="button warning">Warning</button>
    <button class="button danger">Danger</button>
    <button class="button light">Light</button>
    <button class="button dark">Dark</button>
  </p>
</div>

Also included are size modifiers `.small` and `.large`.

<div class="demo demo-buttons">
  <p>
    <button class="button primary large">Large</button>
    <button class="button primary">Default</button>
    <button class="button primary small">Small</button>
  </p>
</div>

The `.block` modifier makes a button fill the full width of it's container, typically used for smaller touch screens.

<div class="demo demo-buttons">
  <button class="button secondary block">Block</button>
  <button class="button secondary block">Block</button>
</div>

<div id="toc" class="toc"></div>

<section id="map-buttons" class="docs-item" markdown="1">

### Variable Map

Button variables are encompassed within the `$buttons` map and are used throughout all button mixins to set default values.

```scss
$buttons: (
  'output' : true,
  'output-modifiers' : true,
  'class' : 'button',

  'display' : inline-block,
  'margin' : 0,
  'padding' : px-to-rem(12px) px-to-rem(24px),
  'vertical-align' : top,
  'font-family' : inherit,
  'font-size' : px-to-em(16px),
  'line-height' : px-to-rem(24px),
  'font-weight' : inherit,
  'text-decoration' : none,
  'background' : $bg-color,
  'background-clip' : border-box,
  'border' : 1px solid transparent,
  'border-radius' : $border-radius,
  'transition-property' : all,
  'transition-duration' : 0.75s,
  'transition-timing-function' : linear,

  'modifiers' : (
    'default' : (
      'color' : $color,
      'background' : $bg-color,
      'transition-duration' : 0.75s,
      'hover' : (
        'color' : $color,
        'background' : darken($bg-color, 5%),
        'border-color' : transparent,
        'transition-duration' : 0.1s,
      ),
      'focus' : (
        'background' : darken($bg-color, 5%),
        'transition-duration' : 0.1s,
      ),
      'active' : (
        'transition-duration' : 0,
      ),
    ),
    'primary' : (
      'selector' : '&.primary, &.blue',
      'color' : $white,
      'background' : $blue,
      'hover' : (
        'color' : $white,
        'background' : $blue-700,
      ),
    ),
    'secondary' : (
      'selector' : '&.secondary, &.gray',
      'color' : $white,
      'background' : $gray,
      'hover' : (
        'color' : $white,
        'background' : $gray-700,
      ),
    ),
    'success' : (
      'selector' : '&.success, &.green',
      'color' : $white,
      'background' : $green,
      'hover' : (
        'color' : $white,
        'background' : $green-700,
      ),
    ),
    'warning' : (
      'selector' : '&.warning, &.yellow',
      'color' : $color,
      'background' : $yellow,
      'hover' : (
        'color' : $color,
        'background' : $yellow-600,
      ),
    ),
    'danger' : (
      'selector' : '&.danger, &.red',
      'color' : $white,
      'background' : $red,
      'hover' : (
        'color' : $white,
        'background' : $red-700,
      ),
    ),
    'light': (
      'color': $color,
      'background': rgba($white, 0.75),
      'hover': (
        'color': $color,
        'background': rgba($white, 1),
      ),
    ),
    'dark': (
      'color': $white,
      'background': rgba($black, 0.5),
      'hover': (
        'color': $white,
        'background': rgba($black, 0.75),
      ),
    ),
    'small' : (
      'padding' : px-to-rem(6px) px-to-rem(14px),
      'font-size' : px-to-em(14px),
      'line-height' : px-to-rem(20px),
    ),
    'large' : (
      'padding' : px-to-rem(16px) px-to-rem(32px),
      'font-size' : px-to-em(20px),
      'line-height' : px-to-rem(26px),
    ),
    'block' : (
      'display' : block,
      'width' : 100%,
    ),
  ),

) !default;
```

</section><!-- .docs-item -->

<section id="mixin-make-button" class="docs-item" markdown="1">

### make-button

Creates the base styles for a button modifier mixin or class. Usually applied directly through a base button class, mixin or an extend placeholder. If button modifier classes are enabled, you are provided `.button` for your base button class.

```scss
@include make-button( $options: () );
```

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$options</code></td>
    <td>Map</td>
    <td><code>$buttons</code></td>
  </tr>
</table>

<p class="subheading">Example Usage</p>

This example shows us using a `%base-button` placeholder for the extend method. Other methods include adding `make-button()` to a general class which is applied to button elements directly (which is the method BaseWeb uses for its classes).

```scss
%base-button {
  @include make-button();
}
.button-purchase {
  @extend %base-button;
  ...
}
.button-cart {
  @extend %base-button;
  ...
}
```

</section><!-- .docs-item -->
