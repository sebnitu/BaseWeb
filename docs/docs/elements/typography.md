---
layout: page
title: "Typography"
order: 2
---

This is where BaseWeb defines our most basic typographic elements. This includes things like base font styles, headings, links and emphasis elements.

## Headings

Heading elements are used to describe the topic of the section it introduces. BaseWeb defines styles for headings `<h1>` to `<h6>`.

```html
<h1>h1. BaseWeb Heading</h1>
<h2>h2. BaseWeb Heading</h2>
<h3>h3. BaseWeb Heading</h3>
<h4>h4. BaseWeb Heading</h4>
<h5>h5. BaseWeb Heading</h5>
<h6>h6. BaseWeb Heading</h6>
```

<div class="demo">
  <h1>h1. BaseWeb Heading</h1>
  <h2>h2. BaseWeb Heading</h2>
  <h3>h3. BaseWeb Heading</h3>
  <h4>h4. BaseWeb Heading</h4>
  <h5>h5. BaseWeb Heading</h5>
  <h6>h6. BaseWeb Heading</h6>
</div>

## Body Copy

The body copy is set by applying our default typographic settings to the `<body>` element and applying margins to our paragraph element.

```html
<p>...</p>
```

<div class="demo">
  <p>Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
  <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla.</p>
</div>

The default typographic settings. These dictate the base typographic styles for headings, body text, inline text elements and links as well as modifier classes.

## Elements

HTML has a beautiful assortment of tools for adding rich semantics to a document. This is by no means a comprehensive list of HTML elements, but these are the inline text elements that BaseWeb specifically adds styles for.

<table class="table table-docs">
  <tr>
    <th>Element</th>
    <th>Demo</th>
  </tr>
  <tr>
    <td><code>&lt;a&gt;</code></td>
    <td><a href="#">Anchor styles</a></td>
  </tr>
  <tr>
    <td><code>&lt;strong&gt;</code></td>
    <td><strong>Strong emphasis styles</strong></td>
  </tr>
  <tr>
    <td><code>&lt;em&gt;</code></td>
    <td><em>Stress emphasis styles</em></td>
  </tr>
  <tr>
    <td><code>&lt;small&gt;</code></td>
    <td><small>Small styles</small></td>
  </tr>
  <tr>
    <td><code>&lt;mark&gt;</code></td>
    <td><mark>Marked styles</mark></td>
  </tr>
  <tr>
    <td><code>&lt;ins&gt;</code></td>
    <td><ins>Insert styles</ins></td>
  </tr>
  <tr>
    <td><code>&lt;del&gt;</code></td>
    <td><del>Delete styles</del></td>
  </tr>
  <tr>
    <td><code>&lt;cite&gt;</code></td>
    <td><cite>Citation styles</cite></td>
  </tr>
  <tr>
    <td><code>&lt;abbr&gt;</code></td>
    <td><abbr title="Abbreviation styles">Abbr styles</abbr></td>
  </tr>
</table>

## Classes

In addition to our inline elements, BaseWeb provides these stylistic typographic classes for adding flair and visual depth to your documents without adding any semantic meaning.

<table class="table table-docs">
  <tr>
    <th>Element</th>
    <th>Demo</th>
  </tr>
  <tr>
    <td><code>.text-lead</code></td>
    <td><p class="text-lead">This is some example lead in text.</p></td>
  </tr>
  <tr>
    <td><code>.text-small</code></td>
    <td><p class="text-small">This is some example small text.</p></td>
  </tr>
  <tr>
    <td><code>.text-soften</code></td>
    <td><p class="text-soften">This is some example soften text.</p></td>
  </tr>
  <tr>
    <td><code>.text-harden</code></td>
    <td><p class="text-harden">This is some example harden text.</p></td>
  </tr>
  <tr>
    <td><code>.text-left</code></td>
    <td><p class="text-left">This is some example text with left alignment.</p></td>
  </tr>
  <tr>
    <td><code>.text-center</code></td>
    <td><p class="text-center">This is some example text with centered alignment.</p></td>
  </tr>
  <tr>
    <td><code>.text-right</code></td>
    <td><p class="text-right">This is some example text with right alignment.</p></td>
  </tr>
  <tr>
    <td><code>.text-justify</code></td>
    <td><p class="text-justify">This is some example text with justified alignment.</p></td>
  </tr>
  <tr>
    <td><code>.text-nowrap</code></td>
    <td><p class="text-nowrap">This text doesn't wrap.</p></td>
  </tr>
  <tr>
    <td><code>.text-lowercase</code></td>
    <td><p class="text-lowercase">This is some example text with lowercase styles.</p></td>
  </tr>
  <tr>
    <td><code>.text-uppercase</code></td>
    <td><p class="text-uppercase">This is some example text with uppercase styles.</p></td>
  </tr>
  <tr>
    <td><code>.text-capitalize</code></td>
    <td><p class="text-capitalize">This is some example text with capitalize styles.</p></td>
  </tr>
</table>

<div id="toc" class="toc"></div>

<section id="var-typography" class="docs-item" markdown="1">

### Typography Variables

```scss
// Font Families
// @type font-stack
$font-family-sans: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif !default;
$font-family-serif: georgia, "Times New Roman", times, serif !default;
$font-family-mono: Menlo, Monaco, Consolas, "Courier New", monospace !default;

// Base Font Styles
// @type font-stack
$base-font-family: $font-family-sans !default;

// @type unit (pixel)
$base-font-size: 16px !default;

// @type unit (pixel, em, percentage)
$base-line-height: 1.5em !default;

// @type value (keyword, numeric)
$base-font-weight: font-weight('normal') !default;

// Text Color Assignment
// @type color
$color:         $gray-900 !default;
$color-light:   $gray !default;
$color-dark:    $gray-900 !default;

// Miscellaneous
// @type unit (pixel)
$letter-spacing: 1px !default;

// @type boolean
$text-elements: true;
$text-modifiers: true;
```

</section><!-- .docs-item -->

<section id="map-anchors" class="docs-item" markdown="1">

### Anchors Map

```scss
$anchors: (
  'output' : true,

  'color' : $blue,
  'border' : 1px solid rgba($black, 0.1),
  'border-color' : null,
  'text-decoration' : none,

  'hover' : (
    'color' : $blue-700,
    'border' : null,
    'border-color' : inherit,
    'text-decoration' : null,
  ),

) !default;
```

<p class="subheading">Shorthands</p>

```scss
$anchor-color: map-get($anchors, 'color') !default;
$anchor-hover-color: map-fetch($anchors, 'hover', 'color') !default;
```

</section><!-- .docs-item -->

<section id="map-headings" class="docs-item" markdown="1">

### Headings Map

```scss
$headings: (
  'output' : true,

  'margin' : 1rem 0,
  'font-family' : inherit,
  'line-height' : 1.25em,
  'font-weight' : font-weight('semi-bold'),
  'color' : $color-dark,

  'anchors' : (
    'output' : true,

    'color' : $color-dark,
    'border' : none,
    'text-decoration' : null,

    'hover' : (
      'color' : $blue,
    ),
  ),

  'scale' : (
    'h1' : 2.5em,
    'h2' : 2em,
    'h3' : 1.75em,
    'h4' : 1.5em,
    'h5' : 1.25em,
    'h6' : 1em,
  ),

) !default;
```

<p class="subheading">Shorthands</p>

```scss
$heading-color: map-get($headings, 'color') !default;
$heading-anchor-color: map-fetch($headings, 'anchors', 'color') !default;
$heading-anchor-hover-color: map-fetch($headings, 'anchors', 'hover', 'color') !default;
```

</section><!-- .docs-item -->

<header class="docs-header" markdown="1">

## Mixins

...

</header>

<section id="mixin-make-anchor" class="docs-item" markdown="1">

### make-anchor

...

```scss
@include make-anchor();
```

</section><!-- .docs-item -->

<section id="mixin-build-headings" class="docs-item" markdown="1">

### build-headings

...

```scss
@include build-headings();
```

</section><!-- .docs-item -->

<section id="mixin-add-text-truncate" class="docs-item" markdown="1">

### add-text-truncate

Truncates text with an ellipsis. Element this is applied to must be block or inline-block.

```scss
@include add-text-truncate();
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$display</code></td>
    <td>Display property (block, inline-block)</td>
    <td><code>block</code></td>
  </tr>
</table>

<p class="subheading">Example Usage</p>

```scss
// SCSS
.demo-text-truncate {
  @include add-text-truncate();
}

// CSS Output
.demo-text-truncate {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

<div class="demo demo-add-text-truncate">
  <div class="box">This is some text that will get truncated</div>
</div>

</section><!-- .docs-item -->

<section id="mixin-text-hide" class="docs-item" markdown="1">

### add-text-hide

Hides text from an element. This is most commonly used as an image replacement technique for hiding text in an element to reveal a background image.

```scss
@include add-text-hide();
```

<p class="subheading">Example Usage</p>

```scss
// SCSS
.logo {
  ...
  @include add-text-hide();
}

// CSS Output
.logo {
  ...
  font-size: 0;
  line-height: 0;
  text-indent: 100%;
  white-space: nowrap;
  overflow: hidden;
}
```

```html
<div class="logo">Demo Logo Image Replace</div>
```

<div class="demo demo-logo-image">
  <div class="logo">Demo Logo Image Replace</div>
</div>

</section><!-- .docs-item -->
