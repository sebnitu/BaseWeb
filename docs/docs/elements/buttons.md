---
layout: page
title: "Buttons"
order: 10
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

## Variables

Button variables are encompassed within the `$buttons` map and are used throughout all button mixins to set default values.

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Default</th>
  </tr>

  <tr>
    <td><code>$buttons('classes')</code></td>
    <td><code>true</code></td>
  </tr>

  <tr>
    <td><code>$buttons('class')</code></td>
    <td><code>'button'</code></td>
  </tr>

  <tr>
    <td><code>$buttons('padding-small')</code></td>
    <td><code>0.75em 1.25em</code></td>
  </tr>
  <tr>
    <td><code>$buttons('padding')</code></td>
    <td><code>0.75em 1.5em</code></td>
  </tr>
  <tr>
    <td><code>$buttons('padding-large')</code></td>
    <td><code>0.75em 2em</code></td>
  </tr>
  <tr>
    <td><code>$buttons('font-family')</code></td>
    <td><code>inherit</code></td>
  </tr>

  <tr>
    <td><code>$buttons('font-size-small')</code></td>
    <td><code>0.85em</code></td>
  </tr>
  <tr>
    <td><code>$buttons('font-size')</code></td>
    <td><code>1em</code></td>
  </tr>
  <tr>
    <td><code>$buttons('font-size-large')</code></td>
    <td><code>1.15em</code></td>
  </tr>

  <tr>
    <td><code>$buttons('line-height')</code></td>
    <td><code>1.5em</code></td>
  </tr>
  <tr>
    <td><code>$buttons('color')</code></td>
    <td><code>$color-dark</code></td>
  </tr>
  <tr>
    <td><code>$buttons('font-weight')</code></td>
    <td><code>inherit</code></td>
  </tr>
  <tr>
    <td><code>$buttons('text-shadow')</code></td>
    <td><code>none</code></td>
  </tr>
  <tr>
    <td><code>$buttons('background')</code></td>
    <td><code>$bg-color</code></td>
  </tr>
  <tr>
    <td><code>$buttons('background-gradient')</code></td>
    <td><code>false</code> <a href="#var-note-1">*</a></td>
  </tr>
  <tr>
    <td><code>$buttons('background-deg')</code></td>
    <td><code>5%</code></td>
  </tr>
  <tr>
    <td><code>$buttons('background-clip')</code></td>
    <td><code>border-box</code></td>
  </tr>
  <tr>
    <td><code>$buttons('box-shadow')</code></td>
    <td><code>null</code></td>
  </tr>
  <tr>
    <td><code>$buttons('border')</code></td>
    <td><code>1px solid transparent</code></td>
  </tr>
  <tr>
    <td><code>$buttons('border-radius')</code></td>
    <td><code>$border-radius</code></td>
  </tr>
  <tr>
    <td><code>$buttons('transition-property')</code></td>
    <td><code>all</code></td>
  </tr>
  <tr>
    <td><code>$buttons('transition-duration')</code></td>
    <td><code>0.75s</code></td>
  </tr>
  <tr>
    <td><code>$buttons('transition-timing-function')</code></td>
    <td><code>linear</code></td>
  </tr>

  <tr>
    <th colspan="2">Button Hover</th>
  </tr>
  <tr>
    <td><code>$buttons('hover', 'color')</code></td>
    <td><code>default</code></td>
  </tr>
  <tr>
    <td><code>$buttons('hover', 'background')</code></td>
    <td><code>darken</code> <a href="#var-note-2">**</a></td>
  </tr>
  <tr>
    <td><code>$buttons('hover', 'box-shadow')</code></td>
    <td><code>null</code></td>
  </tr>
  <tr>
    <td><code>$buttons('hover', 'border-color')</code></td>
    <td><code>transparent</code></td>
  </tr>
  <tr>
    <td><code>$buttons('hover', 'transition-duration')</code></td>
    <td><code>0.1s</code></td>
  </tr>

  <tr>
    <th colspan="2">Button Active</th>
  </tr>
  <tr>
    <td><code>$buttons('active', 'color')</code></td>
    <td><code>default</code></td>
  </tr>
  <tr>
    <td><code>$buttons('active', 'background')</code></td>
    <td><code>darken</code> <a href="#var-note-2">**</a></td>
  </tr>
  <tr>
    <td><code>$buttons('active', 'box-shadow')</code></td>
    <td><code>null</code></td>
  </tr>
  <tr>
    <td><code>$buttons('active', 'border-color')</code></td>
    <td><code>transparent</code></td>
  </tr>
  <tr>
    <td><code>$buttons('active', 'transition-duration')</code></td>
    <td><code>0</code></td>
  </tr>
</table>

<div class="notice yellow" id="var-note-1" markdown="1">
\* `$buttons('background-gradient')` determines whether or not to use a gradient for button background. If set to true, the `$buttons('background')` will be used as the start color and darkened for the end color using the `$buttons('background-deg')` as a modifier.
</div>

<div class="notice yellow" id="var-note-2" markdown="1">
** `$buttons('hover', 'background')` and `$buttons('active', 'background')` is the background color to use on `:hover` and `:active` respectively. If set to `lighten` or `darken` it will take the `$buttons('background')` color and lighten or darken it using `$buttons('background-deg')` as the modifier. You can also pass a specific color to use.
</div>

## Mixins

Button are common place on the web these days, especially in web applications. Whether you need one, or a dozen button types and styles, BaseWeb provides mixins and classes for creating beautiful buttons to add to your UI toolkit.

<ul class="list list-docs">

<li markdown="1">

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
    <td><code>$buttons()</code></td>
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

</li>

<li markdown="1">

### add-button-color

Handles all the color variations of a button such as color, text-shadow, background and border color.

```scss
@include add-button-color( $options: () );
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
    <td><code>$buttons()</code></td>
  </tr>
</table>

<p class="subheading">Example Usage</p>

Use this mixin along with `make-button()` to create custom semantic button styles. You can pass in a map to replace any of the defaults from the `$buttons` map.

```scss
.button-custom {
  @include make-button();
  @include add-button-color((
    'color' : $white,
    'background' : $purple
  ));
}
```

<div class="demo demo-buttons">
  <p>
    <button class="button-custom">Custom Mixin Button</button>
  </p>
</div>

<p class="subheading">Available Classes</p>

If you have button class modifiers enabled, BaseWeb will provide you with a set of button classes and semantic aliases ready to use right away.

```html
<!-- .button-default default button class -->
<button class="button">Default</button>

<!-- .button.blue class with .primary & .active semantic aliases -->
<button class="button blue">Blue</button>
<button class="button primary">Primary</button>
<button class="button active">Primary</button>

<!-- .button.green class with .success semantic alias -->
<button class="button green">Green</button>
<button class="button success">Success</button>

<!-- .button.orange class with .warning semantic alias -->
<button class="button orange">Orange</button>
<button class="button warning">Warning</button>

<!-- .button.red class with .danger semantic alias -->
<button class="button red">Red</button>
<button class="button danger">Danger</button>

<!-- .button.black class with .secondary semantic alias -->
<button class="button gray">Gray</button>
<button class="button secondary">Secondary</button>
````

<div class="demo demo-buttons">
  <p>
    <button class="button">Default</button>
    <button class="button primary">Primary Blue</button>
    <button class="button success">Success Green</button>
    <button class="button warning">Warning Orange</button>
    <button class="button danger">Danger Red</button>
    <button class="button secondary">Secondary Gray</button>
    <button class="button black">Black</button>
  </p>
</div>

</li>

<li markdown="1">

### add-button-size

Handles size variations for buttons. This is done by changing the padding, font-size and line-height based on the parameters passed.

```scss
@include add-button-size( $size, $option: () );
```

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$size</code></td>
    <td>String (small, default, large)</td>
    <td><span class="text-soften">None</span></td>
  </tr>
  <tr>
    <td><code>$options</code></td>
    <td>Map</td>
    <td><code>$buttons()</code></td>
  </tr>
</table>

<p class="subheading">Example Usage</p>

The first parameter is a quick way to make a button use the default small or large size set in our `$buttons` map. Or you can pass in a `$options:()` map for custom padding, font-size and line-height.

```scss
// Use default small size
.button-small {
  @include add-button-size('small');
}

// Use default large size with custom font size
.button-custom-large {
  @include add-button-size('large', (
    'font-size': 20px
  ));
}

// Set a custom button size
.button-custom-size {
  @include add-button-size(20px 40px, (
    'font-size': 20px,
    'line-height': 24px
  ));
}
```

<p class="subheading">Available Classes</p>

```html
<button class="button primary large">Large Button</button>
<button class="button primary">Default Button</button>
<button class="button primary small">Small Button</button>
```

<div class="demo demo-buttons">
  <p>
    <button class="button primary large">Large Button</button>
    <button class="button primary">Default Button</button>
    <button class="button primary small">Small Button</button>
  </p>
</div>

</li>

<li markdown="1">

### add-button-block

Makes the button block with 100% width. This is typically used for mobile friendly buttons.

```scss
@include add-button-block( $option: () );
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
    <td><code>$buttons()</code></td>
  </tr>
</table>

<p class="subheading">Example Usage</p>

```scss
.button-custom-mobile {
  @include make-button();
  @include add-button-color((
    'background' : $bg-color
  ));
  @include add-button-block();
}
```

```html
<button class="button-custom-mobile">Block Button</button>
<button class="button blue block">Block Button</button>
```

<div class="demo demo-buttons demo-buttons-mobile">
  <p>
    <button class="button-custom-mobile">Block Button</button>
    <button class="button blue block">Block Button</button>
  </p>
</div>

</li>

</ul>
