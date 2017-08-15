---
layout: page
title: Dismissible
order: 2
section:
  id: js-dismissible
  class: js-method
---

The dismissible component allows for elements to be hidden using a trigger. This is a global component and is used by default on the notices to make them dismissible.

```html
<!-- Paragraph -->
<p class="dismissible">... <a href="#" class="close">Close</a></p>

<!-- Div -->
<div class="dismissible">
  <p>... <a href="#" class="close">Close</a></p>
</div>

<!-- Notice -->
<div class="notice dismissible">
  <button class="button button-icon close">...</button>
  ...
</div>
```

<div class="demo demo-1">
  <p class="dismissible">Simple paragraph&mdash;<a href="#" class="close">Close</a></p>

  <div class="dismissible">
    <p>Random div&mdash;<a href="#" class="close">Close</a></p>
  </div>

  <div class="notice dismissible">
    <button class="button button-icon close">{% include icons/x.svg %}</button>
    <p>Dismissible notice.</p>
  </div>
  <button class="button small" onclick="dismissible.showAll('.demo-1');">Reset</button>
</div>

<div id="toc" class="toc"></div>

<section id="{{ page.section.id }}-options" class="docs-item {{ page.section.class }}" markdown="1">

### Options

When initiating the dismissible component, you can pass in the following options to override defaults.

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
    <td><code>'close'</code></td>
    <td>Class used for the dismissible trigger</td>
  </tr>
  <tr>
    <td><code>classDismissible</code></td>
    <td>String</td>
    <td><code>'dismissible'</code></td>
    <td>Class used for the dismissible element</td>
  </tr>
  <tr>
    <td><code>classHide</code></td>
    <td>String</td>
    <td><code>'hide'</code></td>
    <td>Class added to hide dismissible element</td>
  </tr>
</table>

</section><!-- .docs-item -->

<section id="{{ page.section.id }}-init" class="docs-item {{ page.section.class }}" markdown="1">

### .init()

Initializes the dismissible component using either default settings or custom options passed in.

```scss
dismissible.init( options )
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

Destroys the dismissible component by removing event listeners and clearing the settings variable.

```scss
dismissible.destroy()
```

</section><!-- .docs-item -->

<section id="{{ page.section.id }}-showAll" class="docs-item {{ page.section.class }}" markdown="1">

### .showAll()

Show all the available dismissible elements based on the passed selector or all elements in the document if a selector is not passed.

```scss
dismissible.showAll( selector[optional] )
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>selector</code></td>
    <td>String</td>
    <td>[Optional] Selector to search for dismissible elements</td>
  </tr>
</table>

<p class="subheading">Example Usage</p>

```html
<div class="demo demo-2">
  ...
  <button onclick="dismissible.showAll('.demo-2');">Show All</button>
</div>
```

<div class="demo demo-2">
  <div class="row">
    <div class="col col-6">
      <div class="notice dismissible hide">
        <button class="button button-icon close">{% include icons/x.svg %}</button>
        <p>Dismissible</p>
      </div>
    </div>
    <div class="col col-6">
      <div class="notice dismissible inverted hide">
        <button class="button button-icon close">{% include icons/x.svg %}</button>
        <p>Dismissible</p>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col col-12">
      <button class="button small" onclick="dismissible.showAll('.demo-2');">Show All</button>
    </div>
  </div>
</div>

</section><!-- .docs-item -->

<section id="{{ page.section.id }}-hideAll" class="docs-item {{ page.section.class }}" markdown="1">

### .hideAll()

Hide all the available dismissible elements based on the passed selector or all elements in the document if a selector is not passed.

```scss
dismissible.hideAll( selector[optional] )
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>selector</code></td>
    <td>String</td>
    <td>[Optional] Selector to search for dismissible elements</td>
  </tr>
</table>

<p class="subheading">Example Usage</p>

```html
<div class="demo demo-3">
  ...
  <button onclick="dismissible.hideAll('.demo-3');">Hide All</button>
</div>
```

<div class="demo demo-3">
  <div class="row">
    <div class="col col-6">
      <div class="notice dismissible">
        <button class="button button-icon close">{% include icons/x.svg %}</button>
        <p>Dismissible</p>
      </div>
    </div>
    <div class="col col-6">
      <div class="notice dismissible inverted">
        <button class="button button-icon close">{% include icons/x.svg %}</button>
        <p>Dismissible</p>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col col-12">
      <div class="button-group">
        <button class="button small" onclick="dismissible.hideAll('.demo-3');">Hide All</button>
        <button class="button small" onclick="dismissible.showAll('.demo-3');">Reset</button>
      </div>
    </div>
  </div>
</div>

</section><!-- .docs-item -->

<section id="{{ page.section.id }}-getDismissible" class="docs-item {{ page.section.class }}" markdown="1">

### .getDismissible()

Gets a NodeList of all the available dismissible elements based on the passed selector. If no selector is passed, a query is done on the entire document.

```scss
dismissible.getDismissible( selector[optional] )
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>selector</code></td>
    <td>String</td>
    <td>[Optional] Selector to search for dismissible elements</td>
  </tr>
  <tr>
    <th>Return</th>
    <td colspan="3">NodeList</td>
  </tr>
</table>

<p class="subheading">Example Usage</p>

```html
<div id="mydiv">
  <div class="foo dismissible">
    <p>This is a random div. <a href="#" class="close">Close</a></p>
  </div>
  <div class="bar dismissible">
    <p>This is a random div. <a href="#" class="close">Close</a></p>
  </div>
</div>
```

```js
dismissible.getDismissible( '#mydiv' );
// Returns: [div.foo.dismissible, div.bar.dismissible]
```

</section><!-- .docs-item -->
