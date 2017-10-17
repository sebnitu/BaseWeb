---
layout: page
title: "Badges"
order: 1
---

Badges are a compact way to represent content such as tags, counters or labels. They primarily contain text and can also contain dismissible triggers. Badges can be represented using a `<span>` element can also be `<a>` links or `<button>` elements.

```html
<span class="badge">Default badge</span>
<a class="badge" href="#">Linked Badge</a>
<button class="badge">Button Badge</button>
```

<div class="demo demo-badges">
  <span class="badge">Default badge</span>
  <a class="badge" href="#">Linked Badge</a>
  <button class="badge">Button Badge</button>
</div>

## Modifiers

Badges also include a number of modifier classes. The `.pill` and `.square` modifiers change the border radius:

```html
<button class="badge inverted">Badge</button>
<button class="badge inverted pill">Badge</button>
<button class="badge inverted square">Badge</button>
```

<div class="demo demo-badges">
  <button class="badge inverted">Badge</button>
  <button class="badge inverted pill">Badge</button>
  <button class="badge inverted square">Badge</button>
</div>

Included are color modifiers that can help badges fit a full range of roles and context. Some of these color modifiers also have `.inverted` optional classes that swap the contrast of the badge.

<table class="table table-docs">
  <tr>
    <th>Class</th>
    <th>Example</th>
  </tr>
  <tr>
    <td><span class="text-soften">default</span></td>
    <td><button class="badge">Badge</button></td>
  </tr>
  <tr>
    <td><code>.inverted</code></td>
    <td><button class="badge inverted">Badge</button></td>
  </tr>
  <tr>
    <td><code>.active</code></td>
    <td><button class="badge active">Badge</button></td>
  </tr>

  <tr>
    <td><code>.blue</code> <code>.inverted</code></td>
    <td>
      <button class="badge blue">Badge</button>
      <button class="badge blue inverted">Badge</button>
    </td>
  </tr>

  <tr>
    <td><code>.green</code> <code>.inverted</code></td>
    <td>
      <button class="badge green">Badge</button>
      <button class="badge green inverted">Badge</button>
    </td>
  </tr>

  <tr>
    <td><code>.yellow</code> <code>.inverted</code></td>
    <td>
      <button class="badge yellow">Badge</button>
      <button class="badge yellow inverted">Badge</button>
    </td>
  </tr>

  <tr>
    <td><code>.orange</code> <code>.inverted</code></td>
    <td>
      <button class="badge orange">Badge</button>
      <button class="badge orange inverted">Badge</button>
    </td>
  </tr>

  <tr>
    <td><code>.red</code> <code>.inverted</code></td>
    <td>
      <button class="badge red">Badge</button>
      <button class="badge red inverted">Badge</button>
    </td>
  </tr>

  <tr>
    <td><code>.purple</code> <code>.inverted</code></td>
    <td>
      <button class="badge purple">Badge</button>
      <button class="badge purple inverted">Badge</button>
    </td>
  </tr>

  <tr>
    <td><code>.light</code></td>
    <td><button class="badge light">Badge</button></td>
  </tr>

  <tr>
    <td><code>.dark</code></td>
    <td><button class="badge dark">Badge</button></td>
  </tr>
</table>

Another unique modifier is `.dot` which converts badges into a dot notification element.

```html
<span class="badge dot">*</span>
```

<div class="demo demo-badges">

  <button class="button">
    Notifications <span class="badge dot blue inverted">*</span>
  </button>

  <button class="button button-icon">
    {% include content-icon.html icon="bell" %}
    <span class="badge dot red inverted">*</span>
  </button>

</div>

## Dismissible

Badges can also be made [dismissible](/docs/javascript/dismissible/) by adding the appropriate classes and a dismiss trigger using [chips](/docs/elements/chips/).

```html
  <span class="badge dismissible">
    Dismissible Badge <a href="#" class="dismiss chip">{% raw %}{% include icons/x.svg %}{% endraw %}</a>
  </span>
```

<div class="demo demo-badges">
  <span class="badge dismissible blue inverted">
    Dismissible Badge <a href="#" class="dismiss chip">{% include content-icon.html icon="x" %}</a>
  </span>
  <span class="badge dismissible pill blue inverted">
    Dismissible Badge <a href="#" class="dismiss chip">{% include content-icon.html icon="x" %}</a>
  </span>
</div>

## Button badge

Buttons can also contain the badge component and it will get some custom styles and a set of button modifier classes. The two are `.button-badge-right` and `.button-badge-left` depending on if the badge appears before or after button text.

```html
<button class="button primary button-badge-right">
  Button with Badge <span class="badge blue">24</span>
</button>
<button class="button secondary button-badge-left">
  <span class="badge red">7</span> Button with Badge
</button>
```

<div class="demo demo-badges">
  <button class="button primary button-badge-right">
    Button with Badge <span class="badge blue">24</span>
  </button>
  <button class="button secondary button-badge-left">
    <span class="badge red">7</span> Button with Badge
  </button>
</div>

<div id="toc" class="toc"></div>

<section id="map-badges" class="docs-item" markdown="1">

### Variable Map

Button variables are encompassed within the `$badges` map and are used throughout all button mixins to set default values.

```scss
$badges: (
  'output' : true,
  'output-modifiers' : true,
  'output-buttons' : true,
  'class' : 'badge',

  'padding' : 0.25rem 0.5rem,
  'font-size' : 0.9em,
  'line-height' : 1.4em,
  'border' : none,
  'border-radius' : $border-radius,
  'transition' : $transition,

  'chips' : (
    'margin' : 0 -0.25em 0 0.5em,
    'padding' : 0.125em,
  ),

  'buttons' : (
    'margin' : 0.5em,
    'padding' : .25em .5em,
  ),

  'modifiers' : (
    'default' : (
      'color' : $color,
      'background' : rgba($black, 0.05),
      'hover' : (
        'cursor': pointer,
        'color' : $color,
        'background' : rgba($black, 0.15),
      ),
    ),
    'inverted' : (
      'color' : $white,
      'background' : $gray,
      'hover' : (
        'color' : $white,
        'background' : $gray-700,
      ),
    ),
    'active' : (
      'color' : $white,
      'background' : $blue,
      'hover' : (
        'color' : $white,
        'background' : $blue-700,
      ),
    ),

    'blue' : (
      'color' : $blue,
      'background' : $blue-50,
      'hover' : (
        'color' : $blue,
        'background' : $blue-100,
      ),
    ),
    'blue.inverted' : (
      'color' : $white,
      'background' : $blue,
      'hover' : (
        'color' : $white,
        'background' : $blue-700,
      ),
    ),
    'green' : (
      'color' : $green,
      'background' : $green-50,
      'hover' : (
        'color' : $green-700,
        'background' : $green-100,
      ),
    ),
    'green.inverted' : (
      'color' : $white,
      'background' : $green,
      'hover' : (
        'color' : $white,
        'background' : $green-700,
      ),
    ),
    'yellow' : (
      'color' : $color,
      'background' : $yellow-100,
      'hover' : (
        'color' : $color,
        'background' : $yellow-300,
      ),
    ),
    'yellow.inverted' : (
      'color' : $color,
      'background' : $yellow,
      'hover' : (
        'color' : $color,
        'background' : $yellow-600,
      ),
    ),
    'orange' : (
      'color' : $orange-700,
      'background' : $orange-50,
      'hover' : (
        'color' : $orange-700,
        'background' : $orange-100,
      ),
    ),
    'orange.inverted' : (
      'color' : $white,
      'background' : $orange,
      'hover' : (
        'color' : $white,
        'background' : $orange-700,
      ),
    ),
    'red' : (
      'color' : $red,
      'background' : $red-50,
      'hover' : (
        'color' : $red-700,
        'background' : $red-100,
      ),
    ),
    'red.inverted' : (
      'color' : $white,
      'background' : $red,
      'hover' : (
        'color' : $white,
        'background' : $red-700,
      ),
    ),
    'purple' : (
      'color' : $purple,
      'background' : $purple-50,
      'hover' : (
        'color' : $purple-700,
        'background' : $purple-100,
      ),
    ),
    'purple.inverted' : (
      'color' : $white,
      'background' : $purple,
      'hover' : (
        'color' : $white,
        'background' : $purple-700,
      ),
    ),
    'light' : (
      'color' : $color,
      'background' : rgba($white, 0.75),
      'hover' : (
        'color' : $color,
        'background' : rgba($white, 1),
      ),
    ),
    'dark' : (
      'color' : $white,
      'background' : rgba($black, 0.5),
      'hover' : (
        'color' : $white,
        'background' : rgba($black, 0.75),
      ),
    ),
    'square' : (
      'border-radius' : 0,
    ),
    'pill' : (
      'padding' : 0.25rem 0.75rem,
      'border-radius' : 3rem,
      'chips' : (
        'margin' : 0 -0.5rem 0 0.5rem,
      ),
    ),
    'dot' : (
      'display' : inline-block,
      'width' : 8px,
      'height' : 8px,
      'padding' : 0,
      'vertical-align' : top,
      'border-radius': 50%,
    ),
  ),

) !default;
```

</section><!-- .docs-item -->

<section id="mixin-make-badge" class="docs-item" markdown="1">

### make-badge

Creates the base styles for badges block as well as the default modifier styles.

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
    <td><code>$badges</code></td>
  </tr>
</table>

<p class="subheading">Example Usage</p>

For default badge styles, wrap the mixin include with your badge class. In this case, we'll use the default:

```scss
.#{map-get($badges, 'class')} {
  @include make-badge();
}
```

For style on anchor badges, we'll use the `add-modifiers` mixin passing in the $badges map, default key and we'll set the selector output to false so that styles are injected directly. We'll also disable the base output since we've already output those styles in the previous example.

```scss
a.#{map-get($badges, 'class')} {
  @include add-modifiers($badges, 'default', false, ('output-base': false));
}
```

</section><!-- .docs-item -->
