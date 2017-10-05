---
layout: page
title: "Breadcrumbs"
order: 3
---

Breadcrumbs are a type of navigation that let a user both understand the hierarchal depth they are currently in as well as the ability to "move up" in page hierarchy from their current location. With this in mind, BaseWeb's markup and styles for breadcrumbs reflect its use application by semantically and visually giving them hierarchal meaning.

The most basic implementation of a breadcrumb looks like this:

```html
<nav class="breadcrumb">
  <ol>
    <li><a href="#">Home</a></li>
    <li><a href="#">Some Page</a></li>
    <li><a href="#">Some Category</a></li>
    <li><span class="current">Current Page</span></li>
  </ol>
</nav>
```

<div class="demo">
  <nav class="breadcrumb">
    <ol>
      <li><a href="#">Home</a></li>
      <li><a href="#">Some Page</a></li>
      <li><a href="#">Some Category</a></li>
      <li><span class="current">Current Page</span></li>
    </ol>
  </nav>
</div>

The first thing to not is that the list of links is wrapped with the `<nav>` element and is given the `.breadcrumb` class. Secondly, the list items of a breadcrumb are marked up as an ordered list `<ol>`. This is because the order that the links appear is important in representing their meaning.

Sometimes, you want to omit the current page link all together, but still represent the current page with text. In this case, you just wrap the breadcrumb item with a `<span>` and can give it `.current` class for more subtle text styling.

You also have the `.wrapped` class to add simple wrapper styles to your breadcrumbs.

<div id="toc" class="toc"></div>

<section id="map-breadcrumbs" class="docs-item" markdown="1">

### Variable Map

Breadcrumb variables are encompassed within the `$breadcrumbs` map and are used throughout all breadcrumb mixins to set default values.

```scss
$breadcrumbs: (
  'output' : true,
  'class' : 'breadcrumb',

  'display' : block,
  'margin' : 1em 0,
  'font-size' : 1em,

  'delimiter' : (
    'content' : '/', // Delimiter element content (e.g: '/', '—', '→', '»')
    'padding' : 0 0.75em,
    'color' : $gray-400,
    'last-child' : false,
  ),

  'modifiers' : (
    'current' : (
      'selector' : '.current',
      'color' : $color-light,
    ),
  ),

) !default;
```

</section><!-- .docs-item -->

<section id="mixin-make-breadcrumb" class="docs-item" markdown="1">

### make-breadcrumb

Creates the basic breadcrumb styles.

```scss
@include make-breadcrumb( $options: () );
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
    <td><code>$breadcrumbs</code></td>
  </tr>
</table>

<p class="subheading">Example Usage</p>

In this example, we'll use the `make-breadcrumb()` mixin to create a custom breadcrumb style.

```scss
.#{map-get($breadcrumbs, 'class')} {
  @include make-breadcrumb();
}
```

</section><!-- .docs-item -->
