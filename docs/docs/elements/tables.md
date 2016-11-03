---
layout: page
title: "Tables"
order: 6
---

The HTML `<table>` element is used to display tabular data. Tables have rows, cells , header cells  and also can include `<thead>`, `<tbody>` or `<tfooter>` which wrap their respective table data. Here's an example of a table markup and the default styles:

```html
<table>
  <tr>
    <th>...</th>
    <th>...</th>
    <th>...</th>
  </tr>
  <tr>
    <td>...</td>
    <td>...</td>
    <td>...</td>
  </tr>
</table>
```

<div class="demo">
  <table>
    <tr>
      <th>#</th>
      <th>Table Header</th>
      <th>Table Header</th>
      <th>Table Header</th>
    </tr>
    <tr>
      <td>1</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
  </table>
</div>

You'll notice that the base styles for a table are almost untouched. That's because tables are used in a wide array of data on the web, so any sort of custom styles that BaseWeb has available are best applied using modifier classes and mixins for semantic applications.

<section class="subsection subsection-variables" markdown="1">

# Table Variables

Table variables are encompassed within the `$tables` map and are used throughout all table mixins to set default values.

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Default</th>
  </tr>

  <tr>
    <td><code>$tables('classes')</code></td>
    <td><code>true</code></td>
  </tr>
  <tr>
    <td><code>$tables('valign')</code></td>
    <td><code>top</code></td>
  </tr>
  <tr>
    <td><code>$tables('nth')</code></td>
    <td><code>odd</code></td>
  </tr>
  <tr>
    <td><code>$tables('stripe')</code></td>
    <td><code>horizontal</code></td>
  </tr>

  <tr>
    <td><code>$tables('margin')</code></td>
    <td><code>1rem 0</code></td>
  </tr>
  <tr>
    <td><code>$tables('padding-condensed')</code></td>
    <td><code>0.25rem</code></td>
  </tr>
  <tr>
    <td><code>$tables('padding')</code></td>
    <td><code>0.75rem</code></td>
  </tr>
  <tr>
    <td><code>$tables('padding-expanded')</code></td>
    <td><code>1.25rem</code></td>
  </tr>

  <tr>
    <td><code>$tables('background')</code></td>
    <td><code>none</code></td>
  </tr>
  <tr>
    <td><code>$tables('background-stripe')</code></td>
    <td><code>rgba($black, 0.05)</code></td>
  </tr>
  <tr>
    <td><code>$tables('background-hover')</code></td>
    <td><code>$yellow-pale</code></td>
  </tr>

  <tr>
    <td><code>$tables('border')</code></td>
    <td><code>1px solid rgba($black, 0.1)</code></td>
  </tr>
  <tr>
    <td><code>$tables('border-radius')</code></td>
    <td><code>$border-radius</code></td>
  </tr>
</table>

</section>

<section class="subsection subsection-mixins" markdown="1">

# Table Mixins

Tabular data can be frustrating to parse if they are not styled properly. BaseWeb provides the mixins and classes you need to make tables and their content a breeze to analyze.

<ul class="list list-docs">

<li markdown="1">

## make-table

Creates the base styles for a table modifier mixin or class. Usually applied directly through a base table class, mixin or an extend placeholder. If table modifier classes are enabled, you are provided `.table` for your base table class.

```scss
@include make-table( $options: () );
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
    <td><code>$tables()</code></td>
  </tr>
</table>

### Example Usage

Using the base table mixin for custom tables. This example shows us using a `%base-table` placeholder for the extend method.

```scss
%base-table {
  @include make-table();
}
.table-example-1 {
  @extend %base-table;
  ...
}
.table-example-2 {
  @extend %base-table;
  ...
}
```

</li>

<li markdown="1">

## add-table-rowed

Adds borders to a table that divide table rows. Requires the use of base table styles through base table class, mixin or extend.

```scss
@include add-table-rowed( $options: () );
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
    <td><code>$tables()</code></td>
  </tr>
</table>

### Example Usage

```scss
.custom-table {
  @include make-table();
  @include add-table-rowed();
}
```

```html
<table class="table rowed">
  ...
</table>
```

<div class="demo">
  <table class="table rowed">
    <tr>
      <th>#</th>
      <th>Table Header</th>
      <th>Table Header</th>
      <th>Table Header</th>
    </tr>
    <tr>
      <td>1</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
  </table>
</div>

</li>

<li markdown="1">

## add-table-columned

Adds borders to a table that divide table columns. Requires the use of base table styles through base table class, mixin or extend.

```scss
@include add-table-columned( $options: () );
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
    <td><code>$tables()</code></td>
  </tr>
</table>

### Example Usage

```scss
.custom-table {
  @include make-table();
  @include add-table-columned();
}
```

```html
<table class="table columned">
  ...
</table>
```

<div class="demo">
  <table class="table columned">
    <tr>
      <th>#</th>
      <th>Table Header</th>
      <th>Table Header</th>
      <th>Table Header</th>
    </tr>
    <tr>
      <td>1</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
  </table>
</div>

</li>

<li markdown="1">

## add-table-bordered

Adds borders to a table that divide table cells. Requires the use of base table styles through base table class, mixin or extend.

```scss
@include add-table-bordered( $options: () );
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
    <td><code>$tables()</code></td>
  </tr>
</table>

### Example Usage

```scss
.custom-table {
  @include make-table();
  @include add-table-bordered();
}
```

```html
<table class="table bordered">
  ...
</table>
```

<div class="demo">
  <table class="table bordered">
    <tr>
      <th>#</th>
      <th>Table Header</th>
      <th>Table Header</th>
      <th>Table Header</th>
    </tr>
    <tr>
      <td>1</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
  </table>
</div>

</li>

<li markdown="1">

## add-table-size

Toggles a tables padding size between condensed, expanded or a custom padding value.

```scss
@include add-table-size( $size, $options: () );
```

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$size</code></td>
    <td>condensed | expanded | Unit (pixel, em, percent)</td>
    <td><span class="text-soften">None</span></td>
  </tr>
  <tr>
    <td><code>$options</code></td>
    <td>Map</td>
    <td><code>$tables()</code></td>
  </tr>
</table>

### Example Usage

As a mixin, this is used when overriding the inherited table size of more general table styles.

```scss
.all-tables {
  @include make-table();
  @include add-table-bordered();
}
.small-tables {
  @extend .all-tables;
  @include add-table-size(condensed);
}
.custom-tables {
  @extend .all-tables;
  @include add-table-size(8px 16px);
}
```

When class modifiers are enabled, you have the two sizing utility classes: `.condensed` and `.expanded`. This are primarily used along side the base and style modifier classes.

```html
<table class="table bordered condensed">
  ...
</table>
```

<div class="demo">
  <table class="table bordered condensed">
    <tr>
      <th>#</th>
      <th>Table Header</th>
      <th>Table Header</th>
      <th>Table Header</th>
    </tr>
    <tr>
      <td>1</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
  </table>
</div>

```html
<table class="table bordered expanded">
  ...
</table>
```

<div class="demo">
  <table class="table bordered expanded">
    <tr>
      <th>#</th>
      <th>Table Header</th>
      <th>Table Header</th>
      <th>Table Header</th>
    </tr>
    <tr>
      <td>1</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
  </table>
</div>

</li>

<li markdown="1">

## add-table-rounded

Gives a table rounded borders depending on parameters passed.

```scss
@include add-table-rounded( $radius, $options: () );
```

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$radius</code></td>
    <td>Unit (pixel, em, percent)</td>
    <td><code>$tables('border-radius')</code></td>
  </tr>
  <tr>
    <td><code>$options</code></td>
    <td>Map</td>
    <td><code>$tables()</code></td>
  </tr>
</table>

### Example Usage

```scss
.custom-table {
  @include make-table();
  @include add-table-bordered();
  @include add-table-rounded();
}
```

```html
<table class="table bordered rounded">
  ...
</table>
```

<div class="demo">
  <table class="table bordered rounded">
    <tr>
      <th>#</th>
      <th>Table Header</th>
      <th>Table Header</th>
      <th>Table Header</th>
    </tr>
    <tr>
      <td>1</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
  </table>
</div>

</li>

<li markdown="1">

## add-table-stripes

Gives a table stripes either vertical or horizontal depending on parameters passed.

```scss
@include add-table-stripes( $nth, $dir, $options: () );
```

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$nth</code></td>
    <td>Nth (odd, even)</td>
    <td><code>$tables('nth')</code></td>
  </tr>
  <tr>
    <td><code>$dir</code></td>
    <td>Orientation of stripes (vertical, horizontal)</td>
    <td><code>$tables('stripe')</code></td>
  </tr>
  <tr>
    <td><code>$options</code></td>
    <td>Map</td>
    <td><code>$tables()</code></td>
  </tr>
</table>

### Example Usage

```scss
.custom-table {
  @include make-table();
  @include add-table-bordered();
  @include add-table-stripes();
}
```

```html
<table class="table bordered striped">
  ...
</table>
<table class="table bordered striped-horizontal">
  ...
</table>
```

<div class="demo">
  <table class="table bordered striped">
    <tr>
      <th>#</th>
      <th>Table Header</th>
      <th>Table Header</th>
      <th>Table Header</th>
    </tr>
    <tr>
      <td>1</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
  </table>
</div>

```html
<table class="table bordered striped-vertical">
  ...
</table>
```

<div class="demo">
  <table class="table bordered striped-vertical align-center">
    <tr>
      <th>#</th>
      <th>#</th>
      <th>#</th>
      <th>#</th>
      <th>#</th>
      <th>#</th>
      <th>#</th>
      <th>#</th>
    </tr>
    <tr>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
      <td>5</td>
      <td>6</td>
      <td>7</td>
      <td>8</td>
    </tr>
    <tr>
      <td>I</td>
      <td>II</td>
      <td>III</td>
      <td>IV</td>
      <td>V</td>
      <td>VI</td>
      <td>VII</td>
      <td>VIII</td>
    </tr>
    <tr>
      <td>a</td>
      <td>b</td>
      <td>c</td>
      <td>d</td>
      <td>e</td>
      <td>f</td>
      <td>g</td>
      <td>h</td>
    </tr>
    <tr>
      <td>A</td>
      <td>B</td>
      <td>C</td>
      <td>D</td>
      <td>E</td>
      <td>F</td>
      <td>G</td>
      <td>H</td>
    </tr>
  </table>
</div>

</li>

<li markdown="1">

## add-table-hover

Gives table hover styles for rows.

```scss
@include add-table-hover( $bg-hover, $options: () );
```

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$bg-hover</code></td>
    <td>Color</td>
    <td><code>$tables('background-hover')</code></td>
  </tr>
  <tr>
    <td><code>$options</code></td>
    <td>Map</td>
    <td><code>$tables()</code></td>
  </tr>
</table>

### Example Usage

```scss
.custom-table {
  @include make-table();
  @include add-table-bordered();
  @include add-table-hover();
}
```

```html
<table class="table bordered hover">
  ...
</table>
```

<div class="demo">
  <table class="table bordered hover">
    <tr>
      <th>#</th>
      <th>Table Header</th>
      <th>Table Header</th>
      <th>Table Header</th>
    </tr>
    <tr>
      <td>1</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
  </table>
</div>

</li>

<li markdown="1">

## add-table-alignment

Sets the vertical and text alignment of a table if a parameter is passed.

```scss
@include add-table-alignment( $options: () );
```

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$options</code></td>
    <td>Map <code>('vertical-align',</code> <code>'text-align')</code></td>
    <td><span class="text-soften">None</span></td>
  </tr>
</table>

### Example Usage

If you don't have class modifiers enabled, or just want to set table alignment in your SCSS, just pass in the alignment settings you'd like set.

```scss
// SCSS
.table-custom-alignment {
  ...
  @include add-table-alignment((
    'vertical-align': middle,
    'text-align': center
  ));
}

// CSS Output
.table-custom-alignment tr {
  vertical-align: middle;
}
.table-custom-alignment tr td,
.table-custom-alignment tr th {
  text-align: center;
}
```

### Available Classes

<table class="table table-docs">
  <tr>
    <td><code>.valign-baseline</code></td>
    <td>Applies <code>vertical-align: baseline;</code> to table rows.</td>
  </tr>
   <tr>
    <td><code>.valign-top</code></td>
    <td>Applies <code>vertical-align: top;</code> to table rows.</td>
  </tr>
   <tr>
    <td><code>.valign-middle</code></td>
    <td>Applies <code>vertical-align: middle;</code> to table rows.</td>
  </tr>
   <tr>
    <td><code>.valign-bottom</code></td>
    <td>Applies <code>vertical-align: bottom;</code> to table rows.</td>
  </tr>
  <tr>
    <td><code>.align-left</code></td>
    <td>Aligns text to the left for all table cells.</td>
  </tr>
  <tr>
    <td><code>.align-center</code></td>
    <td>Aligns text to the center for all table cells.</td>
  </tr>
  <tr>
    <td><code>.align-right</code></td>
    <td>Aligns text to the right for all table cells.</td>
  </tr>
</table>

```html
<table class="bordered table-align-center">
  ...
</table>
```

</li>

<li markdown="1">

## make-table-responsive

When added to a wrapping element of a table, will make the table responsive for tablets and below.

```scss
@include make-table-responsive( $options: () );
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
    <td><code>$tables()</code></td>
  </tr>
</table>

### Example Usage

Simply wrap a div with the `.table-responsive` class or apply the `make-table-responsive()` mixin to a div wrapping a table to create this effect. Keep in mind that it's triggered using `media-max('tablet')`.

```html
<div class="table-responsive">
  <table class="table bordered">
    ...
  </table>
</div>
```

<div class="demo">
  <div class="table-responsive">
    <table class="table bordered">
      <tr>
        <th>#</th>
        <th>Table Header</th>
        <th>Table Header</th>
        <th>Table Header</th>
      </tr>
      <tr>
        <td>1</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
    </table>
  </div>
</div>

</li>

</ul>

</section>
