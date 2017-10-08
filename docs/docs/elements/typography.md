---
layout: page
title: "Typography"
order: 2
---

This is where BaseWeb defines our most basic typographic elements. This includes things like base font styles, headings, links and emphasis elements.

<div id="toc" class="toc"></div>

<section id="el-headings" class="docs-item" markdown="1">

### Headings

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

</section><!-- .docs-item -->

<section id="el-paragraphs" class="docs-item" markdown="1">

### Paragraphs

The body copy is set by applying our default typographic settings to the `<body>` element and applying margins to our paragraph element.

```html
<p>...</p>
```

<div class="demo">
  <p>Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
  <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla.</p>
</div>

The default typographic settings. These dictate the base typographic styles for headings, body text, inline text elements and links as well as modifier classes.

</section><!-- .docs-item -->

<section id="el-tags" class="docs-item" markdown="1">

### Elements

HTML has a beautiful assortment of tools for adding rich semantics to a document. This is by no means a comprehensive list of HTML elements, but these are the inline text elements that BaseWeb specifically adds styles for.

<table class="table table-docs">
  <tr>
    <th>Element</th>
    <th>Demo</th>
  </tr>
  <tr>
    <td><code>&lt;a&gt;</code></td>
    <td><a href="#">Anchor styles</a></td>
  </tr>
  <tr>
    <td><code>&lt;strong&gt;</code></td>
    <td><strong>Strong emphasis styles</strong></td>
  </tr>
  <tr>
    <td><code>&lt;em&gt;</code></td>
    <td><em>Stress emphasis styles</em></td>
  </tr>
  <tr>
    <td><code>&lt;small&gt;</code></td>
    <td><small>Small styles</small></td>
  </tr>
  <tr>
    <td><code>&lt;mark&gt;</code></td>
    <td><mark>Marked styles</mark></td>
  </tr>
  <tr>
    <td><code>&lt;ins&gt;</code></td>
    <td><ins>Insert styles</ins></td>
  </tr>
  <tr>
    <td><code>&lt;del&gt;</code></td>
    <td><del>Delete styles</del></td>
  </tr>
  <tr>
    <td><code>&lt;cite&gt;</code></td>
    <td><cite>Citation styles</cite></td>
  </tr>
  <tr>
    <td><code>&lt;abbr&gt;</code></td>
    <td><abbr title="Abbreviation styles">Abbr styles</abbr></td>
  </tr>
</table>

</section><!-- .docs-item -->

<section id="el-classes" class="docs-item" markdown="1">

### Classes

In addition to our inline elements, BaseWeb provides these stylistic typographic classes for adding flair and visual depth to your documents without adding any semantic meaning.

<table class="table table-docs">
  <tr>
    <th>Element</th>
    <th>Demo</th>
  </tr>
  <tr>
    <td><code>.text-lead</code></td>
    <td><p class="text-lead">This is some example lead in text.</p></td>
  </tr>
  <tr>
    <td><code>.text-small</code></td>
    <td><p class="text-small">This is some example small text.</p></td>
  </tr>
  <tr>
    <td><code>.text-soften</code></td>
    <td><p class="text-soften">This is some example soften text.</p></td>
  </tr>
  <tr>
    <td><code>.text-harden</code></td>
    <td><p class="text-harden">This is some example harden text.</p></td>
  </tr>
  <tr>
    <td><code>.text-left</code></td>
    <td><p class="text-left">This is some example text with left alignment.</p></td>
  </tr>
  <tr>
    <td><code>.text-center</code></td>
    <td><p class="text-center">This is some example text with centered alignment.</p></td>
  </tr>
  <tr>
    <td><code>.text-right</code></td>
    <td><p class="text-right">This is some example text with right alignment.</p></td>
  </tr>
  <tr>
    <td><code>.text-justify</code></td>
    <td><p class="text-justify">This is some example text with justified alignment.</p></td>
  </tr>
  <tr>
    <td><code>.text-nowrap</code></td>
    <td><p class="text-nowrap">This text doesn't wrap.</p></td>
  </tr>
  <tr>
    <td><code>.text-lowercase</code></td>
    <td><p class="text-lowercase">This is some example text with lowercase styles.</p></td>
  </tr>
  <tr>
    <td><code>.text-uppercase</code></td>
    <td><p class="text-uppercase">This is some example text with uppercase styles.</p></td>
  </tr>
  <tr>
    <td><code>.text-capitalize</code></td>
    <td><p class="text-capitalize">This is some example text with capitalize styles.</p></td>
  </tr>
</table>

</section><!-- .docs-item -->
