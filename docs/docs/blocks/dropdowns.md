---
layout: page
title: "Dropdowns"
order: 4
---

Dropdowns represent content that is initially hidden to the user and revealed by an action---usually a hover or click---on a target area. The most common use of a dropdown is sub-navigation in a navigation menu. The dropdown event consists of two components:

<ul class="list list-docs">
  <li><strong>The Trigger:</strong> this is the element that when acted upon reveals the hidden content relative to the placement of itself. The trigger is usually represented by a button or menu item.</li>
  <li><strong>The Target (Dropdown):</strong> this is the hidden element that is revealed by the trigger. It can be any content, but it usually takes the form as a set of links. It's position is relative to the trigger that activates it.</li>
</ul>

```html
<div class="dropdown-trigger">
  <button class="button">On Hover</button>
  <div class="dropdown">
    ...
  </div>
</div>

<div class="dropdown-trigger on-click">
  <button class="button">On Click</button>
  <div class="dropdown">
    ...
  </div>
</div>
```

<div class="demo demo-dropdown">

  <div class="dropdown-trigger">
    <button class="button">On Hover</button>
    <div class="dropdown arrow">
      <div class="dropdown-content text-center">
        <a class="block">
          <p>
            <img src="/dist/img/example-03.jpg" width="40" height="40" alt="" class="circle align-center"><br>
            <strong>Sebastian Nitu</strong><br>
            <small class="text-soften">View Profile</small>
          </p>
          <p>Welcome to this example of a dropdown-content block.</p>
        </a>
      </div>
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
      </ul>
      <div class="dropdown-content">
        <div class="dropdown-trigger on-click anchor-right-top">
          <button class="button block blue">Create Account</button>
          <div class="dropdown arrow">
            <ul class="dropdown-menu">
              <li><a href="#">Help</a></li>
              <li>
                <a href="#">Settings</a>
                <ul class="dropdown-menu">
                  <li><a href="#">Help</a></li>
                  <li>
                    <a href="#">Settings</a>
                    <ul class="dropdown-menu">
                      <li><a href="#">Help</a></li>
                      <li><a href="#">Settings</a></li>
                      <li><a href="#">Analytics</a></li>
                      <li><a href="#">Log Out</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Analytics</a></li>
                  <li><a href="#">Log Out</a></li>
                </ul>
              </li>
              <li><a href="#">Analytics</a></li>
              <li><a href="#">Log Out</a></li>
            </ul>
          </div>
        </div>
        <div class="button-group block has-2">
          <button class="button">&larr; Prev</button>
          <button class="button">Next &rarr;</button>
        </div>
      </div>
    </div>
  </div>

  <div class="dropdown-trigger on-click">
    <button class="button">On Click</button>
    <div class="dropdown arrow">
      <div class="dropdown-content text-center">
        <a class="block">
          <p>
            <img src="/dist/img/example-03.jpg" width="40" height="40" alt="" class="circle align-center"><br>
            <strong>Sebastian Nitu</strong><br>
            <small class="text-soften">View Profile</small>
          </p>
          <p>Welcome to this example of a dropdown-content block.</p>
        </a>
      </div>
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
      </ul>
      <div class="dropdown-content">
        <div class="dropdown-trigger on-click anchor-right-top">
          <button class="button block blue">Create Account</button>
          <div class="dropdown arrow">
            <ul class="dropdown-menu">
              <li><a href="#">Help</a></li>
              <li>
                <a href="#">Settings</a>
                <ul class="dropdown-menu">
                  <li><a href="#">Help</a></li>
                  <li>
                    <a href="#">Settings</a>
                    <ul class="dropdown-menu">
                      <li><a href="#">Help</a></li>
                      <li><a href="#">Settings</a></li>
                      <li><a href="#">Analytics</a></li>
                      <li><a href="#">Log Out</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Analytics</a></li>
                  <li><a href="#">Log Out</a></li>
                </ul>
              </li>
              <li><a href="#">Analytics</a></li>
              <li><a href="#">Log Out</a></li>
            </ul>
          </div>
        </div>
        <div class="button-group block has-2">
          <button class="button">&larr; Prev</button>
          <button class="button">Next &rarr;</button>
        </div>
      </div>
    </div>
  </div>
</div><!-- .demo -->

The `on-click` class disables the hover styles from the dropdown trigger. This allows you to write whatever JavaScript you'd like to handle the dropdown action events. Here's an example of some jQuery you could use for displaying dropdowns on click with comments to explain the process:

```js
// Bind document click event
$(document).click(function(){
  // Hide all dropdowns that are click activated
  $('.dropdown-trigger.on-click').removeClass('active');
});

// Bind the click event to .dropdown-trigger
$('.dropdown-trigger.on-click').click(function(e) {

  // Is the dropdown already active?
  var is_active = $(this).hasClass('active');

  // Hide all dropdowns that are click activated
  $('.dropdown-trigger.on-click').removeClass('active');

  // Keep the parent dropdowns active
  $(this).parents('.dropdown-trigger').addClass('active');

  // If the dropdown is not active, add the active class
  if (!is_active) {
    $(this).addClass('active');
  }

  // Stop the click event from bubbling down to the document
  e.stopPropagation();
});

// Bind the click event to .dropdown
$('.dropdown-trigger.on-click .dropdown').click(function(e) {

  // Hide all dropdowns that are click activated
  $('.dropdown-trigger.on-click').removeClass('active');

  // Keep the parent dropdowns active
  $(this).parents('.dropdown-trigger').addClass('active');

  // Keep the current dropdown active
  $(this).addClass('active');

  // Stop the click event from bubbling down to the document
  e.stopPropagation();
});
```

The two primary content types of dropdowns are dropdown menus and then more general dropdown content. Each content type can be  used to define different dropdowns or combined for more complex dropdown content.

```html
<!-- Dropdown Content -->
<div class="dropdown-content text-center">
  <a class="block">
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
    <a class="block">
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
    <div class="dropdown-content">
      <h4>Some Heading</h4>
      <p>This is an example of a simple text block inside of a dropdown content wrapper.</p>
    </div>
    <div class="dropdown-content text-center">
      <a class="block">
        <p>
          <img src="/dist/img/example-03.jpg" width="40" height="40" alt="" class="circle align-center"><br>
          <strong>Sebastian Nitu</strong><br>
          <small class="text-soften">View Profile</small>
        </p>
        <p>Welcome to this example of a linked dropdown-content block.</p>
      </a>
    </div>
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
    </ul>
    <div class="dropdown-content">
      <button class="button block blue">Create Account</button>
      <div class="button-group block has-2">
        <button class="button">&larr; Prev</button>
        <button class="button">Next &rarr;</button>
      </div>
    </div>
  </div>

  <div class="dropdown-content text-center">
    <a class="block">
      <p>
        <img src="/dist/img/example-03.jpg" width="40" height="40" alt="" class="circle align-center"><br>
        <strong>Sebastian Nitu</strong><br>
        <small class="text-soften">View Profile</small>
      </p>
      <p>Welcome to this example of a linked dropdown-content block.</p>
    </a>

    <hr>

    <button class="button block blue">Create Account</button>
    <div class="button-group block has-2">
      <button class="button">&larr; Prev</button>
      <button class="button">Next &rarr;</button>
    </div>
  </div>

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
  </ul>

</div>

<section class="subsection subsection-variables" markdown="1">

# Dropdown Variables

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

</section>

<section class="subsection subsection-mixins" markdown="1">

# Dropdown Mixins

Dropdown mixins are used to create the base styles for a dropdown as well as their position and behavior variations.

<ul class="list list-docs">

<li markdown="1">

## make-dropdown

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

### Example Usage

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

## make-dropdown-trigger

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

### Example Usage

This example shows how BaseWeb initiates the styles for a dropdown trigger using the dropdown trigger class variable.

```scss
.#{map-get($dropdowns, 'class-dropdown-trigger')} {
  @include make-dropdown-trigger();
  ...
}
```

</li>

<li markdown="1">

## add-dropdown-style

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

### Example Usage

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

## add-dropdown-position

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

### Example Usage

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

</li>

</ul>

</section>
