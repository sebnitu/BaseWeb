---
layout: post
title: "Exploring Tabs"
date: 2017-01-16
comments: true
---

Tabs have arrived! BaseWeb now makes available the tabs block component which includes two robust mixins for creating and styling semantic tabs. Before I get into the solution we applied in BaseWeb, I want to explore the process of researching and developing this component.

Tabs are a very common user interface control and have been around for a while. This is important because it means users have an expectation with how tabs function and look. Here are a few common expectations with creating tab controls:

* Tabs are used to switch between views within the same context
* Tabs appear horizontally above the panel they represent
* Only one tab should be active at a time
* Tab text is usually short and descriptive
* Tabs should **not** be used as site navigation
* Tabs shouldn't contain content that needs to be compared
* Active tabs should be super obvious and work even when only two tabs are present

With these in mind, lets explore how other frameworks handle tabs.

https://material.io/guidelines/components/tabs.html#tabs-specs
https://developer.apple.com/library/content/documentation/UserExperience/Conceptual/UIKitUICatalog/UITabBar.html

http://getbootstrap.com/javascript/#tabs
http://foundation.zurb.com/sites/docs/tabs.html
https://tympanus.net/Development/TabStylesInspiration/

https://www.nngroup.com/articles/tabs-used-right/
