---
layout: page
title: "Functions"
order: 1
---

This is where we define custom functions for our framework. These functions are global and don't apply specifically to a single element/block component.

<ul class="list rowed flush">

<li markdown="1">

## map-extend

jQuery-style extend function for when `map-merge()` isn't enough. Use when you need to merge more than two maps and/or need a merge to be recursive.

```scss
map-extend( $map, $maps..., $deep )
```
<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>$map</code></td>
    <td>Map</td>
    <td>null</td>
    <td>The first map.</td>
  </tr>
  <tr>
    <td><code>$maps...</code></td>
    <td>Map</td>
    <td>null</td>
    <td>A list of all other maps.</td>
  </tr>
  <tr>
    <td><code>$deep</code></td>
    <td>Boolean</td>
    <td><code>false</code></td>
    <td>Whether or not to enable recursive mode.</td>
  </tr>
  <tr>
    <th>Return</th>
    <td colspan="3">Merged map value</td>
  </tr>
</table>

### Example Usage

```scss
$grid-a: (
  'columns': 12,
  'layouts': (
    'small': 800px,
    'medium': 1000px,
    'large': 1200px,
  ),
);

$grid-b: (
  'layouts': (
    'large': 1300px,
    'huge': 1500px
  ),
);

$grid-c: (
  'direction': 'ltr',
  'columns': 16,
  'layouts': (
    'large': 1300px,
    'huge': 1500px
  ),
);

// Not deep
$grid: map-extend($grid-a, $grid-b, $grid-c);
// -> ("columns": 16, "layouts": ("large": 1300px, "huge": 1500px), "direction": "ltr")

// Deep
$grid: map-extend($grid-a, $grid-b, $grid-c, true);
// -> ("columns": 16, "layouts": ("small": 800px, "medium": 1000px, "large": 1300px, "huge": 1500px), "direction": "ltr")
```

</li>

<li markdown="1">

## map-fetch

An easy way to fetch a value in a multi-level map. Works much like `map-get()` except that you pass multiple keys as the second variable argument to go down multiple levels in the nested map.

```scss
map-fetch( $map, $keys... )
// @param $map
//   @type map
// @param $keys
//   @type list
// @return map value
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>$map</code></td>
    <td>Map</td>
    <td>null</td>
    <td>The first map.</td>
  </tr>
  <tr>
    <td><code>$keys...</code></td>
    <td>List</td>
    <td>null</td>
    <td>A list of all map keys to search.</td>
  </tr>
  <tr>
    <th>Return</th>
    <td colspan="3">Map value</td>
  </tr>
</table>

### Example Usage

```scss
$grid-a: (
  'columns': 12,
  'layouts': (
    'small': 800px,
    'medium': 1000px,
    'large': 1200px,
  ),
);

// Using `map-get`
$medium: map-get(map-get($grid-a, 'layouts'), 'medium');
// -> 1000px

// Using `map-fetch`
$medium: map-fetch($grid-a, 'layouts', 'medium');
// -> 1000px
```

</li>

<li markdown="1">

    <h2>map-set</h2>
    <p>An easy to to set a deep value in a multi-level map. This by passing in a map, value and keys to the original map value you want changed.</p>
    <pre class="language-scss"><code>@function map-set( $map, $value, $keys... )
// @param $map
//   @type map
// @param $value
//   @type value
// @param $keys
//   @type list
// @return updated map value</code></pre>
    <h3>Example Usage</h3>
    <pre class="language-scss"><code>
$grid-configuration: (
  'columns': 12,
  'layouts': (
    'small': 800px,
    'medium': 1000px,
    'large': 1200px,
  ),
);

// Without `map-set`
$grid-configuration: map-merge($grid-configuration, map-merge(map-get($grid-configuration, 'layouts'), ('large': 1300px)));

// With `map-set`
$medium: map-set($grid-configuration, 1300px, 'layouts' 'medium');
</code></pre>

</li>

<li markdown="1">

    <h2>strip-units</h2>
    <p>Strips the unit from a value. For example, if you pass it 12px, it will strip off the px unit and return the number 12.</p>
    <pre class="language-scss"><code>@function strip-units( $val )
// @param $val
//   @type unit (pixel, em, percent, number)
// @return number</code></pre>

</li>

<li>

    <h2>px-to-em</h2>
    <p>Converts a pixel value to ems. By default it'll use the base font size, but can be passed a custom base font size.</p>
    <pre class="language-scss"><code>@function px-to-em( $px, $base )
// @param $px
//   @type unit (pixel, number)
// @param $base-font-size
//   @type unit (pixel, number)
//   @default $base-font-size
// @return unit (em)</code></pre>

</li>

<li markdown="1">

    <h2>px-to-rem</h2>
    <p>Converts a pixel value to rems. Rem units use the base font size set on the <code>&lt;html&gt;</code> element which BaseWeb uses <code>$base-font-size</code> to set.</p>
    <pre class="language-scss"><code>@function px-to-rem( $px )
// @param $px
//   @type unit (pixel, number)
// @return unit (rem)</code></pre>

</li>

<li markdown="1">

    <h2>em-to-px</h2>
    <p>Converts an em value to pixels. By default it'll use the base font size, but can be passed a custom base font size.</p>
    <pre class="language-scss"><code>@function em-to-px( $em, $base )
// @param $px
//   @type unit (em, number)
// @param $base-font-size
//   @type unit (pixel, number)
//   @default $base-font-size
// @return unit (px)</code></pre>

</li>

</ul>
