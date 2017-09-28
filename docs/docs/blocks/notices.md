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

You can also create dismissible notices but adding the `.dismissible` class and a `.dismiss` trigger. This utilizes the global [dismissible JavaScript component](/docs/javascript/dismissible/).

```html
<div class="notice dismissible">
  <button class="dismiss close">{% raw %}{% include icons/x.svg %}{% endraw %}</button>
  <p>...</p>
</div>
```

<div class="demo">
  <div class="row">
    <div class="col col-6">
      <div class="notice dismissible">
        <button class="dismiss close">{% include content-icon.html icon="x" %}</button>
        <p>Dismissible</p>
      </div>
    </div>
    <div class="col col-6">
      <div class="notice dismissible inverted">
        <button class="dismiss close">{% include content-icon.html icon="x" %}</button>
        <p>Dismissible</p>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col col-12">
      <button class="button small" onclick="dismissible.showAll('.demo');">Reset</button>
    </div>
  </div>
</div>

## Variables

Notice variables are encompassed within the `$notices` map and are used throughout all notice mixins to set default values.

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Default</th>
  </tr>

  <tr>
    <td><code>$notices('output')</code></td>
    <td><code>true</code> <a href="#var-note-1">*</a></td>
  </tr>
  <tr>
    <td><code>$notices('class')</code></td>
    <td><code>'notice'</code></td>
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
    <td><code>$notices('padding-inline')</code></td>
    <td><code>0 0.25em</code></td>
  </tr>


  <tr>
    <td><code>$notices('background')</code></td>
    <td><code>$gray-100</code></td>
  </tr>
  <tr>
    <td><code>$notices('box-shadow')</code></td>
    <td><code>null</code></td>
  </tr>
  <tr>
    <td><code>$notices('border')</code></td>
    <td><code>1px solid rgba($black, 0.05)</code></td>
  </tr>
  <tr>
    <td><code>$notices('border-radius')</code></td>
    <td><code>$border-radius</code></td>
  </tr>
  <tr>
    <td><code>$notices('color')</code></td>
    <td><code>$color</code></td>
  </tr>
  <tr>
    <td><code>$notices('font-size')</code></td>
    <td><code>1em</code></td>
  </tr>
  <tr>
    <td><code>$notices('line-height')</code></td>
    <td><code>1.5em</code></td>
  </tr>
  <tr>
    <td><code>$notices('text-shadow')</code></td>
    <td><code>null</code></td>
  </tr>


  <tr>
    <th colspan="2">Inverted Notice</th>
  </tr>

  <tr>
    <td><code>$notices('inverted', 'background')</code></td>
    <td><code>$color</code></td>
  </tr>
  <tr>
    <td><code>$notices('inverted', 'box-shadow')</code></td>
    <td><code>null</code></td>
  </tr>
  <tr>
    <td><code>$notices('inverted', 'border')</code></td>
    <td><code>null</code></td>
  </tr>
  <tr>
    <td><code>$notices('inverted', 'color')</code></td>
    <td><code>$white</code></td>
  </tr>
  <tr>
    <td><code>$notices('inverted', 'text-shadow')</code></td>
    <td><code>null</code></td>
  </tr>

</table>

<div class="notice info" id="var-note-1" markdown="1">
\* Whether or not we should output notice classes. Set to `false` if you want to use the notice modifier mixins semantically and/or reduce CSS output.
</div>

<div class="notice info" id="var-note-2" markdown="1">
** The class to use for inverted notice colors. If set to `null`, inverted color styles won't be output.
</div>

## Mixins

Notice mixins are used to create the base styles for a notice as well as their color size and display variations.

<ul class="list list-docs">

<li markdown="1">

### make-notice

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

<p class="subheading">Example Usage</p>

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

### add-notice-color

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

<p class="subheading">Example Usage</p>

We can create custom notice color classes using this mixin while also using the `.notice` class to inherit the base notice styles.

```scss
.notice.custom {
  @include add-notice-color($style: 'info');
  &.inverted {
    @include add-notice-color($style: 'info.inverted');
  }
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

<p class="subheading">Available Classes</p>

If you have notice class output enabled, BaseWeb will provide you with a set of notice classes and semantic aliases ready to use right away.

```html
<div class="notice">...</div>
<div class="notice inverted">...</div>

<div class="notice info">...</div>
<div class="notice info inverted">...</div>

<div class="notice success">...</div>
<div class="notice success inverted">...</div>

<div class="notice warning">...</div>
<div class="notice warning inverted">...</div>

<div class="notice danger">...</div>
<div class="notice danger inverted">...</div>
```

<div class="demo demo-notice">

  <div class="row">
    <div class="col col-6">
      <div class="notice dismissible"><button class="dismiss close">{% include content-icon.html icon="x" %}</button><p>.notice</p></div>
    </div>
    <div class="col col-6">
      <div class="notice inverted dismissible"><button class="dismiss close">{% include content-icon.html icon="x" %}</button><p>.notice .inverted</p></div>
    </div>
  </div>

  <div class="row">
    <div class="col col-6">
      <div class="notice info dismissible"><button class="dismiss close">{% include content-icon.html icon="x" %}</button><p>.notice .info</p></div>
    </div>
    <div class="col col-6">
      <div class="notice info inverted dismissible"><button class="dismiss close">{% include content-icon.html icon="x" %}</button><p>.notice .info .inverted</p></div>
    </div>
  </div>

  <div class="row">
    <div class="col col-6">
      <div class="notice success dismissible"><button class="dismiss close">{% include content-icon.html icon="x" %}</button><p>.notice .success</p></div>
    </div>
    <div class="col col-6">
      <div class="notice success inverted dismissible"><button class="dismiss close">{% include content-icon.html icon="x" %}</button><p>.notice .success .inverted</p></div>
    </div>
  </div>

  <div class="row">
    <div class="col col-6">
      <div class="notice warning dismissible"><button class="dismiss close">{% include content-icon.html icon="x" %}</button><p>.notice .warning</p></div>
    </div>
    <div class="col col-6">
      <div class="notice warning inverted dismissible"><button class="dismiss close">{% include content-icon.html icon="x" %}</button><p>.notice .warning .inverted</p></div>
    </div>
  </div>

  <div class="row">
    <div class="col col-6">
      <div class="notice danger dismissible"><button class="dismiss close">{% include content-icon.html icon="x" %}</button><p>.notice .danger</p></div>
    </div>
    <div class="col col-6">
      <div class="notice danger inverted dismissible"><button class="dismiss close">{% include content-icon.html icon="x" %}</button><p>.notice .danger .inverted</p></div>
    </div>
  </div>

</div>

</li>

<li markdown="1">

### add-notice-inline

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

<p class="subheading">Example Usage</p>

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

</ul>
