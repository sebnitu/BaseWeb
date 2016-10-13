---
layout: page
title: "Notices"
order: 2
---

<p>Notices in BaseWeb represent content blocks that give additional contextual information. This could be helpful tips, success, warning or error messages and additional information to a document. The most basic implementation involves a <code>&lt;div&gt;</code> with the <code>.notice</code> class.</p>

<pre class="language-markup"><code>
&lt;div class=&quot;notice&quot;&gt;
  &lt;p&gt;...&lt;/p&gt;
&lt;/div&gt;
</code></pre>

<div class="demo">
  <div class="notice">
    <p>This is an example notice.</p>
  </div>
</div>

<p>You can also create dismissible notices but adding the <code>.dismissible</code> class and a close button. The class used for close buttons is set using the <code>$notices('class-close')</code> variable.</p>

<pre class="language-markup"><code>
&lt;div class=&quot;notice dismissible&quot;&gt;
  &lt;button class=&quot;button close&quot;&gt;&amp;times;&lt;/button&gt;
  &lt;p&gt;...&lt;/p&gt;
&lt;/div&gt;
</code></pre>

<pre class="language-javascript"><code>// Example jQuery implementation of dismissible notices
$('.dismissible > .close').on('click', function() {
  $(this).closest('.dismissible').fadeOut();
});
</code></pre>

<div class="demo">
  <div class="row">
    <div class="col col-6">
      <div class="notice dismissible">
        <button class="button close">&times;</button>
        <p>Dismissible</p>
      </div>
    </div>
    <div class="col col-6">
      <div class="notice dismissible inverted">
        <button class="button close">&times;</button>
        <p>Dismissible</p>
      </div>
    </div>
  </div>
</div>

<script>
$(document).ready(function() {
  $('.dismissible > .close').on('click', function() {
    $(this).closest('.dismissible').fadeOut();
  });
});
</script>

<section class="subsection subsection-variables has-inner-subsection">
<div class="inner-subsection">
  <h1>Notice Variables</h1>
  <p class="text-lead">Notice variables are encompassed within the <code>$notices</code> map and are used throughout all notice mixins to set default values.</p>
  <ul class="docs-list-compact">
    <li>
      <code class="key">$notices('classes')</code>
      <code class="right value">true</code>
      <span class="block light">Whether or not we should output notice classes. Set to <code>false</code> if you want to use the notice modifier mixins semantically and/or reduce CSS output.</span>
    </li>
    <li>
      <code class="key">$notices('class-inverted')</code>
      <code class="right value">inverted</code>
      <div class="block light">The class to use for inverted notice colors. If set to <code>null</code>, inverted color styles won't be output.</div>
    </li>
    <li>
      <code class="key">$notices('class-close')</code>
      <code class="right value">close</code>
    </li>

    <li class="list-sep">
      <code class="key">$notices('margin')</code>
      <code class="right value">2em 0</code>
    </li>
    <li>
      <code class="key">$notices('padding')</code>
      <code class="right value">0.25em 1.25em</code>
    </li>
    <li>
      <code class="key">$notices('padding-small')</code>
      <code class="right value">null</code>
    </li>
    <li>
      <code class="key">$notices('padding-large')</code>
      <code class="right value">null</code>
    </li>
    <li>
      <code class="key">$notices('padding-inline')</code>
      <code class="right value">0 0.25em</code>
    </li>

    <li class="list-sep">
      <code class="key">$notices('font-size')</code>
      <code class="right value">1em</code>
    </li>
    <li>
      <code class="key">$notices('font-size-small')</code>
      <code class="right value">0.9em</code>
    </li>
    <li>
      <code class="key">$notices('font-size-large')</code>
      <code class="right value">1.1em</code>
    </li>
    <li>
      <code class="key">$notices('line-height')</code>
      <code class="right value">1.5em</code>
    </li>

    <li class="list-sep">
      <code class="key">$notices('pull-breakpoint')</code>
      <code class="right value">medium</code>
    </li>
    <li>
      <code class="key">$notices('pull-width')</code>
      <code class="right value">45%</code>
    </li>
    <li>
      <code class="key">$notices('pull-margin-left')</code>
      <code class="right value">0.5em 2em 1em 0</code>
    </li>
    <li>
      <code class="key">$notices('pull-margin-right')</code>
      <code class="right value">0.5em 0 1em 2em</code>
    </li>

    <li class="list-sep">
      <code class="key">$notices('color')</code>
      <code class="right value">$color-dark</code>
    </li>
    <li>
      <code class="key">$notices('text-shadow')</code>
      <code class="right value">0 1px 0 rgba($white, 0.25)</code>
    </li>
    <li>
      <code class="key">$notices('background')</code>
      <code class="right value">rgba($black, 0.05)</code>
    </li>
    <li>
      <code class="key">$notices('box-shadow')</code>
      <code class="right value">0 1px 3px rgba($black, 0.05)</code>
    </li>
    <li>
      <code class="key">$notices('border')</code>
      <code class="right value">1px solid rgba($black, 0.15)</code>
    </li>

    <li>
      <code class="key">$notices('border-radius')</code>
      <code class="right value">$border-radius</code>
    </li>

    <li class="list-sep">
      <code>$buttons('inverted', 'color')</code>
      <code class="right value">$white</code>
    </li>
    <li>
      <code>$buttons('inverted', 'text-shadow')</code>
      <code class="right value">0 1px 0 rgba($black, 0.25)</code>
    </li>
    <li>
      <code>$buttons('inverted', 'background')</code>
      <code class="right value">rgba($color-dark, 0.9)</code>
    </li>
    <li>
      <code>$buttons('inverted', 'border')</code>
      <code class="right value">1px solid rgba($black, 0.15)</code>
    </li>
    <li>
      <code>$buttons('inverted', 'box-shadow')</code>
      <code class="right value">0 1px 3px rgba($black, 0.05)</code>
    </li>
  </ul>
</div>
</section>

<section class="subsection subsection-mixins has-inner-subsection">
<div class="inner-subsection">
  <h1>Notice Mixins</h1>
  <p class="text-lead">Notice mixins are used to create the base styles for a notice as well as their color size and display variations.</p>
</div>
<ul class="docs-list">

  <li>
    <h2>make-notice</h2>
    <p>Creates the base styles for a notice block.</p>
    <pre class="language-scss"><code>@mixin make-notice( $options: () )
// @param $options
//   @type map
//   @default $notices map</code></pre>
    <h3>Example Usage</h3>
    <p>This example shows us using a <code>%base-notice</code> placeholder for the extend method. Other methods include adding <code>make-notice()</code> to a general class which is applied to notice elements directly (which is the method BaseWeb uses for its classes).</p>
    <pre class="language-scss"><code>%base-notice {
  @include make-notice();
}
.message-success {
  @extend %base-notice;
  ...
}
.alert-error {
  @extend %base-notice;
  ...
}
</code></pre>
  </li>

  <li>
    <h2>add-notice-color</h2>
    <p>Adds styles for a notice color with optional output type. You can either output all notice color styles, or just the ones that are different from the default settings by setting the <code>$output</code> parameter to <code>'all'</code> or <code>'difference'</code>, respectively.</p>
    <pre class="language-scss"><code>@mixin add-notice-color( $options: (), $output )
// @param $options
//   @type map
//   @default $notices map
// @param $output
//   @type string (all, difference)
//   @default difference
//   @desc Whether to output all styles, or just the ones that are different
//     from the `$notices` map.</code></pre>
    <h3>Example Usage</h3>
    <p>We can create custom notice color classes using this mixin while also using the <code>.notice</code> class to inherit the base notice styles.</p>
    <pre class="language-scss"><code>
// We override only the color styles that change by
// using the default $output: 'difference' parameter.
.notice.custom {
  @include add-notice-color((
    'background' : rgba($blue-green, 0.1),
    'inverted' : (
      'background' : rgba($blue-green, 0.9)
    )
  ));
}
</code></pre>
    <div class="demo">
      <div class="notice custom">
        <p>This is a notice with custom color styles.</p>
      </div>
      <div class="notice custom inverted">
        <p>And this is that notice with inverted styles.</p>
      </div>
    </div>
    <h3>Available Classes</h3>
    <p>If you have notice class output enabled, BaseWeb will provide you with a set of notice classes and semantic aliases ready to use right away.</p>
    <pre class="language-markup"><code>
&lt;div class=&quot;notice&quot;&gt;...&lt;/div&gt;
&lt;div class=&quot;notice inverted&quot;&gt;...&lt;/div&gt;

&lt;div class=&quot;notice blue&quot;&gt;...&lt;/div&gt;
&lt;div class=&quot;notice blue inverted&quot;&gt;...&lt;/div&gt;

&lt;div class=&quot;notice green&quot;&gt;...&lt;/div&gt;
&lt;div class=&quot;notice green inverted&quot;&gt;...&lt;/div&gt;

&lt;div class=&quot;notice yellow&quot;&gt;...&lt;/div&gt;
&lt;div class=&quot;notice yellow inverted&quot;&gt;...&lt;/div&gt;

&lt;div class=&quot;notice orange&quot;&gt;...&lt;/div&gt;
&lt;div class=&quot;notice orange inverted&quot;&gt;...&lt;/div&gt;

&lt;div class=&quot;notice red&quot;&gt;...&lt;/div&gt;
&lt;div class=&quot;notice red inverted&quot;&gt;...&lt;/div&gt;

&lt;div class=&quot;notice violet&quot;&gt;...&lt;/div&gt;
&lt;div class=&quot;notice violet inverted&quot;&gt;...&lt;/div&gt;
</code></pre>
    <div class="demo">
      <div class="row">
        <div class="col col-6"><div class="notice"><p>.notice</p></div></div>
        <div class="col col-6"><div class="notice inverted"><p>.notice .inverted</p></div></div>
      </div>
      <div class="row">
        <div class="col col-6"><div class="notice blue"><p>.notice .blue</p></div></div>
        <div class="col col-6"><div class="notice blue inverted"><p>.notice .blue .inverted</p></div></div>
      </div>
      <div class="row">
        <div class="col col-6"><div class="notice green"><p>.notice .green</p></div></div>
        <div class="col col-6"><div class="notice green inverted"><p>.notice .green .inverted</p></div></div>
      </div>
      <div class="row">
        <div class="col col-6"><div class="notice yellow"><p>.notice .yellow</p></div></div>
        <div class="col col-6"><div class="notice yellow inverted"><p>.notice .yellow .inverted</p></div></div>
      </div>
      <div class="row">
        <div class="col col-6"><div class="notice orange"><p>.notice .orange</p></div></div>
        <div class="col col-6"><div class="notice orange inverted"><p>.notice .orange .inverted</p></div></div>
      </div>
      <div class="row">
        <div class="col col-6"><div class="notice red"><p>.notice .red</p></div></div>
        <div class="col col-6"><div class="notice red inverted"><p>.notice .red .inverted</p></div></div>
      </div>
      <div class="row">
        <div class="col col-6"><div class="notice violet"><p>.notice .violet</p></div></div>
        <div class="col col-6"><div class="notice violet inverted"><p>.notice .violet .inverted</p></div></div>
      </div>
    </div>
    <p>There are also available semantic class aliases for the above styles.</p>
    <pre class="language-scss"><code>// Semantic Aliases
.notice.success { @extend .notice.green  }
.notice.info    { @extend .notice.blue   }
.notice.warning { @extend .notice.yellow }
.notice.danger  { @extend .notice.red    }
</code></pre>
  </li>

  <li>
    <h2>add-notice-size</h2>
    <p>Adds styles for notice size based on keyword or options map difference.</p>
    <pre class="language-scss"><code>@mixin add-notice-size( $size, $options: () )
// @param $size
//   @type string (small, default, large)
// @param $options
//   @type map
//   @default $notices map</code></pre>
    <h3>Example Usage</h3>
    <p>The first parameter is a quick way to make a notice use the default small or large size set in our <code>$notices</code> map. Or you can pass in a <code>$options:()</code> map for custom padding, font-size and line-height.</p>
    <pre class="language-scss"><code>// Use default small size
.notice-small {
  @include add-notice-size('small');
}

// Use default large size with custom font size
.notice-custom-large {
  @include add-notice-size('large', (
    'font-size': 20px
  ));
}

// Set a custom notice size
.notice-custom-size {
  @include add-notice-size(20px 40px, (
    'font-size': 20px,
    'line-height': 24px
  ));
}
</code></pre>
    <h3>Available Classes</h3>
    <pre class="language-markup"><code>
&lt;div class=&quot;notice info small&quot;&gt;...&lt;/div&gt;
&lt;div class=&quot;notice info&quot;&gt;...&lt;/div&gt;
&lt;div class=&quot;notice info large&quot;&gt;...&lt;/div&gt;
</code></pre>
    <div class="demo">
      <div class="row">
        <div class="col col-4"><div class="notice info small"><p>.notice .small</p></div></div>
        <div class="col col-4"><div class="notice info"><p>.notice</p></div></div>
        <div class="col col-4"><div class="notice info large"><p>.notice .large</p></div></div>
      </div>
    </div>
  </li>

  <li>
    <h2>add-notice-inline</h2>
    <p>Adds styles for an inline or inline-block notice. Inline notice elements retain the ability to change their color styles using the available color or semantic class modifiers.</p>
    <pre class="language-scss"><code>@mixin add-notice-inline( $display, $options: () )
// @param $display
//   @type display property (inline, inline-block)
//   @default inline
// @param $options
//   @type map
//   @default $notices map</code></pre>
    <h3>Example Usage</h3>
    <pre class="language-scss"><code>
.notice.inline {
  @include add-notice-inline();
}
</code></pre>
    <pre class="language-markup"><code>
&lt;span class=&quot;notice inline&quot;&gt;...&lt;/span&gt;
</code></pre>
    <ul class="docs-list-compact">
      <li>
        <code class="key">.inline</code>
        <div class="value right">
          <span class="notice inline">Inline notice</span>
          <span class="notice inline inverted">Inline inverted notice</span>
        </div>
      </li>
      <li>
        <code class="key">.inline .info</code>
        <div class="value right">
          <span class="notice info inline">Inline info notice</span>
          <span class="notice info inline inverted">Inline inverted info notice</span>
        </div>
      </li>
      <li>
        <code class="key">.inline .success</code>
        <div class="value right">
          <span class="notice success inline">Inline success notice</span>
          <span class="notice success inline inverted">Inline inverted success notice</span>
        </div>
      </li>
      <li>
        <code class="key">.inline .warning</code>
        <div class="value right">
          <span class="notice warning inline">Inline warning notice</span>
          <span class="notice warning inline inverted">Inline inverted warning notice</span>
        </div>
      </li>
      <li>
        <code class="key">.inline .danger</code>
        <div class="value right">
          <span class="notice danger inline">Inline danger notice</span>
          <span class="notice danger inline inverted">Inline inverted danger notice</span>
        </div>
      </li>
    </ul>
  </li>

  <li>
    <h2>add-notice-pull</h2>
    <p>Adds styles for floating a notice to the left or right. By default, notice-pull modifiers are only floated when reaching the breakpoint set in <code>$notices('pull-breakpoint')</code> (if set to <code>null</code>, notice will always be floated).</p>
    <pre class="language-scss"><code>@mixin add-notice-pull( $direction, $options: () )
// @param $direction
//   @type string (left, right)
// @param $options
//   @type map
//   @default $notices map</code></pre>
    <h3>Example Usage</h3>
    <pre class="language-scss"><code>
.some-custom-notice {
  @include add-notice-pull('left');
}
.another-custom-notice {
  @include add-notice-pull('right');
}
</code></pre>
    <pre class="language-markup"><code>
&lt;div class=&quot;notice pull-left&quot;&gt;...&lt;/div&gt;
&lt;div class=&quot;notice pull-right&quot;&gt;...&lt;/div&gt;
</code></pre>
    <div class="demo">
      <div class="notice success pull-left">
        <p>.pull-left</p>
      </div>
      <div class="notice success pull-right">
        <p>.pull-right</p>
      </div>
    </div>
  </li>

</ul>
</section>
