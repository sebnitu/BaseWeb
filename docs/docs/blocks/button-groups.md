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
    <button class="button">Button</button>
    <button class="button">Button</button>
    <button class="button">Button</button>
  </div>
</div>

This can be changed either by setting a different default in the `$button-groups` map, or using the modifier classes. To display a button group vertically, you can use the `.vertical` class.

```html
<div class="button-group vertical">
  <button class="button">Button</button>
  ...
</div>
```

<div class="demo demo-alt">
  <div class="button-group vertical">
    <button class="button">Button</button>
    <button class="button">Button</button>
    <button class="button">Button</button>
  </div>
</div>

Also, if you'd like your button group to span the full width of their container, you can use the `.block` class.

```html
<div class="button-group block">
  <button class="button">Button</button>
  ...
</div>
```

<div class="demo demo-alt">
  <div class="button-group block">
    <button class="button">Button</button>
    <button class="button">Button</button>
    <button class="button">Button</button>
  </div>
</div>

```html
<div class="button-group block vertical">
  <button class="button">Button</button>
  ...
</div>
```

<div class="demo demo-alt">
  <div class="button-group block vertical">
    <button class="button">Button</button>
    <button class="button">Button</button>
    <button class="button">Button</button>
  </div>
</div>

<div id="toc" class="toc"></div>

<section id="map-button-groups" class="docs-item" markdown="1">

### Variable Map

Button group variables are encompassed within the `$button-groups` map and are used throughout all button group mixins to set default values and toggle output.

```scss
$button-groups: (
  'output' : true,
  'class' : 'button-group',

  'display' : 'inline',
  'orientation' : 'horizontal',

  'spacing' : 0.25em,
  'border-radius' : map-get($buttons, 'border-radius'),
  'inner-border-radius' : 0,

) !default;
```

</section><!-- .docs-item -->

<section id="mixin-make-button-group" class="docs-item" markdown="1">

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

</section><!-- .docs-item -->

<section id="mixin-add-button-group-display" class="docs-item" markdown="1">

### add-button-group-display

Adds display styles for button groups. This can either be `inline` so it behaves like an inline element or `block` so that it spans the full width of it's container.

```scss
@include add-button-group-display( $display: null, $options: () );
```

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Type</th>
    <th>Options</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$display</code></td>
    <td>String</td>
    <td><code>'inline'</code>, <code>'block'</code></td>
    <td><code>null</code></td>
  </tr>
  <tr>
    <td><code>$options</code></td>
    <td colspan="2">Map</td>
    <td><code>$button-groups()</code></td>
  </tr>
</table>

</section><!-- .docs-item -->

<section id="mixin-add-button-group-orientation" class="docs-item" markdown="1">

### add-button-group-orientation

Set the orientation styles for button groups. This can either be `horizontal` or `vertical` (`hori` or `vert` shorthand respectively).

```scss
@include add-button-group-orientation( $orientation: null, $options: () );
```

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Type</th>
    <th>Options</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$orientation</code></td>
    <td>String</td>
    <td>
      <code>'horizontal'</code>,
      <code>'vertical'</code>,
      <code>'hori'</code>,
      <code>'vert'</code>
    </td>
    <td><code>null</code></td>
  </tr>
  <tr>
    <td><code>$options</code></td>
    <td colspan="2">Map</td>
    <td><code>$button-groups()</code></td>
  </tr>
</table>

</section><!-- .docs-item -->
