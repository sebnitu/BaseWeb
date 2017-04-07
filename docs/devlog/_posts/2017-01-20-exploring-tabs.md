---
layout: post
title: "Exploring Tabs"
date: 2017-01-20
img: illustration-tabs.png
comments: true
---

<img src="/dist/img/devlog/illustration-tabs-small.png" alt="Tabs" class="featured rounded">

<p class="text-lead">Tabs have arrived! BaseWeb now makes available the tabs block component which includes two robust mixins for creating and styling semantic tabs.</p>

You can read about how it works in the [documentation]({{ site.url }}{{ site.baseurl }}/docs/blocks/tabs). Here, I'd like to explore the process of researching and developing this component. Tabs are a very common user interface control and have been around for a while. This is important because it means users have an expectation with how tabs function and look. So when developing a tabs system, we want to make sure we are as predictable as possible for users as well as being clear visually. So lets put together a checklist to clearly define how tabs should look and function before we code.

1. **Tabs are used to switch between views within the same context.** It's important to note that tabs should only be used as a high level organizational control for content.
2. **Tabs appear horizontally above the panel they represent.** This may seem obvious, but keeping this pattern consistent leverages the already learned behavior of users.
3. **Only one tab should be active at a time.** This shouldn't be mistaken for content toggle controls like the accordion where multiple content panes can be active at once.
4. **Tab text is usually short and descriptive.** They should be easily scannable and there should be no confusion what content a user will see when a tab is clicked.
5. **Tabs should not be used as site navigation.** This is something I've seen before and it can cause confusion and inconsistency for a user. There's a clear distinction between a site's navigation and tab controls and this should be represented both functionally and visually.
6. **Tabs shouldn't contain content that needs to be compared.** Because only one tab panel should be active at a time, content between tabs shouldn't need to be compared or needed to be viewed together. If your content requires this sort of interaction, tabs are not the appropriate control.
7. **Active tabs should be super obvious and work even when only two tabs are present.** This deals more with the visuals of the tabs themselves, but it's helpful to know which tab is currently active, even when only two exist. We'll talk more about this when we go over tab styling.

## Tackling the Markup

A semantic tabs system contains two primary parts, the tab controls and the panels of content they toggle. We'll start with the tabs who's markup we can write similar to a set of navigation links:

```html
<nav class="tabs-nav">
  <ul>
    <li><a href="#">Tab Item</a></li>
    <li><a href="#">Tab Item</a></li>
    <li><a href="#">Tab Item</a></li>
  </ul>
</nav>
```

Next, we'll write a quick set of divs that represent our content panes which we'll control with the tabs navigation.

```html
<div class="tabs-content">
  <div class="tabs-panel">
    ...
  </div>
  <div class="tabs-panel">
    ...
  </div>
  <div class="tabs-panel">
    ...
  </div>
</div>
```

Lastly we'll link the tab navigation using the `href` attribute on the links with the`id` value of the content panel they toggle. We'll also need to settle on a class that we use to show the active tab item and also one to show and hide the panels. Lets just go with `.active` as it's pretty clear.

The other markup aspect we'll need to handle is how we link the tabs control group to a tabs content group. The main concern here is in the case our document may have more than one set of tabs on a view. So we decided to incorporate two methods that are fairly intuitive and lets the developer decide what works best for them.

### Data Attribute Link

The first method we can use is a data attribute link that ties our two elements together. So let's add `data-content=""` to our tabs-nav element, a unique ID to the tabs-content and add the ID as the data attribute's value.

```html
<nav class="tabs-nav" data-content="tabs-content-1">
  ...
</nav>
<div class="tabs-content" id="tabs-content-1">
  ...
</div>
```

This method allows us to clearly tie together tab components and guarantees we'll never have any conflicts with other tabs in our page.

### Wrapper Link

The second method is simply just wrapping our tab components with a `<div>` element. This gives us all the hooks we'll need to style our components and interact with them in JavaScript without having to specifically give each component unique IDs and data attributes.

```html
<div class="tabs">
  <nav class="tabs-nav">
    ...
  </nav>
  <div class="tabs-content">
    ...
  </div>
</div>
```

## Adding Behavior with JavaScript

A lot of what makes tab controls a useful pattern in content organization is their behavior. It's important to make sure we adhere to the patterns I've highlighted in the introduction, and now that we have some semantic markup, we can dive into writing our behavior.

I'm personally very comfortable writing interface plugins in jQuery, but feel free to write this behavior in any framework or even raw JavaScript as you see fit. Making BaseWeb ambiguous in the way a developer handles their JavaScript was intentional.

The first thing we'll want to do is iterate through all instances of our tab controls and work with their behavior separately to avoid any conflicts. In jQuery, we can do this using the `jQuery.each()` iteration function.

```js
$('.tabs-nav').each(function(e) {
  // Do some stuff...
});
```

The next thing we'll want to do is check if our tab controls have content linked and then save it for later. We'll check first if we used the `.tab` wrapper and then if `.tabs-content` exists.

```js
// Save this
var $this = $(this);

// Save our tabs content
var tabs_content = $this.parents('.tabs').find('.tabs-content');
var has_content = tabs_content.length;
```

If content wasn't found, we'll check if we used the data attribute method. If no content is found that way either, we just output a message in console.

```js
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
```

Next we'll add a click event on our tab controls and stop the default behavior.

```js
// Add click event to tab links
$this.find('a').click(function() {

  // Stop the default behavior
  return false;
});
```

When our tabs are clicked, we check if it's already active. If it's not, we remove all active classes off our tabs, add one to the tab that was just clicked and check again if there is content associated. If so, we toggle the active class on our tab panel using the href value of our active tab control.

```js
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
```

That about does it with our JavaScript! Here's all of it together:

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

## Styling Our Tabs

So we've got some solid semantic markup and handled our requirements for tab behaviors, it's time to add our styles! There are many options here for creating tab styles, and there are a few helpful patterns that are specific to tabs that can have huge usability benefits, but first lets isolate styles that are universal to any tab controls. This mainly deals with establishing our show and hide styles with the active class, `z-index` order and structural styles.

```scss
// Tab Wrapper
.tabs {
  position: relative;
  margin: 1em 0;

  .tabs-nav,
  .tabs-content {
    margin: 0;
  }
  .tabs-nav {
    z-index: 10;
  }
  .tabs-content {
    z-index: 5;
  }
}

// Tab Navigation
.tabs-nav {
  margin: 1em 0;
  text-align: center;

  ul {
    display: flex;
    list-style: none;
    margin: 0;
  }
  ul li {
    flex: 1 0 auto;
    margin: 0;
  }
  a {
    display: block;
    padding: 1em;
    border: none;
  }
}

// Tab Content
.tabs-content {
  margin: 1em 0;

  .tabs-panel {
    display: none;
  }
  .tabs-panel.active {
    display: block;
  }
}
```

Now we've got a fully functional tabs block component with just the bare minimum styling that you can test here.

<p data-height="230" data-theme-id="light" data-slug-hash="bgqmJo" data-default-tab="result" data-user="sebnitu" data-embed-version="2" data-pen-title="BaseWeb Tabs - Vanilla" class="codepen">See the Pen <a href="https://codepen.io/sebnitu/pen/bgqmJo/">BaseWeb Tabs - Vanilla</a> by Sebastian Nitu (<a href="http://codepen.io/sebnitu">@sebnitu</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

With this as our base, we can go any stylistic direction we'd like. [Mary Lou](https://tympanus.net/codrops/2014/09/02/tab-styles-inspiration/) wrote a great post on Codrops if you're looking for some inspiration. For our purposes, we want some very basic styles that can be easily adopted in most projects without much effort. Here are the two options that we came up with which can be modified to suit most situations.

<p data-height="265" data-theme-id="light" data-slug-hash="mRWZOW" data-default-tab="result" data-user="sebnitu" data-embed-version="2" data-pen-title="BaseWeb Tabs - Fold Styles" class="codepen">See the Pen <a href="https://codepen.io/sebnitu/pen/mRWZOW/">BaseWeb Tabs - Fold Styles</a> by Sebastian Nitu (<a href="http://codepen.io/sebnitu">@sebnitu</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

<p data-height="265" data-theme-id="light" data-slug-hash="NdpZwB" data-default-tab="result" data-user="sebnitu" data-embed-version="2" data-pen-title="BaseWeb Tabs - Line Styles" class="codepen">See the Pen <a href="https://codepen.io/sebnitu/pen/NdpZwB/">BaseWeb Tabs - Line Styles</a> by Sebastian Nitu (<a href="http://codepen.io/sebnitu">@sebnitu</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## Conclusion

That wraps up our tabs block component solution. We've managed to hit all our requirements we listed in the introduction. The next steps we took in BaseWeb involve creating a variable map for customization and some handy mixins that abstract our styles a bit. You can read more about that implementation over on the [documentations page]({{ site.url }}{{ site.baseurl }}/docs/blocks/tabs).

### Further Reading

<ul class="list rowed">
  <li><a href="https://material.io/guidelines/components/tabs.html#tabs-specs" class="onclick-newtab">Material IO</a></li>
  <li><a href="https://developer.apple.com/library/content/documentation/UserExperience/Conceptual/UIKitUICatalog/UITabBar.html" class="onclick-newtab">Apple Developer UI Tab Bar</a></li>
  <li><a href="http://getbootstrap.com/javascript/#tabs" class="onclick-newtab">Bootstrap Twitter Tabs</a></li>
  <li><a href="http://foundation.zurb.com/sites/docs/tabs.html" class="onclick-newtab">Foundation Tabs</a></li>
  <li><a href="https://tympanus.net/Development/TabStylesInspiration/" class="onclick-newtab">Tab Style Inspiration</a></li>
  <li><a href="https://www.nngroup.com/articles/tabs-used-right/" class="onclick-newtab">Tabs Used Right</a></li>
</ul>
