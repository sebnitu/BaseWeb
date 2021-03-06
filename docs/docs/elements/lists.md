---
layout: page
title: "Lists"
order: 3
---

Lists in HTML come in three flavors: unordered, ordered and description lists. BaseWeb has some pretty basic default styles for all three type and a variety of list mixins and classes for stylistic variation.

## &lt;ul&gt;

The unordered list element represents a list of items, where the order of the items is not important. So if you changed the order, the meaning of the list would stay the same.

```html
<ul>
  <li>...</li>
</ul>
```

<div class="demo">
  <ul>
    <li>List Item</li>
    <li>List Item
      <ul>
        <li>Nested List Item</li>
        <li>Nested List Item</li>
        <li>Nested List Item</li>
      </ul>
    </li>
    <li>List Item</li>
    <li>List Item</li>
    <li>List Item</li>
  </ul>
</div>

## &lt;ol&gt;

The ordered list element represents a list of items, where the items have been intentionally ordered, such that changing the order would change the meaning of the list.

```html
<ol>
  <li>...</li>
</ol>
```

<div class="demo">
  <ol>
    <li>List item one</li>
    <li>List item two
      <ol>
        <li>Nested list item one</li>
        <li>Nested list item two</li>
        <li>Nested list item three</li>
      </ol>
    </li>
    <li>List item three</li>
    <li>List item four</li>
    <li>List item five</li>
  </ol>
</div>

## &lt;dl&gt;

The description list element represents an association list consisting of zero or more name-value groups (a description list).

```html
<dl>
  <dt>...</dt>
  <dd>...</dd>
</dl>
```

<div class="demo">
  <dl>
    <dt>Base</dt>
    <dd>The lowest part or edge of something, especially the part on which it rests or is supported.</dd>
    <dt>Web</dt>
    <dd>An information system on the Internet that allows documents to be connected to other documents by hypertext links, enabling the user to search for information by moving from one document to another.</dd>
  </dl>
</div>

<div id="toc" class="toc"></div>

<section id="map-lists" class="docs-item" markdown="1">

### Variable Map

List variables are encompassed within the `$lists` map and are used throughout all list mixins to set default values.

```scss
$lists: (
  'output' : true,
  'class' : 'list',

  'nth' : odd,
  'margin' : 1rem 0,
  'padding' : 1rem,

  'background' : null,
  'background-stripe' : rgba($black, 0.025),
  'background-hover' : $yellow-50,
  'border' : 1px solid rgba($black, 0.1),
  'border-radius' : $border-radius,

) !default;
```

</section><!-- .docs-item -->

<section id="mixin-make-list" class="docs-item" markdown="1">

### make-list

Creates the base styles for a list modifier mixin or class. Usually applied directly through a base list class, mixin or an extend placeholder. If list modifier classes are enabled, you are provided `.list` for your base button class.

```scss
@include make-list( $options: () );
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
    <td><code>$lists</code></td>
  </tr>
</table>

<p class="subheading">Example Usage</p>

Using the base list mixin for custom tables. This example shows us using a `%base-list` placeholder for the extend method.

```scss
%base-list {
  @include make-list();
}
.list-example-1 {
  @extend %base-list;
  ...
}
.list-example-2 {
  @extend %base-list;
  ...
}
```

</section><!-- .docs-item -->

<section id="mixin-add-list-rowed" class="docs-item" markdown="1">

### add-list-rowed

Adds borders to a list that divide list items. Requires the use of base list styles through base list class, mixin or extend.

```scss
@include add-list-rowed( $options: () );
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
    <td><code>$lists</code></td>
  </tr>
</table>

<p class="subheading">Example Usage</p>

```scss
.custom-list {
  @include make-list();
  @include add-list-rowed();
}
```

```html
<ul class="list rowed">...</ul>
```

<div class="demo">
  <ul class="list rowed">
    <li>List Item</li>
    <li>List Item
      <ul>
        <li>Nested List Item</li>
        <li>Nested List Item</li>
        <li>Nested List Item</li>
      </ul>
    </li>
    <li>List Item</li>
    <li>List Item</li>
    <li>List Item</li>
  </ul>
</div>

In the case where you don't want to create left and right padding on a list, you can pass a custom padding through the base list mixin `make-list(('padding':10px 0))`, or use the `.flush` class to make the list flush to both sides.

```scss
.custom-list {
  @include make-list(('padding':10px 0));
  @include add-list-rowed();
}
```

```html
<ul class="list rowed flush">...</ul>
```

<div class="demo">
  <ul class="list rowed flush">
    <li>List Item</li>
    <li>List Item
      <ul>
        <li>Nested List Item</li>
        <li>Nested List Item</li>
        <li>Nested List Item</li>
      </ul>
    </li>
    <li>List Item</li>
    <li>List Item</li>
    <li>List Item</li>
  </ul>
</div>

</section><!-- .docs-item -->

<section id="mixin-add-list-bordered" class="docs-item" markdown="1">

### add-list-bordered

Adds borders to a list that wraps the list and divides list items. Requires the use of base list styles through base list class, mixin or extend.

```scss
@include add-list-bordered( $options: () );
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
    <td><code>$lists</code></td>
  </tr>
</table>

<p class="subheading">Example Usage</p>

```scss
.custom-list {
  @include make-list();
  @include add-list-bordered();
}
```

```html
<ul class="list bordered">...</ul>
```

<div class="demo">
  <ul class="list bordered">
    <li>List Item</li>
    <li>List Item
      <ul>
        <li>Nested List Item</li>
        <li>Nested List Item</li>
        <li>Nested List Item</li>
      </ul>
    </li>
    <li>List Item</li>
    <li>List Item</li>
    <li>List Item</li>
  </ul>
</div>

</section><!-- .docs-item -->

<section id="mixin-add-list-linked" class="docs-item" markdown="1">

### add-list-linked

Adds styles for a linked list where the padding is added to the anchor element instead of the list item.

```scss
@include add-list-linked( $options: () );
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
    <td><code>$lists</code></td>
  </tr>
</table>

<p class="subheading">Example Usage</p>

```scss
.custom-list {
  @include make-list();
  @include add-list-bordered();
  @include add-list-linked();
}
```

```html
<ul class="list bordered linked">...</ul>
```

<div class="demo">
  <ul class="list bordered linked">
    <li><a href="#">List Item</a></li>
    <li><a href="#">List Item</a></li>
    <li><a href="#">List Item</a></li>
    <li><a href="#">List Item</a></li>
    <li><a href="#">List Item</a></li>
  </ul>
</div>

</section><!-- .docs-item -->

<section id="mixin-add-list-rounded" class="docs-item" markdown="1">

### add-list-rounded

Gives a list rounded borders depending on parameters passed.

```scss
@include add-list-rounded( $radius, $options: () );
```

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$radius</code></td>
    <td>Unit (pixel, percent)</td>
    <td><code>$lists('border-radius')</code></td>
  </tr>
  <tr>
    <td><code>$options</code></td>
    <td>Map</td>
    <td><code>$lists</code></td>
  </tr>
</table>

<p class="subheading">Example Usage</p>

```scss
.custom-list {
  @include make-list();
  @include add-list-bordered();
  @include add-list-rounded();
}
```

```html
<ul class="list bordered rounded">...</ul>
```

<div class="demo">
  <ul class="list bordered rounded">
    <li>List Item</li>
    <li>List Item
      <ul>
        <li>Nested List Item</li>
        <li>Nested List Item</li>
        <li>Nested List Item</li>
      </ul>
    </li>
    <li>List Item</li>
    <li>List Item</li>
    <li>List Item</li>
  </ul>
</div>

</section><!-- .docs-item -->

<section id="mixin-add-list-striped" class="docs-item" markdown="1">

### add-list-striped

Gives a list items alternating background colors.

```scss
@include add-list-striped( $nth, $options: () );
```

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$nth</code></td>
    <td>Keyword (odd, even)</td>
    <td><code>$lists('nth')</code></td>
  </tr>
  <tr>
    <td><code>$options</code></td>
    <td>Map</td>
    <td><code>$lists</code></td>
  </tr>
</table>

<p class="subheading">Example Usage</p>

```scss
.custom-list {
  @include make-list();
  @include add-list-bordered();
  @include add-list-striped();
}
```

```html
<ul class="list rowed striped">...</ul>
```

<div class="demo">
  <ul class="list rowed striped">
    <li>List Item</li>
    <li>List Item
      <ul>
        <li>Nested List Item</li>
        <li>Nested List Item</li>
        <li>Nested List Item</li>
      </ul>
    </li>
    <li>List Item</li>
    <li>List Item</li>
    <li>List Item</li>
  </ul>
</div>

</section><!-- .docs-item -->

<section id="mixin-add-list-hover" class="docs-item" markdown="1">

### add-list-hover

Gives list hover styles for list items.

```scss
@include add-list-hover( $bg-hover, $options: () );
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
    <td><code>$lists('background-hover')</code></td>
  </tr>
  <tr>
    <td><code>$options</code></td>
    <td>Map</td>
    <td><code>$lists</code></td>
  </tr>
</table>

<p class="subheading">Example Usage</p>

```scss
.custom-list {
  @include make-list();
  @include add-list-bordered();
  @include add-list-hover();
}
```

```html
<ul class="list rowed hover">...</ul>
```

<div class="demo">
  <ul class="list rowed hover">
    <li>List Item</li>
    <li>List Item
      <ul>
        <li>Nested List Item</li>
        <li>Nested List Item</li>
        <li>Nested List Item</li>
      </ul>
    </li>
    <li>List Item</li>
    <li>List Item</li>
    <li>List Item</li>
  </ul>
</div>

</section><!-- .docs-item -->
