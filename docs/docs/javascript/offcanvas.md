---
layout: page
title: Off-Canvas
order: 5
section:
  id: js-offcanvas
  class: js-method
---

The off-canvas component allows for the use of `.off-canvas` and modifier classes for off-canvas behavior. This component can be used by initiating the off-canvas JavaScript using the `init()` method.

```js
offcanvas.init();
```

```html
<div class="oc-wrap">
  <section class="oc-content">
    <div class="oc-inner">
      ...
    </div>
  </section>
  <aside class="oc-aside oc-aside-id">
    ...
  </aside>
</div>
```

```html
<button class="oc-trigger" data-target="oc-aside-id">Menu</button>
```

<div class="demo demo-offcanvas">
  <div class="oc-wrap">
    <section class="oc-content">
      <div class="oc-inner">
        <p class="text-center">
          <button class="button primary oc-trigger" data-target="slide-in-left">Off-canvas trigger</button>
        </p>
      </div>
    </section>
    <aside class="oc-aside slide-in-left">
      <p>Off-canvas content goes here...</p>
    </aside>
  </div>
</div>

<div class="notice info" markdown="1">
For more information on how to use and customize the off-canvas markup and styles, take a look at the [off-canvas block](/docs/blocks/offcanvas) documentation.
</div>

<div id="toc" class="toc"></div>

<section id="{{ page.section.id }}-options" class="docs-item {{ page.section.class }}" markdown="1">

### Options

When initiating the off-canvas component, you can pass in the following options to override defaults.

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
    <td><code>'oc-trigger'</code></td>
    <td>Class name for off-canvas trigger</td>
  </tr>
  <tr>
    <td><code>classWrap</code></td>
    <td>String</td>
    <td><code>'oc-wrap'</code></td>
    <td>Class name for off-canvas wrapper</td>
  </tr>
  <tr>
    <td><code>classAside</code></td>
    <td>String</td>
    <td><code>'oc-aside'</code></td>
    <td>Class name for off-canvas aside</td>
  </tr>
  <tr>
    <td><code>classActive</code></td>
    <td>String</td>
    <td><code>'oc-active'</code></td>
    <td>Class name for active state</td>
  </tr>
  <tr>
    <td><code>classDelay</code></td>
    <td>String</td>
    <td><code>'oc-delay'</code></td>
    <td>Class name for off-canvas delay class</td>
  </tr>
  <tr>
    <td><code>timer</code></td>
    <td>Milliseconds</td>
    <td><code>500</code></td>
    <td>The length of delay before removing the delay class</td>
  </tr>
</table>

</section><!-- .docs-item -->

<section id="{{ page.section.id }}-init" class="docs-item {{ page.section.class }}" markdown="1">

### .init()

Initializes the off-canvas component using either default settings or custom options passed in.

```scss
offcanvas.init( options )
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

Destroys the off-canvas component by removing event listeners and clearing the settings variable.

```scss
offcanvas.destroy()
```

</section><!-- .docs-item -->
