---
layout: page
title: "Tabs"
order: 5
---

Tabs are a high level navigational component that enable switching between views of related groups of content. They appear above the content they describe and consist of two primary parts: navigation items and the content they represent. Optionally, you can use the tabs wrapping `div` with the class of `.tabs` (default) for more easily grouping content together. Tabs are linked to their content part using the `href` attribute whos hash value contains the ID of the content it describes.

```html
<div class="tabs style-fold">
  <nav class="tabs-nav">
    <ul>
      <li class="active"><a href="#tabs-panel-1">...</a></li>
      <li><a href="#tabs-panel-2">...</a></li>
      <li><a href="#tabs-panel-3">...</a></li>
      ...
    </ul>
  </nav>
  <div class="tabs-content">
    <section id="tabs-panel-1" class="tabs-panel active">...</section>
    <section id="tabs-panel-2" class="tabs-panel">...</section>
    <section id="tabs-panel-3" class="tabs-panel">...</section>
    ...
  </div>
</div>
```

<div class="demo demo-tabs">

  <div class="tabs style-fold">
    <nav class="tabs-nav">
      <ul>
        <li class="active"><a href="#tabs-panel-1">Tab 1</a></li>
        <li><a href="#tabs-panel-2">Tab 2</a></li>
        <li><a href="#tabs-panel-3">Tab 3</a></li>
        <li><a href="#tabs-panel-4">Tab 4</a></li>
        <li><a href="#tabs-panel-5">Tab 5</a></li>
      </ul>
    </nav>
    <div class="tabs-content">
      <section id="tabs-panel-1" class="tabs-panel active"><p>Tab Content 1</p></section>
      <section id="tabs-panel-2" class="tabs-panel"><p>Tab Content 2</p></section>
      <section id="tabs-panel-3" class="tabs-panel"><p>Tab Content 3</p></section>
      <section id="tabs-panel-4" class="tabs-panel"><p>Tab Content 4</p></section>
      <section id="tabs-panel-5" class="tabs-panel"><p>Tab Content 5</p></section>
    </div>
  </div>

</div><!-- .demo -->

Tabs can also be displayed without the wrapping `.tabs` element.

```html
<nav class="tabs-nav style-fold" data-content="tabs-content-1">
  <ul>
    <li class="active"><a href="#">...</a></li>
    <li><a href="#">...</a></li>
    <li><a href="#">...</a></li>
    ...
  </ul>
</nav>
<div class="tabs-content" id="tabs-content-1">
  <section id="#" class="tabs-panel active">...</section>
  <section id="#" class="tabs-panel">...</section>
  <section id="#" class="tabs-panel">...</section>
  ...
</div>
```

<div class="demo demo-tabs">

  <nav class="tabs-nav style-fold" data-content="tabs-content-1">
    <ul>
      <li class="active"><a href="#tabs-panel-6">Tab 1</a></li>
      <li><a href="#tabs-panel-7">Tab 2</a></li>
      <li><a href="#tabs-panel-8">Tab 3</a></li>
      <li><a href="#tabs-panel-9">Tab 4</a></li>
      <li><a href="#tabs-panel-10">Tab 5</a></li>
    </ul>
  </nav>
  <div class="tabs-content" id="tabs-content-1">
    <section id="tabs-panel-6" class="tabs-panel active"><p>Tab Content 1</p></section>
    <section id="tabs-panel-7" class="tabs-panel"><p>Tab Content 2</p></section>
    <section id="tabs-panel-8" class="tabs-panel"><p>Tab Content 3</p></section>
    <section id="tabs-panel-9" class="tabs-panel"><p>Tab Content 4</p></section>
    <section id="tabs-panel-10" class="tabs-panel"><p>Tab Content 5</p></section>
  </div>

</div><!-- .demo -->

<div class="notice info" markdown="1">
  When not using the tabs wrapping element, you'll need to establish the connected between the tabs navigation and the content it represents some other way. You can do this using the data attribute on the tabs navigation element (e.g. `data-content="tabs-content"`) and the id attribute on the tabs content(e.g. `id="tabs-content"`).
</div>

BaseWeb also has two available tab style sets that can be used using the `.style-fold` (shown in examples above) or `.style-line` classes.

```html
<div class="tabs style-line">
  ...
</div>
```

<div class="demo demo-tabs">

  <div class="tabs style-line">
    <nav class="tabs-nav">
      <ul>
        <li><a href="#tabs-panel-11">Tab 1</a></li>
        <li class="active"><a href="#tabs-panel-12">Tab 2</a></li>
        <li><a href="#tabs-panel-13">Tab 3</a></li>
        <li><a href="#tabs-panel-14">Tab 4</a></li>
        <li><a href="#tabs-panel-15">Tab 5</a></li>
      </ul>
    </nav>
    <div class="tabs-content">
      <section id="tabs-panel-11" class="tabs-panel"><p>Tab Content 1</p></section>
      <section id="tabs-panel-12" class="tabs-panel active"><p>Tab Content 2</p></section>
      <section id="tabs-panel-13" class="tabs-panel"><p>Tab Content 3</p></section>
      <section id="tabs-panel-14" class="tabs-panel"><p>Tab Content 4</p></section>
      <section id="tabs-panel-15" class="tabs-panel"><p>Tab Content 5</p></section>
    </div>
  </div>

</div><!-- .demo -->

## Tabs JavaScript

There are many ways you can create the tabs behavior, all with varying features and complexity. For simplicities sake, below is a jQuery example for creating tabs using BaseWeb tabs markup. The key feature here is that it enables you to omit the tabs wrapper and allows for an unlimited number of tab blocks in a single document.

```js
$('.tabs-nav').each(function(e) {

  // Save this
  var $this = $(this);

  // Save our tabs content
  var tabs_content = $this.parents('.tabs').find('.tabs-content');
  var has_content = tabs_content.length;

  // Check our other tabs content method if one wasn't found yet
  if (!has_content) {
    // Check if we have a linked content data attribute
    tabs_content = $this.attr('data-content');
    if (tabs_content) {
      // Save our tabs content
      tabs_content = $('#' + tabs_content);
      // Set has_content to true
      if (tabs_content.length) {
        has_content = 1;
      }
    } else {
      console.log('Tabs content does not exist!');
    }
  }

  // Add click event to tab links
  $this.find('a').click(function() {
    // Check if item is already active or not
    var is_active = $(this).parents('li').hasClass('active');

    if (!is_active) {
      // Remove active class from all children nav items
      $this.find('li').removeClass('active');
      // Add active class to currently selected item
      $(this).parents('li').addClass('active');

      // Check if tabs-nav has an associated content block
      if (has_content) {
        // Hide current active content
        tabs_content.find('.tabs-panel').removeClass('active');
        // Show new active content
        var target = $(this).attr('href');
        $(target).addClass('active');
      } else {
        console.log('Tabs content does not exist!');
      }
    }

    // Stop the default behavior
    return false;
  });

});
```

<section class="subsection subsection-variables" markdown="1">

# Tabs Variables

Tabs variables are encompassed within the '$tabs' map and are used throughout all tab mixins to set default values.

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$tabs('classes')</code></td>
    <td><code>true</code> <a href="#var-note-1">*</a></td>
  </tr>
  <tr>
    <td><code>$tabs('class-wrapper')</code></td>
    <td><code>'tabs'</code></td>
  </tr>
  <tr>
    <td><code>$tabs('class-nav')</code></td>
    <td><code>'tabs-nav'</code></td>
  </tr>
  <tr>
    <td><code>$tabs('class-content')</code></td>
    <td><code>'tabs-content'</code></td>
  </tr>
  <tr>
    <td><code>$tabs('class-content-panel')</code></td>
    <td><code>'tabs-panel'</code></td>
  </tr>

  <tr>
    <td><code>$tabs('margin')</code></td>
    <td><code>2em 0</code></td>
  </tr>
  <tr>
    <td><code>$tabs('padding-nav')</code></td>
    <td><code>1em</code></td>
  </tr>
  <tr>
    <td><code>$tabs('padding-nav-inline')</code></td>
    <td><code>1em 2em</code></td>
  </tr>
  <tr>
    <td><code>$tabs('padding-content')</code></td>
    <td><code>1em 2em</code></td>
  </tr>

  <tr>
    <td><code>$tabs('background')</code></td>
    <td><code>#f5f5f5</code></td>
  </tr>
  <tr>
    <td><code>$tabs('background-fade')</code></td>
    <td><code>#e6e6e6</code></td>
  </tr>
  <tr>
    <td><code>$tabs('background-accent')</code></td>
    <td><code>$white</code></td>
  </tr>

  <tr>
    <td><code>$tabs('border')</code></td>
    <td><code>1px solid #e6e6e6</code></td>
  </tr>
  <tr>
    <td><code>$tabs('border-radius')</code></td>
    <td><code>$border-radius</code></td>
  </tr>

  <tr>
    <td><code>$tabs('color')</code></td>
    <td><code>$color</code></td>
  </tr>
  <tr>
    <td><code>$tabs('color-fade')</code></td>
    <td><code>$color-light</code></td>
  </tr>
  <tr>
    <td><code>$tabs('color-accent')</code></td>
    <td><code>$blue</code></td>
  </tr>

  <tr>
    <td><code>$tabs('transition')</code></td>
    <td><code>$transition</code></td>
  </tr>
</table>

<div class="notice yellow" id="var-note-1" markdown="1">
\* Whether or not we should output tabs classes. Set to `false` if you want to use the tabs modifier mixins semantically and/or reduce CSS output.
</div>

</section>

<section class="subsection subsection-mixins" markdown="1">

# Tab Mixins

Tab mixins are used to create the base styles for a tabs.

<ul class="list list-docs">

<li markdown="1">

## make-tabs

Creates the base styles for a the tabs block including tab wrapper, navigation and content whos default classes are output as `.tabs`, `.tabs-nav` and `.tabs-content` respectivly.

```scss
@include make-tabs( $options: () );
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
    <td><code>$tabs()</code></td>
  </tr>
</table>

### Example Usage

To create a custom set of tab styles, you can use the make-tabs mixin to apply the base stack order, margins and content display styles.

```scss
// Outputs the default styles using the values in the $tabs map.
@include make-tabs();

// Create tab styles using custom tab classes class:
@include make-tabs((
  'class-nav'           : 'nav',
  'class-content'       : 'content',
  'class-content-panel' : 'panel'
));
```

</li>

<li markdown="1">

## add-tab-style

Creates a predefined stylistic feel for your tabs. There are currently two presets, fold and line style tabs.

```scss
@include add-tab-style( $options: (), $style : 'fold', $class : null );
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
    <td><code>$tabs()</code></td>
  </tr>
  <tr>
    <td><code>$style</code></td>
    <td>String (fold, line)</td>
    <td><code>'fold'</code></td>
  </tr>
  <tr>
    <td><code>$class</code></td>
    <td>String</td>
    <td><code>'style-#{$style}'</code></td>
  </tr>
</table>

### Example Usage

By default, both tab styles are output using their default classes `.style-fold` and `.style-line`.

```scss
// Tabs Style: Default
@include add-tab-style($style: 'fold');

// Tabs Style: Line
@include add-tab-style($style: 'line');
```

```html
<div class="tabs style-fold">
  <nav class="tabs-nav">
    ...
  </nav>
  <div class="tabs-content">
    ...
  </div>
</div>

<div class="tabs style-line">
  ...
</div>
```

</li>

</ul>

</section>