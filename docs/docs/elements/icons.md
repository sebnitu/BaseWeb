---
layout: page
title: "Icons"
order: 12
---

There's more than one way to include icons into a project. BaseWeb supports the use of SVG icons systems in two ways: SVG Sprites and inline SVGs.

The <a href="https://css-tricks.com/svg-sprites-use-better-icon-fonts/" class="onclick-newtab">SVG Sprites</a> method requires you include an `<svg>`---containing all your icons wrapped in `<symbol>` elements---at the top of your document. They are then referenced in our document using the `<use>` element. <a href="https://css-tricks.com/pretty-good-svg-icon-system/" class="onclick-newtab">Inline SVG</a> is where you simply include an `<svg>` directly into your document.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    ...
  </head>
  <body>
    {% raw %}{% include icons/svg-symbols.svg %}{% endraw %}
    ...
  </body>
</html>
```

```html
<!-- SVG sprite reference -->
<svg class="icon icon-circle" role="img" aria-hidden="true">
  <use xlink:href="#icon-circle"></use>
</svg>

<!-- Inline SVG icon -->
<svg class="icon icon-circle" viewBox="0 0 24 24" aria-hidden="true">
  <circle cx="12" cy="12" r="10"></circle>
</svg>
```

<div class="demo demo-icons">
  <div class="row">
    <div class="col col-6">
      <p><strong>SVG Sprite</strong></p>
      <p>
        <svg class="icon icon-circle" role="img" aria-hidden="true">
          <use xlink:href="#icon-circle"></use>
        </svg>
        This is a circle icon
      </p>
    </div>
    <div class="col col-6">
      <p><strong>Inline SVG</strong></p>
      <p>
        <svg class="icon icon-circle" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="10"></circle>
        </svg> This is a circle icon
      </p>
    </div>
  </div>
</div>

## Available Icons

<div class="notice blue" markdown="1">
<a href="https://feathericons.com/" class="onclick-newtab">Feather Icons</a> are a simply beautiful open source icons set by <a href="http://colebemis.com/" class="onclick-newtab">Cole Bemis</a>. They can be found in `dist/icons` of BaseWeb along with the `svg-symbols.svg` SVG sprite
</div>

<div class="expandable">
  <div class="expandable-overlay">
    <a class="button primary expandable-trigger" href="#" data-text-swap="Hide Icons">View Available Icons</a>
  </div>
  <div class="expandable-content icons-listing">
    {% for icon in site.data.icons %}
    <div class="icon-item">{% include content-icon.html icon=icon %} <code>{{ icon }}</code></div>
    {% endfor %}
  </div>
</div><!-- .expandable -->

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
  <button class="button button-icon primary large">{% include content-icon.html icon="circle" %}</button>
  <button class="button button-icon primary">{% include content-icon.html icon="circle" %}</button>
  <button class="button button-icon primary small">{% include content-icon.html icon="circle" %}</button>
</div>

### .button-icon-left

Used to display buttons with icons on the left of a buttons text.

```html
<button class="button button-icon-left primary large">{% raw %}{% include icons/circle.svg %}{% endraw %} Button</button>
<button class="button button-icon-left primary">{% raw %}{% include icons/circle.svg %}{% endraw %} Button</button>
<button class="button button-icon-left primary small">{% raw %}{% include icons/circle.svg %}{% endraw %} Button</button>
```

<div class="demo">
  <button class="button button-icon-left primary large">{% include content-icon.html icon="circle" %} Button</button>
  <button class="button button-icon-left primary">{% include content-icon.html icon="circle" %} Button</button>
  <button class="button button-icon-left primary small">{% include content-icon.html icon="circle" %} Button</button>
</div>

### .button-icon-right

Used to display buttons with icons on the right of a buttons text.

```html
<button class="button button-icon-right primary large">{% raw %}{% include icons/circle.svg %}{% endraw %} Button</button>
<button class="button button-icon-right primary">{% raw %}{% include icons/circle.svg %}{% endraw %} Button</button>
<button class="button button-icon-right primary small">{% raw %}{% include icons/circle.svg %}{% endraw %} Button</button>
```

<div class="demo">
  <button class="button button-icon-right primary large">Button {% include content-icon.html icon="circle" %}</button>
  <button class="button button-icon-right primary">Button {% include content-icon.html icon="circle" %}</button>
  <button class="button button-icon-right primary small">Button {% include content-icon.html icon="circle" %}</button>
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
    <td><code>$icons('class-symbols')</code></td>
    <td><code>'svg-symbols'</code></td>
  </tr>

  <tr>
    <td><code>$icons('size')</code></td>
    <td><code>1em</code></td>
  </tr>

  <tr>
    <td><code>$icons('margin-top-small')</code></td>
    <td><code>null</code></td>
  </tr>
  <tr>
    <td><code>$icons('margin-top')</code></td>
    <td><code>-0.3em</code></td>
  </tr>
  <tr>
    <td><code>$icons('margin-top-large')</code></td>
    <td><code>-0.2em</code></td>
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
    <td><code>$icons('stroke')</code></td>
    <td><code>currentColor</code></td>
  </tr>
  <tr>
    <td><code>$icons('stroke-width')</code></td>
    <td><code>2px</code></td>
  </tr>
  <tr>
    <td><code>$icons('stroke-linecap')</code></td>
    <td><code>round</code></td>
  </tr>
  <tr>
    <td><code>$icons('stroke-linejoin')</code></td>
    <td><code>round</code></td>
  </tr>

  <tr>
    <td><code>$icons('fill')</code></td>
    <td><code>none</code></td>
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

### hide-svg-symbols

Adds styles for hiding your SVG symbols file.

```scss
@include hide-svg-symbols();
```

<p class="subheading">Example Usage</p>

```scss
.#{map-get($icons, 'class-symbols')} {
  @include hide-svg-symbols();
}
```

</li>

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

<p class="subheading">Example Usage</p>

You'll want to wrap the mixin with whatever icon class you'd like to use. The default class output uses the class variable in the icons map.

```scss
.#{map-get($icons, 'class')} {
  @include make-icon();
}
```

</li>

<li markdown="1">

### add-icon-button

Adds icon styles based on the context of a button. Possible context options are: `'base'`, `'solo'`, `'left'` and `'right'`

```scss
@include add-icon-button( $context: 'base', $options: () );
```

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$context</code></td>
    <td>String</td>
    <td><code>'base'</code></td>
  </tr>
  <tr>
    <td><code>$options</code></td>
    <td>Map</td>
    <td><code>$icons()</code></td>
  </tr>
</table>

<p class="subheading">Example Usage</p>

You'll want to wrap the mixin with whatever icon class you'd like to use. The default class output uses the class variable in the icons map.

```html
<button class="button button-demo-1">{% raw %}{% include icons/feather.svg %}{% endraw %} Custom Button</button>
<button class="button button-demo-2">{% raw %}{% include icons/feather.svg %}{% endraw %}</button>
```

```scss
.button-demo-1 {
  @include add-icon-button('left');
}
.button-demo-2 {
  @include add-icon-button('solo');
}
```

<div class="demo demo-icon-button">
  <p>
    <button class="button button-demo-1">{% include icons/feather.svg %} Custom Button</button>
    <button class="button button-demo-2">{% include icons/feather.svg %}</button>
  </p>
</div>

</li>

</ul>
