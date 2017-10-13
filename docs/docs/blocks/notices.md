---
layout: page
title: "Notices"
order: 5
---

Notices in BaseWeb represent content blocks that give additional contextual information. This could be helpful tips, success, warning or error messages and additional information to a document. The most basic implementation involves a `<div>` with the `.notice` class.

```html
<div class="notice">
  <p>...</p>
</div>
```

<div class="demo">
  <div class="notice">
    <p>This is an example notice.</p>
  </div>
</div>

You can also create dismissible notices but adding the `.dismissible` class and a `.dismiss` trigger. This utilizes the global [dismissible JavaScript component](/docs/javascript/dismissible/).

```html
<div class="notice dismissible">
  <button class="dismiss close">{% raw %}{% include icons/x.svg %}{% endraw %}</button>
  <p>...</p>
</div>
```

<div class="demo">
  <div class="row">
    <div class="col col-6">
      <div class="notice dismissible">
        <button class="dismiss close">{% include content-icon.html icon="x" %}</button>
        <p>Dismissible</p>
      </div>
    </div>
    <div class="col col-6">
      <div class="notice dismissible inverted">
        <button class="dismiss close">{% include content-icon.html icon="x" %}</button>
        <p>Dismissible</p>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col col-12">
      <button class="button small" onclick="dismissible.showAll('.demo');">Reset</button>
    </div>
  </div>
</div>

<div id="toc" class="toc"></div>

<section id="map-notices" class="docs-item" markdown="1">

### Variable Map

Notice variables are encompassed within the `$notices` map and are used throughout all notice mixins to set default values.

```scss
$notices: (
  'output' : true,
  'output-modifiers' : true,
  'class' : 'notice',

  'margin' : 2em 0,
  'padding' : 0.25em 1.25em,
  'font-size' : 1em,
  'line-height' : 1.5em,
  'border' : 1px solid rgba($black, 0.05),
  'border-radius' : $border-radius,

  'close' : (
    'float': right,
    'margin': 0.75em 0 0.75em 1em,
    'padding': 0.25em,
    'font-size': 1em,
  ),

  'modifiers' : (
    'default' : (
      'color' : $color,
      'background' : $gray-100,
    ),
    'inverted' : (
      'color' : $white,
      'background' : $color,
      'close' : (
        'key' : 'inverted',
      ),
    ),
    'info' : (
      'background' : $blue-50,
    ),
    'info.inverted' : (
      'color' : $white,
      'background' : $blue,
    ),
    'success' : (
      'background' : $green-50,
    ),
    'success.inverted' : (
      'color' : $white,
      'background' : $green,
    ),
    'warning' : (
      'background' : $yellow-100,
    ),
    'warning.inverted' : (
      'color' : $color,
      'background' : $yellow,
      'close' : (
        'key' : 'default'
      ),
    ),
    'danger' : (
      'background' : $red-50,
    ),
    'danger.inverted' : (
      'color' : $white,
      'background' : $red,
    ),
    'inline' : (
      'display' : inline,
      'margin' : 0,
      'padding' : 0 0.25em,
    ),
  ),

) !default;
```

</section><!-- .docs-item -->

<section id="mixin-make-notice" class="docs-item" markdown="1">

### make-notice

Creates the base styles for a notice block.

```scss
@include make-notice( $options: () );
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
    <td><code>$notices</code></td>
  </tr>
</table>

<p class="subheading">Example Usage</p>

This example shows us using a `%base-notice` placeholder for the extend method. Other methods include adding `make-notice()` to a general class which is applied to notice elements directly (which is the method BaseWeb uses for its classes).

```scss
%base-notice {
  @include make-notice();
}
.message-success {
  @extend %base-notice;
  ...
}
.alert-error {
  @extend %base-notice;
  ...
}
```

</section><!-- .docs-item -->
