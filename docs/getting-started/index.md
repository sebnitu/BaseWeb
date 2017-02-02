---
layout: page
title: Getting Started
order: 1
---

BaseWeb is usable in two forms and the advantages of one over the other depends on your needs. The first is to use the source, precompiled SCSS files and the second is to include the compiled and minified CSS files in your project and use the available class based systems.

If you're using the source to build your project, you also have available to you all mixins and functions used throughout the framework. This provides you a method to omit the class based systems and create a custom semantic output. This is covered more deeply within the documentation for each component.

## Working With Source

<ol class="list list-docs numbered">
<li markdown="1">
**Download Source BaseWeb:** Once downloaded, you'll want to grab the `src` directory, and include it in your projects. From here, you can either work directly in the `scss` files and create your own custom project framework, or to keep core maintainability by override the files that you wish to edit using the `baseweb.scss` router file which is where all `@import` declarations are located.
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

## Basic JavaScript

Although BaseWeb isn't currently very opinionated about your JavaScript, it's pretty common to be using something like jQuery. So for best practice, we point to the latest version from a CDN and we have a local backup just in case.

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="/assets/js/vendor/jquery.min.js"><\/script>')</script>
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
  $(window).on('load', function() {

    // Your code here...

  });

}(jQuery));
```
