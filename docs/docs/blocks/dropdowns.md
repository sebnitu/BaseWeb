---
layout: page
title: "Dropdowns"
order: 4
---

Dropdowns represent content that is initially hidden to the user and revealed by an action---usually a hover or click---on a target area. The most common use of a dropdown is sub-navigation in a navigation menu. The dropdown event consists of two components:

<dl>
  <dt>The Trigger</dt>
  <dd><code>.dropdown-trigger</code> The element that when acted upon reveals the hidden content relative to the placement of itself. The trigger is usually represented by a button or menu item but the is actually the wrapper surounding the button or menu item and the dropdown itself.</dd>
  <dt>The Target</dt>
  <dd><code>.dropdown</code>The hidden element that is revealed by the trigger. It can be any content, but it usually takes the form as a set of links. It's position is relative to the trigger that activates it.</dd>
</dl>

```html
<div class="dropdown-trigger">
  <button class="button">Dropdown</button>
  <div class="dropdown">
    ...
  </div>
</div>
```

<div class="demo demo-dropdown">

  <div class="dropdown-trigger">
    <button class="button">Dropdown</button>
    <div class="dropdown">
      <div class="dropdown-content text-center">
        <a href="#" class="block">
          <p>
            <img src="/dist/img/example-03.jpg" width="40" height="40" alt="" class="circle align-center"><br>
            <strong>Sebastian Nitu</strong><br>
            <small class="text-soften">View Profile</small>
          </p>
          <p>Welcome to this example of a dropdown-content block.</p>
        </a>
      </div><!-- .dropdown-content -->
      <ul class="dropdown-menu">
        <li><a href="#">Help</a></li>
        <li><a href="#">Settings</a>
          <ul class="dropdown-menu">
            <li><a href="#">Help</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="#">Analytics</a></li>
            <li><a href="#">Log Out</a></li>
          </ul>
        </li>
        <li><a href="#">Analytics</a></li>
        <li><a href="#">Log Out</a></li>
      </ul><!-- .dropdown-menu -->
      <div class="dropdown-content">
        <button class="button block blue">Create Account</button>
        <div class="button-group block">
          <button class="button">&larr; Prev</button>
          <button class="button">Next &rarr;</button>
        </div>
      </div><!-- .dropdown-content -->
    </div><!-- .dropdown -->
  </div><!-- .dropdown-trigger default -->

</div><!-- .demo -->

The two primary content types of dropdowns are dropdown menus and then more general dropdown content. Each content type can be  used to define different dropdowns or combined for more complex dropdown content.

```html
<!-- Dropdown Content -->
<div class="dropdown-content text-center">
  <a href="#" class="block">
    ...
  </a>
  <hr>
  ...
</div>

<!-- Dropdown Menus -->
<ul class="dropdown-menu">
  <li><a href="#">...</a></li>
  <li><a href="#">...</a>
    <ul class="dropdown-menu">
      <li><a href="#">...</a></li>
      ...
    </ul>
  </li>
  ...
</ul>

<!-- Dropdown with both Content and Menus -->
<div class="dropdown">
  <div class="dropdown-content">
    ...
  </div>
  <div class="dropdown-content text-center">
    <a href="#" class="block">
      ...
    </a>
  </div>
  <ul class="dropdown-menu">
    <li><a href="#">...</a></li>
    <li><a href="#">...</a>
      <ul class="dropdown-menu">
        <li><a href="#">...</a></li>
        ...
      </ul>
    </li>
    ...
  </ul>
  <div class="dropdown-content">
    ...
  </div>
</div>
```

<div class="demo demo-dropdown demo-dropdown-styles">

  <div class="dropdown">
    <div class="dropdown-content text-center">
      <a href="#" class="block">
        <p>
          <img src="/dist/img/example-03.jpg" width="40" height="40" alt="" class="circle align-center"><br>
          <strong>Sebastian Nitu</strong><br>
          <small class="text-soften">View Profile</small>
        </p>
        <p>Welcome to this example of a linked dropdown-content block.</p>
      </a>
    </div><!-- .dropdown-content -->
    <ul class="dropdown-menu">
    <li><a href="#">List Item</a></li>
      <li><a href="#">Has Submenu</a>
        <ul class="dropdown-menu">
          <li><a href="#">Help</a></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Analytics</a></li>
          <li><a href="#">Log Out</a></li>
        </ul>
      </li>
      <li><a href="#">List Item</a></li>
      <li><a href="#">List Item</a></li>
    </ul><!-- .dropdown-menu -->
    <div class="dropdown-content">
      <button class="button block blue">Create Account</button>
      <div class="button-group block">
        <button class="button">&larr; Prev</button>
        <button class="button">Next &rarr;</button>
      </div>
    </div><!-- .dropdown-content -->
  </div><!-- .dropdown -->

  <div class="dropdown-content text-center">
    <a href="#" class="block">
      <p>
        <img src="/dist/img/example-03.jpg" width="40" height="40" alt="" class="circle align-center"><br>
        <strong>Sebastian Nitu</strong><br>
        <small class="text-soften">View Profile</small>
      </p>
      <p>Welcome to this example of a linked dropdown-content block.</p>
    </a>

    <hr>

    <button class="button block blue">Create Account</button>

    <div class="button-group block">
      <button class="button">&larr; Prev</button>
      <button class="button">Next &rarr;</button>
    </div>
  </div><!-- .dropdown-content -->

  <ul class="dropdown-menu">
    <li><a href="#">List Item</a></li>
    <li><a href="#">Has Submenu</a>
      <ul class="dropdown-menu">
        <li><a href="#">Help</a></li>
        <li><a href="#">Settings</a></li>
        <li><a href="#">Analytics</a></li>
        <li><a href="#">Log Out</a></li>
      </ul>
    </li>
    <li><a href="#">List Item</a></li>
    <li><a href="#">List Item</a></li>
  </ul><!-- .dropdown-menu -->

</div><!-- .demo -->

## JavaScript

The default behavior of dropdowns is to reveal on `:hover`. The `.on-click` and `.on-hover` classes disable the hover styles and enables the use of click or a hover with a forgiving delay. These modifiers can be used by initiating the dropdowns JavaScript using the `init()` method.

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
    <div class="dropdown">
      <div class="dropdown-content text-center">
        <a href="#" class="block">
          <p>
            <img src="/dist/img/example-03.jpg" width="40" height="40" alt="" class="circle align-center"><br>
            <strong>Sebastian Nitu</strong><br>
            <small class="text-soften">View Profile</small>
          </p>
          <p>Welcome to this example of a dropdown-content block.</p>
        </a>
      </div><!-- .dropdown-content -->
      <ul class="dropdown-menu">
        <li><a href="#">Help</a></li>
        <li><a href="#">Settings</a>
          <ul class="dropdown-menu">
            <li><a href="#">Help</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="#">Analytics</a></li>
            <li><a href="#">Log Out</a></li>
          </ul>
        </li>
        <li><a href="#">Analytics</a></li>
        <li><a href="#">Log Out</a></li>
      </ul><!-- .dropdown-menu -->
      <div class="dropdown-content">
        <button class="button block blue">Create Account</button>
        <div class="button-group block">
          <button class="button">&larr; Prev</button>
          <button class="button">Next &rarr;</button>
        </div>
      </div><!-- .dropdown-content -->
    </div><!-- .dropdown -->
  </div><!-- .dropdown-trigger .on-click -->

  <div class="dropdown-trigger on-hover">
    <button class="button">On Hover</button>
    <div class="dropdown">
      <div class="dropdown-content text-center">
        <a href="#" class="block">
          <p>
            <img src="/dist/img/example-03.jpg" width="40" height="40" alt="" class="circle align-center"><br>
            <strong>Sebastian Nitu</strong><br>
            <small class="text-soften">View Profile</small>
          </p>
          <p>Welcome to this example of a dropdown-content block.</p>
        </a>
      </div><!-- .dropdown-content -->
      <ul class="dropdown-menu">
        <li><a href="#">Help</a></li>
        <li><a href="#">Settings</a>
          <ul class="dropdown-menu">
            <li><a href="#">Help</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="#">Analytics</a></li>
            <li><a href="#">Log Out</a></li>
          </ul>
        </li>
        <li><a href="#">Analytics</a></li>
        <li><a href="#">Log Out</a></li>
      </ul><!-- .dropdown-menu -->
      <div class="dropdown-content">
        <button class="button block blue">Create Account</button>
        <div class="button-group block">
          <button class="button">&larr; Prev</button>
          <button class="button">Next &rarr;</button>
        </div>
      </div><!-- .dropdown-content -->
    </div><!-- .dropdown -->
  </div><!-- .dropdown-trigger .on-hover -->

</div><!-- .demo -->

<div class="notice info" markdown="1">
For more details on how to customize and use the public methods, take a look at the [dropdowns JavaScript](/docs/javascript/dropdowns) documentation.
</div>

<div id="toc" class="toc"></div>

<section id="block-notices-map" class="docs-item" markdown="1">

### Variable Map

Dropdown variables are encompassed within the `$dropdowns` map and are used throughout all dropdown mixins to set default values.

```scss
$dropdowns: (
  'output' : true,
  'output-position' : true,

  'class-dropdown-trigger' : 'dropdown-trigger',
  'class-dropdown'         : 'dropdown',
  'class-dropdown-content' : 'dropdown-content',
  'class-dropdown-menu'    : 'dropdown-menu',
  'class-anchor'           : 'anchor',

  'class-active' : 'active',
  'class-action-hover' : 'on-hover',
  'class-action-click' : 'on-click',

  'target' : null,
  'target-action' : null,

  'target-zindex'        : 100,
  'target-action-zindex' : 105,

  'width'             : 16rem,
  'padding'           : 1em,
  'padding-menu'      : 0.5em,
  'padding-menu-item' : 0.75em 1em,

  'block-margin'      : -0.5em,
  'block-padding'     : 1em,

  'font-size'   : px-to-rem(14px),
  'line-height' : 1.35em,

  'background'       : $white,
  'background-hover' : rgba($black, 0.05),
  'background-clip'  : padding-box,
  'border'           : 1px solid rgba($black, 0.1),
  'border-inner'     : 1px solid rgba($black, 0.1),
  'border-radius'    : $border-radius,
  'box-shadow'       : 0 2px 6px rgba($black, 0.15),
  'color'            : $color,
  'color-hover'      : $color,
  'color-active'     : $color-light,

  'content-sep'    : 0.5em,
  'content-sep-hr' : 1em,

  'offset-margin-one' : -1px, // The first position margin offset
  'offset-margin-two' : 0,    // The second position margin offset (does not apply to centered dropdowns)
  'offset-position'   : 0,    // The second position offset (does not apply to centered dropdowns)

  'dropdown-position'      : 'bottom-left',
  'dropdown-position-menu' : 'right-top',

) !default;
```

</section><!-- .docs-item -->

<section id="mixin-make-dropdown" class="docs-item" markdown="1">

### make-dropdown

Creates the base styles for dropdowns.

```scss
@include make-dropdown( $options: () );
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
    <td><code>$dropdowns()</code></td>
  </tr>
</table>

<p class="subheading">Example Usage</p>

Below is an example of how BaseWeb initiates the class specific styles for dropdowns.

```scss
.#{map-get($dropdowns, 'class-dropdown')},
.#{map-get($dropdowns, 'class-dropdown-content')},
.#{map-get($dropdowns, 'class-dropdown-menu')} {
  @include make-dropdown();
}
```

</section><!-- .docs-item -->

<section id="mixin-make-breadcrumb" class="docs-item" markdown="1">

### make-dropdown-trigger

Creates the base styles for a dropdown trigger.

```scss
@include make-dropdown-trigger( $options: () );
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
    <td><code>$dropdowns()</code></td>
  </tr>
</table>

<p class="subheading">Example Usage</p>

This example shows how BaseWeb initiates the styles for a dropdown trigger using the dropdown trigger class variable.

```scss
.#{map-get($dropdowns, 'class-dropdown-trigger')} {
  @include make-dropdown-trigger();
  ...
}
```

</section><!-- .docs-item -->

<section id="mixin-make-breadcrumb" class="docs-item" markdown="1">

### add-dropdown-style

Creates specific dropdown styles for a content type

```scss
@include add-dropdown-style( $options: (), $type : 'dropdown' );
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
    <td><code>$dropdowns()</code></td>
  </tr>
  <tr>
    <td><code>$type</code></td>
    <td>String (dropdown, dropdown-content, dropdown-menu)</td>
    <td><code>'dropdown'</code></td>
  </tr>
</table>

<p class="subheading">Example Usage</p>

Shows how dropdown styles are added using the style type variable for preset styles.

```scss
.#{map-get($dropdowns, 'class-dropdown')} {
  @include add-dropdown-style($type: 'dropdown');
}

.#{map-get($dropdowns, 'class-dropdown-content')} {
  @include add-dropdown-style($type: 'dropdown-content');
}

.#{map-get($dropdowns, 'class-dropdown-menu')} {
  @include add-dropdown-style($type: 'dropdown-menu');
}
```

</section><!-- .docs-item -->

<section id="mixin-make-breadcrumb" class="docs-item" markdown="1">

### add-dropdown-position

Adds the position styles for a dropdown.

```scss
@include add-dropdown-position( $options: (), $anchor : 'bottom-left') );
```

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Type</th>
    <th>Options</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$options</code></td>
    <td colspan="2">Map</td>
    <td><code>$dropdowns()</code></td>
  </tr>
  <tr>
    <td><code>$anchor</code></td>
    <td>String</td>
    <td>
      <code>'bottom-left'</code>, <code>'bottom-right'</code>, <code>'bottom-center'</code>,
      <code>'top-left'</code>, <code>'top-right'</code>, <code>'top-center'</code>,
      <code>'left-top'</code>, <code>'left-bottom'</code>, <code>'left-center'</code>,
      <code>'right-top'</code>, <code>'right-bottom'</code>, <code>'right-center'</code>
    </td>
    <td><code>'bottom-left'</code></td>
  </tr>
</table>

<p class="subheading">Example Usage</p>

Example of how class specific positioning are added using the dropdown position mixin. This is added to the same element that is used to trigger the dropdown.

```scss
.anchor-bottom-left {
  @include add-dropdown-position('bottom-left');
}
.anchor-bottom-right {
  @include add-dropdown-position('bottom-right');
}
.anchor-bottom-center {
  @include add-dropdown-position('bottom-center');
}
```

<div class="demo demo-dropdown demo-dropdown-positions">

  <div class="dropdown-trigger anchor-bottom-left">
    <button class="button">bottom-left</button>
    <div class="dropdown">
      <div class="dropdown-content text-center">
        <a href="#" class="block">
          <p>
            <img src="/dist/img/example-03.jpg" width="40" height="40" alt="" class="circle align-center"><br>
            <strong>Sebastian Nitu</strong><br>
            <small class="text-soften">View Profile</small>
          </p>
          <p>Welcome to this example of a dropdown-content block.</p>
        </a>
      </div><!-- .dropdown-content -->
    </div><!-- .dropdown -->
  </div><!-- .dropdown-trigger -->

  <div class="dropdown-trigger anchor-bottom-right">
    <button class="button">bottom-right</button>
    <div class="dropdown">
      <div class="dropdown-content text-center">
        <a href="#" class="block">
          <p>
            <img src="/dist/img/example-03.jpg" width="40" height="40" alt="" class="circle align-center"><br>
            <strong>Sebastian Nitu</strong><br>
            <small class="text-soften">View Profile</small>
          </p>
          <p>Welcome to this example of a dropdown-content block.</p>
        </a>
      </div><!-- .dropdown-content -->
    </div><!-- .dropdown -->
  </div><!-- .dropdown-trigger -->

  <div class="dropdown-trigger anchor-bottom-center">
    <button class="button">bottom-center</button>
    <div class="dropdown">
      <div class="dropdown-content text-center">
        <a href="#" class="block">
          <p>
            <img src="/dist/img/example-03.jpg" width="40" height="40" alt="" class="circle align-center"><br>
            <strong>Sebastian Nitu</strong><br>
            <small class="text-soften">View Profile</small>
          </p>
          <p>Welcome to this example of a dropdown-content block.</p>
        </a>
      </div><!-- .dropdown-content -->
    </div><!-- .dropdown -->
  </div><!-- .dropdown-trigger -->

  <hr>

  <div class="dropdown-trigger anchor-top-left">
    <button class="button">top-left</button>
    <div class="dropdown">
      <div class="dropdown-content text-center">
        <a href="#" class="block">
          <p>
            <img src="/dist/img/example-03.jpg" width="40" height="40" alt="" class="circle align-center"><br>
            <strong>Sebastian Nitu</strong><br>
            <small class="text-soften">View Profile</small>
          </p>
          <p>Welcome to this example of a dropdown-content block.</p>
        </a>
      </div><!-- .dropdown-content -->
    </div><!-- .dropdown -->
  </div><!-- .dropdown-trigger -->

  <div class="dropdown-trigger anchor-top-right">
    <button class="button">top-right</button>
    <div class="dropdown">
      <div class="dropdown-content text-center">
        <a href="#" class="block">
          <p>
            <img src="/dist/img/example-03.jpg" width="40" height="40" alt="" class="circle align-center"><br>
            <strong>Sebastian Nitu</strong><br>
            <small class="text-soften">View Profile</small>
          </p>
          <p>Welcome to this example of a dropdown-content block.</p>
        </a>
      </div><!-- .dropdown-content -->
    </div><!-- .dropdown -->
  </div><!-- .dropdown-trigger -->

  <div class="dropdown-trigger anchor-top-center">
    <button class="button">top-center</button>
    <div class="dropdown">
      <div class="dropdown-content text-center">
        <a href="#" class="block">
          <p>
            <img src="/dist/img/example-03.jpg" width="40" height="40" alt="" class="circle align-center"><br>
            <strong>Sebastian Nitu</strong><br>
            <small class="text-soften">View Profile</small>
          </p>
          <p>Welcome to this example of a dropdown-content block.</p>
        </a>
      </div><!-- .dropdown-content -->
    </div><!-- .dropdown -->
  </div><!-- .dropdown-trigger -->

  <hr>

  <div class="dropdown-trigger anchor-left-top">
    <button class="button">left-top</button>
    <div class="dropdown">
      <div class="dropdown-content text-center">
        <a href="#" class="block">
          <p>
            <img src="/dist/img/example-03.jpg" width="40" height="40" alt="" class="circle align-center"><br>
            <strong>Sebastian Nitu</strong><br>
            <small class="text-soften">View Profile</small>
          </p>
          <p>Welcome to this example of a dropdown-content block.</p>
        </a>
      </div><!-- .dropdown-content -->
    </div><!-- .dropdown -->
  </div><!-- .dropdown-trigger -->

  <div class="dropdown-trigger anchor-left-bottom">
    <button class="button">left-bottom</button>
    <div class="dropdown">
      <div class="dropdown-content text-center">
        <a href="#" class="block">
          <p>
            <img src="/dist/img/example-03.jpg" width="40" height="40" alt="" class="circle align-center"><br>
            <strong>Sebastian Nitu</strong><br>
            <small class="text-soften">View Profile</small>
          </p>
          <p>Welcome to this example of a dropdown-content block.</p>
        </a>
      </div><!-- .dropdown-content -->
    </div><!-- .dropdown -->
  </div><!-- .dropdown-trigger -->

  <div class="dropdown-trigger anchor-left-center">
    <button class="button">left-center</button>
    <div class="dropdown">
      <div class="dropdown-content text-center">
        <a href="#" class="block">
          <p>
            <img src="/dist/img/example-03.jpg" width="40" height="40" alt="" class="circle align-center"><br>
            <strong>Sebastian Nitu</strong><br>
            <small class="text-soften">View Profile</small>
          </p>
          <p>Welcome to this example of a dropdown-content block.</p>
        </a>
      </div><!-- .dropdown-content -->
    </div><!-- .dropdown -->
  </div><!-- .dropdown-trigger -->

  <hr>

  <div class="dropdown-trigger anchor-right-top">
    <button class="button">right-top</button>
    <div class="dropdown">
      <div class="dropdown-content text-center">
        <a href="#" class="block">
          <p>
            <img src="/dist/img/example-03.jpg" width="40" height="40" alt="" class="circle align-center"><br>
            <strong>Sebastian Nitu</strong><br>
            <small class="text-soften">View Profile</small>
          </p>
          <p>Welcome to this example of a dropdown-content block.</p>
        </a>
      </div><!-- .dropdown-content -->
    </div><!-- .dropdown -->
  </div><!-- .dropdown-trigger -->

  <div class="dropdown-trigger anchor-right-bottom">
    <button class="button">right-bottom</button>
    <div class="dropdown">
      <div class="dropdown-content text-center">
        <a href="#" class="block">
          <p>
            <img src="/dist/img/example-03.jpg" width="40" height="40" alt="" class="circle align-center"><br>
            <strong>Sebastian Nitu</strong><br>
            <small class="text-soften">View Profile</small>
          </p>
          <p>Welcome to this example of a dropdown-content block.</p>
        </a>
      </div><!-- .dropdown-content -->
    </div><!-- .dropdown -->
  </div><!-- .dropdown-trigger -->

  <div class="dropdown-trigger anchor-right-center">
    <button class="button">right-center</button>
    <div class="dropdown">
      <div class="dropdown-content text-center">
        <a href="#" class="block">
          <p>
            <img src="/dist/img/example-03.jpg" width="40" height="40" alt="" class="circle align-center"><br>
            <strong>Sebastian Nitu</strong><br>
            <small class="text-soften">View Profile</small>
          </p>
          <p>Welcome to this example of a dropdown-content block.</p>
        </a>
      </div><!-- .dropdown-content -->
    </div><!-- .dropdown -->
  </div><!-- .dropdown-trigger -->

</div><!-- .demo -->

</section><!-- .docs-item -->
