---
layout: page
title: "Typography"
order: 2
---

This is where BaseWeb defines our most basic typographic elements. This includes things like base font styles, headings, links and emphasis elements.

## Headings

Heading elements are used to describe the topic of the section it introduces. BaseWeb defines styles for headings `<h1>` to `<h6>`.

```html
<h1>h1. BaseWeb Heading</h1>
<h2>h2. BaseWeb Heading</h2>
<h3>h3. BaseWeb Heading</h3>
<h4>h4. BaseWeb Heading</h4>
<h5>h5. BaseWeb Heading</h5>
<h6>h6. BaseWeb Heading</h6>
```

<div class="demo">
  <h1>h1. BaseWeb Heading</h1>
  <h2>h2. BaseWeb Heading</h2>
  <h3>h3. BaseWeb Heading</h3>
  <h4>h4. BaseWeb Heading</h4>
  <h5>h5. BaseWeb Heading</h5>
  <h6>h6. BaseWeb Heading</h6>
</div>

## Body Copy

The body copy is set by applying our default typographic settings to the `<body>` element and applying margins to our paragraph element.

```html
<p>...</p>
```

<div class="demo">
  <p>Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
  <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla.</p>
</div>

## Typographic Elements

HTML has a beautiful assortment of tools for adding rich semantics to a document. This is by no means a comprehensive list of HTML elements, but these are the inline text elements that BaseWeb specifically adds styles for.

<ul class="list list-docs">

<li markdown="1">

### &lt;a&gt;

The HTML `<a>` Element (or the HTML Anchor Element) defines a hyperlink.

```html
<p>If you don't know something, try a <a href="http://google.com">Google search</a>!</p>
```

<div class="demo">
  <p>If you don't know something, try a <a href="http://google.com">Google search</a>!</p>
</div>

</li>

<li markdown="1">

### &lt;strong&gt;

The HTML `<strong>` represents strong importance for its contents.

```html
<p>I learned a lot reading <strong>Pale Blue Dot</strong>.</p>
```

<div class="demo">
  <p>I learned a lot reading <strong>Pale Blue Dot</strong>.</p>
</div>

</li>

<li markdown="1">

### &lt;em&gt;

The HTML `<em>` element represents stress emphasis of its contents.

```html
<p>Cats are <em>cute</em> animals.</p>
```

<div class="demo">
  <p>Cats are <em>cute</em> animals.</p>
</div>

</li>

<li markdown="1">

### &lt;small&gt;

The HTML `<small>` element represents side comments such as small print.

```html
<small>Copyright 2015</small>
```

<div class="demo">
  <p><small>Copyright 2015</small></p>
</div>

</li>

<li markdown="1">

### &lt;mark&gt;

The HTML `<mark>` element represents a run of text in one document marked or highlighted for reference purposes, due to its relevance in another context.

```html
<p>Don't forget to pick up the <mark>hamburgers</mark> at the store.</p>
```

<div class="demo">
  <p>Don't forget to pick up the <mark>hamburgers</mark> at the store.</p>
</div>

</li>

<li markdown="1">

### &lt;ins&gt;

The HTML `<ins>` element represents an addition to the document.

```html
<ins>This content was added to our document.</ins>
```

<div class="demo">
  <p><ins>This content was added to our document.</ins></p>
</div>

</li>

<li markdown="1">

### &lt;del&gt;

The HTML `<del>` element represents a removal from the document.

```html
<del>This content was removed from our document.</del>
```

<div class="demo">
  <p><del>This content was removed from our document.</del></p>
</div>

</li>

<li markdown="1">

### &lt;cite&gt;

The HTML `<cite>` element represents a reference to a creative work.

```html
<blockquote>
  <p>...</p>
  <footer><cite>...</cite></footer>
</blockquote>
```

<div class="demo">
  <blockquote>
    <p>Take the risk of thinking for yourself&mdash;much more happiness, truth, beauty and wisdom will come to you that way.</p>
    <footer><cite>&ndash; Christopher Hitchens</cite></footer>
  </blockquote>
</div>

</li>

<li markdown="1">

### &lt;abbr&gt;

The HTML `<abbr>` represents an abbreviation or acronym. The optional title attribute may be used to provide an expansion of the abbreviation.

```html
<abbr title="Hypertext Markup Language">HTML</abbr>
```

<div class="demo">
  <p>The quintessential of front-end development includes <abbr title="Hypertext Markup Language">HTML</abbr>, <abbr title="Cascading Stylessheets">CSS</abbr> and <abbr title="JavaScript">JS</abbr>.</p>
</div>

</li>

</ul>

## Typographic Classes

In addition to our inline elements, BaseWeb provides these stylistic typographic classes for adding flair and visual depth to your documents without adding any semantic meaning.

<ul class="list list-docs">

<li markdown="1">

### .text-lead

Lead text can be used as an introduction paragraph or even as subtitle text.

```html
<p class="text-lead">...</p>
```

<div class="demo">
  <p class="text-lead">Cras ullamcorper, massa sed commodo fermentum, neque tellus pharetra est, eu volutpat nibh ante eu mauris. Quisque auctor consequat dui. Nam non ante at nibh egestas feugiat. Praesent tincidunt rhoncus justo in placerat.</p>
</div>

</li>

<li markdown="1">

### .text-small

Used to make text look less important. Can be used to reduce the size of legal text, for example.

```html
<p class="text-small">...</p>
```

<div class="demo">
  <p class="text-small">Cras ullamcorper, massa sed commodo fermentum, neque tellus pharetra est, eu volutpat nibh ante eu mauris. Quisque auctor consequat dui. Nam non ante at nibh egestas feugiat. Praesent tincidunt rhoncus justo in placerat.</p>
</div>

</li>

<li markdown="1">

### .text-soften

Softens the appearance of text for non-vital content such as meta data, dates or descriptions.

```html
<p class="text-soften">...</p>
```

<div class="demo">
  <p class="text-soften">Cras ullamcorper, massa sed commodo fermentum, neque tellus pharetra est, eu volutpat nibh ante eu mauris. Quisque auctor consequat dui. Nam non ante at nibh egestas feugiat. Praesent tincidunt rhoncus justo in placerat.</p>
</div>

</li>

<li markdown="1">

### .text-harden

Makes text stand out or look more important. Could be used to attract attention to important information.

```html
<p class="text-harden">...</p>
```

<div class="demo">
  <p class="text-harden">Cras ullamcorper, massa sed commodo fermentum, neque tellus pharetra est, eu volutpat nibh ante eu mauris. Quisque auctor consequat dui. Nam non ante at nibh egestas feugiat. Praesent tincidunt rhoncus justo in placerat.</p>
</div>

</li>

<li markdown="1">

### .text-left

Aligns text to the left.

```html
<p class="text-left">...</p>
```

<div class="demo">
  <p class="text-left">Cras ullamcorper, massa sed commodo fermentum, neque tellus pharetra est, eu volutpat nibh ante eu mauris. Quisque auctor consequat dui. Nam non ante at nibh egestas feugiat. Praesent tincidunt rhoncus justo in placerat.</p>
</div>

</li>

<li markdown="1">

### .text-center

Aligns text to the center.

```html
<p class="text-center">...</p>
```

<div class="demo">
  <p class="text-center">Cras ullamcorper, massa sed commodo fermentum, neque tellus pharetra est, eu volutpat nibh ante eu mauris. Quisque auctor consequat dui. Nam non ante at nibh egestas feugiat. Praesent tincidunt rhoncus justo in placerat.</p>
</div>

</li>

<li markdown="1">

### .text-right

Aligns text to the right.

```html
<p class="text-right">...</p>
```

<div class="demo">
  <p class="text-right">Cras ullamcorper, massa sed commodo fermentum, neque tellus pharetra est, eu volutpat nibh ante eu mauris. Quisque auctor consequat dui. Nam non ante at nibh egestas feugiat. Praesent tincidunt rhoncus justo in placerat.</p>
</div>

</li>

<li markdown="1">

### .text-justify

Makes text justified.

```html
<p class="text-justify">...</p>
```

<div class="demo">
  <p class="text-justify">Cras ullamcorper, massa sed commodo fermentum, neque tellus pharetra est, eu volutpat nibh ante eu mauris. Quisque auctor consequat dui. Nam non ante at nibh egestas feugiat. Praesent tincidunt rhoncus justo in placerat.</p>
</div>

</li>

<li markdown="1">

### .text-nowrap

Prevents text from wrapping.

```html
<p class="text-nowrap">...</p>
```

<div class="demo">
  <p class="text-nowrap">Cras ullamcorper, massa sed commodo fermentum, neque tellus pharetra est, eu volutpat nibh ante eu mauris. Quisque auctor consequat dui. Nam non ante at nibh egestas feugiat. Praesent tincidunt rhoncus justo in placerat.</p>
</div>

</li>

<li markdown="1">

### .text-lowercase

Makes text lowercase.

```html
<p class="text-lowercase">Lowercase text goes here.</p>
```

<div class="demo">
  <p class="text-lowercase">Lowercase text goes here.</p>
</div>

</li>

<li markdown="1">

### .text-uppercase

Makes text uppercase.

```html
<p class="text-uppercase">Uppercase text goes here.</p>
```

<div class="demo">
  <p class="text-uppercase">Uppercase text goes here.</p>
</div>

</li>

<li markdown="1">

### .text-capitalize

Makes text capitalized.

```html
<p class="text-capitalize">Capitalize text goes here.</p>
```

<div class="demo">
  <p class="text-capitalize">Capitalize text goes here.</p>
</div>

</li>

</ul>
