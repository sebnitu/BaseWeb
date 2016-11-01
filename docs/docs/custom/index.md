---
layout: page
title: Custom
order: 5
---

This directory is allocated for writing your project specific styles. The way you organize the files in this directory will be dependent on the scope of your project. For simple projects, just adding your styles to `_custom.scss` should be enough. For more complex applications, you're probably going to need to write and organize multiple files and/or directories. Here we'll explore a few options for simple to complex projects.

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

## Layout & Component Driven Architecture

For projects that require a large amount of layouts and templates, it's common to create layout specific SCSS files. An examle of this might look like this:

```
# SCSS Architecture
custom/
├── _tpl-home.scss
├── _tpl-blog.scss
├── _tpl-projects.scss
├── _tpl-dashboard.scss
└── _global.scss
```

Alternatively, you can use a component based architecture. This is typically done by creating specific SCSS files for each component of your project:

```
# SCSS Architecture
custom/
├── _header.scss
├── _sidebar.scss
├── _listings.scss
├── _widgets.scss
├── _actions.scss
└── _global.scss
```

A combination of these two styles can also be used:

```
# SCSS Architecture
custom/
├── components/
│   ├── _header.scss
│   ├── _sidebar.scss
│   ├── _listings.scss
│   ├── _widgets.scss
│   └── _actions.scss
├── temlates/
│   ├── _home.scss
│   ├── _blog.scss
│   ├── _projects.scss
│   └── _dashbaord.scss
└── _global.scss

```
