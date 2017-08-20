---
layout: page
title: "Grid System"
link:
  text: "Grid"
order: 4
---

BaseWeb is built with a very flexible grid system. Out of the box, you can use the default classes and settings to have a basic twelve column flexible grid. The basic things to know when using the base grid system is the markup structure.

```html
<div class="container">
  <div class="row">
    <div class="col col-4">...</div>
    <div class="col col-4">...</div>
    <div class="col col-4">...</div>
  </div>
  <div class="row">
    <div class="col col-6">...</div>
    <div class="col col-6">...</div>
  </div>
  <div class="row">
    <div class="col col-12">...</div>
  </div>
</div>
```

<div class="demo-grid">
  <div class="row">
    <div class="col col-4"><p>.col-4</p></div>
    <div class="col col-4"><p>.col-4</p></div>
    <div class="col col-4"><p>.col-4</p></div>
  </div>
  <div class="row">
    <div class="col col-6"><p>.col-6</p></div>
    <div class="col col-6"><p>.col-6</p></div>
  </div>
  <div class="row">
    <div class="col col-12"><p>.col-12</p></div>
  </div>
</div>

The class based grid system is generated using: `build-grid-system()`. By default it's going to generate all the classes for the container, row and columns based on the grid variables. You can also pass in a map to override any default grid map settings based on different media breakpoints.

You can also set the grid type by passing a non-map parameter `build-grid-system(mobile)` which will make columns staked at 100% width.

```scss
@include build-grid-system('mobile');

@include media-min('medium') {
  @include build-grid-system(('total-width': 740px));
}

@include media-min('large') {
  @include build-grid-system(('total-width': 960px));
}
```

## Semantic Grids

The BaseWeb grid system also supports the use of semantic grids. That means you can define a grid without having to use grid classes and instead use mixins to define grid elements directly in your stylesheets.

```scss
wrapper {
  @include make-container();

  .content {
    @include make-row();

    .aside {
      @include make-column(4);
    }
    .article {
      @include make-column(8);
    }
  }
}
```

There are also a set of functions that you can use for setting column and spacing widths. These can be used along with `make-column-base()` to define multiple columns and set the widths separately to reduce our CSS output.

```scss
.wrapper {
  @include make-container();

  .content {
    @include make-row();

    .aside,
    .article {
      @include make-column-base();
    }
    .aside {
      width: column-width(4);
    }
    .article {
      width: column-width(8);
    }
  }
}
```

<div class="demo-grid demo-grid-semantic">
  <div class="demo-wrapper">
    <p>.wrapper</p>
    <div class="demo-content">
      <p>.content</p>
      <div class="demo-aside">
        <p>.aside</p>
      </div>
      <div class="demo-article">
        <p>.article</p>
      </div>
    </div>
  </div>
</div>

## Prefix and Suffix

You can also create spacing on columns using the prefix and suffix modifiers. These classes are used by adding the prefix and suffix class with the appropriate amount of column spacing you want to be added before or after a column.

```html
<div class="container">
  <div class="row">
    <div class="col col-4 suffix-3">...</div>
    <div class="col col-3 prefix-2">...</div>
  </div>
  <div class="row">
    <div class="col col-5 prefix-4 suffix-3">...</div>
  </div>
</div>
```

The semantic grid system equivalent would use the `add-prefix()` and `add-suffix` mixins.

```scss
.aside {
  @include make-column(4);
  @include add-suffix(3);
}
.article {
  @include make-column(3);
  @include add-prefix(2);
}
.section {
  @include make-column(5);
  @include add-prefix(4);
  @include add-suffix(3);
}
```

<div class="demo-grid demo-grid-prefix-suffix">
  <div class="row">
    <div class="col col-4 suffix-3"><p>.suffix-3</p></div>
    <div class="col col-3 prefix-2"><p>.prefix-2</p></div>
  </div>
  <div class="row">
    <div class="col col-5 prefix-4 suffix-3"><p>.prefix-4 .suffix-3</p></div>
  </div>
</div>

## Nested Columns

You can created nested columns in your grid system by adding a new row element inside a column. It's important to note that the first element inside a row should always be a column. Otherwise, you'll need to either manually remove the gutter margin or use the `.col-no-gutter` modifier class.

When using a fluid grid (percent based) the sum of columns in a row must equal the total column value `$grid('columns')`. But when using a fixed grid (pixel based), the sum must equal the column span of it's parent column element. If you want to mix fixed and fluid grids between breakpoints, it's recommended to use the semantic grid method.

```html
<div class="container">
  <div class="row">
    <div class="col col-6">
      ...
      <div class="row">
        <div class="col col-6">...</div>
        <div class="col col-6">...</div>
      </div>
    </div>
    <div class="col col-6">
      ...
      <div class="row">
        <div class="col col-4">...</div>
        <div class="col col-4">...</div>
        <div class="col col-4">...</div>
      </div>
    </div>
  </div>
</div>
```

<div class="demo-grid demo-grid-nested">
  <div class="row">
    <div class="col col-6">
      <p>.col-6</p>
      <div class="row">
        <div class="col col-6"><p>.col-6</p></div>
        <div class="col col-6"><p>.col-6</p></div>
      </div>
    </div>
    <div class="col col-6">
      <p>.col-6</p>
      <div class="row">
        <div class="col col-4"><p>.col-4</p></div>
        <div class="col col-4"><p>.col-4</p></div>
        <div class="col col-4"><p>.col-4</p></div>
      </div>
    </div>
  </div>
</div>

<div class="notice info" markdown="1">
By default, our grid system uses inner-gutter-width (padding) instead of gutter-width (margins). So we're able to keep absolute gutters with a fluid grid for nested elements. But if you used margin gutters with a fluid grid, gutters would need to be percentage based.
</div>

## Grid Functions

These functions are used to calculate specific grid maths such as the width a set number of columns should span. These are used within grid mixins and are often used when defining semantic grid systems.

<ul class="list list-docs">

<li markdown="1">

### column-width

A function that returns the width of a column span.

```scss
$return: column-width( $index, $options: () );
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>$index</code></td>
    <td>Integer</td>
    <td><span class="text-soften">None</span></td>
    <td>The number of column span you want returned.</td>
  </tr>
  <tr>
    <td><code>$options</code></td>
    <td>Map</td>
    <td><code>$grid()</code></td>
    <td></td>
  </tr>
  <tr>
    <th>Return</th>
    <td colspan="3">Unit (pixel, percentage)</td>
  </tr>
</table>

</li>

<li markdown="1">

### spacing-width

A function that returns the spacing of a column span.

```scss
$return: spacing-width( $index, $options: () );
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>$index</code></td>
    <td>Integer</td>
    <td><span class="text-soften">None</span></td>
    <td>The number of column spacing you want returned.</td>
  </tr>
  <tr>
    <td><code>$options</code></td>
    <td>Map</td>
    <td><code>$grid()</code></td>
    <td></td>
  </tr>
  <tr>
    <th>Return</th>
    <td colspan="3">Unit (pixel, percentage)</td>
  </tr>
</table>

</li>

</ul>
</section>

<section class="subsection subsection-mixins" markdown="1">

## Grid Mixins

These mixins are used to output styles that define a grid system's components. Such as grid containers, rows and columns as well as modifier classes like prefix and suffix spacing. They are also used for outputting the class based grid system.

<ul class="list list-docs">

<li markdown="1">

### make-container

Outputs all the styles needed to make an element a grid container.

```scss
@include make-container( $options: () );
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$options</code></td>
    <td>Map</td>
    <td><code>$grid()</code></td>
  </tr>
</table>

</li>

<li markdown="1">

### make-row

Outputs all the styles needed to make an element a grid row.

```scss
@include make-row( $options: () );
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$options</code></td>
    <td>Map</td>
    <td><code>$grid()</code></td>
  </tr>
</table>

</li>

<li markdown="1">

### make-column-base

Creates the base styles for a column but excludes setting the width. Also creates modifier classes for floating columns left or right giving you more flexibility with markup order. Default classes are `col-left` and `col-right`, respectively.

```scss
@include make-column-base( $options: () );
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$options</code></td>
    <td>Map</td>
    <td><code>$grid()</code></td>
  </tr>
</table>

</li>

<li markdown="1">

### make-column

Creates all the styles for a column and sets its width.

```scss
@include make-column( $index, $options: () );
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>$index</code></td>
    <td>Integer</td>
    <td><span class="text-soften">None</span></td>
    <td>The number of column span you want returned.</td>
  </tr>
  <tr>
    <td><code>$options</code></td>
    <td>Map</td>
    <td><code>$grid()</code></td>
    <td></td>
  </tr>
</table>

</li>

<li markdown="1">

### add-prefix

Creates the base styles for a column and sets its width.

```scss
@include add-prefix( $index, $options: () );
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>$index</code></td>
    <td>Integer</td>
    <td><span class="text-soften">None</span></td>
    <td>The number of column spacing you want returned.</td>
  </tr>
  <tr>
    <td><code>$options</code></td>
    <td>Map</td>
    <td><code>$grid()</code></td>
    <td></td>
  </tr>
</table>

</li>

<li markdown="1">

### add-suffix

Creates the base styles for a spacing suffix.

```scss
@include add-suffix( $index, $options: () );
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>$index</code></td>
    <td>Integer</td>
    <td><span class="text-soften">None</span></td>
    <td>The number of column spacing you want returned.</td>
  </tr>
  <tr>
    <td><code>$options</code></td>
    <td>Map</td>
    <td><code>$grid()</code></td>
    <td></td>
  </tr>
</table>

</li>

<li markdown="1">

### build-grid-system

Outputs all the classes and styles for the class based grid system. You can either pass in a map that overrides the grid map defaults, or a single grid type parameter to trigger normal or mobile grid systems.

```scss
@include build-grid-system( $grid-type | $options: () );
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>$grid-type | $options</code></td>
    <td>String or Map</td>
    <td><code>$grid()</code></td>
    <td>Pass either a grid type string or a map with grid settings.</td>
  </tr>
</table>

<p class="subheading">Example Usage</p>

The most basic use of `build-grid-system()` is to output mobile styles and within a media query output our standard grid system. This is present in your `custom/_custom.scss` file by default.

```scss
// Output our mobile grid system classes.
@include build-grid-system('mobile');

// Media query for styles that target tablet sized devices and above.
@include media-min('medium') {
  // Output our standard grid system using all our default settings.
  @include build-grid-system();
}
```

#### Classes Output

These are all the default classes that become available when generating your grid. Keep in mind that class names can be changed using the class name variables in our `$grid()` map.

```html
<div class="container">
  <div class="row">
    <div class="col col-4">...</div>
    <div class="col col-8">...</div>
  </div>
  <div class="row">
    <div class="col col-4 suffix-2">...</div>
    <div class="col col-4 prefix-2">...</div>
  </div>
</div>
```

<div class="demo-grid">
  <div class="row">
    <div class="col col-4"><p>.col-4</p></div>
    <div class="col col-8"><p>.col-8</p></div>
  </div>
  <div class="row">
    <div class="col col-4 suffix-2"><p>.col-4</p></div>
    <div class="col col-4 prefix-2"><p>.col-4</p></div>
  </div>
</div>

<div class="notice info" markdown="1">
You can disabled the output of prefix and suffix classes by setting their class name variables to `none` in `$grid()` map or passing it directly to the mixin manually.
</div>

</li>

</ul>
</section>
