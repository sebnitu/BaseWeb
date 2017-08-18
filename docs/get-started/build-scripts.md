---
layout: page
title: Build Scripts
order: 3
---

When using BaseWeb source, you'll need to utilize a method for compiling and minifying SCSS and JavaScript files. BaseWeb leverages <a href="http://gulpjs.com/" class="onclick-newtab">Gulp</a> for its build process. To use our Gulp tasks, clone the repo and run the npm install command:

<pre class="highlight"><code><span class="editor-comment"># Clone BaseWeb</span>
<span class="editor-prefixed">git clone https://github.com/sebnitu/BaseWeb.git</span>

<span class="editor-comment"># Navigate into the repository</span>
<span class="editor-prefixed">cd baseweb</span>

<span class="editor-comment"># Install node packages</span>
<span class="editor-prefixed">npm install</span></code></pre>

## Available Tasks

<table class="table table-docs">
  <tbody><tr>
    <th>Task</th>
    <th>Description</th>
  </tr>
  <tr>
    <th colspan="2">Source Tasks</th>
  </tr>
  <tr>
    <td><code>gulp css</code></td>
    <td>Output expanded and min CSS files with source maps from <code>src</code> into <code>dist</code></td>
  </tr>
  <tr>
    <td><code>gulp js</code></td>
    <td>Output expanded and minified JS files from <code>src</code> into <code>dist</code></td>
  </tr>
  <tr>
    <td><code>gulp icons</code></td>
    <td>Copies icons from Feather Icons with custom classes and SVG sprite into <code>dist/icons</code></td>
  </tr>
  <tr>
    <td><code>gulp src</code></td>
    <td><code>['css', 'js', 'icons']</code></td>
  </tr>

  <tr>
    <th colspan="2">Documentation Tasks</th>
  </tr>
  <tr>
    <td><code>gulp docs:css</code></td>
    <td>Output expanded and min CSS files with source maps from <code>docs/src</code> into <code>docs/dist</code></td>
  </tr>
  <tr>
    <td><code>gulp docs:js</code></td>
    <td>Output expanded and minified JS files from <code>docs/src</code> into <code>docs/dist</code></td>
  </tr>
  <tr>
    <td><code>gulp docs:img</code></td>
    <td>Compress all image files from <code>docs/src</code> into <code>docs/dist</code></td>
  </tr>
  <tr>
    <td><code>gulp docs:icons</code></td>
    <td>Copies icons from Feather Icons with custom classes and SVG sprite into <code>docs/_includes/icons</code></td>
  </tr>
  <tr>
    <td><code>gulp docs</code></td>
    <td><code>['docs:css', 'docs:js', 'docs:img', 'docs:icons']</code></td>
  </tr>

  <tr>
    <th colspan="2">Global Tasks</th>
  </tr>
  <tr>
    <td><code>gulp svg</code></td>
    <td><code>['icons', 'docs:icons']</code></td>
  </tr>
  <tr>
    <td><code>gulp go</code></td>
    <td><code>['src', 'docs', 'svg']</code></td>
  </tr>
  <tr>
    <td><code>gulp watch</code></td>
    <td>Watch all asset files and runs the appropriate build task based on changes</td>
  </tr>
  <tr>
    <td><code>gulp</code></td>
    <td><code>['go', 'watch']</code></td>
  </tr>

  <tr>
    <th colspan="2">Utility Tasks</th>
  </tr>
  <tr>
    <td><code>gulp replace</code></td>
    <td>Search and replace for managing current version and other static data that changes accross multiple files: <code>-s SEARCH</code> <code>-r REPLACE</code> <code>-f FILES</code></td>
  </tr>
  <tr>
    <td><code>gulp data:icons</code></td>
    <td>Writes all the icon svg files as a data object in <code>icons.json</code> for Jekyll</td>
  </tr>
</tbody></table>

<div class="notice info">
  <p>All of BaseWeb's build tasks are located in <code>gulpfile.js</code>. Check out <a href="http://gulpjs.com/" class="onclick-newtab">Gulp's documentation</a> for how to create your own builds.</p>
</div>
