---
layout: page
title: "Typography Variables"
link: "Typography"
order: 5
---

The default typographic settings. These dictate the base typographic styles for headings, body text, inline text elements and links as well as modifier classes.

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Default</th>
  </tr>

  <tr>
    <th colspan="2">Font Families</th>
  </tr>
  <tr>
    <td><code>$font-family-sans</code></td>
    <td><code>"Helvetica Neue",</code> <code>"HelveticaNeue",</code> <code>helvetica,</code> <code>arial,</code> <code>sans-serif</code></td>
  </tr>
  <tr>
    <td><code>$font-family-serif</code></td>
    <td><code>georgia,</code> <code>"Times New Roman",</code> <code>times,</code> <code>serif</code></td>
  </tr>
  <tr>
    <td><code>$font-family-mono</code></td>
    <td><code>Menlo,</code> <code>Monaco,</code> <code>Consolas,</code> <code>"Courier New",</code> <code>monospace</code></td>
  </tr>

  <tr>
    <th colspan="3">Base Font Styles</th>
  </tr>
  <tr>
    <td><code>$base-font-family</code></td>
    <td><code>$font-family-sans</code></td>
  </tr>
  <tr>
    <td><code>$base-font-size</code></td>
    <td><code>16px</code></td>
  </tr>
  <tr>
    <td><code>$base-line-height</code></td>
    <td><code>1.5em</code></td>
  </tr>
  <tr>
    <td><code>$base-font-weight</code></td>
    <td><code>normal</code></td>
  </tr>

  <tr>
    <th colspan="3">Header Styles</th>
  </tr>
  <tr>
    <td><code>$font-family-heading</code></td>
    <td><code>inherit</code></td>
  </tr>
  <tr>
    <td><code>$line-height-heading</code></td>
    <td><code>1.25em</code></td>
  </tr>
  <tr>
    <td><code>$font-weight-heading</code></td>
    <td><code>bold</code></td>
  </tr>

  <tr>
    <th colspan="3">Text Color Assignment</th>
  </tr>
  <tr>
    <td><code>$color</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-gray-dark"></span>
        <input type="text" class="input swatch-value" onclick="this.select()" value="$gray-dark" readonly="">
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$color-light</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-gray-light"></span>
        <input type="text" class="input swatch-value" onclick="this.select()" value="$gray-light" readonly="">
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$color-dark</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-gray-dark"></span>
        <input type="text" class="input swatch-value" onclick="this.select()" value="$gray-dark" readonly="">
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$color-header</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-gray-dark"></span>
        <input type="text" class="input swatch-value" onclick="this.select()" value="$gray-dark" readonly="">
      </div>
    </td>
  </tr>

  <tr>
    <th colspan="3">Links</th>
  </tr>
  <tr>
    <td><code>$color-link</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-blue-dark"></span>
        <input type="text" class="input swatch-value" onclick="this.select()" value="$blue-dark" readonly="">
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$color-link-hover</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-violet-dark"></span>
        <input type="text" class="input swatch-value" onclick="this.select()" value="$violet-dark" readonly="">
      </div>
    </td>
  </tr>

  <tr>
    <th colspan="3">Header Links</th>
  </tr>
  <tr>
    <td><code>$color-link-heading</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-blue-dark"></span>
        <input type="text" class="input swatch-value" onclick="this.select()" value="$blue-dark" readonly="">
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$color-link-heading-hover</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-violet-dark"></span>
        <input type="text" class="input swatch-value" onclick="this.select()" value="$violet-dark" readonly="">
      </div>
    </td>
  </tr>

  <tr>
    <th colspan="3">Miscellaneous</th>
  </tr>
  <tr>
    <td><code>$letter-spacing</code></td>
    <td><code>1px</code></td>
  </tr>
</table>
