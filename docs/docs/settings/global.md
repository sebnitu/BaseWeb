---
layout: page
title: "Global Variables"
link:
  text: "Global"
order: 6
---

The rest of the global variables used in BaseWeb. These mainly deal with things like general framework settings, mixin defaults and structure or scaffolding colors.

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Default</th>
    <th>Description</th>
  </tr>

  <tr>
    <th colspan="3">Framework Settings</th>
  </tr>
  <tr>
    <td><code>$global-box-sizing</code></td>
    <td><code>border-box</code></td>
    <td>Set to <code>null</code> to not output global box sizing styles in <code>scss</code > &rarr; <code>elements</code> &rarr; <code>_base.scss</code>.</td>
  </tr>
  <tr>
    <td><code>$class-clearfix</code></td>
    <td><code>clearfix</code></td>
    <td>Set to <code>null</code> to not output the clearfix class in <code>scss</code > &rarr; <code>elements</code> &rarr; <code>_base.scss</code>.</td>
  </tr>
  <tr>
    <td><code>$class-remove-clearfix</code></td>
    <td><code>remove-clearfix</code></td>
    <td>Set to <code>null</code> to not output the remove-clearfix class in <code>scss</code > &rarr; <code>elements</code> &rarr; <code>_base.scss</code>.</td>
  </tr>
  <tr>
    <td><code>$class-float-left</code></td>
    <td><code>float-left</code></td>
    <td>Set to <code>null</code> to not output the float-left class in <code>scss</code > &rarr; <code>elements</code> &rarr; <code>_base.scss</code>.</td>
  </tr>
  <tr>
    <td><code>$class-float-right</code></td>
    <td><code>float-right</code></td>
    <td>Set to <code>null</code> to not output the float-right class in <code>scss</code > &rarr; <code>elements</code> &rarr; <code>_base.scss</code>.</td>
  </tr>

  <tr>
    <th colspan="3">Mixin Defaults</th>
  </tr>
  <tr>
    <td><code>$box-sizing</code></td>
    <td colspan="2"><code>border-box</code></td>
  </tr>
  <tr>
    <td><code>$box-shadow</code></td>
    <td colspan="2"><code>0</code> <code>1px</code> <code>3px</code> <code>rgba($black, 0.1)</code></td>
  </tr>
  <tr>
    <td><code>$border-radius</code></td>
    <td colspan="2"><code>3px</code></td>
  </tr>

  <tr>
    <td><code>$transition</code></td>
    <td colspan="2"><code>all</code> <code>0.25s</code> <code>linear</code></td>
  </tr>
  <tr>
    <td><code>$transition-property</code></td>
    <td colspan="2"><code>all</code></td>
  </tr>
  <tr>
    <td><code>$transition-duration</code></td>
    <td colspan="2"><code>0.25s</code></td>
  </tr>
  <tr>
    <td><code>$transition-timing-function</code></td>
    <td colspan="2"><code>linear</code></td>
  </tr>
  <tr>
    <td><code>$transition-delay</code></td>
    <td colspan="2"><code>0.25s</code></td>
  </tr>

  <tr>
    <th colspan="3">Scaffolding</th>
  </tr>
  <tr>
    <td><code>$bg-color</code></td>
    <td colspan="2">
      <div class="swatch-wrap">
        <span class="swatch swatch-bg-color"></span>
        <input type="text" class="input swatch-value" onclick="this.select()" value="$gray-pale" readonly="">
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$bg-selection</code></td>
    <td colspan="2">
      <div class="swatch-wrap">
        <span class="swatch swatch-bg-selection"></span>
        <input type="text" class="input swatch-value" onclick="this.select()" value="rgba($green, 0.25)" readonly="">
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$border-color</code></td>
    <td colspan="2">
      <div class="swatch-wrap">
        <span class="swatch swatch-border-color"></span>
        <input type="text" class="input swatch-value" onclick="this.select()" value="rgba($black, 0.10)" readonly="">
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$border-color-hover</code></td>
    <td colspan="2">
      <div class="swatch-wrap">
        <span class="swatch swatch-border-color-hover"></span>
        <input type="text" class="input swatch-value" onclick="this.select()" value="rgba($black, 0.25)" readonly="">
      </div>
    </td>
  </tr>
</table>
