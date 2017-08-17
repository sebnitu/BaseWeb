---
layout: page
title: Tabs
order: 4
section:
  id: js-tabs
  class: js-method
---

The dropdowns component allows for the use of `.on-click` and `.on-hover` modifier classes for dropwns. These modifiers can be used by initiating the tabs JavaScript using the `init()` method.

```js
tabs.init();
```

```html
<div class="tabs">
  <nav class="tabs-nav">
    <ul>
      <li class="active"><a href="#tabs-panel-1">...</a></li>
      <li><a href="#tabs-panel-2">...</a></li>
      <li><a href="#tabs-panel-3">...</a></li>
      ...
    </ul>
  </nav>
  <div class="tabs-content">
    <div id="tabs-panel-1" class="tabs-panel active">...</div>
    <div id="tabs-panel-2" class="tabs-panel">...</div>
    <div id="tabs-panel-3" class="tabs-panel">...</div>
    ...
  </div>
</div>
```

<div class="demo demo-tabs">

  <div class="tabs">
    <nav class="tabs-nav">
      <ul>
        <li class="active"><a href="#tabs-panel-1">Tab 1</a></li>
        <li><a href="#tabs-panel-2">Tab 2</a></li>
        <li><a href="#tabs-panel-3">Tab 3</a></li>
        <li><a href="#tabs-panel-4">Tab 4</a></li>
        <li><a href="#tabs-panel-5">Tab 5</a></li>
      </ul>
    </nav>
    <div class="tabs-content">
      <div id="tabs-panel-1" class="tabs-panel active"><p>Tab Content 1</p></div>
      <div id="tabs-panel-2" class="tabs-panel"><p>Tab Content 2</p></div>
      <div id="tabs-panel-3" class="tabs-panel"><p>Tab Content 3</p></div>
      <div id="tabs-panel-4" class="tabs-panel"><p>Tab Content 4</p></div>
      <div id="tabs-panel-5" class="tabs-panel"><p>Tab Content 5</p></div>
    </div>
  </div>

</div><!-- .demo -->

<div class="notice info" markdown="1">
For more information on how to use and customize the tabs markup and styles, take a look at the [tabs block](/docs/blocks/tabs) documentation.
</div>

<div id="toc" class="toc"></div>

<section id="{{ page.section.id }}-options" class="docs-item {{ page.section.class }}" markdown="1">

### Options

When initiating the tabs component, you can pass in the following options to override defaults.

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>classTrigger</code></td>
    <td>String</td>
    <td><code>'tabs-nav'</code></td>
    <td>Class name for tab triggers wrap</td>
  </tr>
  <tr>
    <td><code>classWrap</code></td>
    <td>String</td>
    <td><code>'tabs'</code></td>
    <td>Class name for tabs wrapper</td>
  </tr>
  <tr>
    <td><code>classContent</code></td>
    <td>String</td>
    <td><code>'tabs-content'</code></td>
    <td>Class name for tabs content</td>
  </tr>
  <tr>
    <td><code>classActive</code></td>
    <td>String</td>
    <td><code>'active'</code></td>
    <td>Class name for active state</td>
  </tr>
</table>

</section><!-- .docs-item -->

<section id="{{ page.section.id }}-init" class="docs-item {{ page.section.class }}" markdown="1">

### .init()

Initializes the tabs component using either default settings or custom options passed in.

```scss
tabs.init( options )
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>options</code></td>
    <td>JSON</td>
    <td>Custom options for component</td>
  </tr>
</table>

</section><!-- .docs-item -->

<section id="{{ page.section.id }}-destroy" class="docs-item {{ page.section.class }}" markdown="1">

### .destroy()

Destroys the tabs component by removing event listeners and clearing the settings variable.

```scss
tabs.destroy()
```

</section><!-- .docs-item -->
