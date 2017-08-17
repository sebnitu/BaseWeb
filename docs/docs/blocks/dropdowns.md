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

The default behavior of dropdowns is reveal on `:hover` in pure CSS. The `.on-click` and `.on-hover` classes disable the hover styles and enables the use of click or a hover with a forgiving delay. These modifiers can be used by initiating the dropdowns JavaScript using the `init()` method.

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

## Variables

Dropdown variables are encompassed within the `$dropdowns` map and are used throughout all dropdown mixins to set default values.

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$dropdowns('classes')</code></td>
    <td><code>true</code> <a href="#var-note-1">*</a></td>
  </tr>
  <tr>
    <td><code>$dropdowns('classes-position')</code></td>
    <td><code>false</code></td>
  </tr>

  <tr>
    <td><code>$dropdowns('class-dropdown')</code></td>
    <td><code>'dropdown'</code></td>
  </tr>
  <tr>
    <td><code>$dropdowns('class-dropdown-content')</code></td>
    <td><code>'dropdown-content'</code></td>
  </tr>
  <tr>
    <td><code>$dropdowns('class-dropdown-menu')</code></td>
    <td><code>'dropdown-menu'</code></td>
  </tr>
  <tr>
    <td><code>$dropdowns('class-dropdown-trigger')</code></td>
    <td><code>'dropdown-trigger'</code></td>
  </tr>

  <tr>
    <td><code>$dropdowns('target')</code></td>
    <td><code>'.dropdown'</code></td>
  </tr>
  <tr>
    <td><code>$dropdowns('target-action')</code></td>
    <td><code>'&:not(.on-click):hover</code> <code>> .dropdown,</code> <code>&.active > .dropdown'</code></td>
  </tr>

  <tr>
    <td><code>$dropdowns('target-zindex')</code></td>
    <td><code>100</code></td>
  </tr>
  <tr>
    <td><code>$dropdowns('target-action-zindex')</code></td>
    <td><code>105</code></td>
  </tr>

  <tr>
    <td><code>$dropdowns('width')</code></td>
    <td><code>15rem</code></td>
  </tr>
  <tr>
    <td><code>$dropdowns('padding')</code></td>
    <td><code>1em</code></td>
  </tr>
  <tr>
    <td><code>$dropdowns('padding-menu')</code></td>
    <td><code>0.5em</code></td>
  </tr>
  <tr>
    <td><code>$dropdowns('padding-menu-item')</code></td>
    <td><code>0.75em 1em</code></td>
  </tr>
  <tr>
    <td><code>$dropdowns('block-margin')</code></td>
    <td><code>-0.5em</code></td>
  </tr>
  <tr>
    <td><code>$dropdowns('block-padding')</code></td>
    <td><code>1em</code></td>
  </tr>

  <tr>
    <td><code>$dropdowns('font-size')</code></td>
    <td><code>px-to-rem(14px)</code></td>
  </tr>
  <tr>
    <td><code>$dropdowns('line-height')</code></td>
    <td><code>1.25em</code></td>
  </tr>
  <tr>
    <td><code>$dropdowns('background')</code></td>
    <td><code>$white</code></td>
  </tr>
  <tr>
    <td><code>$dropdowns('background-hover')</code></td>
    <td><code>rgba($black, 0.05)</code></td>
  </tr>
  <tr>
    <td><code>$dropdowns('background-clip')</code></td>
    <td><code>padding-box</code></td>
  </tr>
  <tr>
    <td><code>$dropdowns('border')</code></td>
    <td><code>1px solid</code> <code>rgba($black, 0.1)</code></td>
  </tr>
  <tr>
    <td><code>$dropdowns('border-inner')</code></td>
    <td><code>1px solid</code> <code>rgba($black, 0.1)</code></td>
  </tr>
  <tr>
    <td><code>$dropdowns('border-radius')</code></td>
    <td><code>$border-radius</code></td>
  </tr>
  <tr>
    <td><code>$dropdowns('box-shadow')</code></td>
    <td><code>0 2px 6px</code> <code>rgba($black, 0.15)</code></td>
  </tr>

  <tr>
    <td><code>$dropdowns('color')</code></td>
    <td><code>$color</code></td>
  </tr>
  <tr>
    <td><code>$dropdowns('color-hover')</code></td>
    <td><code>$color</code></td>
  </tr>

  <tr>
    <td><code>$dropdowns('content-sep')</code></td>
    <td><code>0.5em</code></td>
  </tr>
  <tr>
    <td><code>$dropdowns('content-sep-hr')</code></td>
    <td><code>1em</code></td>
  </tr>

  <tr>
    <th colspan="2">Transition</th>
  </tr>
  <tr>
    <td><code>$dropdowns('transition-property')</code></td>
    <td><code>null</code></td>
  </tr>
  <tr>
    <td><code>$dropdowns('transition-in-duration')</code></td>
    <td><code>0.25s</code></td>
  </tr>
  <tr>
    <td><code>$dropdowns('transition-in-timing-function')</code></td>
    <td><code>linear</code></td>
  </tr>
  <tr>
    <td><code>$dropdowns('transition-in-delay')</code></td>
    <td><code>0s</code></td>
  </tr>
  <tr>
    <td><code>$dropdowns('transition-out-duration')</code></td>
    <td><code>0.25s</code></td>
  </tr>
  <tr>
    <td><code>$dropdowns('transition-out-timing-function')</code></td>
    <td><code>linear</code></td>
  </tr>
  <tr>
    <td><code>$dropdowns('transition-out-delay')</code></td>
    <td><code>0.25s</code></td>
  </tr>

  <tr>
    <th colspan="2">Position</th>
  </tr>
  <tr>
    <td><code>$dropdowns('offset-transition')</code></td>
    <td><code>1em</code></td>
  </tr>
  <tr>
    <td><code>$dropdowns('offset-margin')</code></td>
    <td><code>-1px</code></td>
  </tr>
  <tr>
    <td><code>$dropdowns('offset-margin-alt')</code></td>
    <td><code>0</code></td>
  </tr>
  <tr>
    <td><code>$dropdowns('offset-position')</code></td>
    <td><code>0</code></td>
  </tr>
  <tr>
    <td><code>$dropdowns('dropdown-position')</code></td>
    <td><code>bottom-left</code></td>
  </tr>
  <tr>
    <td><code>$dropdowns('dropdown-menu-position')</code></td>
    <td><code>right-top</code></td>
  </tr>
</table>

<div class="notice info" id="var-note-1" markdown="1">
\* Whether or not we should output dropdown classes. Set to `false` if you want to use the dropdown modifier mixins semantically and/or reduce CSS output.
</div>

## Mixins

Dropdown mixins are used to create the base styles for a dropdown as well as their position and behavior variations.

<ul class="list list-docs">

<li markdown="1">

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

#### Example Usage

Below is an example of how BaseWeb initiates the class specific styles for dropdowns.

```scss
.#{map-get($dropdowns, 'class-dropdown')},
.#{map-get($dropdowns, 'class-dropdown-content')},
.#{map-get($dropdowns, 'class-dropdown-menu')} {
  @include make-dropdown();
}
```

</li>

<li markdown="1">

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

#### Example Usage

This example shows how BaseWeb initiates the styles for a dropdown trigger using the dropdown trigger class variable.

```scss
.#{map-get($dropdowns, 'class-dropdown-trigger')} {
  @include make-dropdown-trigger();
  ...
}
```

</li>

<li markdown="1">

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

#### Example Usage

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

</li>

<li markdown="1">

### add-dropdown-position

Adds the position styles for a dropdown.

```scss
@include add-dropdown-position( $options: (), $anchor : 'bottom-left') );
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
    <td><code>$anchor</code></td>
    <td>String (bottom-left, bottom-right, bottom-center, top-left, top-right, top-center, left-top, left-bottom, left-center, right-top, right-bottom, right-center)</td>
    <td><code>'bottom-left'</code></td>
  </tr>
</table>

#### Example Usage

Example of how class specific positioning are added using the dropdown position mixin. This is added to the same element that is used to trigger the dropdown.

```scss
.anchor-bottom-left {
  @include add-dropdown-position($anchor: 'bottom-left');
}
.anchor-bottom-right {
  @include add-dropdown-position($anchor: 'bottom-right');
}
.anchor-bottom-center {
  @include add-dropdown-position($anchor: 'bottom-center');
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

</li>

</ul>
