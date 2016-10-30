---
layout: page
title: Custom
order: 5
---

This directory is allocated for writing your project specific styles. The way you organize the files in this directory will be dependent on the scope of your project. For the more simple projects, just added your styles to `_custom.scss` should be enough. For more complex applications, you're probably going to need to write and organize multiple files and/or directories. Here we'll explore a few options for simple to complex projects.

As a starter, BaseWeb includes a `_custom.scss` file that initiates a responsive grid system and the mini grid system as well as some useful comments for organizing your document.

```scss
// Set file variable
$filename: 'scss/custom/_custom.scss';

/*==============================================================================
  @Grid System - #{$filename}
==============================================================================*/

@include build-grid-system('mobile');

@include media-min('medium') {
  @include build-grid-system();
}

/*==============================================================================
  @Mini Grid System - #{$filename}
==============================================================================*/

@include build-mini-grid-system();

/*==============================================================================
  @Custom - #{$filename}
==============================================================================*/

// Custom styles go here
// All variabls and mixins in BaseWeb are available to styles in this document

/*==============================================================================
  @End - #{$filename}
==============================================================================*/
```
