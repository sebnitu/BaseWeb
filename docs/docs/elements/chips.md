---
layout: page
title: "Chips"
order: 11
---

...

```html

```

<div class="demo demo-chips">
  <p>This is an example <span class="chip">Chips</span> and one example as a <a class="chip" href="#">Link Chip</a></p>
</div>

## Variables

Button variables are encompassed within the `$chips` map and are used throughout all button mixins to set default values.

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$chips('classes')</code></td>
    <td><code>true</code></td>
  </tr>
  <tr>
    <td><code>$chips('class')</code></td>
    <td><code>'chip'</code></td>
  </tr>
</table>

## Mixins

...

<ul class="list list-docs">

<li markdown="1">

### make-button

...

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
    <td><code>$chips()</code></td>
  </tr>
</table>

<p class="subheading">Example Usage</p>

```scss

```

</li>

</ul>
