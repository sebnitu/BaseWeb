---
layout: page
title: "Forms"
order: 9
---

HTML forms are probably the most daunting aspect of front-end development to markup and style. BaseWeb's goal is to give you the tools for making forms easy to build and customize regardless of how simple or complex a form may be.

## Form Structure

Along with all standard form elements, BaseWeb provides you with `.form-group`, `.form-header`, `.form-action` and `.input-group` classes to use for structuring a form layout. You also have the BaseWeb Grid System available for creating more complex form layouts.

```html
<form>
  <header class="form-header">
    ...
  </header><!-- .form-header -->

  <div class="form-group">
    <div class="input-group">
      ...
    </div><!-- .input-group -->
  </div><!-- .form-group -->

  <div class="form-group">
    <div class="row">
      <div class="col col-6">
        <div class="input-group">
          ...
        </div><!-- .input-group -->
      </div><!-- .col -->
      <div class="col col-6">
        <div class="input-group">
          ...
        </div><!-- .input-group -->
      </div><!-- .col -->
    </div><!-- .row -->
  </div><!-- .form-group -->

  <footer class="form-action">
    ...
  </footer><!-- .form-action -->
</form>
```

<div class="demo">
  <form>

    <header class="form-header">
      <h2>Form Heading</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in ultricies nunc. Maecenas egestas tellus eget ipsum fermentum commodo. Nam rhoncus magna quam, quis commodo lorem fermentum quis.</p>
    </header>

    <div class="form-group">
      <label>Example Label</label>
      <div class="input-group">
        <input class="input" type="text" placeholder="Example text input..." required>
        <select class="input">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
        <textarea class="input" rows="4" placeholder="Example textarea..."></textarea>
      </div>
    </div>

    <div class="form-group">
      <label>Example Label</label>
      <div class="row">
        <div class="col col-6">
          <label class="sub">Choice Checkboxes</label>
          <div class="input-group">
            <label class="choice"><input type="checkbox"> Choice Checkbox 1</label>
            <label class="choice"><input type="checkbox"> Choice Checkbox 2</label>
          </div>
        </div>

        <div class="col col-6">
          <label class="sub">Choice Radios</label>
          <div class="input-group">
            <label class="choice"><input type="radio" name="radio-1"> Choice Radio 1</label>
            <label class="choice"><input type="radio" name="radio-1"> Choice Radio 2</label>
          </div>
        </div>
      </div>
    </div>

    <footer class="form-action">
      <button class="button primary">Button</button>
      <button class="button default">Button</button>
    </footer>

  </form>
</div>

<section class="subsection subsection-variables" markdown="1">

# Form Variables

Form variables are encompassed within the `$forms` map and are used throughout all form mixins to set default values.

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Default</th>
  </tr>

  <tr>
    <td><code>$forms('vertical-spacing')</code></td>
    <td><code>1.5em</code></td>
  </tr>
  <tr>
    <td><code>$forms('vertical-align')</code></td>
    <td><code>0.75em</code></td>
  </tr>
  <tr>
    <td><code>$forms('font-family')</code></td>
    <td><code>inherit</code></td>
  </tr>
  <tr>
    <td><code>$forms('base-font-size')</code></td>
    <td><code>1em</code></td>
  </tr>
  <tr>
    <td><code>$forms('base-line-height')</code></td>
    <td><code>1.5em</code></td>
  </tr>
  <tr>
    <td><code>$forms('font-size')</code></td>
    <td><code>1em</code></td>
  </tr>
  <tr>
    <td><code>$forms('line-height')</code></td>
    <td><code>1.5em</code></td>
  </tr>
  <tr>
    <td><code>$forms('color-label')</code></td>
    <td><code>$color</code></td>
  </tr>
  <tr>
    <td><code>$forms('color')</code></td>
    <td><code>$color-dark</code></td>
  </tr>
  <tr>
    <td><code>$forms('color-placeholder')</code></td>
    <td><code>#aaa</code></td>
  </tr>
  <tr>
    <td><code>$forms('color-select-arrow')</code></td>
    <td><code>$color-dark</code></td>
  </tr>
  <tr>
    <td><code>$forms('border-radius')</code></td>
    <td><code>$border-radius</code></td>
  </tr>

  <tr>
    <th colspan="2">Form Input</th>
  </tr>
  <tr>
    <td><code>$forms('input':'padding')</code></td>
    <td><code>0.75em</code></td>
  </tr>
  <tr>
    <td><code>$forms('input':'background')</code></td>
    <td><code>rgba($white, 0.5)</code></td>
  </tr>
  <tr>
    <td><code>$forms('input':'border')</code></td>
    <td><code>1px solid rgba($black, 0.15)</code></td>
  </tr>
  <tr>
    <td><code>$forms('input':'box-shadow')</code></td>
    <td><code>0 1px 3px</code> <code>rgba($black, 0),</code> <code>inset 0 1px 3px</code> <code>rgba($black, 0.05)</code></td>
  </tr>

  <tr>
    <th colspan="2">Form Input Focus</th>
  </tr>
  <tr>
    <td><code>$forms('input':'focus':'background')</code></td>
    <td><code>rgba($white, 1)</code></td>
  </tr>
  <tr>
    <td><code>$forms('input':'focus':'border')</code></td>
    <td><code>1px solid rgba($blue, 1)</code></td>
  </tr>
  <tr>
    <td><code>$forms('input':'focus':'box-shadow')</code></td>
    <td><code>0 1px 3px</code> <code>rgba($black, 0.05),</code> <code>inset 0 1px 3px</code> <code>rgba($black, 0)</code></td>
  </tr>

  <tr>
    <th colspan="2">Form Choice</th>
  </tr>
  <tr>
    <td><code>$forms('choice':'padding')</code></td>
    <td><code>0.75em 0.75em 0.75em 2.25em</code></td>
  </tr>
  <tr>
    <td><code>$forms('choice':'background')</code></td>
    <td><code>rgba($black, 0.05)</code></td>
  </tr>
  <tr>
    <td><code>$forms('choice':'border')</code></td>
    <td><code>1px solid transparent</code></td>
  </tr>
  <tr>
    <td><code>$forms('choice':'box-shadow')</code></td>
    <td><span class="text-soften">None</span></td>
  </tr>
</table>

<div class="notice warning">
  <p>To preserve the alignment of form elements, it's recommended that you keep the height of input, choice and button elements equal.</p>
</div>

</section>

<section class="subsection subsection-classes" markdown="1">

# Form Structure Classes

These are that classes that BaseWeb provides for structuring a form. They are supplementary to a form's base structure elements and can be omitted or expanded upon (using form mixins) depending on your needs.

<ul class="list list-docs">

<li markdown="1">

## .form-group

Form groups are the first structure element used in a BaseWeb forms. It applies our vertical spacing and a hook for adding modifier classes and custom styles.

```html
<form>
  <div class="form-group">
    ...
  </div>
  <div class="form-group">
    ...
  </div>
  ...
</form>
```

<div class="demo">
  <form>
    <div class="form-group">
      <label>Name</label>
      <input class="input" type="text">
    </div>
    <div class="form-group">
      <label>Email</label>
      <input class="input" type="email">
    </div>
    <div class="form-group">
      <label>Comment</label>
      <textarea class="input" rows="4"></textarea>
    </div>
  </form>
</div>

</li>

<li markdown="1">

## .form-header

Used to define a form header. It gets the vertical spacing and custom typographic styles for headings and paragraph elements that it contains.

```html
<form>
  <header class="form-header">
    <h2>...</h2>
    <p>...</p>
  </header>
</form>
```

<div class="demo">
  <form>
    <header class="form-header">
      <h2>Form Heading</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in ultricies nunc. Maecenas egestas tellus eget ipsum fermentum commodo. Nam rhoncus magna quam, quis commodo lorem fermentum quis.</p>
    </header>
  </form>
</div>

</li>

<li markdown="1">

## .form-action

Action groups are used to wrap form submission, resets and other form actions. It's also a way to apply custom styles and modifiers as a form footer. Within the `.form-action` element, you also have the `.input-align` class to align none-input elements vertically.

```html
<form>
  <footer class="form-action">
    ...
  </footer>
</form>
```

<div class="demo">
  <form>
    <footer class="form-action">
      <button class="button green">Save Account</button>
      <button class="button danger">Delete</button>
      <button class="button default float-right">Cancel</button>
    </footer>
  </form>
</div>

</li>

<li markdown="1">

## .input-group

Input groups are used to wrap groups of related input elements. It, like form groups, applies vertical spacing and another hook for adding modifier classes.

```html
<form>
  <div class="form-group">
    <div class="input-group">
      ...
    </div>
    <div class="input-group">
      ...
    </div>
  </div>
</form>
```

<div class="demo">
  <form>
    <div class="form-group">
      <div class="input-group">
        <input class="input" type="text">
        <input class="input" type="text">
      </div>
      <div class="input-group">
        <label class="choice"><input type="checkbox" checked> Choice</label>
        <label class="choice"><input type="checkbox" checked> Choice</label>
      </div>
    </div>
  </form>
</div>

</li>

<li markdown="1">

## .inline

You can create inline forms by adding the class `.inline` to form structure elements. If applied to a `.form-group` element, it also makes children `.form-group` and `.input-group` elements inline as well.

```html
<form>
  <div class="form-group inline">
    ...
  </div>
</form>
```

<div class="demo">
  <form>
    <div class="form-group inline">
      <input type="text" class="input" placeholder="Username" required>
      <input type="password" class="input" placeholder="Password" required>
      <button type="submit" class="button primary">Sign In</button>
    </div>
  </form>
</div>

</li>

<li markdown="1">

## Form Grids

For more complex form layouts, you have BaseWeb's default grid system to create rows and columns. This is done using the `.row` `.col` and `.col-#` classes where `#` represents the number of columns to span.

```html
<form>
  <div class="form-group">
    <label>Grid Example</label>
    <div class="row">
      <div class="col col-4">
        ...
      </div>
      <div class="col col-4">
        ...
      </div>
      <div class="col col-4">
        ...
      </div>
    </div>
  </div>
</form>
```

<div class="demo">
  <form>
    <div class="form-group">
      <label>Grid Example</label>
      <div class="row">
        <div class="col col-4">
          <input class="input" type="text" placeholder="Example">
        </div>
        <div class="col col-4">
          <select class="input">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>
        <div class="col col-4">
          <label class="choice"><input type="checkbox" checked> Choice</label>
        </div>
      </div>
    </div>
  </form>
</div><!-- .demo -->

</li>

<li markdown="1">

## Form Validation States

There are three validation states represented through the classes `.success`, `.warning` and `.error`. There's also a fourth state class `.active`, that is used to simulate the focus styles for form inputs. It's also possible to add these states to form elements directly.

```html
<div class="form-group success">...</div>
<div class="form-group warning">...</div>
<div class="form-group error">...</div>
<div class="form-group active">...</div>
```

<div class="demo">
  <form>

    <div class="form-group success">
      <div class="row">
        <div class="col col-4">
          <input class="input" type="text" placeholder="Example">
        </div>
        <div class="col col-4">
          <select class="input">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>
        <div class="col col-4">
          <label class="choice"><input type="checkbox"> Choice</label>
        </div>
      </div>
    </div><!-- .form-group .success -->

    <div class="form-group warning">
      <div class="row">
        <div class="col col-4">
          <input class="input" type="text" placeholder="Example">
        </div>
        <div class="col col-4">
          <select class="input">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>
        <div class="col col-4">
          <label class="choice"><input type="checkbox"> Choice</label>
        </div>
      </div>
    </div><!-- .form-group .warning -->

    <div class="form-group error">
      <div class="row">
        <div class="col col-4">
          <input class="input" type="text" placeholder="Example">
        </div>
        <div class="col col-4">
          <select class="input">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>
        <div class="col col-4">
          <label class="choice"><input type="checkbox"> Choice</label>
        </div>
      </div>
    </div><!-- .form-group .error -->

    <div class="form-group active">
      <div class="row">
        <div class="col col-4">
          <input class="input" type="text" placeholder="Example">
        </div>
        <div class="col col-4">
          <select class="input">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>
        <div class="col col-4">
          <label class="choice"><input type="checkbox"> Choice</label>
        </div>
      </div>
    </div><!-- .form-group .active -->

  </form>
</div>

</li>

</ul>

</section>

<section class="subsection subsection-elements" markdown="1">

# Form Elements

BaseWeb supports a wide range of input types and form elements. By default, form inputs are set to display block at 100% width. They also receive half of the vertical spacing set in `$forms`.

The `.inline` class is available for all form elements to manually set them inline with spacing margins. They can also be set inline by applying `.inline` to a parent element.

<ul class="list list-docs">

<li markdown="1">

## Input

The `.input` class is used to style the most common input types: `text`, `password`, `date`, `month`, `week`, `time`, `email`, `number`, `search`, `tel`, `url` and `color`.

```html
<input class="input" type="text" placeholder="Name">
<input class="input" type="email" placeholder="Email">
<input class="input" type="url" placeholder="http://">
```

<div class="demo">
  <form>
    <input class="input" type="text" placeholder="Name">
    <input class="input" type="email" placeholder="Email">
    <input class="input" type="url" placeholder="http://">
  </form>
</div>

</li>

<li markdown="1">

## Textarea

The `.input` class is used to style textareas. The height is then reset to auto so that it can be manually set with the `rows` attribute. They also have their max-width set to 100% so that they can't be resized passed the width of their container.

```html
<textarea class="input" rows="4"></textarea>
```

<div class="demo">
  <form>
    <textarea class="input" rows="4" placeholder="Textarea..."></textarea>
  </form>
</div>

</li>

<li markdown="1">

## Select

Select elements are styled with the `.input` class and also receive custom styles with dropdown arrow. There are also custom styles applied to select elements that use the `size` and `multiple` attributes.

```html
<select class="input">
  <option>Select Option 1</option>
  <option>Select Option 2</option>
  <option>Select Option 3</option>
</select>

<select class="input" multiple>
  ...
</select>
```

<div class="demo">
  <form>
    <select class="input">
      <option>Select Option 1</option>
      <option>Select Option 2</option>
      <option>Select Option 3</option>
    </select>
    <select class="input" multiple>
      <option>Select Option 1</option>
      <option>Select Option 2</option>
      <option>Select Option 3</option>
    </select>
  </form>
</div>

</li>

<li markdown="1">

## Checkbox and Radio

BaseWeb styles checkbox and radio inputs by wrapping them with labels and applying `.checkbox` and `.radio` classes to them.

```html
<label class="checkbox">
  <input type="checkbox"> Checkbox Example 1
</label>

<label class="radio">
  <input type="radio" name="radio-1"> Radio Example 1
</label>
```

<div class="demo">
  <form>
    <div class="row">

      <div class="col col-6">
        <div class="input-group">
          <label>Checkboxes</label>
          <label class="checkbox"><input type="checkbox"> Checkbox Example 1</label>
          <label class="checkbox"><input type="checkbox"> Checkbox Example 2</label>
          <label class="checkbox"><input type="checkbox"> Checkbox Example 3</label>
        </div>
      </div>

      <div class="col col-6">
        <div class="input-group">
          <label>Radios</label>
          <label class="radio"><input type="radio" name="radio-2"> Radio Example 1</label>
          <label class="radio"><input type="radio" name="radio-2"> Radio Example 2</label>
          <label class="radio"><input type="radio" name="radio-2"> Radio Example 3</label>
        </div>
      </div>

    </div>
  </form>
</div>

</li>

<li markdown="1">

## Choice

Choice elements are custom styled checkbox and radio input elements. They are represented by adding the `.choice` class to the wrapping label element of checkboxes and radios.

They receive extra padding so that they match the height of `.input` elements which also makes them more user friendly.

```html
<label class="choice">
  <input type="checkbox"> Choice Checkbox Example 1
</label>

<label class="choice">
  <input type="radio" name="radio-1"> Choice Radio Example 1
</label>
```

<div class="demo">
  <form>
    <div class="row">
      <div class="col col-6">
        <label>Choice Checkboxes</label>
        <label class="choice"><input type="checkbox"> Choice Checkbox Example 1</label>
        <label class="choice"><input type="checkbox"> Choice Checkbox Example 2</label>
        <label class="choice"><input type="checkbox"> Choice Checkbox Example 3</label>
      </div>

      <div class="col col-6">
        <label>Choice Radios</label>
        <label class="choice"><input type="radio" name="radio-1"> Choice Radio Example 1</label>
        <label class="choice"><input type="radio" name="radio-1"> Choice Radio Example 2</label>
        <label class="choice"><input type="radio" name="radio-1"> Choice Radio Example 3</label>
      </div>
    </div>
  </form>
</div>

</li>

<li markdown="1">

## Label

You'll rarely have a form without labels and are styled differently depending on their context. There are a number of classes that are available to modify the appearance and behavior of labels.

```html
<label>Default Label</label>

<!-- Makes subtle styles for sub label -->
<label class="sub">...</label>

<!-- Hides lables but keeps them accessible for screen readers -->
<label class="hide">...</label>

<!-- Makes labels display block with top padding for alignment -->
<label class="block">...</label>

<!-- Makes labels display inline-block with top padding for alignment -->
<label class="inline">...</label>
```

<div class="demo">
  <form>
    <div class="form-group">
      <label>Default Label</label>
      <div class="row">
        <div class="col col-3">
          <label class="sub">Sub Label</label>
          <label class="block">Block Label</label>
        </div>
        <div class="col col-5">
          <label class="sub">Sub Label</label>
          <input class="input" type="text" placeholder="Example">
        </div>
        <div class="col col-4">
          <label class="sub">Sub Label</label>
          <label class="choice"><input type="checkbox" checked> Choice</label>
        </div>
      </div>
    </div>
  </form>
</div><!-- .demo -->

</li>

<li markdown="1">

## Notes

Notes are custom form elements in BaseWeb and are represented using the `.note` class. Notes can work as descriptive text, help text or any sort of informative text to help a user navigate a form. They are contextual and receive unique spacing based on their siblings.

```html
<p class="note">...</p>

<div class="note">
  <p>...</p>
  <p>...</p>
</div>
```

<div class="demo">
  <form>
    <div class="form-group">
      <div class="row">
        <div class="col col-4">
          <label class="block">Example Input with Notes</label>
          <p class="note">This is an example note.</p>
        </div>
        <div class="col col-8">
          <input class="input" type="text" placeholder="Example">
          <select class="input">
            <option>Select Option 1</option>
            <option>Select Option 2</option>
            <option>Select Option 3</option>
          </select>
          <p class="note">This is an example note.</p>
        </div>
      </div>
    </div>
  </form>
</div><!-- .demo -->

</li>

</ul>

</section>

<section class="subsection subsection-mixins" markdown="1">

# Form Mixins

Because of the complexity of HTML forms, BaseWeb mainly favors using classes and context to style forms. But there are a small set of mixins that can be used to expand form customization.

<ul class="list list-docs">

<li markdown="1">

## placeholder

Sets the placeholder text color for input fields that use the placeholder attribute.

```scss
@include placeholder( $color, $options: () );
```

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$color</code></td>
    <td>Color</td>
    <td><code>$forms('color-placeholder')</code></td>
  </tr>
  <tr>
    <td><code>$options</code></td>
    <td>Map</td>
    <td><code>$forms()</code></td>
  </tr>
</table>

</li>

<li markdown="1">

## make-form-group-base

Creates the styles for a base form group by applying vertical spacing.

```scss
@include make-form-group-base( $options: () );
```

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$options</code></td>
    <td>Map</td>
    <td><code>$forms()</code></td>
  </tr>
</table>

</li>

<li markdown="1">

## make-form-group-inline

Creates the styles for making an inline form group element.

```scss
@include make-form-group-inline( $options: () );
```

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$options</code></td>
    <td>Map</td>
    <td><code>$forms()</code></td>
  </tr>
</table>

</li>

<li markdown="1">

## make-input-inline

Creates the styles for making an inline form element.

```scss
@include make-input-inline( $options: () );
```

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$options</code></td>
    <td>Map</td>
    <td><code>$forms()</code></td>
  </tr>
</table>

</li>

</ul>

</section>

<!--
<label>Text Input</label>
<input class="input" type="text" placeholder="Text">

<label>Password Input</label>
<input class="input" type="password" placeholder="Password">

<label>Date Input</label>
<input class="input" type="date">

<label>Month Input</label>
<input class="input" type="month">

<label>Week Input</label>
<input class="input" type="week">

<label>Time Input</label>
<input class="input" type="time">

<label>Email Input</label>
<input class="input" type="email" placeholder="example@email.com">

<label>Number Input</label>
<input class="input" type="number">

<label>Search Input</label>
<input class="input" type="search">

<label>Telephone Input</label>
<input class="input" type="tel">

<label>Web Address Input</label>
<input class="input" type="url" placeholder="http://">

<label>Color Input</label>
<input class="input" type="color">

<label>Textarea</label>
<textarea class="input"></textarea>

<label>Select</label>
<select class="input">
  <option>1</option>
  <option>2</option>
  <option>3</option>
</select>

<label>Multiple Select</label>
<select class="input" multiple>
  <option>1</option>
  <option>2</option>
  <option>3</option>
</select>

<label>File Input</label>
<input type="file">

<label>Range Input</label>
<input type="range">
-->
