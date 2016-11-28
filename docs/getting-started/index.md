---
layout: page
title: Getting Started
order: 1
sidebar: true
---

BaseWeb is usable in two forms and the advantages of one over the other depends on your needs. The first is to use the source, precompiled SCSS files and the second is to include the compiled and minified CSS files in your project and use the available class based systems.

If you're using the source to build your project, you also have available to you all mixins and functions used throughout the framework. This provides you a method to omit the class based systems and create a custom semantic output. This is covered more deeply within the documentation for each component.

## Working With Source

<ol class="list list-docs numbered">
<li markdown="1">
**Download Source BaseWeb:** Once downloaded, you'll want to grab the `src` directory, and include it in your projects. From here, you can either work directly in the `scss` files and create your own custom project framework, or to keep core maintainability by override the files that you wish to edit using the `_baseweb.scss` router file which is where all `@import` declarations are called.
</li>
<li markdown="1">
**Setup a Development Environment:** Next, you'll need to setup some form of development environment and workflow that incorporates a compiling and minifying stage. This can be done in many ways and some common methods include [CodeKit](https://incident57.com/codekit/), [Grunt](http://gruntjs.com/), [Gulp](http://gulpjs.com/) or [Jake](http://jakejs.com/) to name a few. No matter the method you choose, the compiler should be run on `baseweb.scss`, where all BaseWeb's files are routed through.
</li>
<li markdown="1">
**Include BaseWeb:** Then the easiest part, simply including the compiled and minified BaseWeb CSS to your project. Optionally, you can also utilize the starter JavaScript file that's provided, but BaseWeb isn't very opinionated on the JS portion of your project.

```html
<link rel="stylesheet" href="/assets/css/baseweb.min.css">
```
</li>
</ol>

## Compiled BaseWeb

<ol class="list list-docs numbered">
<li markdown="1">
**Download Compiled BaseWeb:** BaseWeb's compiled files include `baseweb.css` and `baseweb.min.css`. The former is made available for debugging and understanding the final output and the minified for production.
</li>
<li markdown="1">
**Include BaseWeb:** Then the easiest part, simply including the compiled and minified BaseWeb CSS to your project. Optionally, you can also utilize the starter JavaScript file that's provided, but BaseWeb isn't very opinionated on the JS portion of your project.

```html
<link rel="stylesheet" href="/assets/css/baseweb.min.css">
```
</li>
</ol>

## Basic Template

Here is a typical starter template that has everything you'll need to get started with BaseWeb. It includes a simple scaffold using the class based grid system.

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- Required Meta Data -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>BaseWeb</title>

    <!-- BaseWeb -->
    <link rel="stylesheet" href="/src/css/baseweb.min.css">

  </head>
  <body>

    <!-- Your markup here... -->

  </body>
</html>
```

## Basic SCSS Files

You can structure your custom SCSS files in any way you like, but this is the general structure that they take within BaseWeb. This is a starter template for a custom component SCSS file.

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
  @SECTION TITLE - #{$filename}
==============================================================================*/

// Your styles here...

} // endif classes
```

## Basic JavaScript

Although BaseWeb isn't currently very opinionated about your JavaScript, it's pretty common to be using something like jQuery. So for best practice, we point to the latest version from a CDN and we have a local backup just in case.

```html
<script src="http://code.jquery.com/jquery-3.1.1.min.js"></script>
<script>!window.jQuery && document.write(unescape('%3Cscript src="/assets/js/libs/jquery.min.js"%3E%3C/script%3E'))</script>
```

Also common as a starter is to have two JavaScript files that are then combined and minified for production. These files are empty but initiate a `$(document).ready` and `$(window).load` as well as a self executing function wrap. The final compiled and minified file is then included in the footer after jQuery.


```html
<script src="/assets/js/scripts.min.js"></script>
```

### jquery.function.js

A place to store all your project specific JavaScript functions. This allows us to safely use the jQuery `$` alias without any conflicts.

```js
/**
 * Self executing jQuery function wrap.
 */
;(function ($) {
  'use strict';

  // Your code here...

}(jQuery));
```

### jquery.docready.js

A place to store all your JavaScript you want to run after either the document is ready or images are finished loading. These are both also wrapped in the self executing jQuery function so we can safely use the jQuery `$` alias.

```js
/**
 * Self executing jQuery function wrap.
 */
;(function ($) {
  'use strict';

  /**
   * When the document is ready
   */
  $(document).ready(function () {

    // Your code here...

  });

  /**
   * When the images are loaded
   */
  $(window).load(function () {

    // Your code here...

  });

}(jQuery));
```

## Build Scripts

When using the source of BaseWeb, you'll need to setup a development environment for compiling and minifying SCSS and JS files. BaseWeb leverages Jake for this and a wrapper called Jake Builds. This is an example of the build environment configuration for SCSS and JavaScript files that would be included in your `jake-config.js` file.

```js
module.exports = {

  // Build Tasks
  build: [{
    // SCSS Build Task
    task: 'scss',
    desc: 'Compiles and minifies SCSS',
    options: [{
      input   : 'src/scss/_baseweb.scss',
      output  : 'src/css/baseweb.min.css',
      paths   : ['src/scss/'],
      style   : 'compressed'
    }]
  }, {
    // JS Build Task
    task: 'js',
    desc: 'Compiles and minifies JS',
    options: [{
      input : [
        'docs/assets/js/jquery.function.js',
        'docs/assets/js/jquery.docready.js'
      ],
      output : 'docs/assets/js/scripts.min.js'
    }]
  }],

  // Watch Tasks
  watch: [{
    // SCSS Watch Task
    task: 'scss',
    files: [
      'src/scss/',
      'docs/assets/scss/'
    ]
  }, {
    // JS Watch Task
    task: 'js',
    files: ['docs/assets/js/'],
    ignore: ['docs/assets/js/scripts.min.js']
  }]

};
```

With these configurations set, it makes available four Jake tasks (viewable when running `jake -ls`):

```console
~$ jake -ls
jake build            Build everything
jake build:scss       Compiles and minifies SCSS
jake build:js         Compiles and minifies JS
jake watch            Watch for change to files and rebuild if they change
```

### Requirements

If you want to use this build environment, you'll need to install the following:

<table class="table table-docs">
  <tr>
    <th>Software</th>
    <th>Version</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><a href="https://nodejs.org/en/">Node</a></td>
    <td><code>7.0.*</code></td>
    <td>A JavaScript runtime built on Chrome's V8 JavaScript engine</td>
  </tr>
  <tr>
    <td><a href="http://jakejs.com/">Jake</a></td>
    <td><code>8.0.*</code></td>
    <td>JavaScript build tool</td>
  </tr>
  <tr>
    <td><a href="https://github.com/sebnitu/jake-builds">Jake Builds</a></td>
    <td><code>Current</code></td>
    <td>A wrapper for creating jake tasks and interfacing with node modules</td>
  </tr>
</table>

You'll also need to include the following dependencies within your `package.json` file:

```js
"devDependencies": {
  "node-watch" : "0.4.*",
  "node-sass"  : "3.10.*",
  "uglify-js"  : "2.7.*"
}
```
