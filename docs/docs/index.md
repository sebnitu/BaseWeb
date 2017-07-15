---
layout: page
title: Documentation
order: 2
---

BaseWeb documentation is split in five parts, each representing the architecture and explaining what each file does and how it can be used. The most important aspects of BaseWeb is understanding the distinctions of these parts and their roles.

Settings and Core encompass the required BaseWeb files that should be included in all uses of this project. Elements and Blocks represent components of a web project. The custom directory is allocated for writing project specific styles.

```
# SCSS Architecture
scss/
├── settings/
├── core/
├── elements/
├── blocks/
├── custom/
├── _colophon.scss
└── _custom.scss

# CSS Output
css/
├── baseweb.css
├── baseweb.css.map
├── baseweb.min.css
└── baseweb.min.css.map
```

All of BaseWeb components are routed through `_baseweb.scss`, where all our `@import` calls are made. The only required files are located in Settings and Core directories. These files, by default, have no CSS output and function simply as a library of functions and variables that you can use in your project. To exclude any other optional files, just comment out their `@import` declaration and recompile.

``` scss
// BaseWeb meta information
@import "colophon";

// Settings (Required)
@import "settings/palette";
@import "settings/palette-social";
@import "settings/media";
@import "settings/grid";
@import "settings/typography";
@import "settings/global";

// Core (Required)
@import "core/functions";
@import "core/mixins";
@import "core/media";
@import "core/grid";

// Overrides
@import "custom/overrides";

// Elements
@import "elements/base";
@import "elements/typography";
@import "elements/lists";
@import "elements/blockquotes";
@import "elements/code";
@import "elements/tables";
@import "elements/images";
@import "elements/rules";
@import "elements/forms";
@import "elements/buttons";
@import "elements/icons";
@import "elements/videos";

// Blocks
@import "blocks/button-groups";
@import "blocks/notices";
@import "blocks/breadcrumbs";
@import "blocks/dropdowns";
@import "blocks/tabs";
@import "blocks/off-canvas";
@import "blocks/tooltips";

// Custom
@import "custom/custom";
```
