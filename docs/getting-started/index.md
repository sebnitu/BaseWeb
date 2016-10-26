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
**Download Source BaseWeb:** Once downloaded, you'll want to grab the `src` directory, and include it in your projects. From here, you can either work directly in the `scss` files and create your own custom project framework, or to keep core maintainability by override the files that you wish to edit using the `baseweb.scss` router file which is where all `@import` declarations are called.
</li>
<li markdown="1">
**Setup a Development Environment:** Next, you'll need to setup some form of development environment and workflow that incorporates a compiling and minifying stage. This can be done in many ways and some common methods include [CodeKit](https://incident57.com/codekit/), [Grunt](http://gruntjs.com/) or [Jake](http://jakejs.com/). No matter the method you choose, the compiler should be run on `baseweb.scss`, where all BaseWeb's files are routed through.
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

```html
<html>
  <head>
    <!-- Required Meta Data -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>BaseWeb</title>

    <!-- BaseWeb -->
    <link rel="stylesheet" href="/assets/css/baseweb.min.css">

  </head>
  <body>

    <header class="header">
      <div class="container">
        <h1>Welcome to BaseWeb</h1>
      </div><!-- .container -->
    </header><!-- .header -->

    <section class="main">
      <div class="container">
        <div class="row">

          <div class="col col-8 content">
            <h2>Starter Template</h2>
            <p>
              Thank you for downloading BaseWeb. BaseWeb is a fresh SCSS front-end
              development framework and library built to help keep your projects
              simple, organized and responsive.
            </p>
            <p>...</p>
          </div><!-- .content -->

          <aside class="col col-4 aside">
            <div class="widget">
              <h3>Sidebar Item</h3>
              <p>...</p>
            </div><!-- .widget -->
          </aside><!-- .aside -->

        </div><!-- .row -->
      </div><!-- .container -->
    </section><!-- .main -->

    <footer class="footer">
      <div class="container">
        <p>&copy; 2016</p>
      </div><!-- .container -->
    </footer><!-- .footer -->

  </body>
</html>
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
