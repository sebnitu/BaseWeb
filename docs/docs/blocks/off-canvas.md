---
layout: page
title: "Off-Canvas"
order: 6
---

The off-canvas component block is a design pattern that hides aside content outside of the default viewport which can be revealed using a button trigger. This is most commonly used for navigation components on mobile viewports. The structure of an off-canvas block is encompassed within four elements: `oc-wrap`, `oc-content`, `oc-inner` and `oc-aside`.

```html
<div class="oc-wrap">
  <section class="oc-content">
    <div class="oc-inner">
      ...
    </div>
  </section>
  <aside class="oc-aside oc-aside-id">
    ...
  </aside>
</div>
```

The off-canvas aside is triggered using a button or link with the class of `oc-trigger` and a `data-target` attribute with the unique id of the aside element.

```html
<button class="oc-trigger" data-target="oc-aside-id">Menu</button>
```

<div class="demo demo-off-canvas">
  <div class="oc-wrap">
    <section class="oc-content">
      <div class="oc-inner">
        <p class="text-center">
          <button class="button primary oc-trigger" data-target="slide-in-left">Off-canvas trigger</button>
        </p>
      </div>
    </section>
    <aside class="oc-aside slide-in-left">
      <p>Off-canvas content goes here...</p>
    </aside>
  </div>
</div>

If you're looking to add a close trigger for off-canvas content, simply create a button with the `.oc-trigger` class and omit the `data-target` attribute. You can optionally use the `.button` class and `.close` modifier for a stylized <code>&times;</code> trigger.

```html
<button class="oc-trigger close">&times;</button>
```

## Off-Canvas Transitions

There are eight unique effects with left and right position variations and the option to create custom transitions. Try out the transitions below. The **transition value** is what you'd set in the `$off-canvas('transition')` variable or pass to the `add-off-canvas-transition()` mixin.

<div class="demo demo-off-canvas" id="demo-off-canvas-transitions">
  <div class="oc-wrap">
    <section class="oc-content">
      <div class="oc-inner">
        <form class="form-off-canvas-transitions">
          <div class="form-group">
            <div class="row">

              <div class="col col-6">
                <label for="oc-effect">Effect</label>
                <select class="input" id="oc-effect" name="oc-effect">
                  <option value="slide-in">slide-in</option>
                  <option value="reveal">reveal</option>
                  <option value="slide-along">slide-along</option>
                  <option value="slide-out">slide-out</option>
                  <option value="scale-down">scale-down</option>
                  <option value="scale-up">scale-up</option>
                  <option value="scale-rotate">scale-rotate</option>
                  <option value="open-door">open-door</option>
                </select>
              </div>

              <div class="col col-6">
                <label for="oc-position">Position</label>
                <select class="input" id="oc-position" name="oc-position">
                  <option value="left">left</option>
                  <option value="right">right</option>
                </select>
              </div>

            </div><!-- .row -->
          </div><!-- .form-group -->
          <div class="form-group">
            <label for="oc-transition-value">Transition value</label>
            <input class="input" id="oc-transition-value" name="oc-transition-value" value="slide-in-left" readonly>
          </div><!-- .form-group -->
          <div class="form-action">
            <button id="oc-trigger-sample" class="button primary oc-trigger" data-target="slide-in-left">Sample off-canvas transition</button>
          </div><!-- .form-action -->
        </form>
      </div>
    </section>
    <aside class="oc-aside slide-in-left">
      <button class="button close oc-trigger">&times;</button>
      <p>Off-canvas content goes here...</p>
    </aside>
  </div>
</div>

<div class="notice info">
  <p><strong>Credit:</strong> Transition effects were inspired from an article by <a class="onclick-newtab" href="https://tympanus.net/Development/SidebarTransitions/">Mary Lou</a> over at Codrops.</p>
</div>

If instead you prefer to create a custom transition effect, you can disable the default transition output by passing the value `null` to the `$off-canvas('transition')` variable. Alternatively, you can also disable all class based output by passing the value `false` to the `$off-canvas('classes')` variable. Either of these methods will disable the default class output and allow you to create your own custom transition effects. Just make sure you're outputting the base off-canvas styles if you opt to disable class based output.

```scss
// If disabling all class output, you can still build base off-canvas using:
@include make-off-canvas();

// For custom transition effects, simply use the unique off-canvas aside
// identifier and active class (`.oc-active` by default)
.custom-aside.oc-aside {
  left: 0;
  visibility: visible;
  transform: translate3d(-100%, 0, 0);
}
.custom-aside.oc-active .custom-aside.oc-aside {
  visibility: visible;
  transform: translate3d(0, 0, 0);
}
```

## Off-Canvas JavaScript

Like all BaseWeb components that require JavaScript behavior, you can use the script shown below along with jQuery to get started. Alternatively, you can also write your own scripts for off-canvas content. The general pattern for an off-canvas component should follow these requirments:

1. A trigger should toggle the off-canvas aside, usually a button.
2. Off-canvas trigger events should close active asides within their scope.
3. Clicking on any area of the document or component scope that is not the aside should close and hide the active aside.
4. It should be possible to have multiple off-canvas asides and/or components.
5. These components should be self enclosed and properly scoped to not conflict with other instances.

```js
// requires jQuery (~3.1.1)

/**
 * @Off Canvas
 */
$('.oc-trigger').each(function () {
  var
    $this = $(this),
    $wrap = $this.closest('.oc-wrap'),
    $aside = $wrap.find('.oc-aside'),
    target = $this.attr('data-target'),
    reset = 'oc-wrap',
    is_active = false,
    close = function() {
      // Remove active class
      $wrap.removeClass('oc-active');
      // Remove delay class after the set transition duration
      setTimeout( function() {
        $wrap.removeClass('oc-delay');
      }, 500 );
    }
  ;

  // Button click event
  $this.click(function(e) {
    is_active = $wrap.hasClass('oc-active');

    // Check if it's a close button or if off-canvas is already active
    if(!target || is_active) {
      // Close off-canvas content
      close();
    } else {
      // Reset container class
      $wrap.attr('class', reset);
    }
    // Add target class
    if(target && !is_active) {
      $wrap.addClass(target);
      // Add active and delay classes after a slight delay
      setTimeout( function() {
        $wrap.addClass('oc-active oc-delay');
      }, 25 );
    }

    // Stop the default behavior
    return false;
  });

  // Aside click event
  $aside.click(function(e) {
    // Stop the click propogation from bubbling down to the container
    e.stopPropagation();
  });

  // Container click event
  $wrap.click(function(e) {
    // Close off-canvas content
    close();
  });

});
```

<div class="notice warning">
  <p>Keep in mind if you modify the default classes or transition duration in your <code>$off-canvas()</code> variable map, you should also reflect those changes in your JavaScript where these values are referenced.</p>
</div>

<section class="subsection subsection-variables" markdown="1">

# Off-Canvas Variables

Off-canvas variables are encompassed within the `$off-canvas()` map and are used throughout all off-canvas mixins to set default values.

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$off-canvas('classes')</code></td>
    <td><code>true</code> <a href="#var-note-1">*</a></td>
  </tr>
  <tr>
    <td><code>$off-canvas('class-wrap')</code></td>
    <td><code>oc-wrap</code></td>
  </tr>
  <tr>
    <td><code>$off-canvas('class-content')</code></td>
    <td><code>oc-content</code></td>
  </tr>
  <tr>
    <td><code>$off-canvas('class-inner')</code></td>
    <td><code>oc-inner</code></td>
  </tr>
  <tr>
    <td><code>$off-canvas('class-aside')</code></td>
    <td><code>oc-aside</code></td>
  </tr>
  <tr>
    <td><code>$off-canvas('class-aside-id')</code></td>
    <td><code>oc-aside-left</code></td>
  </tr>
  <tr>
    <td><code>$off-canvas('class-active')</code></td>
    <td><code>oc-active</code></td>
  </tr>
  <tr>
    <td><code>$off-canvas('class-delay')</code></td>
    <td><code>oc-delay</code></td>
  </tr>

  <tr>
    <td><code>$off-canvas('screen-content')</code></td>
    <td><code>rgba($black, 0.2)</code></td>
  </tr>
  <tr>
    <td><code>$off-canvas('screen-aside')</code></td>
    <td><code>rgba($black, 0.2)</code></td>
  </tr>

  <tr>
    <td><code>$off-canvas('transition')</code></td>
    <td><code>'slide-in-left'</code></td>
  </tr>
  <tr>
    <td><code>$off-canvas('transition-duration')</code></td>
    <td><code>0.5s</code></td>
  </tr>
  <tr>
    <td><code>$off-canvas('width')</code></td>
    <td><code>280px</code></td>
  </tr>
  <tr>
    <td><code>$off-canvas('wrap-height')</code></td>
    <td><code>null</code></td>
  </tr>
  <tr>
    <td><code>$off-canvas('aside-position')</code></td>
    <td><code>fixed</code></td>
  </tr>

  <tr>
    <td><code>$off-canvas('background-wrap')</code></td>
    <td><code>$bg-color</code></td>
  </tr>
  <tr>
    <td><code>$off-canvas('background-aside')</code></td>
    <td><code>$white</code></td>
  </tr>
  <tr>
    <td><code>$off-canvas('background-content')</code></td>
    <td><code>$white</code></td>
  </tr>
</table>

<div class="notice yellow" id="var-note-1" markdown="1">
\* Whether or not we should output off-canvas classes. Set to `false` if you want to use the off-canvas mixins semantically and/or reduce CSS output.
</div>

</section>

<section class="subsection subsection-mixins" markdown="1">

# Off-Canvas Mixins

Off-canvas mixins are used to create the base styles for an off-canvas component block.

<ul class="list list-docs">

<li markdown="1">

## make-off-canvas

Creates the base styles for the off-canvas block including wrapper, content, inner content and aside content whos default classes are output as `.oc-wrap`, `.oc-content`, `.oc-inner` and `.oc-aside` respectivly. If content and aside screen backgrounds are provided, styles will also be output for these pseudo elements.

```scss
@include make-off-canvas( $options: () );
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
    <td><code>$off-canvas()</code></td>
  </tr>
</table>

### Example Usage

Use this mixin to output the default class styles for off-canvas. You can also pass in a variable map to override specific settings.

```scss
// Use all default settings from $off-canvas variable map
@include make-off-canvas();

// Change the background styles, but keep the rest of the $off-canvas defaults
@include make-off-canvas((
  'background-aside' : $blue-gray,
  'background-content' : $brown-100
));
```

<div class="demo demo-off-canvas oc-custom">
  <div class="oc-wrap">
    <section class="oc-content">
      <div class="oc-inner">
        <p class="text-center">
          <button class="button primary oc-trigger" data-target="slide-in-left">Off-canvas trigger</button>
        </p>
      </div>
    </section>
    <aside class="oc-aside slide-in-left">
      <p>Off-canvas content goes here...</p>
    </aside>
  </div>
</div>

</li>

<li markdown="1">

## add-off-canvas-transition

Creates transition styles for off-canvas elements. This mixin makes available 8 unique transition effects with left and right variations. These can be output using their respective style strings:

<table class="table table-docs">
  <tr>
    <th colspan="2">Avaliable Transition Effects</th>
  </tr>
  <tr>
    <th>Left</th>
    <th>Right</th>
  </tr>
  <tr>
    <td><code>'slide-in-left'</code></td>
    <td><code>'slide-in-right'</code></td>
  </tr>
  <tr>
    <td><code>'reveal-left'</code></td>
    <td><code>'reveal-right'</code></td>
  </tr>
  <tr>
    <td><code>'slide-along-left'</code></td>
    <td><code>'slide-along-right'</code></td>
  </tr>
  <tr>
    <td><code>'slide-out-left'</code></td>
    <td><code>'slide-out-right'</code></td>
  </tr>
  <tr>
    <td><code>'scale-down-left'</code></td>
    <td><code>'scale-down-right'</code></td>
  </tr>
  <tr>
    <td><code>'scale-up-left'</code></td>
    <td><code>'scale-up-right'</code></td>
  </tr>
  <tr>
    <td><code>'scale-rotate-left'</code></td>
    <td><code>'scale-rotate-right'</code></td>
  </tr>
  <tr>
    <td><code>'open-door-left'</code></td>
    <td><code>'open-door-right'</code></td>
  </tr>
</table>

<div class="notice info" markdown="1">
You can [sample all of these transition effects](#demo-off-canvas-transitions) in the demonstration above.
</div>

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$options</code></td>
    <td>Map</td>
    <td><code>$off-canvas()</code></td>
  </tr>
  <tr>
    <td><code>$target</code></td>
    <td>String</td>
    <td><code>$off-canvas('class-aside-left')</code></td>
  </tr>
  <tr>
    <td><code>$style</code></td>
    <td>String</td>
    <td><code>$off-canvas('transition')</code></td>
  </tr>
</table>

### Example Usage

It's important to specify the target you'd like the transition effect to be applied to. This identifier is the unique class that is applied to the `.oc-aside` element and also the value set in off-canvas triggers using the `data-target` attribute.

```scss
// Adding custom transition effects for two seperate off-canvas aside content
@include add-off-canvas-transition($target: 'oc-aside-left', $style: 'slide-out-left');
@include add-off-canvas-transition($target: 'oc-aside-right', $style: 'scale-rotate-right');
```

```html
<div class="oc-wrap">
  <section class="oc-content">
    <div class="oc-inner">
      ...
    </div>
  </section>
  <aside class="oc-aside oc-aside-left">
    ...
  </aside>
  <aside class="oc-aside oc-aside-right">
    ...
  </aside>
</div>
```

<div class="demo demo-off-canvas">
  <div class="oc-wrap">
    <section class="oc-content">
      <div class="oc-inner">
        <p class="text-center">
          <button class="button primary oc-trigger" data-target="oc-aside-left">oc-aside-left trigger</button>
          <button class="button primary oc-trigger" data-target="oc-aside-right">oc-aside-right trigger</button>
        </p>
      </div>
    </section>
    <aside class="oc-aside oc-aside-left">
      <button class="button close oc-trigger">&times;</button>
      <p>...</p>
    </aside>
    <aside class="oc-aside oc-aside-right">
      <button class="button close oc-trigger">&times;</button>
      <p>...</p>
    </aside>
  </div>
</div>

</li>

<li markdown="1">

## add-off-canvas-wrap-height

Sets the off-canvas wrapper element height to `100%` using the delay class to only remove the height after the transition is finished. This is used for specific transitions which use 3D transforms.

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$target</code></td>
    <td>String</td>
    <td><code>null</code></td>
  </tr>
  <tr>
    <td><code>$options</code></td>
    <td>Map</td>
    <td><code>$off-canvas()</code></td>
  </tr>
</table>

### Example Usage

Primarily used internally in the `add-off-canvas-transition()` mixin, this can also be used for custom transitions that require an off-canvas wrapper height of `100%`.

```scss
// SCSS input
// If your transition effect requires a wrap with 100% height
@include add-off-canvas-wrap-height('target-id');

// CSS Output
.target-id.oc-wrap {
  transition: height 0.1s 0.25s;
}
.target-id.oc-delay.oc-wrap {
  height: 100%;
}
.target-id.oc-active.oc-wrap {
  height: 100%;
  transition: none;
}
```

<div class="notice warning" markdown="1">
Changing the height of an element that is being animated will cause the scroll to jump to the top in that element. It's preferable to try and keep the height of the wrapper the same if possible.
</div>

</li>

</ul>

</section>