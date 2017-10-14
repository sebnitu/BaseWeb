---
layout: page
title: Expanding
order: 2
---

<div class="notice warning">
  <p>The expanding BaseWeb documentation is still being written and may not currently be up to date or contain all relevant information. Please check back again soon.</p>
</div>

Expanding BaseWeb is simple. To make a new element or block component, simply create a SCSS file with in the appropriate directory. You can structure your custom SCSS files in any way you like, but here is an example to help get you started. This will allow you to take full advantage of BaseWeb's features and keep it consistent with the other component:

```scss
// Set file variable
$filename: 'scss/custom/_COMPONENT.scss';

////////////////////////////////////////////////////////////////////////////////
// @COMPONENT Map
////////////////////////////////////////////////////////////////////////////////

$COMPONENT: (
  'classes' : true,
  'example' : 'something'
) !default;

// Extend default component map with overrides if they exist
@if variable-exists(override) {
  @if (map-has-key($override, 'COMPONENT') == true) {
    $COMPONENT: map-extend($COMPONENT, map-get($override, 'COMPONENT'), true);
  }
}

////////////////////////////////////////////////////////////////////////////////
// @COMPONENT Mixins
////////////////////////////////////////////////////////////////////////////////

// COMPONENT mixin name
// Description...
// @param $options
//   @type map
//   @default $COMPONENT map
@mixin COMPONENT-mixin-name($options: ()) {
  $o: map-merge($COMPONENT, $options);
  // Your mixin code here...
}

// Check if we should output modifier classes
@if (map-get($COMPONENT, 'classes') == true) {
/*==============================================================================
  @COMPONENT - #{$filename}
==============================================================================*/

// Your styles here...

} // endif classes
```
