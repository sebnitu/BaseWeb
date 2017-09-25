---
layout: page
title: "Badges"
order: 8
---

Badges are a compact way to represent descriptive content such as tags, counters or labels. They primarily would contain text and can also have associated photos, icons or a dismissible trigger. Badges can be represented using a `<span>` element but also as an `<a>` link.

```html

```

<div class="demo demo-badges">
  <p><span class="badge">Badge</span></p>
  <p>
    <a class="badge" href="#">Linked Badge</a>
    <a class="badge" href="#">Linked Badge</a>
    <a class="badge active" href="#">Active Badge</a>
    <a class="badge" href="#">Linked Badge</a>
  </p>

  <p><span class="badge dismissible">Linked Badge <a href="#" class="close">{% include content-icon.html icon="x" %}</a></span></p>

  <p>
    <button class="button button-badge-right">
      Button with Badge <span class="badge blue inverted">4</span>
    </button>
  </p>

  <p>
    <button class="button button-badge-left blue">
      <span class="badge white">4</span> Button with Badge
    </button>
    <button class="button button-badge-right blue">
      Button with Badge <span class="badge white">4</span>
    </button>
  </p>
  <p>
    <button class="button button-badge-left blue">
      <span class="badge white inverted">4</span> Button with Badge
    </button>
    <button class="button button-badge-right blue">
      Button with Badge <span class="badge white inverted">4</span>
    </button>
  </p>

  <p>
    <span class="badge">Default Badge</span>
    <span class="badge inverted">Default Badge</span>
  </p>
  <p>
    <span class="badge blue">Blue Badge</span>
    <span class="badge blue inverted">Blue Badge</span>
  </p>
  <p>
    <span class="badge green">Green Badge</span>
    <span class="badge green inverted">Green Badge</span>
  </p>
  <p>
    <span class="badge yellow">Yellow Badge</span>
    <span class="badge yellow inverted">Yellow Badge</span>
  </p>
  <p>
    <span class="badge orange">Orange Badge</span>
    <span class="badge orange inverted">Orange Badge</span>
  </p>
  <p>
    <span class="badge red">Red Badge</span>
    <span class="badge red inverted">Red Badge</span>
  </p>
  <p>
    <span class="badge purple">Purple Badge</span>
    <span class="badge purple inverted">Purple Badge</span>
  </p>
</div>

## Variables

Button variables are encompassed within the `$badges` map and are used throughout all button mixins to set default values.

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$badges('classes')</code></td>
    <td><code>true</code></td>
  </tr>
  <tr>
    <td><code>$badges('class')</code></td>
    <td><code>'badge'</code></td>
  </tr>
</table>

## Mixins

...

<ul class="list list-docs">

<li markdown="1">

### make-button

...

```scss
@include make-badge( $options: () );
```

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$options</code></td>
    <td>Map</td>
    <td><code>$badges()</code></td>
  </tr>
</table>

<p class="subheading">Example Usage</p>

```scss

```

</li>

</ul>
