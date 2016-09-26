---
layout: page
title: "Media Query Variables"
link: "Media"
order: 3
---

Where media query breakpoints are defined. Global media breakpoints are set within the <code>$breakpoints</code> map while the <code>$tweakpoints</code> map is defined but no values are set. Any number of breakpoints can be added to the <code>$breakpoints</code> map and called on using the media query mixins.

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$tweakpoints()</code></td>
    <td><code>...</code></td>
  </tr>

  <tr>
    <td><code>$breakpoints('small')</code></td>
    <td><code>480px</code></td>
  </tr>
  <tr>
    <td><code>$breakpoints('medium')</code></td>
    <td><code>760px</code></td>
  </tr>
  <tr>
    <td><code>$breakpoints('large')</code></td>
    <td><code>990px</code></td>
  </tr>
  <tr>
    <td><code>$breakpoints('huge')</code></td>
    <td><code>1380px</code></td>
  </tr>
</table>

<h2>Setting Tweakpoint Maps</h2>

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
