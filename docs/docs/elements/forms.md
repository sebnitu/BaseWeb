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

<section class="subsection subsection-variables has-inner-subsection">
<div class="inner-subsection">
  <h1>Form Variables</h1>
  <p class="text-lead">Form variables are encompassed within the <code>$forms</code> map and are used throughout all form mixins to set default values.</p>
  <ul class="docs-list docs-list-compact">
    <li>
      <code>$forms('vertical-spacing')</code>
      <code class="right value">1.5em</code>
    </li>
    <li>
      <code>$forms('vertical-align')</code>
      <code class="right value">0.75em</code>
    </li>
    <li>
      <code>$forms('font-family')</code>
      <code class="right value">inherit</code>
    </li>
    <li>
      <code>$forms('base-font-size')</code>
      <code class="right value">1em</code>
    </li>
    <li>
      <code>$forms('base-line-height')</code>
      <code class="right value">1.5em</code>
    </li>
    <li>
      <code>$forms('font-size')</code>
      <code class="right value">1em</code>
    </li>
    <li>
      <code>$forms('line-height')</code>
      <code class="right value">1.5em</code>
    </li>
    <li>
      <code>$forms('color')</code>
      <code class="right value">$color</code>
    </li>
    <li>
      <code>$forms('color-label')</code>
      <code class="right value">$color-dark</code>
    </li>
    <li>
      <code>$forms('color-placeholder')</code>
      <code class="right value">#aaa</code>
    </li>
    <li>
      <code>$forms('color-select-arrow')</code>
      <code class="right value">$color-dark</code>
    </li>
    <li>
      <code>$forms('border-radius')</code>
      <code class="right value">$border-radius</code>
    </li>

    <li class="list-sep">
      <code>$forms('input':'padding')</code>
      <code class="right value">0.75em</code>
    </li>
    <li>
      <code>$forms('input':'background')</code>
      <code class="right value">rgba($white, 0.5)</code>
    </li>
    <li>
      <code>$forms('input':'border')</code>
      <code class="right value">1px solid rgba($black, 0.15)</code>
    </li>
    <li>
      <code>$forms('input':'box-shadow')</code>
      <code class="block value">0 1px 3px rgba($black, 0), inset 0 1px 3px rgba($black, 0.05)</code>
    </li>

    <li class="list-sep">
      <code>$forms('input':'focus':'background')</code>
      <code class="right value">rgba($white, 1)</code>
    </li>
    <li>
      <code>$forms('input':'focus':'border')</code>
      <code class="right value">1px solid rgba($blue, 1)</code>
    </li>
    <li>
      <code>$forms('input':'focus':'box-shadow')</code>
      <code class="block value">0 1px 3px rgba($black, 0.05), inset 0 1px 3px rgba($black, 0)</code>
    </li>

    <li class="list-sep">
      <code>$forms('choice':'padding')</code>
      <code class="right value">0.75em 0.75em 0.75em 2.25em</code>
    </li>
    <li>
      <code>$forms('choice':'background')</code>
      <code class="right value">rgba($black, 0.05)</code>
    </li>
    <li>
      <code>$forms('choice':'border')</code>
      <code class="right value">1px solid transparent</code>
    </li>
    <li>
      <code>$forms('choice':'box-shadow')</code>
      <code class="right value">none</code>
    </li>
  </ul>
  <div class="notice warning">
    <p>To preserve the alignment of form elements, it's recommended that you keep the height of input, choice and button elements equal.</p>
  </div>
</div>
</section>

<section class="subsection subsection-classes has-inner-subsection">
<div class="inner-subsection">
  <h1>Form Structure Classes</h1>
  <p class="text-lead">These are that classes that BaseWeb provides for structuring a form. They are supplementary to a form's base structure elements and can be omitted or expanded upon (using form mixins) depending on your needs.</p>
</div>
<ul class="docs-list">

  <li>
    <h2>.form-group</h2>
    <p>Form groups are the first structure element used in a BaseWeb forms. It applies our vertical spacing and a hook for adding modifier classes and custom styles.</p>
    <pre class="language-markup"><code>
<form>
  <div class="form-group">
    ...
  </div>
  <div class="form-group">
    ...
  </div>
  ...
</form>
</code></pre>
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

  <li>
    <h2>.form-header</h2>
    <p>Used to define a form header. It gets the vertical spacing and custom typographic styles for headings and paragraph elements that it contains.</p>
    <pre class="language-markup"><code>
<form>
  <header class="form-header">
    <h2>...</h2>
    <p>...</p>
  </header>
</form>
</code></pre>
    <div class="demo">
      <form>
        <header class="form-header">
          <h2>Form Heading</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in ultricies nunc. Maecenas egestas tellus eget ipsum fermentum commodo. Nam rhoncus magna quam, quis commodo lorem fermentum quis.</p>
        </header>
      </form>
    </div>
  </li>

  <li>
    <h2>.form-action</h2>
    <p>Action groups are used to wrap form submission, resets and other form actions. It's also a way to apply custom styles and modifiers as a form footer. Within the <code>.form-action</code> element, you also have the <code>.input-align</code> class to align none-input elements vertically.</p>
    <pre class="language-markup"><code>
<form>
  <footer class="form-action">
    ...
  </footer>
</form>
</code></pre>
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

  <li>
    <h2>.input-group</h2>
    <p>Input groups are used to wrap groups of related input elements. It, like form groups, applies vertical spacing and another hook for adding modifier classes.</p>
    <pre class="language-markup"><code>
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
</code></pre>
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

  <li>
    <h2>.inline</h2>
    <p>You can create inline forms by adding the class <code>.inline</code> to form structure elements. If applied to a <code>.form-group</code> element, it also makes children <code>.form-group</code> and <code>.input-group</code> elements inline as well.</p>
    <pre class="language-markup"><code>
<form>
  <div class="form-group inline">
    ...
  </div>
</form></code></pre>
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

  <li>
    <h2>Form Grids</h2>
    <p>For more complex form layouts, you have BaseWeb's default grid system to create rows and columns. This is done using the <code>.row</code> <code>.col</code> and <code>.col-#</code> classes where <code>#</code> represents the number of columns to span.</p>
    <pre class="language-markup"><code>
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
</code></pre>
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

  <li>
    <h2>Form Validation States</h2>
    <p>There are three validation states represented through the classes <code>.success</code>, <code>.warning</code> and <code>.error</code>. There's also a fourth state class <code>.active</code>, that is used to simulate the focus styles for form inputs. It's also possible to add these states to form elements directly.</p>
    <pre class="language-markup"><code>
<div class="form-group success">...</div>
<div class="form-group warning">...</div>
<div class="form-group error">...</div>
<div class="form-group active">...</div>
</code></pre>
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

<section class="subsection subsection-classes has-inner-subsection">
<div class="inner-subsection">
  <h1>Form Elements</h1>
  <p class="text-lead">BaseWeb supports a wide range of input types and form elements. By default, form inputs are set to display block at 100% width. They also receive half of the vertical spacing set in <code>$forms</code>.</p>
  <p>The <code>.inline</code> class is available for all form elements to manually set them inline with spacing margins. They can also be set inline by applying <code>.inline</code> to a parent element.</p>
</div>
<ul class="docs-list">

  <li>
    <h2>Input</h2>
    <p>The <code>.input</code> class is used to style the most common input types: <code>text</code>, <code>password</code>, <code>date</code>, <code>month</code>, <code>week</code>, <code>time</code>, <code>email</code>, <code>number</code>, <code>search</code>, <code>tel</code>, <code>url</code> and <code>color</code>.</p>
    <pre class="language-markup"><code>
<input class="input" type="text" placeholder="Name">
<input class="input" type="email" placeholder="Email">
<input class="input" type="url" placeholder="http://">
</code></pre>
    <div class="demo">
      <form>
        <input class="input" type="text" placeholder="Name">
        <input class="input" type="email" placeholder="Email">
        <input class="input" type="url" placeholder="http://">
      </form>
    </div>
  </li>

  <li>
    <h2>Textarea</h2>
    <p>The <code>.input</code> class is used to style textareas. The height is then reset to auto so that it can be manually set with the <code>rows</code> attribute. They also have their max-width set to 100% so that they can't be resized passed the width of their container.</p>
    <pre class="language-markup"><code><textarea class="input" rows="4"></textarea></code></pre>
    <div class="demo">
      <form>
        <textarea class="input" rows="4" placeholder="Textarea..."></textarea>
      </form>
    </div>
  </li>

  <li>
    <h2>Select</h2>
    <p>Select elements are styled with the <code>.input</code> class and also receive custom styles with dropdown arrow. There are also custom styles applied to select elements that use the <code>size</code> and <code>multiple</code> attributes.</p>
    <pre class="language-markup"><code>
<select class="input">
  <option>Select Option 1</option>
  <option>Select Option 2</option>
  <option>Select Option 3</option>
</select>

<select class="input" multiple>
  ...
</select>
</code></pre>
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

  <li>
    <h2>Checkbox and Radio</h2>
    <p>BaseWeb styles checkbox and radio inputs by wrapping them with labels and applying <code>.checkbox</code> and <code>.radio</code> classes to them.</p>
    <pre class="language-markup"><code>
<label class="checkbox">
  <input type="checkbox"> Checkbox Example 1
</label>

<label class="radio">
  <input type="radio" name="radio-1"> Radio Example 1
</label>
</code></pre>
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

  <li>
    <h2>Choice</h2>
    <p>Choice elements are custom styled checkbox and radio input elements. They are represented by adding the <code>.choice</code> class to the wrapping label element of checkboxes and radios.</p>
    <p>They receive extra padding so that they match the height of <code>.input</code> elements which also makes them more user friendly.</p>
    <pre class="language-markup"><code>
<label class="choice">
  <input type="checkbox"> Choice Checkbox Example 1
</label>

<label class="choice">
  <input type="radio" name="radio-1"> Choice Radio Example 1
</label>
</code></pre>
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

  <li>
    <h2>Label</h2>
    <p>You'll rarely have a form without labels and are styled differently depending on their context. There are a number of classes that are available to modify the appearance and behavior of labels.</p>
    <pre class="language-markup"><code>
<label>Default Label</label>

<!-- Makes subtle styles for sub label -->
<label class="sub">...</label>

<!-- Hides lables but keeps them accessible for screen readers -->
<label class="hide">...</label>

<!-- Makes labels display block with top padding for alignment -->
<label class="block">...</label>

<!-- Makes labels display inline-block with top padding for alignment -->
<label class="inline">...</label>
</code></pre>
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

  <li>
    <h2>Notes</h2>
    <p>Notes are custom form elements in BaseWeb and are represented using the <code>.note</code> class. Notes can work as descriptive text, help text or any sort of informative text to help a user navigate a form. They are contextual and receive unique spacing based on their siblings.</p>
    <pre class="language-markup"><code>
<p class="note">...</p>
<div class="note">
  <p>...</p>
  <p>...</p>
</div>
</code></pre>
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

<section class="subsection subsection-mixins has-inner-subsection">
<div class="inner-subsection">
  <h1>Form Mixins</h1>
  <p class="text-lead">Because of the complexity of HTML forms, BaseWeb mainly favors using classes and context to style forms. But there are a small set of mixins that can be used to expand form customization.</p>
</div>
<ul class="docs-list">

  <li>
    <h2>placeholder</h2>
    <p>Sets the placeholder text color for input fields that use the placeholder attribute.</p>
    <pre class="language-scss"><code>@mixin placeholder( $color, $options: () )
// @param $color
//   @type color
// @param $options
//   @type map
//   @default $forms map</code></pre>
  </li>

  <li>
    <h2>make-form-group-base</h2>
    <p>Creates the styles for a base form group by applying vertical spacing.</p>
    <pre class="language-scss"><code>@mixin make-form-group-base( $options: () )
// @param $options
//   @type map
//   @default $forms map</code></pre>
  </li>

  <li>
    <h2>make-form-group-inline</h2>
    <p>Creates the styles for making an inline form group element.</p>
    <pre class="language-scss"><code>@mixin make-form-group-inline( $options: () )
// @param $options
//   @type map
//   @default $forms map</code></pre>
  </li>

  <li>
    <h2>make-input-inline</h2>
    <p>Creates the styles for making an inline form element.</p>
    <pre class="language-scss"><code>@mixin make-input-inline( $options: () )
// @param $options
//   @type map
//   @default $forms map</code></pre>
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
