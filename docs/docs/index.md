---
layout: page
title: Documentation
order: 2
---

BaseWeb documentation is split in size parts, each representing the architecture and explaining what each file does and how it can be used. The most important aspects of BaseWeb is understanding the distinctions of these parts and their roles.

Settings and Core encompass the required BaseWeb files that should be included in all uses of this project. Elements and Blocks represent components of a web project. The custom directory is allocated for writing project specific styles, components and overrides.

All of BaseWeb components are routed through `_baseweb.scss`, where all our `@import` calls are made. The only required files are located in Settings and Core directories. These files, by default, have no CSS output and function simply as a library of functions and variables that you can use in your project.
