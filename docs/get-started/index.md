---
layout: page
title: Get Started
order: 1
---

BaseWeb can be used a few different ways depending on what you need. The quickest way to get started is to download BaseWeb! *BaseWeb is currently on version {{ site.version }}. For more details, checkout [our releases page]({{ site.github.releases_url }}).*

<pre class="highlight"><code><span class="editor-prefixed">npm install baseweb</span></code></pre>

<div class="widget-wrap widget-wrap-downloads">
  <div class="widget card widget-download">
    <h2>Download Compiled</h2>
    <p>Compiled contains all the expanded, minified and source map files for BaseWeb. These can be used simply by including them in your header.</p>
    <p><a href="{{ site.github.repository_url }}/tree/master/dist" class="button primary">Download</a></p>
  </div>
  <div class="widget card widget-download">
    <h2>Download Source</h2>
    <p>Source contains all of the precompiled SCSS files of BaseWeb. You can use <a href="{{ site.url }}{{ site.baseurl }}/get-started/build-scripts">our build scripts</a> to compile, or roll one of your own.</p>
    <p><a href="{{ site.github.repository_url }}/tree/master/src" class="button primary">Download</a></p>
  </div>
</div>

## Compiled BaseWeb

Compiled BaseWeb comes with all the expanded, minified and source map files you need to get started right away. You'll have available all class based systems each component provides.

<div class="widget fill">
  <ul class="list-ascii">
    <li>
      <strong>dist/</strong>
      <ul>
        <li>
          <strong>css/</strong>
          <ul>
            <li>baseweb.css</li>
            <li>baseweb.css.map</li>
            <li>baseweb.min.css</li>
            <li>baseweb.min.css.map</li>
          </ul>
        </li>
        <li>
          <strong>js/</strong>
          <ul>
            <li>baseweb.js</li>
            <li>baseweb.min.js</li>
          </ul>
        </li>
        <li>
          <strong>icons/...</strong>
        </li>
      </ul>
    </li>
  </ul>
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

When downloading BaseWeb's source directory, you'll get all precompiled SCSS files and a JavaScript files with utility and component scripts.

<div class="widget fill">
  {% include content-list-files.html %}
</div>

To get started, you'll need to setup a build environment or process that compiles SCSS into your production CSS. You could use BaseWeb's build scripts (powered by [Gulp](http://gulpjs.com/)) and adapt them to your own needs, or you can role your own using [CodeKit](https://incident57.com/codekit/), [Grunt](http://gruntjs.com/), [Gulp](http://gulpjs.com/) or [Jake](http://jakejs.com/) to name a few. All BaseWeb partials are routed through the `baseweb.scss` file.

Here is an example task for creating a production ready BaseWeb build using Gulp (as would appear in your `gulpfile.js`):

```js
var
  gulp = require('gulp'),
  sass = require('gulp-sass'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer')
;

gulp.task('css', function() {
  return gulp.src('src/scss/baseweb.scss')
    .pipe(sass({
      outputStyle: 'compressed',
      precision: 3
    })
    .on('error', sass.logError))
    .pipe(postcss(autoprefixer({
      browsers: ['last 2 versions', '> 2%']
    })))
    .pipe(gulp.dest('css/'));
});
```

And here is an example of a simple task for concatenation and minification of JavaScript files using Gulp (as would appear in your `gulpfile.js`):

```js
var
  gulp = require('gulp'),
  concat = require('gulp-concat'),
  deporder = require('gulp-deporder'),
  stripdebug = require('gulp-strip-debug'),
  uglify = require('gulp-uglify')
;

gulp.task('js', function() {
  return gulp.src('src/js/**/*')
    .pipe(deporder())
    .pipe(concat('baseweb.min.js'))
    .pipe(stripdebug())
    .pipe(uglify())
    .pipe(gulp.dest('js/'));
});
```

For more information on how to build scripts with [Gulp](http://gulpjs.com/), consult their project documentation. All of BaseWeb's build scripts can be found in our [`gulpfile.js`]({{ site.github.repository_url }}/blob/master/gulpfile.js). Read more about available scripts and how they work on [our build scripts page]({{ site.url }}{{ site.baseurl }}/get-started/build-scripts).
