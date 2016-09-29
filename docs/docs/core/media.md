---
layout: page
title: "Media Queries"
link: "Media"
order: 3
---

The core framework mixins that deal with media queries. These break down to three primary mixins for setting minimum width, maximum width and retina display mixins.

<ul class="list list-docs">

<li markdown="1">

## media-min

A media query mixin that deifnes a query using min-width. You can pass in the key to the `$teakpoints()` or `$breakpoints()` maps to access that value, or pass a value to create your media query.

```scss
@include media-min( $point ) {
  @content
}
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>$point</code></td>
    <td>Map key | Unit (pixel, em, rem)</td>
    <td><span class="text-soften">None</span></td>
    <td>The breakpoint to use for the media query.</td>
  </tr>
  <tr>
    <td><code>@content</code></td>
    <td>Style block</td>
    <td><span class="text-soften">None</span></td>
    <td>Styles applied here are wrapped in the media query.</td>
  </tr>
</table>

### Example Usage

```scss
// SCSS
.something {
  width: 100%;
}
@include media-min('medium') {
  .something {
    width: 300px;
  }
}

// CSS Output
.something {
  width: 100%;
}
@media (min-width: 760px) {
  .something {
    width: 300px;
  }
}
```

</li>

<li markdown="1">

## media-max

A media query mixin that deifnes a query using max-width. You can pass in the key to the `$teakpoints()` or `$breakpoints()` maps to access that value, or pass a value to create your media query.

This mixin will shave a pixel off your breakpoint value so that it never overlaps with a breakpoint that might be used in the `media-min` mixin except when a value is passed directly.

```scss
@include media-max( $point ) {
  @content
}
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>$point</code></td>
    <td>Map key | Unit (pixel, em, rem)</td>
    <td><span class="text-soften">None</span></td>
    <td>The breakpoint to use for the media query.</td>
  </tr>
  <tr>
    <td><code>@content</code></td>
    <td>Style block</td>
    <td><span class="text-soften">None</span></td>
    <td>Styles applied here are wrapped in the media query.</td>
  </tr>
</table>

### Example Usage

```scss
// SCSS
.something {
  width: 300px;
}
@include media-max('medium') {
  .something {
    width: 100%;
  }
}

// CSS Output
.something {
  width: 300px;
}
@media (max-width: 759px) {
  .something {
    width: 100%;
  }
}
```

</li>

<li markdown="1">

## media-retina

Media query mixin can be used for setting styles specifically to retina screens. Used when setting higher resolution background images.

```scss
@include media-retina() {
  @content
}
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>@content</code></td>
    <td>Style block</td>
    <td><span class="text-soften">None</span></td>
    <td>Styles applied here are wrapped in the media query.</td>
  </tr>
</table>

### Example Usage

```scss
// SCSS
.logo {
  background-image: src('logo.png');
}

@include media-retina {
  .logo {
    background-image: src('logo-2x.png');
    background-size: 100px 50px;
  }
}

// CSS Output
.logo {
  background-image: src('logo.png');
}

@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .logo {
    background-image: src('logo-2x.png');
    background-size: 100px 50px;
  }
}
```

</li>

</ul>
