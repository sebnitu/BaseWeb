---
layout: page
title: "Button Groups"
order: 1
---

Button groups are a way to create a set of buttons and make them visually grouped together. Button groups can either be lined up horizontally, or stacked vertically. They can also either be presented inline, or block (meaning they span the full width of their container).

```html
<div class="button-group">
  <button class="button">Button</button>
  ...
</div>
<div class="button-group">
  <button class="button">Button</button>
  ...
</div>
```

<div class="demo">
  <p>
    <div class="button-group">
      <button class="button">Button</button>
      <button class="button">Button</button>
      <button class="button">Button</button>
    </div>
    <div class="button-group">
      <button class="button">Button</button>
      <button class="button">Button</button>
    </div>
  </p>
</div>

By default, button groups are displayed horizontal and inline. To toggle between the vertical display button styles, you can use the `.vertical` class on the button group element.

```html
<div class="button-group vertical">
  <button class="button">Button</button>
  ...
</div>
<div class="button-group vertical">
  <button class="button">Button</button>
  ...
</div>
```

<div class="demo">
  <p>
    <div class="button-group vertical">
      <button class="button">Button</button>
      <button class="button">Button</button>
      <button class="button">Button</button>
    </div>
    <div class="button-group vertical">
      <button class="button">Button</button>
      <button class="button">Button</button>
    </div>
  </p>
</div>

## Block Button Groups

To create a button group that expands the full width of its container, There's the `.block` class.

```html
<div class="button-group block vertical">
  <button class="button">Button</button>
  <button class="button">Button</button>
  <button class="button">Button</button>
</div>
```

<div class="demo">
  <p>
    <div class="button-group block vertical">
      <button class="button">Button</button>
      <button class="button">Button</button>
      <button class="button">Button</button>
    </div>
  </p>
</div>

If a button group is both horizontal and block, you'll need to define the number of children the button group has. For this, we use the mini grid system syntax of `.has-X` where `X` represents the number of children.

```html
<!-- Horizontal Block Button Group with 3 Chilren -->
<div class="button-group block has-3">
  <button class="button">Button</button>
  <button class="button">Button</button>
  <button class="button">Button</button>
</div>
```

<div class="demo">
  <p>
    <div class="button-group block has-3">
      <button class="button">Button</button>
      <button class="button">Button</button>
      <button class="button">Button</button>
    </div>
  </p>
</div>

Using the `.has-X` modifier will give each button element equal widths to a total of 100%. But if you need to give each button element unique widths, you can use the `.is-1-of-X` classes where `1-of-X` represents the fraction you want the button to take.

```html
<div class="button-group block has-margin-3">
  <button class="button is-1-of-4">Button</button>
  <button class="button is-1-of-4">Button</button>
  <button class="button is-1-of-2">Button</button>
</div>
```

<div class="demo">
  <p>
    <div class="button-group block has-margin-3">
      <button class="button is-1-of-4">Button</button>
      <button class="button is-1-of-4">Button</button>
      <button class="button is-1-of-2">Button</button>
    </div>
  </p>
</div>

<div class="notice warning" markdown="1">
If you use the `.is-1-of-X` modifier, remember that the parent button group element still needs a `has-margin-X` class to properly apply the negative right margins of the button group.
</div>

## Stack for Media Button Groups

For cases where you want button groups to be vertical block for only specific media queries, there's the `stack-for-X` classes. These classes are built using the max-width media queries, so the styles are applied to a specified breakpoint and below.

```html
<div class="button-group block has-5 stack-for-medium">
  <button class="button">Button</button>
  <button class="button">Button</button>
  <button class="button">Button</button>
  <button class="button">Button</button>
  <button class="button">Button</button>
</div>
```

<div class="demo">
  <p>
    <div class="button-group block has-5 stack-for-medium">
      <button class="button">Button</button>
      <button class="button">Button</button>
      <button class="button">Button</button>
      <button class="button">Button</button>
      <button class="button">Button</button>
    </div>
  </p>
</div>

### Available Breakpoint Stack Classes

<table class="table table-docs">
  <tr>
    <th>Class</th>
    <th>Media Query</th>
  </tr>
  <tr>
    <td><code>.stack-for-tiny</code></td>
    <td><code>media-max('small')</code></td>
  </tr>
  <tr>
    <td><code>.stack-for-small</code></td>
    <td><code>media-max('medium')</code></td>
  </tr>
  <tr>
    <td><code>.stack-for-medium</code></td>
    <td><code>media-max('large')</code></td>
  </tr>
</table>

## Button Group Wrapper

In the cases where you have multiple button groups, you have the `.button-group-wrapper` which applies comfortable spacing between button groups as well as individual buttons.

```html
<div class="button-group-wrapper">
  <div class="button-group block has-3">
    ...
  </div>
  <div class="button-group">
    ...
  </div>
  <div class="button-group">
    ...
  </div>
  <button class="button">Button</button>
</div>
```

<div class="demo">
  <p>
    <div class="button-group-wrapper">
      <div class="button-group block has-3">
        <button class="button">Button</button>
        <button class="button">Button</button>
        <button class="button">Button</button>
      </div>
      <div class="button-group">
        <button class="button">Button</button>
        <button class="button">Button</button>
      </div>
      <div class="button-group">
        <button class="button">Button</button>
        <button class="button">Button</button>
      </div>
      <button class="button">Button</button>
    </div>
  </p>
</div>

For more complex button layouts, you can use the mini grid system along with the button group wrapper to create a columned button layout. We also added a stack modifier for better usability on smaller devices.

```html
<div class="button-group-wrapper has-2">
  <div>
    <div class="button-group block has-2 stack-for-medium">
      <button class="button">Button</button>
      <button class="button">Button</button>
    </div>
  </div>
  <div>
    <div class="button-group block has-2 stack-for-medium">
      <button class="button">Button</button>
      <button class="button">Button</button>
    </div>
  </div>
</div>
```

<div class="demo">
  <p>
    <div class="button-group-wrapper has-2">
      <div>
        <div class="button-group block has-2 stack-for-medium">
          <button class="button">Button</button>
          <button class="button">Button</button>
        </div>
      </div>
      <div>
        <div class="button-group block has-2 stack-for-medium">
          <button class="button">Button</button>
          <button class="button">Button</button>
        </div>
      </div>
    </div>
  </p>
</div>

## Button Modifier Classes

As a method to easily style a group of buttons, all button color and size modifier classes are available for button groups and button group wrappers to apply for all children button elements.

```html
<div class="button-group-wrapper primary">
  ...
</div>
```

<div class="demo">
  <p>
    <div class="button-group-wrapper primary">
      <div class="button-group block has-3">
        <button class="button">Button</button>
        <button class="button">Button</button>
        <button class="button">Button</button>
      </div>
      <div class="has-2">
        <div>
          <div class="button-group block has-2 stack-for-medium">
            <button class="button">Button</button>
            <button class="button">Button</button>
          </div>
        </div>
        <div>
          <div class="button-group block has-2 stack-for-medium">
            <button class="button">Button</button>
            <button class="button">Button</button>
          </div>
        </div>
      </div>
    </div>
  </p>
</div>

<section class="subsection subsection-variables" markdown="1">

# Button Group Variables

Button Group variables are encompassed within the `$button-groups` map and are used throughout all button group mixins to set default values and toggle classes output.

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Default</th>
  </tr>

  <tr>
    <td><code>$button-groups('classes')</code></td>
    <td><code>true</code> <a href="#var-note-1">*</a></td>
  </tr>
  <tr>
    <td><code>$button-groups('classes-stack')</code></td>
    <td><code>true</code></td>
  </tr>
  <tr>
    <td><code>$button-groups('classes-extend')</code></td>
    <td><code>true</code></td>
  </tr>

  <tr>
    <td><code>$button-groups('class-group')</code></td>
    <td><code>'button-group'</code></td>
  </tr>
  <tr>
    <td><code>$button-groups('class-wrapper')</code></td>
    <td><code>'button-group-wrapper'</code></td>
  </tr>
  <tr>
    <td><code>$button-groups('class-has')</code></td>
    <td><code>map-get($mini-grid, 'class-has')</code></td>
  </tr>
  <tr>
    <td><code>$button-groups('class-is')</code></td>
    <td><code>map-get($mini-grid, 'class-is')</code></td>
  </tr>

  <tr>
    <td><code>$button-groups('fractions')</code></td>
    <td><code>map-get($mini-grid, 'fractions')</code></td>
  </tr>
  <tr>
    <td><code>$button-groups('spacing')</code></td>
    <td><code>1em</code></td>
  </tr>
</table>

<div class="notice yellow" id="var-note-1" markdown="1">
\* Whether or not we should output modifier classes. Set to `false` if you want to use the button group modifier mixins semantically and/or reduce CSS output.
</div>

</section>

<section class="subsection subsection-mixins has-inner-subsection" markdown="1">

# Button Group Mixins

Button group mixins are used to define and modify groups of buttons. They provide a way to toggle button groups being horizontal or vertical and inline or block along with other helpful modifiers and classes output.

<ul class="list list-docs">

<li markdown="1">

## make-button-group

Creates the base styles for button groups.

```scss
@include make-button-group( $options: () );
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
    <td><code>$button-groups()</code></td>
  </tr>
</table>

</li>

<li markdown="1">

## add-button-group-style

Adds button styles based on orientation and display type provided.

```scss
@include add-button-group-style( $orientation, $display, $has, $options: () );
```

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$orientation</code></td>
    <td>Keyword: horizontal | vertical</td>
    <td><code>null</code></td>
  </tr>
  <tr>
    <td><code>$display</code></td>
    <td>Keyword: inline | block</td>
    <td><code>null</code></td>
  </tr>
  <tr>
    <td><code>$has</code></td>
    <td>Number</td>
    <td><code>null</code></td>
  </tr>
  <tr>
    <td><code>$options</code></td>
    <td>Map</td>
    <td><code>$button-groups()</code></td>
  </tr>
</table>

</li>

<li markdown="1">

## add-button-group-has

Adds the button width and right margin for a horizontal block button group.

```scss
@include add-button-group-has( $has );
```

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$has</code></td>
    <td>Number</td>
    <td><code>null</code></td>
  </tr>
</table>

</li>

<li markdown="1">

## build-button-group-mini-grid-modifiers

Builds the modifier classes for button groups mini grid system.

```scss
@include build-button-group-mini-grid-modifiers( $options: () );
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
    <td><code>$button-groups()</code></td>
  </tr>
</table>

</li>

<li markdown="1">

## build-button-group-stack-modifiers

Builds the modifier classes for applying vertical block styles to a button group based on screen size.

```scss
@include build-button-group-stack-modifiers( $options: () );
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
    <td><code>$button-groups()</code></td>
  </tr>
</table>

</li>

<li markdown="1">

## make-button-group-wrapper

Creates the styles for a button group wrapper.

```scss
@include make-button-group-wrapper( $options: () );
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
    <td><code>$button-groups()</code></td>
  </tr>
</table>

</li>

</ul>

</section>
