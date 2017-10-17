---
layout: post
title: "The Modifiers Update"
date: 2017-10-16
version: "3.0.0"
---

<p class="text-lead" markdown="1">The modifiers update marks the next major version of BaseWeb. There has been a re-write of how components and their modifiers are built.</p>

<img src="{% include asset.html file="illustration-modifiers.jpg" %}" class="featured-image" alt="">

<div class="notice info">
  <p><strong>What is a modifier?</strong> A modifier is a class or mixin that makes partial or minor changes to a component. For example, if you wanted to change the look of a table you might add the modifier class of <code>rowed</code>.</p>
</div>

One thing I've noticed while writing components is that there is something very similar about how they get modifiers. Typically a component will have a `make-[component]` mixin which would output the base styles and then some variation of `add-[component]-style` modifier mixins. This resulted in a lot of unique mixins over the span of components that essentially do the same thing---override or add on to the base styles.

So in an attempt to simplify this process and reduce the amount of mixin bloat across components, I've introduced two new mixins: [`add-styles`](/docs/core/mixins/#mixin-add-styles) and [`add-modifiers`](/docs/core/mixins/#mixin-add-modifiers). This also led to a standardized way of writing component variable maps as well.

## add-styles

[Add-styles](/docs/core/mixins/#mixin-add-styles) is the new core mixin for outputting base and pseudo styles. First we start with a component map. Here, we define some of our base styles along with any default pseudo classes we want output using nested maps.

```scss
// Define our component map
$component: (
  'output' : true,
  'display' : inline-block,
  'padding' : 1em 2em,
  'color' : $white,
  'background' : $blue,
  'hover' : (
    'color' : $white,
    'background' : $blue
  )
);

// Output all base styles and pseudo class styles using add-styles()
.example {
  @include add-styles($component);
}
```

This will output all properties that exist in our [$add-styles](/docs/core/settings/#map-add-styles) along with styles for the pseudo-classes that exist in the same map.

```css
.example {
  display: inline-block;
  padding: 1em 2em;
  color: #fff;
  background: #2196F3;
}
.example:hover {
  color: #fff;
  background: #2196F3;
}
```

A custom `$settings` map can optionally be passed where you can also optionally disable the base output or pseudo-classes output. For more information on [add-styles](/docs/core/mixins/#mixin-add-styles), head over to the docs.

## add-modifiers

One of the powerful ways [`add-styles`](/docs/core/mixins/#mixin-add-styles) gets used is by [`add-modifiers`](/docs/core/mixins/#mixin-add-modifiers). It build on top of it's predecessor by adding the benefit of outputting modifier classes and styles from a component map. The best example of how it's used is by components who can have many modifiers such as buttons, notices, badges, etc.

We utilize it by incorporating a modifiers map inside our components.

```scss
// Define our component map
$component: (
  'modifiers' : (
    'red' : (
      'background' : $red,
    ),
    'green' : (
      'selector' : '&.success',
      'background' : $green,
    ),
    'rounded' : (
      'border-radius' : 1em,
    )
  )
);

// Output all base styles and pseudo class styles using add-styles()
.example {
  @include add-modifiers($component);
}
```

This will loop through each item within modifiers and using it's key (or a custom selector if one is passed) to output any approved styles or pseudo-class styles in the same way as `add-styles`.

```css
.example.red {
  background: #F44336;
}
.example.success {
  background: #4CAF50;
}
.example.rounded {
  border-radius: 1em;
}
```

You can also optionally pass in a key to output a specific modifier along with the ability to disable a selector output all together. The last parameter is where you can pass a custom `$settings` map which gets passed to `add-styles`.

```scss
// SCSS input where we call the rounded key and disable the selector wrap
.example {
  @include add-modifiers($component, 'rounded', false);
}

// CSS output
.example {
  border-radius: 1em;
}
```

The flexibility of writing components in this way is extremely powerful. It allows for completely custom component outputs and full control of their modifiers all without having to edit a single component file. To learn more about [add-modifiers](/docs/core/mixins/#mixin-add-modifiers), head over to the docs.

## Chips component

[Chips](/docs/elements/chips/) represent a minimal icon button for simple interface tasks. It was such a common element used in a few different block components already that it made sense to convert it into it's own entity. The most common way it's used in BaseWeb is as close buttons in conjunction with the [dismissible](/docs/javascript/dismissible/) JavaScript.

<div class="demo demo-chips">
  <div class="flex-grid">
    <button class="chip">{% include content-icon.html icon="x" %}</button>
    <button class="chip">{% include content-icon.html icon="anchor" %}</button>
    <button class="chip">{% include content-icon.html icon="bell" %}</button>
    <button class="chip">{% include content-icon.html icon="command" %}</button>
    <button class="chip">{% include content-icon.html icon="bluetooth" %}</button>
    <button class="chip">{% include content-icon.html icon="edit-3" %}</button>
    <button class="chip">{% include content-icon.html icon="heart" %}</button>
    <button class="chip">{% include content-icon.html icon="arrow-up-left" %}</button>
    <button class="chip">{% include content-icon.html icon="arrow-up" %}</button>
    <button class="chip">{% include content-icon.html icon="arrow-up-right" %}</button>
    <button class="chip">{% include content-icon.html icon="arrow-right" %}</button>
    <button class="chip">{% include content-icon.html icon="arrow-down-right" %}</button>
    <button class="chip">{% include content-icon.html icon="arrow-down" %}</button>
    <button class="chip">{% include content-icon.html icon="arrow-down-left" %}</button>
    <button class="chip">{% include content-icon.html icon="arrow-left" %}</button>
  </div>
</div>

<div class="demo demo-chips demo-inverted">
  <div class="flex-grid">
    <button class="chip red">{% include content-icon.html icon="x" %}</button>
    <button class="chip yellow">{% include content-icon.html icon="minus" %}</button>
    <button class="chip green">{% include content-icon.html icon="maximize-2" %}</button>
    <button class="chip light">{% include content-icon.html icon="command" %}</button>
  </div>
</div>

## Badges component

[Badges](/docs/blocks/badges/) are a super flexible components. The type of content badges can represent can include tags, categories, contacts, notifications, statuses, labels, issue flags and pretty much any form of taxonomy where visual distinctions would be useful. In addition, there are also some very handy modifier classes that increase their utility such as `dot`, `pill`, button modifiers and when used in conjunction with a dismissible chip.

<div class="demo demo-badges">
  <div class="flex-grid">
    <button class="badge pill inverted blue">Badge</button>
    <button class="badge pill inverted green">Badge</button>
    <button class="badge pill inverted yellow">Badge</button>
    <button class="badge pill inverted orange">Badge</button>
    <button class="badge pill inverted red">Badge</button>
    <button class="badge pill inverted purple">Badge</button>
  </div>
</div>

<div class="demo demo-badges demo-inverted">
  <div class="flex-grid">
    <button class="badge pill blue">Badge</button>
    <button class="badge pill green">Badge</button>
    <button class="badge pill yellow">Badge</button>
    <button class="badge pill orange">Badge</button>
    <button class="badge pill red">Badge</button>
    <button class="badge pill purple">Badge</button>
  </div>
</div>

## Other updates

There were also another two core typography related mixins, one for outputting anchor styles [make-anchor](/docs/core/mixins/#mixin-make-anchor) and the another for building heading styles [build-headings](/docs/core/mixins/#mixin-build-headings). These are important for helping customize global anchor styles and also gives more control over heading scales. Here are some more updates that were added:

* Added chips support for notices block
* Added chips support for off-canvas block
* Updated documentation to use new "contents" feature and format
* Dropped the settings directory and merged the core and settings files
* Simplified the settings file and moved media-query and grid system maps into their respective component files
* Added better demo for show-hide utiltiy classes
* Cleaned up the base styles component and moved the grid system call there
* Updated anchor styles

This update really leaned out the BaseWeb methodology and helped standardize the way components are written. I'm hoping that the result will be a quicker production cycle for new components and reduction of mixin bloat. Enjoy!
