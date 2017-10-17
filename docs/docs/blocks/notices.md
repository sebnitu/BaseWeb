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

<div class="demo demo-notice">
  <div class="notice">
    <p>This is an example notice.</p>
  </div>
</div>

You can also create dismissible notices but adding the `.dismissible` class and a `.dismiss` trigger. This utilizes the global [dismissible JavaScript component](/docs/javascript/dismissible/).

```html
<div class="notice dismissible">
  <button class="dismiss chip">{% raw %}{% include icons/x.svg %}{% endraw %}</button>
  <p>...</p>
</div>
```

<div class="demo demo-notice">
  <div class="row">
    <div class="col col-6">
      <div class="notice dismissible">
        <button class="dismiss chip">{% include content-icon.html icon="x" %}</button>
        <p>Dismissible</p>
      </div>
    </div>
    <div class="col col-6">
      <div class="notice dismissible inverted">
        <button class="dismiss chip">{% include content-icon.html icon="x" %}</button>
        <p>Dismissible</p>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col col-12">
      <button class="button secondary small" onclick="dismissible.showAll('.demo');">Reset</button>
    </div>
  </div>
</div>

## Modifiers

Notices include semantic color modifiers that change the urgency of notices to highlight specific contexts as shown below.

<div class="demo demo-naked demo-notice">
  <div class="flex">

    <div class="item">
      <code>.info</code>
      <div class="notice info">
        <p>Example notice.</p>
      </div>
    </div>
    <div class="item">
      <code>.info</code> <code>.inverted</code>
      <div class="notice info inverted">
        <p>Example notice.</p>
      </div>
    </div>

    <div class="item">
      <code>.success</code>
      <div class="notice success">
        <p>Example notice.</p>
      </div>
    </div>
    <div class="item">
      <code>.success</code> <code>.inverted</code>
      <div class="notice success inverted">
        <p>Example notice.</p>
      </div>
    </div>

    <div class="item">
      <code>.warning</code>
      <div class="notice warning">
        <p>Example notice.</p>
      </div>
    </div>
    <div class="item">
      <code>.warning</code> <code>.inverted</code>
      <div class="notice warning inverted">
        <p>Example notice.</p>
      </div>
    </div>

    <div class="item">
      <code>.danger</code>
      <div class="notice danger">
        <p>Example notice.</p>
      </div>
    </div>
    <div class="item">
      <code>.danger</code> <code>.inverted</code>
      <div class="notice danger inverted">
        <p>Example notice.</p>
      </div>
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
  'border' : 1px solid rgba($black, 0.15),
  'border-radius' : $border-radius,
  'box-shadow' : 0 1px 3px rgba($black, 0.1),

  'chips' : (
    'float': right,
    'margin': 1em 0 1em 1em,
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
      'chips' : (
        'key' : 'light',
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
      'chips' : (
        'key' : 'default',
      ),
    ),
    'danger' : (
      'background' : $red-50,
    ),
    'danger.inverted' : (
      'color' : $white,
      'background' : $red,
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
