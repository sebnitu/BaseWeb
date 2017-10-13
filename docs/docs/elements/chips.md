---
layout: page
title: "Chips"
order: 13
---

The chips component is used for a minimal icon button actions. It's often used in conjunction with [dismissible](/docs/javascript/dismissible/), [tooltips](/docs/blocks/tooltips/) and used within [badges](/docs/blocks/badges/), [notices](/docs/blocks/notices/) and [off-canvas](/docs/blocks/offcanvas/) component blocks.

```html
<button class="chip" aria-label="Close">{% raw %}{% include icons/x.svg %}{% endraw %}</button>
```

<div class="demo demo-chips">
  <p>
    <button class="chip">{% include content-icon.html icon="x" %}</button>
    <button class="chip">{% include content-icon.html icon="anchor" %}</button>
    <button class="chip">{% include content-icon.html icon="bell" %}</button>
    <button class="chip">{% include content-icon.html icon="arrow-right" %}</button>
    <button class="chip">{% include content-icon.html icon="arrow-down-right" %}</button>
    <button class="chip">{% include content-icon.html icon="cloud-lightning" %}</button>
    <button class="chip">{% include content-icon.html icon="cloud-rain" %}</button>
    <button class="chip">{% include content-icon.html icon="chevron-right" %}</button>
    <button class="chip">{% include content-icon.html icon="chevrons-right" %}</button>
  </p>
</div>

Incuded are color modifiers to change the look of the chips element depending on it's context.

```html
<a href="#" class="chip light">{% raw %}{% include icons/x.svg %}{% endraw %}</a>
<a href="#" class="chip red">{% raw %}{% include icons/x.svg %}{% endraw %}</a>
<a href="#" class="chip yellow">{% raw %}{% include icons/x.svg %}{% endraw %}</a>
<a href="#" class="chip green">{% raw %}{% include icons/x.svg %}{% endraw %}</a>
```

<div class="demo demo-chips demo-inverted">
  <p>
    <a href="#" class="chip light">{% include content-icon.html icon="x" %}</a>
    <a href="#" class="chip red">{% include content-icon.html icon="x" %}</a>
    <a href="#" class="chip yellow">{% include content-icon.html icon="x" %}</a>
    <a href="#" class="chip green">{% include content-icon.html icon="x" %}</a>
  </p>
</div>

<div id="toc" class="toc"></div>

<section id="map-buttons" class="docs-item" markdown="1">

### Variable Map

Chips element settings are encompassed within the `$chips` map and are used in chip mixins to set default values.

```scss
$chips: (
  'output' : true,
  'output-modifiers' : true,
  'class' : 'chip',

  'margin' : 0,
  'padding' : 0.25em,
  'font-size' : 1rem,
  'border' : none,
  'border-radius' : 50%,
  'transition' : $transition,

  'modifiers' : (
    'default' : (
      'color' : $white,
      'background' : rgba($black, 0.25),
      'hover' : (
        'color' : $white,
        'background' : rgba($black, 0.5),
      ),
    ),
    'light' : (
      'color' : $color,
      'background' : rgba($white, 0.5),
      'hover' : (
        'color' : $color,
        'background' : rgba($white, 1),
      ),
    ),
    'danger' : (
      'selector' : '&.red, &.danger',
      'background' : $red,
      'hover' : (
        'background' : $red-700,
      ),
    ),
    'warning' : (
      'selector' : '&.yellow, &.warning',
      'background' : $orange,
      'hover' : (
        'background' : $orange-700,
      ),
    ),
    'success' : (
      'selector' : '&.green, &.success',
      'background' : $green,
      'hover' : (
        'background' : $green-700,
      ),
    ),
  ),

) !default;
```

</section><!-- .docs-item -->

<section id="mixin-make-chip" class="docs-item" markdown="1">

### make-chip

Creates the base styles for the chips element.

```scss
@include make-chip( $options: () );
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
    <td><code>$chips</code></td>
  </tr>
</table>

</section><!-- .docs-item -->

<section id="mixin-add-chip-modifiers" class="docs-item" markdown="1">

### add-chip-modifiers

Creates styles for the chips elements along with modifiers.

```scss
@include make-chip( $options: () );
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
    <td><code>$chips</code></td>
  </tr>
</table>

</section><!-- .docs-item -->
