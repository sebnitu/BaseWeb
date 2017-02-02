---
layout: page
title: Build Scripts
order: 4
---

When using BaseWeb source, you'll need to utilize a method for compiling and minifying SCSS and JavaScript files. BaseWeb leverages Gulp for its build process. To use our Gulp tasks, after cloning this repo, you'll need to run `npm install`. Once all the necessary node packages are installed, you should have the following tasks available:

<table class="table table-docs">
  <tbody><tr>
    <th>Task</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>gulp css</code></td>
    <td>Output expanded and minified CSS files from source</td>
  </tr>
  <tr>
    <td><code>gulp js</code></td>
    <td>Output expanded and minified JS files from source</td>
  </tr>
  <tr>
    <td><code>gulp docs:css</code></td>
    <td>Output expanded and minified CSS files from documentation</td>
  </tr>
  <tr>
    <td><code>gulp docs:js</code></td>
    <td>Output expanded and minified JS files from documentation</td>
  </tr>
  <tr>
    <td><code>gulp docs:img</code></td>
    <td>Compress all image files from documentation</td>
  </tr>
  <tr>
    <td><code>gulp src</code></td>
    <td>Builds all source assets</td>
  </tr>
  <tr>
    <td><code>gulp docs</code></td>
    <td>Builds all documentation assets</td>
  </tr>
  <tr>
    <td><code>gulp go</code></td>
    <td>Builds everything</td>
  </tr>
  <tr>
    <td><code>gulp watch</code></td>
    <td>Watches all asset files and runs the appropriate build task based on changed</td>
  </tr>
  <tr>
    <td><code>gulp</code></td>
    <td>Builds everything and then initiates the watch task</td>
  </tr>
  <tr>
    <td><code>gulp replace</code></td>
    <td> Runs a search and replace task on a given set of files.*</td>
  </tr>
</tbody></table>

\* Great for updating current version numbers that are located throughout a project.

```
Usage: gulp replace -s SEARCH -r REPLACE -f FILES
```

<div class="notice info">
  <p markdown="1">All of BaseWeb's build tasks are located in `gulpfile.js`. Check out [Gulp's documentation](http://gulpjs.com/) for how to create your own builds.</p>
</div>
