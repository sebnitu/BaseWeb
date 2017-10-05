---
layout: page
title: "Settings"
order: 2
---

These are general variables that are used throughout BaseWeb. They aren't specific to a component but are primarily used as global defaults.

<div id="toc" class="toc"></div>

<section id="var-property-defaults" class="docs-item" markdown="1">

### Property defaults

The default values used for various CSS properties.

```scss
$bg-color: $gray-100 !default;
$bg-selection: rgba($green, 0.25) !default;

$border-color: rgba($black, 0.10) !default;
$border-radius: 3px !default;

$box-sizing: border-box !default;
$box-shadow: 0 1px 3px rgba($black, 0.1) !default;

$transition-property: all !default;
$transition-duration: 0.25s !default;
$transition-timing-function: linear !default;
$transition-delay: 0.25s !default;
$transition: $transition-property $transition-duration $transition-timing-function !default;
```

</section><!-- .docs-item -->

<section id="var-utility-classes" class="docs-item" markdown="1">

### Utility classes

Used to output various global utility classes.

```scss
$class-clearfix: 'clearfix' !default;
$class-remove-clearfix: 'remove-clearfix' !default;

$class-float-left: 'float-left' !default;
$class-float-right: 'float-right' !default;

$class-show: 'show' !default;
$class-hide: 'hide' !default;
$class-show-hide-min: 'down' !default;
$class-show-hide-max: 'up' !default;
```

</section><!-- .docs-item -->

<section id="var-typography-settings" class="docs-item" markdown="1">

### Typography settings

Default values for typography properties.

```scss
$font-family-sans: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif !default;
$font-family-serif: georgia, "Times New Roman", times, serif !default;
$font-family-mono: Menlo, Monaco, Consolas, "Courier New", monospace !default;

$base-font-family: $font-family-sans !default;
$base-font-size: 16px !default;
$base-line-height: 1.5em !default;
$base-font-weight: font-weight('normal') !default;

$color: $gray-800 !default;
$color-light: $gray !default;
$color-dark: $gray-900 !default;
```

</section><!-- .docs-item -->

<section id="var-typography-settings" class="docs-item" markdown="1">

### Text output options

Whether or not to output default text element styles and/or modifiers.

```scss
$text-elements: true !default;
$text-modifiers: true !default;
```

</section><!-- .docs-item -->

<section id="map-anchors" class="docs-item" markdown="1">

### Anchors Map

Default styles for anchor elements.

```scss
$anchors: (
  'output' : true,
  'color' : $blue,
  'border-bottom' : 1px solid rgba($black, 0.1),
  'text-decoration' : none,
  'hover' : (
    'color' : $blue-700,
    'border-color' : inherit,
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

Default styles for heading elements.

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

<section id="map-add-styles" class="docs-item" markdown="1">

### Add Styles Settings

Default settings used in the add-styles mixin.

```scss
$add-styles: (
  'output-base' : true,
  'output-pseudo' : true,
  'properties' : (
    'cursor',
    'display',
    'float',
    'width',
    'height',
    'margin',
    'margin-top',
    'margin-left',
    'margin-right',
    'margin-bottom',
    'padding',
    'padding-top',
    'padding-left',
    'padding-right',
    'padding-bottom',
    'vertical-align',
    'content',
    'font-family',
    'font-size',
    'line-height',
    'font-weight',
    'text-align',
    'text-indent',
    'white-space',
    'letter-spacing',
    'overflow',
    'color',
    'text-shadow',
    'text-decoration',
    'background',
    'background-color',
    'background-clip',
    'box-shadow',
    'border',
    'border-top',
    'border-left',
    'border-right',
    'border-bottom',
    'border-color',
    'border-radius',
    'transition',
    'transition-property',
    'transition-duration',
    'transition-timing-function',
    'transition-duration',
  ),
  'pseudo-classes' : (
    'hover',
    'focus',
    'active',
    'visited',
  ),
) !default;
```

</section><!-- .docs-item -->
