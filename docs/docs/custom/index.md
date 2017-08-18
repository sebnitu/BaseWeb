---
layout: page
title: Custom
order: 5
---

Customizing BaseWeb is what sets it apart from other frameworks. This can easily be done out of the box using the `_overrides.scss` and `_custom.scss` files. Of course you can always customize BaseWeb by overriding component maps and variables directly, but making changes in the custom directory ensures that your copy of BaseWeb can take advantage of new updates without the risk of losing your customizations. So, lets dive right into it!

## Overriding Default Maps

You'll see once you open `_overrides.scss` that there is an empty `$override` variable map and a few `map-extend` functions wrapped in conditionals. The `$override` is what we'll use to make any custom changes to any component map within BaseWeb. Here's how it works:

```scss
$override : (
  'buttons' : (
    'border' : none,
    'padding' : 0.5em 1.25em,
  ),
  'button-groups' : (
    'classes' : false
  )
);
```

This code does two things, it will override the default variables of the `$buttons` and `$button-groups` in the instances we explicitly declare. In `$buttons` we remove borders and reduce the default padding of buttons while in `$button-groups` we turn off our classes output. All the other default settings remain the unchanged.

The way this is accomplished is using our `map-extend` function as you can see at the bottom of the file. These extend the default maps of very component map in BaseWeb as long as map `$override` exists and they specific the component map to override. The only requirement is that the default map and override are declared before the `map-extend` function is called.

If you'd like to make a custom component use the same override feature, simply use the following code after declaring your component map:

```scss
// Extend default component map with overrides if they exist
@if variable-exists(override) {
  @if (map-has-key($override, 'SOME_COMPONENT') == true) {
    $SOME_COMPONENT: map-extend($SOME_COMPONENT, map-get($override, 'SOME_COMPONENT'), true);
  }
}
```

*Replace `SOME_COMPONENT` with the name of your component map.* To learn more about writing your own components, read our section on [expanding BaseWeb]({{ site.url }}{{ site.baseurl }}/get-started/expanding).

## Custom Styles

The way you organize the files in this directory will be dependent on the scope of your project. For simple projects, just adding your styles to `_custom.scss` should be enough. For more complex applications, you're probably going to need to write and organize multiple files and/or directories. Here we'll explore a few options for simple to complex projects.

As a starter, BaseWeb includes a `_custom.scss` file that initiates a responsive grid system and the mini grid system as well as some useful comments for organizing your document.

```scss
// Set file variable
$filename: 'scss/custom/_custom.scss';

/*==============================================================================
  @Grid System - #{$filename}
==============================================================================*/

@include build-grid-system('mobile');

@include media-min('medium') {
  @include build-grid-system();
}

/*==============================================================================
  @Mini Grid System - #{$filename}
==============================================================================*/

@include build-mini-grid-system();

/*==============================================================================
  @Custom - #{$filename}
==============================================================================*/

// Custom styles go here
// All variabls and mixins in BaseWeb are available to styles in this document

/*==============================================================================
  @End - #{$filename}
==============================================================================*/
```

## Layout and Component Driven Architecture

BaseWeb is a component driven framework. But you can break from this methodology if your project needs. For projects that require a large amount of layouts or templates, it's common to create layout specific SCSS files. An example of this might look like this:

<div class="widget fill">
  <ul class="list-ascii">
    <li>
      <strong>custom/</strong>
      <ul>
        <li>_tpl-home.scss</li>
        <li>_tpl-blog.scss</li>
        <li>_tpl-projects.scss</li>
        <li>_tpl-dash.scss</li>
        <li>_global.scss</li>
        <li>_overrides.scss</li>
      </ul>
    </li>
  </ul>
</div>

Alternatively, you can use a component based architecture. This is typically done by creating specific SCSS files for each component of your project:

<div class="widget fill">
  <ul class="list-ascii">
    <li>
      <strong>custom/</strong>
      <ul>
        <li>_header.scss</li>
        <li>_sidebar.scss</li>
        <li>_widgets.scss</li>
        <li>_actions.scss</li>
        <li>_global.scss</li>
        <li>_overrides.scss</li>
      </ul>
    </li>
  </ul>
</div>

A combination of these two styles can also be applied:

<div class="widget fill">
  <ul class="list-ascii">
    <li>
      <strong>custom/</strong>
      <ul>
        <li>
          <strong>blocks/</strong>
          <ul>
            <li>_header.scss</li>
            <li>_sidebar.scss</li>
            <li>_listings.scss</li>
            <li>_widgets.scss</li>
            <li>_actions.scss</li>
          </ul>
        </li>
        <li>
          <strong>temlates/</strong>
          <ul>
            <li>_home.scss</li>
            <li>_blog.scss</li>
            <li>_projects.scss</li>
            <li>_dash.scss</li>
          </ul>
        </li>
        <li>_global.scss</li>
        <li>_overrides.scss</li>
      </ul>
    </li>
  </ul>
</div>

As long as these files are included in BaseWeb's core partials router file `baseweb.scss` you will have all functions, mixins, variables and maps available to your custom components and styles.
