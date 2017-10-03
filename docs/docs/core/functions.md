---
layout: page
title: "Functions"
order: 3
---

This is where we define custom functions for our framework. These functions are global and don't apply specifically to a single element/block component.

<div id="toc" class="toc"></div>

<section id="function-map-extend" class="docs-item" markdown="1">

### map-extend

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
    <td><span class="text-soften">None</span></td>
    <td>The first map.</td>
  </tr>
  <tr>
    <td><code>$maps...</code></td>
    <td>Map</td>
    <td><span class="text-soften">None</span></td>
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
    <td colspan="3">Merged map</td>
  </tr>
</table>

<p class="subheading">Example Usage</p>

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
$map: map-extend($grid-a, $grid-b, $grid-c);
// -> ("columns": 16, "layouts": ("large": 1300px, "huge": 1500px), "direction": "ltr")

// Deep
$map: map-extend($grid-a, $grid-b, $grid-c, true);
// -> ("columns": 16, "layouts": ("small": 800px, "medium": 1000px, "large": 1300px, "huge": 1500px), "direction": "ltr")
```

</section><!-- .docs-item -->

<section id="function-map-fetch" class="docs-item" markdown="1">

### map-fetch

An easy way to fetch a value in a multi-level map. Works much like `map-get()` except that you pass multiple keys as the second variable argument to go down multiple levels in the nested map.

```scss
map-fetch( $map, $keys... )
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
    <td><span class="text-soften">None</span></td>
    <td>The multiple level map to search.</td>
  </tr>
  <tr>
    <td><code>$keys...</code></td>
    <td>List</td>
    <td><span class="text-soften">None</span></td>
    <td>List of keys to search in nested map.</td>
  </tr>
  <tr>
    <th>Return</th>
    <td colspan="3">Map value</td>
  </tr>
</table>

<p class="subheading">Example Usage</p>

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
$map: map-get(map-get($grid-a, 'layouts'), 'medium');
// -> 1000px

// Using `map-fetch`
$map: map-fetch($grid-a, 'layouts', 'medium');
// -> 1000px
```

</section><!-- .docs-item -->

<section id="function-map-set" class="docs-item" markdown="1">

### map-set

An easy way to set a deep value in a multi-level map. By passing in a map, value and keys to the original map value you want changed.

```scss
map-set( $map, $value, $keys... )
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
    <td><span class="text-soften">None</span></td>
    <td>The map to update.</td>
  </tr>
  <tr>
    <td><code>$value</code></td>
    <td>Value</td>
    <td><span class="text-soften">None</span></td>
    <td>The new value to set.</td>
  </tr>
  <tr>
    <td><code>$keys...</code></td>
    <td>List</td>
    <td><span class="text-soften">None</span></td>
    <td>Keys to the multiple level map to update.</td>
  </tr>
  <tr>
    <th>Return</th>
    <td colspan="3">Updated map</td>
  </tr>
</table>

<p class="subheading">Example Usage</p>

```scss
$grid-a: (
  'columns': 12,
  'layouts': (
    'small': 800px,
    'medium': 1000px
  )
);

$map: map-set($grid-a, 1300px, 'layouts' 'medium');
// -> ("columns": 12, "layouts": ("small": 800px, "medium": 1300px))
```

</section><!-- .docs-item -->

<section id="function-strip-units" class="docs-item" markdown="1">

### strip-units

Strips the unit from a value. For example, if you pass it 12px, it will strip off the px unit and return the number 12.

```scss
strip-units( $val )
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>$val</code></td>
    <td>Unit (pixel, em, percent, number)</td>
    <td><span class="text-soften">None</span></td>
    <td>A unit value to strip.</td>
  </tr>
  <tr>
    <th>Return</th>
    <td colspan="3">Unitless number</td>
  </tr>
</table>

</section><!-- .docs-item -->

<section id="function-px-to-em" class="docs-item" markdown="1">

### px-to-em

Converts a pixel value to ems. By default it'll use the base font size, but can be passed a custom base font size instead.

```scss
px-to-em( $px, $base )
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>$px</code></td>
    <td>Unit (pixel, number)</td>
    <td><span class="text-soften">None</span></td>
    <td>The pixel value to be converted.</td>
  </tr>
  <tr>
    <td><code>$base</code></td>
    <td>Unit (pixel, number)</td>
    <td><code>$base-font-size</code></td>
    <td>The base font-size the conversion should use.</td>
  </tr>
  <tr>
    <th>Return</th>
    <td colspan="3">Unit (em)</td>
  </tr>
</table>

</section><!-- .docs-item -->

<section id="function-px-to-rem" class="docs-item" markdown="1">

### px-to-rem

Converts a pixel value to rems. Rem units use the base font size set on the `<html>` element which BaseWeb uses `$base-font-size` to set.

```scss
px-to-rem( $px )
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>$px</code></td>
    <td>Unit (pixel, number)</td>
    <td><span class="text-soften">None</span></td>
    <td>The em value to be converted.</td>
  </tr>
  <tr>
    <th>Return</th>
    <td colspan="3">Unit (em)</td>
  </tr>
</table>

</section><!-- .docs-item -->

<section id="function-em-to-px" class="docs-item" markdown="1">

### em-to-px

Converts an em value to pixels. By default it'll use the base font size, but can be passed a custom base font size instead.

```scss
em-to-px( $em, $base )
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>$em</code></td>
    <td>Unit (em, number)</td>
    <td><span class="text-soften">None</span></td>
    <td>The em value to be converted.</td>
  </tr>
  <tr>
    <td><code>$base</code></td>
    <td>Unit (pixel, number)</td>
    <td><code>$base-font-size</code></td>
    <td>The base font-size the conversion should use.</td>
  </tr>
  <tr>
    <th>Return</th>
    <td colspan="3">Unit (em)</td>
  </tr>
</table>

</section><!-- .docs-item -->

<section id="function-font-weight" class="docs-item" markdown="1">

### font-weight

Output the font weight using the weight key to output the number weight.

```scss
font-weight( $weight );
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$weight</code></td>
    <td>Font-weight keyword (hairline, thin, light, regular, medium, semi-bold, bold, extra-bold, black)</td>
    <td><span class="text-soften">None</span></td>
  </tr>
</table>

<p class="subheading">Example Usage</p>

```scss
// SCSS
h1 {
  font-weight: font-weight('light');
}

//CSS
h1 {
  font-weight: 300;
}
```

<table class="table table-docs">
  <tr>
    <th>Weight Name</th>
    <th>Value Output</th>
  </tr>
  <tr>
    <td><code>hairline</code></td>
    <td><code>100</code></td>
  </tr>
  <tr>
    <td><code>thin</code></td>
    <td><code>200</code></td>
  </tr>
  <tr>
    <td><code>light</code></td>
    <td><code>300</code></td>
  </tr>
  <tr>
    <td><code>regular</code></td>
    <td><code>400</code></td>
  </tr>
  <tr>
    <td><code>medium</code></td>
    <td><code>500</code></td>
  </tr>
  <tr>
    <td><code>semi-bold</code></td>
    <td><code>600</code></td>
  </tr>
  <tr>
    <td><code>bold</code></td>
    <td><code>700</code></td>
  </tr>
  <tr>
    <td><code>extra-bold</code></td>
    <td><code>800</code></td>
  </tr>
  <tr>
    <td><code>black</code></td>
    <td><code>900</code></td>
  </tr>
</table>

</section><!-- .docs-item -->
