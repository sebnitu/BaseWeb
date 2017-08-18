---
layout: page
title: Get Started
order: 1
---

BaseWeb can be used a few different ways depending on what you need. The quickest way to get started is to download BaseWeb! *BaseWeb is currently on version {{ site.version }}. For more details, checkout [our releases page]({{ site.github.releases_url }}).*

<pre class="highlight"><code><span class="editor-prefixed">npm install baseweb</span></code></pre>

<div class="widget-grid">
  <div class="widget card">
    <h2>Download Compiled</h2>
    <p>Compiled contains all the expanded, minified and source map files for BaseWeb. These can be used simply by including them in your header.</p>
    <p><a href="{{ site.github.repository_url }}/tree/master/dist" class="button primary">Download</a></p>
  </div>
  <div class="widget card">
    <h2>Download Source</h2>
    <p>Source contains all of the precompiled SCSS files of BaseWeb. You can use <a href="{{ site.url }}{{ site.baseurl }}/get-started/build-scripts">our build scripts</a> to compile, or roll one of your own.</p>
    <p><a href="{{ site.github.repository_url }}/tree/master/src" class="button primary">Download</a></p>
  </div>
</div>

## Compiled BaseWeb

Compiled BaseWeb comes with all the expanded, minified and source map files you need to get started right away. You'll have available all class based systems each component provides.

<div class="widget fill">
  {% include content-ascii-dist.html %}
</div>

```html
<!-- BaseWeb styles -->
<link rel="stylesheet" href="css/baseweb.min.css">
```

The included JavaScript is currently only placeholder but can be used as starter files for writing jQuery scripts. You could copy and paste JS code examples from the documentation for components that require JS behavior. All scripts in the documentation require the latest version of jQuery.

```html
<!-- jQuery CDN and local fallback -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="js/vendor/jquery.min.js"><\/script>')</script>

<!-- BaseWeb scripts -->
<script src="js/baseweb.min.js"></script>
```

## BaseWeb Source

When downloading BaseWeb's source directory, you'll get all precompiled SCSS files and JavaScript files with utility and component scripts.

To get started, you'll need to setup a build environment or process that compiles SCSS into your production CSS. You could use BaseWeb's build scripts (powered by [Gulp](http://gulpjs.com/)) and adapt them to your own needs, or you can role your own using [CodeKit](https://incident57.com/codekit/), [Grunt](http://gruntjs.com/), [Gulp](http://gulpjs.com/) or [Jake](http://jakejs.com/) to name a few.

<div class="widget fill">
  {% include content-ascii-src.html children="hide" %}
</div>

## Import Partials

All BaseWeb partials are routed through the `baseweb.scss` file. Alternatively, you can also use import partials. It's recommended that you include `_baseweb-core.scss` at minimum and piecemeal elements and blocks as needed or use all three import partials to include everything BaseWeb has to offer. Import partials are as follows:

1. `_baseweb-core.scss`
2. `_baseweb-elements.scss`
3. `_baseweb-blocks.scss`

The default `baseweb.scss` file looks like this:

```scss
// Core [Required]
@import "baseweb-core";

// Overrides
@import "custom/overrides";

// Elements
@import "baseweb-elements";

// Blocks
@import "baseweb-blocks";

// Custom
@import "custom/custom";
```

<div class="notice yellow" markdown="1">
It's important to not that `custom/overrides` should be imported after core but before elements and block files. This ensures that you keep your custom framework overrides.
</div>

<div class="notice blue" markdown="1">
For information on how to leverage BaseWeb and still be able to customize everything you need, check out "<a href="https://dev.to/sebnitu/reusing-design-systems-with-yarn-and-gulp" class="onclick-newtab">Reusing Design Systems with Yarn and Gulp</a>".
</div>
