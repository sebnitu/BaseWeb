---
layout: page
title: Utility
order: 1
section:
  id: js-utility
  class: js-method
---

The utility object contains methods that are used throughout a variety of JavaScript components and can also be used in custom scripts. Once you include `_utility.js` into you script or document, it's common to save it in a shorthand variable allowing you to use it's methods more quickly:

```js
var u = utility; // Create shorthand for the utility object

u.toArray('something'); // Converts a string into array object
u.extend( object_a, object_b ); // jQuery type extend of objects
```

<div id="toc" class="toc"></div>

<section id="{{ page.section.id }}-hasClass" class="docs-item {{ page.section.class }}" markdown="1">

### .hasClass()

Check whether or not an element contains a specific class.

```scss
utility.hasClass( element, className )
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>element</code></td>
    <td>Element</td>
    <td>Element to check class(es) on</td>
  </tr>
  <tr>
    <td><code>className</code></td>
    <td>String <span class="text-soften">||</span> Array</td>
    <td>Class(es) to check</td>
  </tr>
  <tr>
    <th>Return</th>
    <td colspan="3">Boolean</td>
  </tr>
</table>

#### Example Usage

```html
<div id="mydiv" class="foo bar"></div>
```

```js
var div = document.querySelector('#mydiv');

utility.hasClass(div, 'foo');  // Returns true
utility.hasClass(div, 'quux'); // Returns false
```

</section><!-- .docs-item -->

<section id="{{ page.section.id }}-addClass" class="docs-item {{ page.section.class }}" markdown="1">

### .addClass()

Adds a class or classes to an element.

```scss
utility.addClass( element, className )
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>element</code></td>
    <td>Element</td>
    <td>Element to add class(es) to</td>
  </tr>
  <tr>
    <td><code>className</code></td>
    <td>String <span class="text-soften">||</span> Array</td>
    <td>Class(es) to add</td>
  </tr>
</table>

#### Example Usage

```html
<div id="mydiv"></div>
```

```js
var div = document.querySelector('#mydiv');

utility.addClass(div, 'foo');
// Result: <div id="mydiv" class="foo"></div>

utility.addClass(div, ['bar', 'quux']);
// Result: <div id="mydiv" class="foo bar quux"></div>
```

</section><!-- .docs-item -->

<section id="{{ page.section.id }}-removeClass" class="docs-item {{ page.section.class }}" markdown="1">

### .removeClass()

Remove a class or classes from an element.

```scss
utility.removeClass( element, className )
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>element</code></td>
    <td>Element</td>
    <td>Element to remove class(es) from</td>
  </tr>
  <tr>
    <td><code>className</code></td>
    <td>String <span class="text-soften">||</span> Array</td>
    <td>Class(es) to remove</td>
  </tr>
</table>

#### Example Usage

```html
<div id="mydiv" class="foo bar quux"></div>
```

```js
var div = document.querySelector('#mydiv');

utility.removeClass(div, 'foo');
// Result: <div id="mydiv" class="bar quux"></div>

utility.removeClass(div, ['bar', 'quux']);
// Result: <div id="mydiv"></div>
```

</section><!-- .docs-item -->

<section id="{{ page.section.id }}-toggleClass" class="docs-item {{ page.section.class }}" markdown="1">

### .toggleClass()

Toggle a class or classes on an element.

```scss
utility.toggleClass( element, className )
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>element</code></td>
    <td>Element</td>
    <td>Element to toggle class(es) on</td>
  </tr>
  <tr>
    <td><code>className</code></td>
    <td>String <span class="text-soften">||</span> Array</td>
    <td>Class(es) to toggle</td>
  </tr>
</table>

#### Example Usage

```html
<div id="mydiv" class="foo bar"></div>
```

```js
var div = document.querySelector('#mydiv');

utility.toggleClass(div, 'foo');
// Result: <div id="mydiv" class="bar"></div>

utility.toggleClass(div, ['bar', 'quux']);
// Result: <div id="mydiv" class="quux"></div>
```

</section><!-- .docs-item -->

<section id="{{ page.section.id }}-closest" class="docs-item {{ page.section.class }}" markdown="1">

### .closest()

Find the closest parent element based on class. This is different from the native .closest() method in that it skips the current element.

```scss
utility.closest( element, className )
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>element</code></td>
    <td>Element</td>
    <td>Element to start search from</td>
  </tr>
  <tr>
    <td><code>className</code></td>
    <td>String <span class="text-soften">||</span> Array</td>
    <td>Class(es) to check for</td>
  </tr>
  <tr>
    <th>Return</th>
    <td colspan="3">Element Object</td>
  </tr>
</table>

#### Example Usage

```html
<div class="foo">
  <div class="bar">
    <div class="quux"></div>
  </div>
</div>
```

```js
var div = document.querySelector('.quux');

utility.closest(div, 'foo');
// Returns <div class="foo"></div>
```

</section><!-- .docs-item -->

<section id="{{ page.section.id }}-toArray" class="docs-item {{ page.section.class }}" markdown="1">

### .toArray()

Converts a string to an array. If an array is passed, it's returned as is. Anything else is returned as false.

```scss
utility.toArray( string )
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>string</code></td>
    <td>String <span class="text-soften">||</span> Array</td>
    <td>String to convert into an array</td>
  </tr>
  <tr>
    <th>Return</th>
    <td colspan="3">Array</td>
  </tr>
</table>

#### Example Usage

```js
utility.toArray("foo");
// Returns ["foo"]
```

</section><!-- .docs-item -->

<section id="{{ page.section.id }}-extend" class="docs-item {{ page.section.class }}" markdown="1">

### .extend()

Merge two or more objects. Returns a new object. Set the first argument to `true` for a deep or recursive merge.

```scss
utility.extend( deep[optional], objects... )
```

<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>deep</code></td>
    <td>Boolean</td>
    <td>[Optional] Deep If true, do a deep (or recursive) merge</td>
  </tr>
  <tr>
    <td><code>objects...</code></td>
    <td>Objects</td>
    <td>The objects to merge together; each overriding the next.</td>
  </tr>
  <tr>
    <th>Return</th>
    <td colspan="3">Object</td>
  </tr>
</table>

#### Example Usage

```js
// Our initial object
var defaults = {
  class : 'example',
  color : 'blue',
  other : true
};

// The override object we'll use to merge
var options = {
  color : 'red',
  other : false,
  new : '100px'
};

var settings = utility.extend(defaults, options);
// Returns merged objects into the `options` variable
// { class: "example", color: "red", other: false, new: "100px" }
```

</section><!-- .docs-item -->
