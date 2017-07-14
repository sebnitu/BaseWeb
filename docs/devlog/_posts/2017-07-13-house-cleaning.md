---
layout: post
title: "Cleaning House"
date: 2017-04-07
version: "2.5.0"
---

This is something I've been meaning to do for a while now and finally had to opportunity to really audit BaseWeb and clean some things up. I went through and started stripping out and deprecating features I felt were either unused, bloated or simply made redundant due to browser improvements.

The first off the chopping block was the mini-grid system. The mini-grid was put together before the wide adoption and browser support for flexbox. Originally, it solved simple layout use cases that flexbox now solves much better. So I decided to drop it. The most notable rebuild on this front was the button groups block. This has been re-written using flexbox and a lot of the unnecessary modifiers removed to make the scope of the component itself more focused.

Second, I went through and removed mixins that I thought would be useful when I first added them, but it turned out they never saw any real use. Such as `reverse-index` and `make-text-mask`. Sure they are cool tricks, but I literally had never used them once.

Finally, I removed all mixins who's single purpose was to add browser prefixes. Prefixing shouldn't really be the job of a framework even where they are still needed and instead should be incorporated using tools like [autoprefixer](https://github.com/postcss/autoprefixer). This included a lot of the `border-radius`, `transition`, `transform` and `animation` mixins.

These updates of course bumped us up to our next major release `2.5.0` since this type of cleanup may effect and even break implementations of BaseWeb that use these features.

## What's Next?

**JavaScript:** I've been debating ever since I started BaseWeb on wether or not I should include JavaScript functionality for components. My original vision for BaseWeb was that it shouldn't include JavaScript at all and allow the developer to incorporate any JS functionality themselves. I've always provided JS examples for components using jQuery but this created more confusion than it was worth.
So my next major goal for BaseWeb is to include vanilla JavaScript plugins for component functionality.

**Grids:** Another large update that's coming down the pipeline is a rework of the core grid system. We have so many options now with flexbox and even native CSS Grid Layout that I think it's time to take a look at how we handle grids. I don't want to create a grid system using CSS Grid Layout mainly because it's [already a fully functional grid system](https://rachelandrew.co.uk/archives/2017/07/01/you-do-not-need-a-css-grid-based-grid-system/). Instead, I want to explore maybe leaving options for flexbox and possibly deprecating the classic float based system.

**Components:** Lastly and as always, I'll be exploring more block components to add. These have been so useful in recent projects and I've really noticed the speed of my development time thanks to these modular blocks that I'd really like to continue building more. Here are the four at the top of my list:

* Chips
* Accordions
* Modals
* Pagination

**Elements:** It's rare that I'll have new element styles to add but there is one that's noticeably missing: icons. I've held off on developing this because I wasn't sure myself which technique I preferred using the most; font-based or SVG definitions. After a few more projects under my belt, I've settled on SVG and I want BaseWeb to be a step towards improving my process. I'd also like to do an audit on the existing elements for cleaning up modifiers and removing complexity.

## Conclusion

This update is a huge step for me in making sure that BaseWeb doesn't get bloated or bogged down with legacy code. I think it's a reflection on my growth as a developer and I'm really proud of where this project is going. I'm looking forward to what's next!
