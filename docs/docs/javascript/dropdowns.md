---
layout: page
title: Dropdowns
order: 3
section:
  id: js-dropdowns
  class: js-method
---

The dropdowns component allows for the use of `.on-click` and `.on-hover` modifier classes for dropwns. These modifiers can be used by initiating the dropdowns JavaScript using the `init()` method.

```js
dropdowns.init();
```

```html
<div class="dropdown-trigger on-click">
  <button class="button">On Click</button>
  <div class="dropdown">
    ...
  </div>
</div>

<div class="dropdown-trigger on-hover">
  <button class="button">On Hover</button>
  <div class="dropdown">
    ...
  </div>
</div>
```

<div class="demo demo-dropdown">

  <div class="dropdown-trigger on-click">
    <button class="button">On Click</button>
    <div class="dropdown dropdown-content">
      <p>This is a dropdown</p>
    </div><!-- .dropdown -->
  </div><!-- .dropdown-trigger .on-click -->

  <div class="dropdown-trigger on-hover">
    <button class="button">On Hover</button>
    <div class="dropdown dropdown-content">
      <p>This is a dropdown</p>
    </div><!-- .dropdown -->
  </div><!-- .dropdown-trigger .on-hover -->

</div><!-- .demo -->

<div class="notice info" markdown="1">
For more information on how to use and customize the dropdowns markup and styles, take a look at the [dropdowns block](/docs/blocks/dropdowns) documentation.
</div>

<div id="toc" class="toc"></div>

<section id="{{ page.section.id }}-options" class="docs-item {{ page.section.class }}" markdown="1">

### Options

When initiating the dropdowns component, you can pass in the following options to override defaults.

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
    <td><code>'dropdown-trigger'</code></td>
    <td>Class name for dropdown triggers</td>
  </tr>
  <tr>
    <td><code>classDropdown</code></td>
    <td>String</td>
    <td><code>'dropdown'</code></td>
    <td>Class name for dropdowns</td>
  </tr>
  <tr>
    <td><code>classOnClick</code></td>
    <td>String</td>
    <td><code>'on-click'</code></td>
    <td>Class name for the on click behavior</td>
  </tr>
  <tr>
    <td><code>classOnHover</code></td>
    <td>String</td>
    <td><code>'on-hover'</code></td>
    <td>Class name for the on hover behavior</td>
  </tr>
  <tr>
    <td><code>classActive</code></td>
    <td>String</td>
    <td><code>'active'</code></td>
    <td>Class name for the active state</td>
  </tr>
  <tr>
    <td><code>delay</code></td>
    <td>Milliseconds</td>
    <td><code>500</code></td>
    <td>The length of delay before removing the active class</td>
  </tr>
</table>

</section><!-- .docs-item -->

<section id="{{ page.section.id }}-init" class="docs-item {{ page.section.class }}" markdown="1">

### .init()

Initializes the dropdowns component using either default settings or custom options passed in.

```scss
dropdowns.init( options )
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

Destroys the dropdowns component by removing event listeners and clearing the settings variable.

```scss
dropdowns.destroy()
```

</section><!-- .docs-item -->
