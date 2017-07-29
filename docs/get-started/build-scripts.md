---
layout: page
title: Build Scripts
order: 3
---

When using BaseWeb source, you'll need to utilize a method for compiling and minifying SCSS and JavaScript files. BaseWeb leverages [Gulp](http://gulpjs.com/) for its build process. To use our Gulp tasks, clone the repo and run the npm install command:

<pre class="highlight"><code><span class="editor-comment"># Clone BaseWeb</span>
<span class="editor-prefixed">git clone https://github.com/sebnitu/BaseWeb.git</span>

<span class="editor-comment"># Navigate into the repository</span>
<span class="editor-prefixed">cd baseweb</span>

<span class="editor-comment"># Install node packages</span>
<span class="editor-prefixed">npm install</span></code></pre>

Here are all the tasks you'll have available.

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
    <td>Output expanded and minified CSS files from source</td>
  </tr>
  <tr>
    <td><code>gulp js</code></td>
    <td>Output expanded and minified JS files from source</td>
  </tr>
  <tr>
    <td><code>gulp src</code></td>
    <td>Builds all source assets</td>
  </tr>

  <tr>
    <th colspan="2">Documentation Tasks</th>
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
    <td><code>gulp docs</code></td>
    <td>Builds all documentation assets</td>
  </tr>

  <tr>
    <th colspan="2">Global Tasks</th>
  </tr>
  <tr>
    <td><code>gulp go</code></td>
    <td>Builds everything: source and doc tasks</td>
  </tr>
  <tr>
    <td><code>gulp watch</code></td>
    <td>Watches all asset files and runs the appropriate build task based on changed</td>
  </tr>
  <tr>
    <td><code>gulp</code></td>
    <td>Builds everything and then initiates the watch task</td>
  </tr>
</tbody></table>


There is also available the utility task `gulp replace`. It's used to manage current versions and other static data that changes accross multiple files.

```
Usage: gulp replace -s SEARCH -r REPLACE -f FILES
```

<div class="notice info">
  <p markdown="1">All of BaseWeb's build tasks are located in `gulpfile.js`. Check out [Gulp's documentation](http://gulpjs.com/) for how to create your own builds.</p>
</div>
