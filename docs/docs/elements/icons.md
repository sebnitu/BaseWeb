---
layout: page
title: "Icons"
order: 11
---

There's more than one way to include icons into a project. The preferred method in BaseWeb is using the SVG icon system as described in [CSS-Tricks](https://css-tricks.com/pretty-good-svg-icon-system/). The icon set included is the amazing opensource project [Feather Icons](https://feathericons.com/) by [Cole Bemis](http://colebemis.com/).

Since this method requires you to inject the SVG of an icon directly into your document, it's recommended to use some kind of file include system. In the BaseWeb docs, we simply use the Jekyll include:

```liquid
{% raw %}{% include icons/circle.svg %}{% endraw %} This is a circle icon
```

```html
{% include icons/circle.svg %} This is a circle icon
```

<div class="demo demo-icons">
  <p class="text-center">{% include icons/circle.svg %} This is a circle icon</p>
</div>

## Available Icons

Below are all the icons available in [Feather Icons](https://feathericons.com/) which are also included in `dist/icons` of BaseWeb.

<div class="expandable">
  <div class="expandable-overlay">
    <a class="button primary expandable-trigger" href="#" data-text-swap="Hide Icons">View Available Icons</a>
  </div>
  <div class="expandable-content icons-listing">
    {% for icon in site.data.icons %}
    <div class="icon-item">{% include icons/{{ icon }}.svg %} <code>{{ icon }}</code></div>
    {% endfor %}
  </div>
</div><!-- .expandable -->

<div class="notice info" markdown="1">
These icons are distributed under the [MIT License](https://github.com/colebemis/feather/blob/master/LICENSE). Huge thanks to [Cole Bemis](http://colebemis.com/) for creating and releasing these high quality icons.
</div>

## Using Button Icons

If the `classes-button-icon` is set to true, then you'll have available a three button modifier classes for using icons within buttons as well as custom icon styles for the `.small` and `.large` buttom modifiers. Below are a few examples and how they can be used.

### .button-icon

Used to display a button that has only an icon and no text.

```html
<button class="button button-icon primary large">{% raw %}{% include icons/circle.svg %}{% endraw %}</button>
<button class="button button-icon primary">{% raw %}{% include icons/circle.svg %}{% endraw %}</button>
<button class="button button-icon primary small">{% raw %}{% include icons/circle.svg %}{% endraw %}</button>
```

<div class="demo">
  <button class="button button-icon primary large">{% include icons/circle.svg %}</button>
  <button class="button button-icon primary">{% include icons/circle.svg %}</button>
  <button class="button button-icon primary small">{% include icons/circle.svg %}</button>
</div>

### .button-icon-left

Used to display buttons with icons on the left of a buttons text.

```html
<button class="button button-icon-left primary large">{% raw %}{% include icons/circle.svg %}{% endraw %} Button</button>
<button class="button button-icon-left primary">{% raw %}{% include icons/circle.svg %}{% endraw %} Button</button>
<button class="button button-icon-left primary small">{% raw %}{% include icons/circle.svg %}{% endraw %} Button</button>
```

<div class="demo">
  <button class="button button-icon-left primary large">{% include icons/circle.svg %} Button</button>
  <button class="button button-icon-left primary">{% include icons/circle.svg %} Button</button>
  <button class="button button-icon-left primary small">{% include icons/circle.svg %} Button</button>
</div>

### .button-icon-right

Used to display buttons with icons on the right of a buttons text.

```html
<button class="button button-icon-right primary large">{% raw %}{% include icons/circle.svg %}{% endraw %} Button</button>
<button class="button button-icon-right primary">{% raw %}{% include icons/circle.svg %}{% endraw %} Button</button>
<button class="button button-icon-right primary small">{% raw %}{% include icons/circle.svg %}{% endraw %} Button</button>
```

<div class="demo">
  <button class="button button-icon-right primary large">Button {% include icons/circle.svg %}</button>
  <button class="button button-icon-right primary">Button {% include icons/circle.svg %}</button>
  <button class="button button-icon-right primary small">Button {% include icons/circle.svg %}</button>
</div>

<div class="notice yellow" markdown="1">
It's important to note that the button icon modifiers require that the buttons element component be included and loaded before the icons component. This is because the `$buttons` map is used directly to set values specific to buttons.
</div>

## Variables

Icon variables are encompassed within the `$icons` map and are used throughout all icon mixins to set default values.

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Default</th>
  </tr>

  <tr>
    <td><code>$icons('classes')</code></td>
    <td><code>true</code> <a href="#var-note-1">*</a></td>
  </tr>
  <tr>
    <td><code>$icons('classes-button-icon')</code></td>
    <td><code>true</code> <a href="#var-note-1">*</a></td>
  </tr>

  <tr>
    <td><code>$icons('class')</code></td>
    <td><code>'icon'</code></td>
  </tr>

  <tr>
    <td><code>$icons('size')</code></td>
    <td><code>1em</code></td>
  </tr>

  <tr>
    <td><code>$icons('margin-top')</code></td>
    <td><code>-0.3em</code></td>
  </tr>
  <tr>
    <td><code>$icons('margin-bottom')</code></td>
    <td><code>-0.1em</code></td>
  </tr>

  <tr>
    <td><code>$icons('font-size-small')</code></td>
    <td><code>px-to-rem(18px)</code></td>
  </tr>
  <tr>
    <td><code>$icons('font-size')</code></td>
    <td><code>px-to-rem(24px)</code></td>
  </tr>
  <tr>
    <td><code>$icons('font-size-large')</code></td>
    <td><code>px-to-rem(30px)</code></td>
  </tr>

  <tr>
    <td><code>$icons('vertical-align')</code></td>
    <td><code>null</code></td>
  </tr>
  <tr>
    <td><code>$icons('stroke-width')</code></td>
    <td><code>null</code></td>
  </tr>
  <tr>
    <td><code>$icons('stroke')</code></td>
    <td><code>null</code></td>
  </tr>
  <tr>
    <td><code>$icons('fill')</code></td>
    <td><code>null</code></td>
  </tr>

  <tr>
    <th colspan="2">Button Settings</th>
  </tr>

  <tr>
    <td><code>$icons('buttons', 'gap')</code></td>
    <td><code>0.25em</code></td>
  </tr>
  <tr>
    <td><code>$icons('buttons', 'indent-small')</code></td>
    <td><code>-0.125em</code></td>
  </tr>
  <tr>
    <td><code>$icons('buttons', 'indent')</code></td>
    <td><code>-0.25em</code></td>
  </tr>
  <tr>
    <td><code>$icons('buttons', 'indent-large')</code></td>
    <td><code>-0.35em</code></td>
  </tr>
</table>

<div class="notice info" id="var-note-1" markdown="1">
\* Whether or not we should output icon classes. Set to `false` if you want to use the notice modifier mixins semantically and/or reduce CSS output.
</div>

## Mixins

Icon mixins are used to create the base styles for an icon as well as their color size and display variations.

<ul class="list list-docs">

<li markdown="1">

### make-icon

Creates the base styles for an icon element.

```scss
@include make-icon( $options: () );
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
    <td><code>$icons()</code></td>
  </tr>
</table>

#### Example Usage

You'll want to wrap the mixin with whatever icon class you'd like to use. The default class output uses the class variable in the icons map.

```scss
.#{map-get($icons, 'class')} {
  @include make-icon();
}
```

</li>

</ul>
