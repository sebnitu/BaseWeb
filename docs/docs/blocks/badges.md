---
layout: page
title: "Badges"
order: 8
---

Badges are a compact way to represent descriptive content such as tags, counters or labels. They primarily would contain text and can also have associated photos, icons or a dismissible trigger. Badges can be represented using a `<span>` element but also as an `<a>` link.

```html
<span class="badge">Badge</span>
```

<div class="demo demo-badges">
  <p><strong>Default Badges</strong></p>
  <p>
    <span class="badge">Badge</span>
    <span class="badge pill">Badge Pill</span>
    <span class="badge square">Badge Square</span>
    <span class="badge active">Badge Active</span>
    <span class="badge inverted">Badge Inverted</span>
  </p>

  <p><strong>Active Badges</strong></p>
  <p>
    <a class="badge" href="#">Linked Badge</a>
    <a class="badge" href="#">Linked Badge</a>
    <a class="badge active" href="#">Active Badge</a>
    <a class="badge" href="#">Linked Badge</a>
  </p>

  <p><strong>Icon Badge</strong></p>
  <p class="flex">
    <a class="badge" href="#">Text Badge</a>
    <a class="badge" href="#">{% include content-icon.html icon="clock" %} Clock</a>
    <a class="badge badge-icon" href="#">{% include content-icon.html icon="clock" %}</a>
    <a class="badge inverted blue" href="#">{% include content-icon.html icon="phone" %} Phone</a>
    <a class="badge badge-icon inverted blue" href="#">{% include content-icon.html icon="phone" %}</a>
    <a class="badge inverted red" href="#">{% include content-icon.html icon="save" %} Save</a>
    <a class="badge badge-icon inverted red" href="#">{% include content-icon.html icon="save" %}</a>
    <a class="badge inverted green" href="#">{% include content-icon.html icon="share" %} Share</a>
    <a class="badge badge-icon inverted green" href="#">{% include content-icon.html icon="share" %}</a>
  </p>
  <p class="flex">
    <a class="badge pill" href="#">Text Badge</a>
    <a class="badge pill" href="#">{% include content-icon.html icon="clock" %} Clock</a>
    <a class="badge badge-icon pill" href="#">{% include content-icon.html icon="clock" %}</a>
    <a class="badge inverted blue pill" href="#">{% include content-icon.html icon="phone" %} Phone</a>
    <a class="badge badge-icon inverted blue pill" href="#">{% include content-icon.html icon="phone" %}</a>
    <a class="badge inverted red pill" href="#">{% include content-icon.html icon="save" %} Save</a>
    <a class="badge badge-icon inverted red pill" href="#">{% include content-icon.html icon="save" %}</a>
    <a class="badge inverted green pill" href="#">{% include content-icon.html icon="share" %} Share</a>
    <a class="badge badge-icon inverted green pill" href="#">{% include content-icon.html icon="share" %}</a>
  </p>

  <p><strong>Image Badge</strong></p>

  <p class="flex">
    <a class="badge" href="#"><img src="/dist/img/avatar.png" width="32" height="32" alt=""> Text Badge</a>
    <a class="badge" href="#"><img src="/dist/img/avatar-s.png" width="32" height="32" alt=""> Text Badge</a>
    <a class="badge pill" href="#"><img src="/dist/img/avatar.png" width="32" height="32" alt=""> Text Badge</a>
    <a class="badge pill" href="#"><img src="/dist/img/avatar-s.png" width="32" height="32" alt=""> Text Badge</a>
    <span class="badge dismissible">
      <img src="/dist/img/avatar.png" width="32" height="32" alt="">
      Text Badge
      <a href="#" class="dismiss close">{% include content-icon.html icon="x" %}</a>
    </span>
    <span class="badge dismissible">
      <img src="/dist/img/avatar-s.png" width="32" height="32" alt="">
      Text Badge
      <a href="#" class="dismiss close">{% include content-icon.html icon="x" %}</a>
    </span>
    <span class="badge pill dismissible">
      <img src="/dist/img/avatar.png" width="32" height="32" alt="">
      Text Badge
      <a href="#" class="dismiss close">{% include content-icon.html icon="x" %}</a>
    </span>
    <span class="badge pill dismissible">
      <img src="/dist/img/avatar-s.png" width="32" height="32" alt="">
      Text Badge
      <a href="#" class="dismiss close">{% include content-icon.html icon="x" %}</a>
    </span>
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
      <span class="badge light">7</span> Button with Badge
    </button>
    <button class="button secondary button-badge-right">
      Button with Badge <span class="badge light">16</span>
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
    <span class="badge green dismissible">Green Badge <a href="#" class="dismiss close">{% include content-icon.html icon="x" %}</a></span>
    <span class="badge green inverted dismissible">Green Badge <a href="#" class="dismiss close">{% include content-icon.html icon="x" %}</a></span>
  </p>
  <p>
    <span class="badge yellow dismissible">Yellow Badge <a href="#" class="dismiss close">{% include content-icon.html icon="x" %}</a></span>
    <span class="badge yellow inverted dismissible">Yellow Badge <a href="#" class="dismiss close">{% include content-icon.html icon="x" %}</a></span>
  </p>
  <p>
    <span class="badge red dismissible">Red Badge <a href="#" class="dismiss close">{% include content-icon.html icon="x" %}</a></span>
    <span class="badge red inverted dismissible">Red Badge <a href="#" class="dismiss close">{% include content-icon.html icon="x" %}</a></span>
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
    <a class="badge green" href="#">Green Badge</a>
    <a class="badge green inverted" href="#">Green Badge</a>
  </p>
  <p>
    <a class="badge yellow" href="#">Yellow Badge</a>
    <a class="badge yellow inverted" href="#">Yellow Badge</a>
  </p>
  <p>
    <a class="badge red" href="#">Red Badge</a>
    <a class="badge red inverted" href="#">Red Badge</a>
  </p>
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

  'padding' : 0.25rem 0.75rem,
  'font-size' : 0.9em,
  'border' : none,
  'border-radius' : $border-radius,
  'transition' : $transition,

  'close' : (
    'margin' : 0 -0.25em 0 0.5em,
  ),

  'button' : (
    'margin' : 0.5em,
    'padding' : 0.25em 0.5em,
  ),

  'modifiers' : (
    'default' : (
      'color' : $color,
      'background' : rgba($black, 0.05),
      'hover' : (
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
        'background' : $blue-100,
      ),
    ),
    'blue.inverted' : (
      'color' : $white,
      'background' : $blue,
      'hover' : (
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
      'border-radius' : 3rem,
    ),
    'dot' : (
      'display' : inline-block,
      'width' : ($base-font-size / 2),
      'height' : ($base-font-size / 2),
      'padding' : 0,
      'vertical-align' : top,
      'font-size' : 0,
      'line-height' : 0,
      'text-indent' : 100%,
      'white-space' : nowrap,
      'overflow' : hidden,
      'border-radius': 3rem,
    ),
  ),

) !default;
```

</section><!-- .docs-item -->

<section id="mixin-make-badge" class="docs-item" markdown="1">

### make-button

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

<div class="demo demo-badges">
  <p>This is a <span class="badge">Default badge</span> and a <a class="badge" href="#">Linked Badge</a></p>
</div>

</section><!-- .docs-item -->
