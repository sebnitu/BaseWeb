---
layout: post
title: "Exploring Tabs"
date: 2017-01-16
img: illustration-tabs.png
comments: true
---

<img src="/assets/img/devlog/illustration-tabs-small.png" alt="Tabs" class="featured rounded">

<p class="text-lead">Tabs have arrived! BaseWeb now makes available the tabs block component which includes two robust mixins for creating and styling semantic tabs.</p>

Before I get into the solution we applied in BaseWeb, I want to explore the process of researching and developing this component. Tabs are a very common user interface control and have been around for a while. This is important because it means users have an expectation with how tabs function and look. So when developing a tabs system, we want to make sure we are as predictable as possible for users as well as being clear visually. So lets put together a checklist to clearly define how tabs should look and function before we code.

1. **Tabs are used to switch between views within the same context.** It's important to note that tabs should only be used as a high level organizational control for content.
2. **Tabs appear horizontally above the panel they represent.** This may seem obvious, but keeping this pattern consistent leverages the already learned behavior of users.
3. **Only one tab should be active at a time.** This shouldn't be mistaken for content toggle controls like the accordion where multiple content panes can be active at once.
4. **Tab text is usually short and descriptive.** They should be easily scannable and there should be no confusion what content a user will see when a tab is clicked.
5. **Tabs should not be used as site navigation.** This is something I've seen before and it can cause confusion and inconsistency for a user. There's a clear distinction between a site's navigation and tab controls and this should be represented both functionally and visually.
6. **Tabs shouldn't contain content that needs to be compared.** Because only one tab panel should be active at a time, content between tabs shouldn't need to be compared or needed to be viewed together. If your content requires this sort of interaction, tabs are not the appropriate control.
7. **Active tabs should be super obvious and work even when only two tabs are present.** This deals more with the visuals of the tabs themselves, but it's helpful to know which tab is currently active, even when only two exist. We'll talk more about this when we go over tab styling.

## Tackling the Markup

A semantic tabs system contains two primary parts, the tabs controls themselves and the panels of content they toggle. We'll start with the tabs who's markup we can write similar to a set of navigation links:

```html
<nav class="tabs-nav">
  <ul>
    <li><a href="#">Tab Item</a></li>
    <li><a href="#">Tab Item</a></li>
    <li><a href="#">Tab Item</a></li>
  </ul>
</nav>
```

---

## Further Reading

* [Material IO](https://material.io/guidelines/components/tabs.html#tabs-specs)
* [Apple Developer UI Tab Bar](https://developer.apple.com/library/content/documentation/UserExperience/Conceptual/UIKitUICatalog/UITabBar.html)
* [Bootstrap Twitter Tabs](http://getbootstrap.com/javascript/#tabs)
* [Foundation Tabs](http://foundation.zurb.com/sites/docs/tabs.html)
* [Tab Style Inspiration](https://tympanus.net/Development/TabStylesInspiration/)
* [Tabs Used Right](https://www.nngroup.com/articles/tabs-used-right/)
