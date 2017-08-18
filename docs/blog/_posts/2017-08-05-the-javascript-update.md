---
layout: post
title: "The JavaScript Update"
date: 2017-08-05
version: "2.6.0"
---

<p class="text-lead" markdown="1">One of the biggest updates since the documentation reboot, say "hello" to the JavaScript update. Included in this update is an overhaul of all JavaScript components along with a brand new icons system.</p>

I'm very excited to see this update launch, so lets get into the nitty-gritty.

## JavaScript

Instead of giving example jQuery solutions for JavaScript dependent components, vanilla JavaScript was written for each component in source. Included now with BaseWeb are scripts for the following:

* [Utility](/docs/javascript/utility/)
* [Dismissible](/docs/javascript/dismissible/)
* [Dropdowns](/docs/javascript/dropdowns/)
* [Tabs](/docs/javascript/tabs/)
* [Off-Canvas](/docs/javascript/offcanvas/)

The goal with the JavaScript overhaul was to make using components more intuitive. If people would rather role their own scripts, that option is always there but for those who just want things to work out of the box, now they will!

You'll notice that each component has `init()` and `destroy()` methods along with a few component specific settings and public methods. Each is built off the utility helper object and can be added or removed depending on your project's needs. Keep your eyes open for more JavaScript components in the future.

## Icons

<div class="widget-icons">
  <div class="widget-icon">
    {% include content-icon.html icon="sliders" class="icon-color-1" %}
  </div>
  <div class="widget-icon">
    {% include content-icon.html icon="cpu" class="icon-color-2" %}
  </div>
  <div class="widget-icon">
    {% include content-icon.html icon="layers" class="icon-color-3" %}
  </div>
  <div class="widget-icon">
    {% include content-icon.html icon="package" class="icon-color-4" %}
  </div>
  <div class="widget-icon">
    {% include content-icon.html icon="edit-2" class="icon-color-5" %}
  </div>
  <div class="widget-icon">
    {% include content-icon.html icon="hash" class="icon-color-6" %}
  </div>
</div>

Icon systems and the way they are used on the web has been a changing for the past few years. We've seen PNG icons dropped for the flexibility of font icons. To now the sharpness and flexibility of SVG. I wanted to make sure the method included in BaseWeb adheres to best practices, so now you have the option to use <a href="https://css-tricks.com/svg-sprites-use-better-icon-fonts/" class="onclick-newtab">SVG sprites</a> or the more recently advocated <a href="https://css-tricks.com/pretty-good-svg-icon-system/" class="onclick-newtab">inline SVG methods</a>.

Source now includes the simply beautiful open source icon set [Feather Icons](https://feathericons.com/) by [Cole Bemis](http://colebemis.com/). You'll find individual SVG icons as well as an SVG symbols sprite for all your icon needs. For more information on how to leverage these tools, check out the [icons element documentation]({{ site.url }}{{ site.baseurl }}/docs/elements/icons/).

## Import Partials

BaseWeb is very picky about the order that you import settings, functions and the rest of the core files. In an effort to make this process easier and incentives using BaseWeb through NPM, I've added import partials.

You can of course keep importing BaseWeb files piecemeal as you always have, but now you have the option to include `_baseweb-core.scss` and you won't have to worry about getting errors for importing files in the wrong order or missing changes in future updates.

Also included are `_baseweb-elements.scss` and `_baseweb-blocks.scss` in case you want to just include everything along with all future elements or blocks. The new `baseweb.scss` import file looks like this:

```scss
// Core [Required]
@import "baseweb-core";

// Overrides
@import "custom/overrides";

// Elements
@import "baseweb-elements";

// Blocks
@import "baseweb-blocks";

// Custom
@import "custom/custom";
```

<div class="notice yellow" markdown="1">
It's important to not that `custom/overrides` should be imported after core but before elements and block files. This ensures that you keep your custom framework overrides.
</div>

For more information, checkout the [get started]({{ site.url }}{{ site.baseurl }}/get-started/) guide under the heading "BaseWeb Source". For information on how to leverage BaseWeb and still be able to customize everything you need, check out "<a href="https://dev.to/sebnitu/reusing-design-systems-with-yarn-and-gulp" class="onclick-newtab">Reusing Design Systems with Yarn and Gulp</a>".

## Show and Hide Utility Classes

Another cool little feature that's been added this update is the show and hide utility classes. How these work is that they allow you to show or hide an element using a class that's generated from whatever values are set in the [`$breakpoints` map](/docs/settings/media/). So, for example, if you added a breakpoint of `'average'` with a value of `500px`, BaseWeb will automatically generate the following classes:

* `.hide-average-up`: Hides item when window is > 500px
* `.hide-average-down`: Hides item when window is < 500px
* `.show-average-up`: Show item when window is > 500px
* `.show-average-down`: Show item when window is < 500px

All variations of these classes are included with the default values of `$breakpoints`. For more information on show/hide utilities, check out the [base elements](/docs/elements/base/) documentation.

## Other Updates

The other changes that were made are more minor, but they include:

* Dropping `:visited` styles. They cause way more of a headache than they are worth
* Updates to the dev blog listings and single post templates
* Add "back to top" buttons for easier navigation on long pages
* General improvements to typography and styles of documentation
* Better styles for page-navigation in docs
* Added new styles for ASCII file structure views
* Added more position options for tooltips
* Updated notice close button to reflect new icon styles
* Cleaned up Jekyll includes directory of unused files
* Added table of contents section for JavaScript docs (soon to be added to other, too)
* Updated the landing page for documentation

Wow, what a great update! I've been having such a blast working on BaseWeb lately and I'm really excited about the components and features that are next. Let's end the summer on a strong note!
