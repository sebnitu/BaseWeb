---
layout: page
title: "Media Queries"
link:
  text: "Media"
order: 5
---

The core framework mixins that deal with media queries. These break down to three primary mixins for setting minimum width, maximum width and retina display mixins.

Global media breakpoints are set within the `$breakpoints` map while the `$tweakpoints` map is defined but no values set. Any number of breakpoints can be added to the <code>$breakpoints</code> map and called on using the media query mixins.

## Setting Tweakpoint Maps

Tweakpoints are media queries that are used to finesse page elements without making any major changes to the layout. These points are usually component specific so there are none set by default. Instead, if a tweakpoint is needed, it should be defined at the top of a component file that requires it, then reset at the bottom of that component's file.

```scss
// Inside `_some_component.scss`
// Set our component specific tweakpoints
$tweakpoints: (
  'inline': 300px,
  'block': 500px
);

// Your component code goes here...

// Reset tweak points so it doesn't
// leak to our next component file
$tweakpoints: ();
```

<div class="notice info" markdown="1">
  For more information on the tweakpoints method, make sure you checkout [Hugo Giraudel's](https://twitter.com/HugoGiraudel) article over at Sitepoint: [Breakpoints and Tweakpoints in Sass](http://www.sitepoint.com/breakpoints-tweakpoints-sass/).
</div>

<div id="toc" class="toc"></div>

<section id="map-breakpoints" class="docs-item" markdown="1">

### Variable Map

Where we store our media query breakpoints. These are accessed when using media query mixins by their keys in this map.

```scss
$breakpoints: (
  'small'  : 480px,
  'medium' : 760px,
  'large'  : 990px,
  'huge'   : 1380px
) !default;
```

</section><!-- .docs-item -->

<section id="mixin-media-min" class="docs-item" markdown="1">

### media-min

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

<p class="subheading">Example Usage</p>

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

</section><!-- .docs-item -->

<section id="mixin-media-max" class="docs-item" markdown="1">

### media-max

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

<p class="subheading">Example Usage</p>

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

</section><!-- .docs-item -->

<section id="mixin-media-retina" class="docs-item" markdown="1">

### media-retina

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

<p class="subheading">Example Usage</p>

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

</section><!-- .docs-item -->
