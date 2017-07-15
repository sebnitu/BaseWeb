---
layout: post
title: "Overriding Variable Maps with Sass"
date: 2017-03-07
version: "2.3.0"
---

Variable maps are an extremely powerful tool when developing front-end systems. They allow you to store large amounts of variable data in a tight, easy to remember way. They were actually one of the deciding factors that convinced me to switch BaseWeb from Less to Sass. The way that I've used them in BaseWeb is to create a unique map for each component which stores all it's variable settings. So the grid system settings are stored in `$grid`, notice settings are in `$notices`, tabs in `$tabs`, etc.

So within your styles, you could access specific variables for a component using the map-get or BaseWeb's map-fetch functions:

```scss
.tabs {
  background: map-get($tabs, 'background');
}
.notices {
  background: map-get($notices, 'background');

  &.inverted {
    background: map-fetch($notices, 'inverted', 'background');
  }
}
```

## The problem

That all works great, everything is nicely namespaced and easy to remember when you need to access a component setting. But what happens when you want to customize your component? BaseWeb stores the component variable map, mixins and output styles in the same file. So that means you'd have to modify a component file directly to customize it. That works fine up until a new feature comes out or a bug gets fixed with a component you've customized. It's now much harder to integrate those changes without accidentally overriding your customizations.

Part of the problem is actually how variable maps work and are overridden compared to normal variables. If you want to create a default setting for a variable, you can use the `!default` flag and then override that variable later in your files if needed.

```scss
// In a settings file
$var1: 200px !default;
$var2: 300px !default;

// Somewhere else
$var2: 100px;

.component {
  width:  $var1; // Outputs: 200px
  height: $var2; // Outputs: 100px
}
```

Now lets compare how this works using a map

```scss
// In a component file
$component: (
  'var1': 200px,
  'var2': 300px
) !default;

// Somewhere else
$component: (
  'var2': 100px
);

.component {
  width:  map-get($component, 'var1'); // Outputs: 200px
  height: map-get($component, 'var2'); // Undefined
}
```

As you can probably guess, when you override a variable map---even if it's only a single item in the map---the entire map gets overridden and you lose all the items you didn't specifically define. How we want it to work is if we override a specific item in a map, we want to keep all the defaults we didn't explicitly define. But how can we do that?

## The solution

The best solution that I've found is what I incorporated recently with BaseWeb's [override feature]({{ site.url }}{{ site.baseurl }}/docs/custom/). The basic idea of how it works is we create an `$override` variable map where we store all of our custom component map overrides. This variable is then used to extend the default component variable maps using BaseWeb's [`map-extend`]({{ site.url }}{{ site.baseurl }}/docs/core/functions/) function, which is similar to [jQuery's extend function](https://api.jquery.com/jquery.extend/).

```scss
// In a component file
$component: (
  'var1': 200px,
  'var2': 300px
) !default;

// Somewhere else
$override: (
  'component': (
    'var2': 100px
  )
);

$component: map-extend($component, map-get($override, 'component'), true);

.component {
  width:  map-get($component, 'var1'); // Outputs: 200px
  height: map-get($component, 'var2'); // Outputs: 100px
}
```

You'll also notice that we have the recursive setting set to true in our map extend function. This allows us to merge maps that may contain other nested maps such as components which store state options. The next step is involved in how where we define our override map and where we merge. Since BaseWeb stores component map in the same file that they are used, we'll need to extend it with the overrides right after they are defined. That also means we'll need to import our overrides before our components. So our `@import` file looks like this:

```scss
// Core
@import "functions";

// Overrides
@import "overrides";

// Components
@import "component-1";
@import "component-2";
@import "component-3";
```

Then within our component file, we'll first check if our override map exists using [`variable-exists`](http://sass-lang.com/documentation/Sass/Script/Functions.html#variable_exists-instance_method). Next, we'll want to check if our override has the component key using [`map-has-key`](http://sass-lang.com/documentation/Sass/Script/Functions.html#map_has_key-instance_method). If it does, then we want to go ahead and extend our default map with the overrides recursively:

```scss
$component: (
  'your': 1,
  'component': 2,
  'settings': 3,
  'here': 4
) !default;

// Check if our override map exists
@if variable-exists(override) {
  // Check if our override map has the component key
  @if (map-has-key($override, 'component') == true) {
    // Extend default component map with overrides recursively
    $component: map-extend($component, map-get($override, 'component'), true);
  }
}
```

## Conclusion

That's it! Now we can easily make customizations to our components without having to edit the files directly. This lets us build a reusable system across multiple projects and keep our frameworks up to date. How cool is that?

If you found this article helpful, let me know! I'd love to see where people are using this technique or if you've come up with a different solution of your own. Thanks!

---

**Credit:** The `map-extend` function was originally posted in an article at [SitePoint](https://www.sitepoint.com/extra-map-functions-sass/) by [Hugo Giraudel](https://twitter.com/HugoGiraudel). Here is the function for your convenience:

```scss
// Map Extend
// jQuery-style extend function for when `map-merge()` isn't enough. Use when
// we need to merge more than two maps and/or need a merge to be recursive.
// @param $map
//   @type first map
// @param $maps
//   @type list of maps
// @param $deep
//   @type boolean
//   @default false
//   @desc Whether or not to enable recursive mode.
// @return merged map
@function map-extend($map, $maps.../*, $deep */) {
  $last: nth($maps, -1);
  $deep: $last == true;
  $max: if($deep, length($maps) - 1, length($maps));

  // Loop through all maps in $maps...
  @for $i from 1 through $max {
    // Store current map
    $current: nth($maps, $i);

    // If not in deep mode, simply merge current map with map
    @if not $deep {
      $map: map-merge($map, $current);
    } @else {
      // If in deep mode, loop through all tuples in current map
      @each $key, $value in $current {

        // If value is a nested map and same key from map is a nested map as well
        @if type-of($value) == "map" and type-of(map-get($map, $key)) == "map" {
          // Recursive extend
          $value: map-extend(map-get($map, $key), $value, true);
        }

        // Merge current tuple with map
        $map: map-merge($map, ($key: $value));
      }
    }
  }

  @return $map;
}
```
