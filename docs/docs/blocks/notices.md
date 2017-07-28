---
layout: page
title: "Notices"
order: 2
---

Notices in BaseWeb represent content blocks that give additional contextual information. This could be helpful tips, success, warning or error messages and additional information to a document. The most basic implementation involves a `<div>` with the `.notice` class.

```html
<div class="notice">
  <p>...</p>
</div>
```

<div class="demo">
  <div class="notice">
    <p>This is an example notice.</p>
  </div>
</div>

You can also create dismissible notices but adding the `.dismissible` class and a close button. The class used for close buttons is set using the `$notices('class-close')` variable.

```html
<div class="notice dismissible">
  <button class="button close">&times;</button>
  <p>...</p>
</div>
```

```js
// Example jQuery implementation of dismissible notices
$('.dismissible > .close').on('click', function() {
  $(this).closest('.dismissible').fadeOut();
});
```

<div class="demo">
  <div class="row">
    <div class="col col-6">
      <div class="notice dismissible">
        <button class="button close">&times;</button>
        <p>Dismissible</p>
      </div>
    </div>
    <div class="col col-6">
      <div class="notice dismissible inverted">
        <button class="button close">&times;</button>
        <p>Dismissible</p>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col col-12">
      <div class="button-group float-right">
        <button class="button default small" onclick="dismissible.hideAll('.demo');">Dismiss All</button>
        <button class="button default small" onclick="dismissible.showAll('.demo');">Show All</button>
      </div>
    </div>
  </div>
</div>

<section class="subsection subsection-variables" markdown="1">

# Notice Variables

Notice variables are encompassed within the '$notices' map and are used throughout all notice mixins to set default values.

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$notices('classes')</code></td>
    <td><code>true</code> <a href="#var-note-1">*</a></td>
  </tr>
  <tr>
    <td><code>$notices('class-inverted')</code></td>
    <td><code>'inverted'</code> <a href="#var-note-2">**</a></td>
  </tr>
  <tr>
    <td><code>$notices('class-close')</code></td>
    <td><code>'close'</code></td>
  </tr>

  <tr>
    <td><code>$notices('margin')</code></td>
    <td><code>2em 0</code></td>
  </tr>
  <tr>
    <td><code>$notices('padding')</code></td>
    <td><code>0.25em 1.25em</code></td>
  </tr>
  <tr>
    <td><code>$notices('padding-small')</code></td>
    <td><code>null</code></td>
  </tr>
  <tr>
    <td><code>$notices('padding-large')</code></td>
    <td><code>null</code></td>
  </tr>
  <tr>
    <td><code>$notices('padding-inline')</code></td>
    <td><code>0 0.25em</code></td>
  </tr>

  <tr>
    <td><code>$notices('font-size')</code></td>
    <td><code>1em</code></td>
  </tr>
  <tr>
    <td><code>$notices('font-size-small')</code></td>
    <td><code>0.9em</code></td>
  </tr>
  <tr>
    <td><code>$notices('font-size-large')</code></td>
    <td><code>1.1em</code></td>
  </tr>
  <tr>
    <td><code>$notices('line-height')</code></td>
    <td><code>1.5em</code></td>
  </tr>

  <tr>
    <td><code>$notices('pull-breakpoint')</code></td>
    <td><code>medium</code></td>
  </tr>
  <tr>
    <td><code>$notices('pull-width')</code></td>
    <td><code>45%</code></td>
  </tr>
  <tr>
    <td><code>$notices('pull-margin-left')</code></td>
    <td><code>0.5em 2em 1em 0</code></td>
  </tr>
  <tr>
    <td><code>$notices('pull-margin-right')</code></td>
    <td><code>0.5em 0 1em 2em</code></td>
  </tr>

  <tr>
    <td><code>$notices('color')</code></td>
    <td><code>$color</code></td>
  </tr>
  <tr>
    <td><code>$notices('text-shadow')</code></td>
    <td><code>0 1px 0</code> <code>rgba($white, 0.25)</code></td>
  </tr>
  <tr>
    <td><code>$notices('background')</code></td>
    <td><code>$gray-100</code></td>
  </tr>
  <tr>
    <td><code>$notices('box-shadow')</code></td>
    <td><code>0 1px 3px</code> <code>rgba($black, 0.05)</code></td>
  </tr>

  <tr>
    <td><code>$notices('border')</code></td>
    <td><code>1px solid</code> <code>rgba($black, 0.15)</code></td>
  </tr>
  <tr>
    <td><code>$notices('border-radius')</code></td>
    <td><code>$border-radius</code></td>
  </tr>

  <tr>
    <th colspan="2">Inverted Notice</th>
  </tr>
  <tr>
    <td><code>$notices('inverted', 'color')</code></td>
    <td><code>$white</code></td>
  </tr>
  <tr>
    <td><code>$notices('inverted', 'text-shadow')</code></td>
    <td><code>0 1px 0</code> <code>rgba($black, 0.25)</code></td>
  </tr>
  <tr>
    <td><code>$notices('inverted', 'background')</code></td>
    <td><code>$color</code></td>
  </tr>
  <tr>
    <td><code>$notices('inverted', 'border')</code></td>
    <td><code>1px solid</code> <code>rgba($black, 0.15)</code></td>
  </tr>
  <tr>
    <td><code>$notices('inverted', 'box-shadow')</code></td>
    <td><code>0 1px 3px</code> <code>rgba($black, 0.05)</code></td>
  </tr>
</table>

<div class="notice info" id="var-note-1" markdown="1">
\* Whether or not we should output notice classes. Set to `false` if you want to use the notice modifier mixins semantically and/or reduce CSS output.
</div>

<div class="notice info" id="var-note-2" markdown="1">
** The class to use for inverted notice colors. If set to `null`, inverted color styles won't be output.
</div>

</section>

<section class="subsection subsection-mixins" markdown="1">

# Notice Mixins

Notice mixins are used to create the base styles for a notice as well as their color size and display variations.

<ul class="list list-docs">

<li markdown="1">

## make-notice

Creates the base styles for a notice block.

```scss
@include make-notice( $options: () );
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
    <td><code>$notices()</code></td>
  </tr>
</table>

### Example Usage

This example shows us using a `%base-notice` placeholder for the extend method. Other methods include adding `make-notice()` to a general class which is applied to notice elements directly (which is the method BaseWeb uses for its classes).

```scss
%base-notice {
  @include make-notice();
}
.message-success {
  @extend %base-notice;
  ...
}
.alert-error {
  @extend %base-notice;
  ...
}
```

</li>

<li markdown="1">

## add-notice-color

Adds styles for a notice color with optional output type. You can either output all notice color styles, or just the ones that are different from the default settings by setting the `$output` parameter to `'all'` or `'difference'`, respectively.

```scss
@include add-notice-color( $options: (), $output );
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
    <td><code>$notices()</code></td>
  </tr>
  <tr>
    <td><code>$output</code> <a href="#var-note-3">*</a></td>
    <td>String (all, difference)</td>
    <td><code>difference</code></td>
  </tr>
</table>

<div class="notice yellow" id="var-note-3" markdown="1">
\* Whether to output all styles, or just the ones that are different from the `$notices` map.
</div>

### Example Usage

We can create custom notice color classes using this mixin while also using the `.notice` class to inherit the base notice styles.

```scss
// We override only the color styles that change by
// using the default $output: 'difference' parameter.
.notice.custom {
  @include add-notice-color((
    'background' : $teal-50,
    'inverted' : (
      'background' : $teal
    )
  ));
}
```

<div class="demo">
  <div class="notice custom">
    <p>This is a notice with custom color styles.</p>
  </div>
  <div class="notice custom inverted">
    <p>And this is that notice with inverted styles.</p>
  </div>
</div>

### Available Classes

If you have notice class output enabled, BaseWeb will provide you with a set of notice classes and semantic aliases ready to use right away.

```html
<div class="notice">...</div>
<div class="notice inverted">...</div>

<div class="notice blue">...</div>
<div class="notice blue inverted">...</div>

<div class="notice green">...</div>
<div class="notice green inverted">...</div>

<div class="notice yellow">...</div>
<div class="notice yellow inverted">...</div>

<div class="notice orange">...</div>
<div class="notice orange inverted">...</div>

<div class="notice red">...</div>
<div class="notice red inverted">...</div>

<div class="notice purple">...</div>
<div class="notice purple inverted">...</div>
```

<div class="demo">
  <div class="row">
    <div class="col col-6"><div class="notice"><p>.notice</p></div></div>
    <div class="col col-6"><div class="notice inverted"><p>.notice .inverted</p></div></div>
  </div>
  <div class="row">
    <div class="col col-6"><div class="notice blue"><p>.notice .blue</p></div></div>
    <div class="col col-6"><div class="notice blue inverted"><p>.notice .blue .inverted</p></div></div>
  </div>
  <div class="row">
    <div class="col col-6"><div class="notice green"><p>.notice .green</p></div></div>
    <div class="col col-6"><div class="notice green inverted"><p>.notice .green .inverted</p></div></div>
  </div>
  <div class="row">
    <div class="col col-6"><div class="notice yellow"><p>.notice .yellow</p></div></div>
    <div class="col col-6"><div class="notice yellow inverted"><p>.notice .yellow .inverted</p></div></div>
  </div>
  <div class="row">
    <div class="col col-6"><div class="notice orange"><p>.notice .orange</p></div></div>
    <div class="col col-6"><div class="notice orange inverted"><p>.notice .orange .inverted</p></div></div>
  </div>
  <div class="row">
    <div class="col col-6"><div class="notice red"><p>.notice .red</p></div></div>
    <div class="col col-6"><div class="notice red inverted"><p>.notice .red .inverted</p></div></div>
  </div>
  <div class="row">
    <div class="col col-6"><div class="notice purple"><p>.notice .purple</p></div></div>
    <div class="col col-6"><div class="notice purple inverted"><p>.notice .purple .inverted</p></div></div>
  </div>
</div>

There are also available semantic class aliases for the above styles.

```scss
// Semantic Aliases
.notice.success { @extend .notice.green  }
.notice.info    { @extend .notice.blue   }
.notice.warning { @extend .notice.yellow }
.notice.danger  { @extend .notice.red    }
```

</li>

<li markdown="1">

## add-notice-size

Adds styles for notice size based on keyword or options map difference.

```scss
@include add-notice-size( $size, $options: () );
```

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$size</code></td>
    <td>String (small, default, large)</td>
    <td><span class="text-soften">None</span></td>
  </tr>
  <tr>
    <td><code>$options</code></td>
    <td>Map</td>
    <td><code>$notices()</code></td>
  </tr>
</table>

### Example Usage

The first parameter is a quick way to make a notice use the default small or large size set in our `$notices` map. Or you can pass in a `$options:()` map for custom padding, font-size and line-height.

```scss
// Use default small size
.notice-small {
  @include add-notice-size('small');
}

// Use default large size with custom font size
.notice-custom-large {
  @include add-notice-size('large', (
    'font-size': 20px
  ));
}

// Set a custom notice size
.notice-custom-size {
  @include add-notice-size(20px 40px, (
    'font-size': 20px,
    'line-height': 24px
  ));
}
```

### Available Classes

```html
<div class="notice info small">...</div>
<div class="notice info">...</div>
<div class="notice info large">...</div>
```

<div class="demo">
  <div class="row">
    <div class="col col-4"><div class="notice info small"><p>.notice .small</p></div></div>
    <div class="col col-4"><div class="notice info"><p>.notice</p></div></div>
    <div class="col col-4"><div class="notice info large"><p>.notice .large</p></div></div>
  </div>
</div>

</li>

<li markdown="1">

## add-notice-inline

Adds styles for an inline or inline-block notice. Inline notice elements retain the ability to change their color styles using the available color or semantic class modifiers.

```scss
@include add-notice-inline( $display, $options: () );
```

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$display</code></td>
    <td>Property (inline, inline-block)</td>
    <td><code>inline</code></td>
  </tr>
  <tr>
    <td><code>$options</code></td>
    <td>Map</td>
    <td><code>$notices()</code></td>
  </tr>
</table>

### Example Usage

```scss
.notice.inline {
  @include add-notice-inline();
}
```

```html
<span class="notice inline">...</span>
```

<table class="table table-docs">
  <tr>
    <th>Class</th>
    <th>Example</th>
  </tr>
  <tr>
    <td><code>.inline</code></td>
    <td>
      <span class="notice inline">Inline notice</span>
      <span class="notice inline inverted">Inline inverted notice</span>
    </td>
  </tr>
  <tr>
    <td><code>.inline .info</code></td>
    <td>
      <span class="notice info inline">Inline info notice</span>
      <span class="notice info inline inverted">Inline inverted info notice</span>
    </td>
  </tr>
  <tr>
    <td><code>.inline .success</code></td>
    <td>
      <span class="notice success inline">Inline success notice</span>
      <span class="notice success inline inverted">Inline inverted success notice</span>
    </td>
  </tr>
  <tr>
    <td><code>.inline .warning</code></td>
    <td>
      <span class="notice warning inline">Inline warning notice</span>
      <span class="notice warning inline inverted">Inline inverted warning notice</span>
    </td>
  </tr>
  <tr>
    <td><code>.inline .danger</code></td>
    <td>
      <span class="notice danger inline">Inline danger notice</span>
      <span class="notice danger inline inverted">Inline inverted danger notice</span>
    </td>
  </tr>
</table>

</li>

<li markdown="1">

## add-notice-pull

Adds styles for floating a notice to the left or right. By default, notice-pull modifiers are only floated when reaching the breakpoint set in `$notices('pull-breakpoint')` (if set to `null`, notice will always be floated).

```scss
@include add-notice-pull( $direction, $options: () );
```

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$direction</code></td>
    <td>String (left, right)</td>
    <td><span class="text-soften">None</span></td>
  </tr>
  <tr>
    <td><code>$options</code></td>
    <td>Map</td>
    <td><code>$notices()</code></td>
  </tr>
</table>

### Example Usage

```scss
.some-custom-notice {
  @include add-notice-pull('left');
}
.another-custom-notice {
  @include add-notice-pull('right');
}
```

```html
<div class="notice pull-left">...</div>
<div class="notice pull-right">...</div>
```

<div class="demo">
  <div class="notice success pull-left">
    <p>.pull-left</p>
  </div>
  <div class="notice success pull-right">
    <p>.pull-right</p>
  </div>
</div>

</li>

</ul>

</section>
