---
layout: page
title: "Tooltips"
order: 7
---

Tooltips are text labels that appear when a hover or focus event are triggered on a tooltip enabled element. To enable tooltips on an element, simply add the `.tooltip` class along with the `data-tooltip` data attribute with the label text you'd like displayed.

You can also add position classes such as `.tooltip-top`, `.tooltip-left`, `.tooltip-right` or `.tooltip-bottom` to dictate from where the tooltip is displayed relative to the triggering element.

```html
<!-- Tooltip with default positioning -->
<a class="tooltip" data-tooltip="Tooltip text...">...</a>

<!-- Tooltips with custom class positioning -->
<a class="tooltip tooltip-top" data-tooltip="Tooltip text...">...</a>
<a class="tooltip tooltip-left" data-tooltip="Tooltip text...">...</a>
<a class="tooltip tooltip-right" data-tooltip="Tooltip text...">...</a>
<a class="tooltip tooltip-bottom" data-tooltip="Tooltip text...">...</a>
```

<div class="demo demo-tooltips">
  <a href="#" class="button tooltip" data-tooltip="Tooltip text here...">Tooltip Default</a>

  <hr>

  <a href="#" class="button tooltip tooltip-top" data-tooltip="Tooltip text here...">Tooltip Top</a>
  <a href="#" class="button tooltip tooltip-left" data-tooltip="Tooltip text here...">Tooltip Left</a>
  <a href="#" class="button tooltip tooltip-right" data-tooltip="Tooltip text here...">Tooltip Right</a>
  <a href="#" class="button tooltip tooltip-bottom" data-tooltip="Tooltip text here...">Tooltip Bottom</a>
</div><!-- .demo -->

## Variables

Tooltip variables are encompassed within the `$tooltips` map and are used throughout all tooltip mixins to set default values.

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$tooltips('classes')</code></td>
    <td><code>true</code> <a href="#var-note-1">*</a></td>
  </tr>
  <tr>
    <td><code>$tooltips('class')</code></td>
    <td><code>'tooltip'</code></td>
  </tr>

  <tr>
    <td><code>$tooltips('z-index')</code></td>
    <td><code>100</code></td>
  </tr>
  <tr>
    <td><code>$tooltips('max-width')</code></td>
    <td><code>30em</code></td>
  </tr>
  <tr>
    <td><code>$tooltips('padding')</code></td>
    <td><code>0.5em 1em</code></td>
  </tr>
  <tr>
    <td><code>$tooltips('transition-duration')</code></td>
    <td><code>0.2s</code></td>
  </tr>

  <tr>
    <td><code>$tooltips('background')</code></td>
    <td><code>rgba($color, 0.9)</code></td>
  </tr>
  <tr>
    <td><code>$tooltips('border-radius')</code></td>
    <td><code>$border-radius</code></td>
  </tr>

  <tr>
    <td><code>$tooltips('font-size')</code></td>
    <td><code>px-to-rem(12px)</code></td>
  </tr>
  <tr>
    <td><code>$tooltips('line-height')</code></td>
    <td><code>1.5em</code></td>
  </tr>
  <tr>
    <td><code>$tooltips('color')</code></td>
    <td><code>$white</code></td>
  </tr>

  <tr>
    <td><code>$tooltips('position-start')</code></td>
    <td><code>0</code></td>
  </tr>
  <tr>
    <td><code>$tooltips('position-end')</code></td>
    <td><code>0.5em</code></td>
  </tr>

</table>

<div class="notice info" id="var-note-1" markdown="1">
\* Whether or not we should output tooltip classes. Set to `false` if you want to use the tooltip modifier mixins semantically and/or reduce CSS output.
</div>

## Mixins

Tooltip mixins are used to create the base styles for tooltips.

<ul class="list list-docs">

<li markdown="1">

### make-tooltip

Creates the base styles for tooltips element.

```scss
@include make-tooltip( $options: () );
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
    <td><code>$tooltips()</code></td>
  </tr>
</table>

#### Example Usage

The default use of this mixin simply outputs the default styles for tooltips using the class set in `$tooltips('class')` which is `.tooltip`.

```scss
@include make-tooltip();
```

</li>

<li markdown="1">

### add-tooltip-position

Adds the position styles for a tooltip.

```scss
@include add-tooltip-position( $options: () );
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
    <td><code>$tooltips()</code></td>
  </tr>
  <tr>
    <td><code>$anchor</code></td>
    <td>String</td>
    <td><code>'top'</code></td>
  </tr>
  <tr>
    <td><code>$class</code></td>
    <td>String | null | default</td>
    <td><code>null</code></td>
  </tr>
</table>

#### Example Usage

We can set the default tooltip position by passing the value of `default` to the class variable which will use the base class set in `$tooltips('class')`. Alternatively, we can set custom modifier classes by omitting the class variable and it will build a class using the base class and the anchor modifier (e.g. `tooltip-left`).

```scss
// This sets the default position of tooltips
@include add-tooltip-position($anchor: 'top', $class: default); // Adds top position styles to .tooltip

// This sets the modifier classes for positioning tooltips
@include add-tooltip-position($anchor: 'top');    // Sets class .tooltip-top
@include add-tooltip-position($anchor: 'left');   // Sets class .tooltip-left
@include add-tooltip-position($anchor: 'right');  // Sets class .tooltip-right
@include add-tooltip-position($anchor: 'bottom'); // Sets class .tooltip-bottom
```

</li>

</ul>
