---
layout: page
title: "Badges"
order: 8
---

Badges are a compact way to represent descriptive content such as tags, counters or labels. They primarily would contain text and can also have associated photos, icons or a dismissible trigger. Badges can be represented using a `<span>` element but also as an `<a>` link.

```html

```

<div class="demo demo-badges">
  <p><strong>Default Badges</strong></p>
  <p>
    <span class="badge">Badge</span>
    <span class="badge pill">Badge Pill</span>
    <span class="badge square">Badge Square</span>
    <span class="badge active">Badge Active</span>
    <span class="badge inverted">Badge Inverted</span>
    <span class="badge inverted active">Badge Inverted Active</span>
  </p>

  <p><strong>Active Badges</strong></p>
  <p>
    <a class="badge" href="#">Linked Badge</a>
    <a class="badge" href="#">Linked Badge</a>
    <a class="badge active" href="#">Active Badge</a>
    <a class="badge" href="#">Linked Badge</a>
  </p>

  <p><strong>Dot Badges</strong></p>

  <p>This is some text with a dot badge <span class="badge blue dot inverted">*</span></p>

  <p>
    <button class="button button-badge-right">
      Button with Dot Notice <span class="badge red dot inverted">*</span>
    </button>
  </p>

  <p><strong>Button Badges</strong></p>

  <p>
    <button class="button button-badge-right">
      Button with Badge <span class="badge blue inverted">24</span>
    </button>
  </p>
  <p>
    <button class="button secondary button-badge-left">
      <span class="badge blue">7</span> Button with Badge
    </button>
    <button class="button secondary button-badge-right">
      Button with Badge <span class="badge blue">16</span>
    </button>
  </p>
  <p>
    <button class="button button-badge-left">
      <span class="badge green inverted">4</span> Button with Badge
    </button>
    <button class="button button-badge-right">
      Button with Badge <span class="badge green inverted">2</span>
    </button>
  </p>

  <p><strong>Dismissible Badges</strong></p>

  <p>
    <span class="badge dismissible">Default Badge <a href="#" class="dismiss close">{% include content-icon.html icon="x" %}</a></span>
    <span class="badge inverted dismissible">Default Badge <a href="#" class="dismiss close">{% include content-icon.html icon="x" %}</a></span>
  </p>
  <p>
    <span class="badge light dismissible">Light Badge <a href="#" class="dismiss close">{% include content-icon.html icon="x" %}</a></span>
    <span class="badge dark dismissible">Dark Badge <a href="#" class="dismiss close">{% include content-icon.html icon="x" %}</a></span>
  </p>
  <p>
    <span class="badge blue dismissible">Blue Badge <a href="#" class="dismiss close">{% include content-icon.html icon="x" %}</a></span>
    <span class="badge blue inverted dismissible">Blue Badge <a href="#" class="dismiss close">{% include content-icon.html icon="x" %}</a></span>
  </p>
  <p>
    <span class="badge teal dismissible">Teal Badge <a href="#" class="dismiss close">{% include content-icon.html icon="x" %}</a></span>
    <span class="badge teal inverted dismissible">Teal Badge <a href="#" class="dismiss close">{% include content-icon.html icon="x" %}</a></span>
  </p>
  <p>
    <span class="badge green dismissible">Green Badge <a href="#" class="dismiss close">{% include content-icon.html icon="x" %}</a></span>
    <span class="badge green inverted dismissible">Green Badge <a href="#" class="dismiss close">{% include content-icon.html icon="x" %}</a></span>
  </p>
  <p>
    <span class="badge yellow dismissible">Yellow Badge <a href="#" class="dismiss close">{% include content-icon.html icon="x" %}</a></span>
    <span class="badge yellow inverted dismissible">Yellow Badge <a href="#" class="dismiss close">{% include content-icon.html icon="x" %}</a></span>
  </p>
  <p>
    <span class="badge orange dismissible">Orange Badge <a href="#" class="dismiss close">{% include content-icon.html icon="x" %}</a></span>
    <span class="badge orange inverted dismissible">Orange Badge <a href="#" class="dismiss close">{% include content-icon.html icon="x" %}</a></span>
  </p>
  <p>
    <span class="badge red dismissible">Red Badge <a href="#" class="dismiss close">{% include content-icon.html icon="x" %}</a></span>
    <span class="badge red inverted dismissible">Red Badge <a href="#" class="dismiss close">{% include content-icon.html icon="x" %}</a></span>
  </p>
  <p>
    <span class="badge purple dismissible">Purple Badge <a href="#" class="dismiss close">{% include content-icon.html icon="x" %}</a></span>
    <span class="badge purple inverted dismissible">Purple Badge <a href="#" class="dismiss close">{% include content-icon.html icon="x" %}</a></span>
  </p>

  <p><strong>Linked Badges</strong></p>

  <p>
    <a class="badge" href="#">Default Badge</a>
    <a class="badge inverted" href="#">Default Badge</a>
  </p>
  <p>
    <a class="badge light" href="#">Light Badge</a>
    <a class="badge dark" href="#">Dark Badge</a>
  </p>
  <p>
    <a class="badge blue" href="#">Blue Badge</a>
    <a class="badge blue inverted" href="#">Blue Badge</a>
  </p>
  <p>
    <a class="badge teal" href="#">Teal Badge</a>
    <a class="badge teal inverted" href="#">Teal Badge</a>
  </p>
  <p>
    <a class="badge green" href="#">Green Badge</a>
    <a class="badge green inverted" href="#">Green Badge</a>
  </p>
  <p>
    <a class="badge yellow" href="#">Yellow Badge</a>
    <a class="badge yellow inverted" href="#">Yellow Badge</a>
  </p>
  <p>
    <a class="badge orange" href="#">Orange Badge</a>
    <a class="badge orange inverted" href="#">Orange Badge</a>
  </p>
  <p>
    <a class="badge red" href="#">Red Badge</a>
    <a class="badge red inverted" href="#">Red Badge</a>
  </p>
  <p>
    <a class="badge purple" href="#">Purple Badge</a>
    <a class="badge purple inverted" href="#">Purple Badge</a>
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
