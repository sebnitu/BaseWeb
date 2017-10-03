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

<div id="toc" class="toc"></div>

<section id="map-tooltips" class="docs-item" markdown="1">

### Variable Map

Tooltip variables are encompassed within the `$tooltips` map and are used throughout all tooltip mixins to set default values.

```scss
$tooltips: (
  'output' : true,
  'output-position' : true,
  'class' : 'tooltip',

  'z-index' : 100,
  'max-width' : 30em,
  'padding' : 0.5em 1em,

  'transition-duration' : 0.2s,

  'background' : rgba($color, 0.9),
  'border-radius' : $border-radius,

  'font-size' : px-to-rem(12px),
  'line-height' : 1.5em,
  'color' : $white,

  'position-start' : 0,
  'position-end'   : 0.5em,

) !default;
```

</section><!-- .docs-item -->

<section id="mixin-make-tooltip" class="docs-item" markdown="1">

### make-tooltip

Creates the base styles for tooltips block.

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

<p class="subheading">Example Usage</p>

The default use of this mixin simply outputs the default styles for tooltips using the class set in `$tooltips('class')` which is `.tooltip`.

```scss
.#{map-get($tooltips, 'class')} {
  @include make-tooltip();
}
```

</section><!-- .docs-item -->

<section id="mixin-add-tooltip-position" class="docs-item" markdown="1">

### add-tooltip-position

Adds the position styles for a tooltip.

```scss
@include add-tooltip-position( $anchor : 'top', $class : null, $options: () );
```

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Type</th>
    <th>Options</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$anchor</code></td>
    <td colspan="2">String</td>
    <td><code>'top'</code></td>
  </tr>
  <tr>
    <td><code>$class</code></td>
    <td>String</td>
    <td><code>null</code>, <code>default</code>, <code>'string...'</code></td>
    <td><code>null</code></td>
  </tr>
  <tr>
    <td><code>$options</code></td>
    <td colspan="2">Map</td>
    <td><code>$tooltips()</code></td>
  </tr>
</table>

<p class="subheading">Example Usage</p>

We can set the default tooltip position by wrapping the mixin with the base tooltip class from our `$tooltips` map. Alternatively, we can set custom modifier classes by passing `default` to the class parameter and it will build a class using the base class and the anchor modifier (e.g. `tooltip-left`, `tooltip-bottom-left`, etc).

```scss
// This sets the default position of tooltips
.#{map-get($tooltips, 'class')} {
  @include add-tooltip-position();
}

// This sets the modifier classes for positioning tooltips
@include add-tooltip-position('top', default);
@include add-tooltip-position('left', default);
@include add-tooltip-position('right', default);
@include add-tooltip-position('bottom', default);

// etc...
```

<div class="demo demo-tooltips">
  <a href="#" class="button tooltip tooltip-top" data-tooltip="Tooltip text here...">Tooltip Top</a>
  <a href="#" class="button tooltip tooltip-top-left" data-tooltip="Tooltip text here...">Tooltip Top Left</a>
  <a href="#" class="button tooltip tooltip-top-right" data-tooltip="Tooltip text here...">Tooltip Top Right</a>
  <hr>
  <a href="#" class="button tooltip tooltip-left" data-tooltip="Tooltip text here...">Tooltip Left</a>
  <a href="#" class="button tooltip tooltip-left-top" data-tooltip="Tooltip text here...">Tooltip Left Top</a>
  <a href="#" class="button tooltip tooltip-left-bottom" data-tooltip="Tooltip text here...">Tooltip Left Bottom</a>
  <hr>
  <a href="#" class="button tooltip tooltip-right" data-tooltip="Tooltip text here...">Tooltip Right</a>
  <a href="#" class="button tooltip tooltip-right-top" data-tooltip="Tooltip text here...">Tooltip Right Top</a>
  <a href="#" class="button tooltip tooltip-right-bottom" data-tooltip="Tooltip text here...">Tooltip Right Bottom</a>
  <hr>
  <a href="#" class="button tooltip tooltip-bottom" data-tooltip="Tooltip text here...">Tooltip Bottom</a>
  <a href="#" class="button tooltip tooltip-bottom-left" data-tooltip="Tooltip text here...">Tooltip Bottom Left</a>
  <a href="#" class="button tooltip tooltip-bottom-right" data-tooltip="Tooltip text here...">Tooltip Bottom Right</a>
</div><!-- .demo -->

</section><!-- .docs-item -->
