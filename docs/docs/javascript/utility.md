---
layout: page
title: Utility
order: 1
---

The utility object contains methods that are used throughout a variety of JavaScript components and can also be used in custom scripts. Once you include `_utility.js` into you script or document, it's common to save it in a shorthand variable allowing you to use it's methods more quickly:

```js
var u = utility; // Create shorthand for the utility object

u.toArray('something'); // Converts a string into array object
u.extend( object_a, object_b ); // jQuery type extend of objects
```

<section class="js-method" markdown="1">

### .hasClass()

Check whether or not an element contains a specific class.

```scss
utility.hasClass( element, className )
```
<table class="table table-docs">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>element</code></td>
    <td>Object</td>
    <td><span class="text-soften">None</span></td>
    <td>Element to check class(es) on</td>
  </tr>
  <tr>
    <td><code>className</code></td>
    <td>String || Array</td>
    <td><span class="text-soften">None</span></td>
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

</section>
