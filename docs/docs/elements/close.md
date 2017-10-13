---
layout: page
title: "Close"
order: 13
---

The close component is used for a minimal "close" button interface. It's often used in conjunction with the [dismissible JavaScript component](/docs/javascript/dismissible/) and by the [notices](/docs/blocks/notices/) and [badges](/docs/blocks/badges/) component blocks.

```html
<a href="#" class="close">{% raw %}{% include icons/x.svg %}{% endraw %}</a>
```

<div class="demo demo-close">
  <p><a href="#" class="close">{% include content-icon.html icon="x" %}</a></p>
</div>

If you don't include an SVG library in your project, you can directly output the `x.svg` element using the following svg inside the close element.

```html
<a href="#" class="close">
  <svg class="icon icon-x" width="24" height="24" viewBox="0 0 24 24">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
</a>
```

<div class="demo demo-close">
  <p>
    <a href="#" class="close">
      <svg class="icon icon-x" width="24" height="24" viewBox="0 0 24 24">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </a>
  </p>
</div>

Also available are class modifiers to change the look of the close element.

```html
<a href="#" class="close inverted">{% raw %}{% include icons/x.svg %}{% endraw %}</a>
<a href="#" class="close danger">{% raw %}{% include icons/x.svg %}{% endraw %}</a>
```

<div class="demo demo-close demo-inverted">
  <p><a href="#" class="close inverted">{% include content-icon.html icon="x" %}</a></p>
  <p><a href="#" class="close danger">{% include content-icon.html icon="x" %}</a></p>
</div>

<div id="toc" class="toc"></div>

<section id="map-buttons" class="docs-item" markdown="1">

### Variable Map

Close element settings are encompassed within the `$close` map and are used in close mixins to set default values.

```scss
$close: (
  'output' : true,
  'output-modifiers' : true,
  'class' : 'close',

  'margin' : 0,
  'padding' : 0.125em,
  'font-size' : 1rem,
  'border' : none,
  'border-radius' : 5em,
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
    'inverted' : (
      'color' : $color,
      'background' : rgba($white, 0.5),
      'hover' : (
        'color' : $color,
        'background' : rgba($white, 1),
      ),
    ),
    'danger' : (
      'background' : $red,
      'hover' : (
        'background' : $red-700,
      ),
    ),
  ),

) !default;
```

</section><!-- .docs-item -->

<section id="mixin-make-close" class="docs-item" markdown="1">

### make-close

Creates the base styles for the close element.

```scss
@include make-close( $options: () );
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
    <td><code>$close</code></td>
  </tr>
</table>

</section><!-- .docs-item -->

<section id="mixin-add-modifiers-close" class="docs-item" markdown="1">

### add-modifiers-close

Creates styles for the close elements along with modifiers.

```scss
@include make-close( $options: () );
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
    <td><code>$close</code></td>
  </tr>
</table>

</section><!-- .docs-item -->
