---
layout: page
title: "Button Groups"
order: 1
---

Button groups are a way to create a set of buttons and make them visually grouped together. Button groups can either be lined up horizontally, or stacked vertically. They can also either be presented inline, or block (meaning they span the full width of their container). By default, a button group will be displayed inline and with a horizontal orientation.

```html
<div class="button-group">
  <button class="button">Button</button>
  ...
</div>
```

<div class="demo demo-alt">
  <div class="button-group">
    <button class="button default">Button</button>
    <button class="button default">Button</button>
    <button class="button default">Button</button>
  </div>
</div>

This can be changed either by setting a different default in the `$button-groups` map, or using the modifier classes. To display a button group vertically, you can use the `.vertical` class.

```html
<div class="button-group vertical">
  <button class="button default">Button</button>
  ...
</div>
```

<div class="demo demo-alt">
  <div class="button-group vertical">
    <button class="button default">Button</button>
    <button class="button default">Button</button>
    <button class="button default">Button</button>
  </div>
</div>

Also, if you'd like your button group to span the full width of their container, you can use the `.block` class.

```html
<div class="button-group block">
  <button class="button default">Button</button>
  ...
</div>
```

<div class="demo demo-alt">
  <div class="button-group block">
    <button class="button default">Button</button>
    <button class="button default">Button</button>
    <button class="button default">Button</button>
  </div>
</div>

```html
<div class="button-group block vertical">
  <button class="button default">Button</button>
  ...
</div>
```

<div class="demo demo-alt">
  <div class="button-group block vertical">
    <button class="button default">Button</button>
    <button class="button default">Button</button>
    <button class="button default">Button</button>
  </div>
</div>

## Button Group Variables

Button group variables are encompassed within the `$button-groups` map and are used throughout all button group mixins to set default values and toggle classes output.

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$button-groups('classes')</code></td>
    <td><code>true</code> <a href="#var-note-1">*</a></td>
  </tr>
  <tr>
    <td><code>$button-groups('class-group')</code></td>
    <td><code>'button-group'</code></td>
  </tr>
  <tr>
    <td><code>$button-groups('display')</code></td>
    <td><code>'inline'</code></td>
  </tr>
  <tr>
    <td><code>$button-groups('orientation')</code></td>
    <td><code>'horizontal'</code></td>
  </tr>
  <tr>
    <td><code>$button-groups('spacing')</code></td>
    <td><code>3px</code></td>
  </tr>
</table>

<div class="notice info" id="var-note-1" markdown="1">
\* Whether or not we should output button group classes. Set to `false` if you want to use the button group mixins semantically and/or reduce CSS output.
</div>

## Button Group Mixins

Button group mixins are used to define and modify button group styles. They provide a way to toggle button groups being horizontal or vertical and inline or block.

<ul class="list list-docs">

<li markdown="1">

### make-button-group

Creates the base styles for button groups and sets the default display and orientation based on what's passed in the `$button-groups` map.

```scss
@include make-button-group( $defaults: true, $options: () );
```

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$defaults</code></td>
    <td>Boolean</td>
    <td><code>true</code></td>
  </tr>
  <tr>
    <td><code>$options</code></td>
    <td>Map</td>
    <td><code>$button-groups()</code></td>
  </tr>
</table>

</li>

<li markdown="1">

### add-button-group-display

Adds display styles for button groups. This can either be `inline` so it behaves like an inline element or `block` so that it spans the full width of it's container.

```scss
@include add-button-group-display( $display: null, $options: () );
```

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$display</code></td>
    <td>String: 'inline' | 'block'</td>
    <td><code>null</code></td>
  </tr>
  <tr>
    <td><code>$options</code></td>
    <td>Map</td>
    <td><code>$button-groups()</code></td>
  </tr>
</table>

</li>

<li markdown="1">

### add-button-group-orientation

Set the orientation styles for button groups. This can either be `horizontal` or `vertical` (`hori` or `vert` shorthand respectively).

```scss
@include add-button-group-orientation( $orientation: null, $options: () );
```

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$orientation</code></td>
    <td>String: 'horizontal' | 'vertical' | 'hori' | 'vert'</td>
    <td><code>null</code></td>
  </tr>
  <tr>
    <td><code>$options</code></td>
    <td>Map</td>
    <td><code>$button-groups()</code></td>
  </tr>
</table>

</li>

</ul>
