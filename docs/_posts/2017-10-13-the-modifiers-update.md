---
layout: post
title: "The Modifiers Update"
date: 2017-10-13
version: "3.0.0"
---

<p class="text-lead" markdown="1">The modifiers update marks the next major version of BaseWeb. There has been a re-write of how components and their modifiers are built.</p>

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

## Badges component

[Badges](/docs/blocks/badges/) are a super flexible components. The type of content badges can represent can include tags, categories, contacts, notifications, statuses, labels, issue flags and pretty much any form of taxonomy where visual distinctions would be useful. In addition, there are also some very handy modifier classes that increase their utility such as `dot`, `pill`, button modifiers and when used in conjunction with a dismissible chip.

## Other updates

There were also another two core typography related mixins, one for outputting anchor styles [make-anchor](/docs/core/mixins/#mixin-make-anchor) and the other for building heading styles [build-headings](/docs/core/mixins/#mixin-build-headings). These are important for helping customize global anchor styles and also gives more control over heading scales.
