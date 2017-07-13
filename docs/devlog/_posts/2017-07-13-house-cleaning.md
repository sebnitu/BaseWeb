---
layout: post
title: "Cleaning House"
date: 2017-04-07
version: "2.5.0"
---

It was time to clean some things up. That means I went through the framework and started stripping out deprecated features, things that no longer made sense and improving the final output of it all.

The first off the chopping block was the mini-grid system. Originally this was put together before the adoption of flexbox and tried to solve the issues that now flexbox does very well. So I got rid of it and replaced where it was previously used with a more robust implementation of—that's right—flexbox. The most notable rebuild on this front was the button groups block. This has been re-written using flexbox and a lot of the unnecessary modifiers removed to make the scope of the component itself more focused.

The next cleaning up that took place was a lot of the core mixins that simply were no longer needed due to modern browsers no longer needing prefixes for specific properties. I've also decided that prefixing shouldn't really be the job of a framework, even where they are still needed and instead should be incorporated using tools like [autoprefixer](https://github.com/postcss/autoprefixer).

These updates of course bumped us up to our next major release, `2.5.0` since these deprecations may effect and even break implementations of BaseWeb that use these features, we want to make sure people upgrade responsibly.
