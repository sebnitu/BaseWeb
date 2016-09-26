---
layout: page
title: "Palette Variables"
link: "Palette"
order: 2
---

Where our framework colors are defined. There are a total of three primary colors, three secondary colors and six tertiary colors which are the combination of a primary and secondary color. There are also five modifiers that can apply to any color: light, lighter, dark, darker and pale.

In combination with our gray scale, that is a total of 80 unique color variables. To make them easy to remember, every color's naming schema follows this pattern: color name then the modifier (if any is used). For the color name itself, if it's a tertiary color, it starts with the primary color first, then the secondary that it's mixed with.

```scss
// $[primary]-[modifier]
$blue-light;

// $[secondary]-[modifier]
$orange-darker;

// $[primary]-[secondary]-[modifier]
$yellow-green-lighter;
```

The degree variables are what's used to determine the amount that each base color is either lightened or darkened. The gray scale is the only exception to this.

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$light-deg</code></td>
    <td><code>5%</code></td>
  </tr>
  <tr>
    <td><code>$lighter-deg</code></td>
    <td><code>10%</code></td>
  </tr>
  <tr>
    <td><code>$dark-deg</code></td>
    <td><code>5%</code></td>
  </tr>
  <tr>
    <td><code>$darker-deg</code></td>
    <td><code>10%</code></td>
  </tr>

  <tr>
    <td><code>$black</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-black"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$white</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-white"></span>
      </div>
    </td>
  </tr>

  <!-- Gray -->
  <tr>
    <td><code>$gray-pale</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-gray-pale"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$gray-lighter</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-gray-lighter"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$gray-light</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-gray-light"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$gray</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-gray"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$gray-dark</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-gray-dark"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$gray-darker</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-gray-darker"></span>
      </div>
    </td>
  </tr>

  <!-- Red -->
  <tr>
    <td><code>$red-pale</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-red-pale"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$red-lighter</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-red-lighter"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$red-light</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-red-light"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$red</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-red"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$red-dark</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-red-dark"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$red-darker</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-red-darker"></span>
      </div>
    </td>
  </tr>

  <!-- Red Orange -->
  <tr>
    <td><code>$red-orange-pale</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-red-orange-pale"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$red-orange-lighter</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-red-orange-lighter"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$red-orange-light</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-red-orange-light"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$red-orange</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-red-orange"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$red-orange-dark</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-red-orange-dark"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$red-orange-darker</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-red-orange-darker"></span>
      </div>
    </td>
  </tr>

  <!-- Orange -->
  <tr>
    <td><code>$orange-pale</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-orange-pale"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$orange-lighter</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-orange-lighter"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$orange-light</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-orange-light"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$orange</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-orange"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$orange-dark</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-orange-dark"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$orange-darker</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-orange-darker"></span>
      </div>
    </td>
  </tr>

  <!-- Yellow Orange -->
  <tr>
    <td><code>$yellow-orange-pale</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-yellow-orange-pale"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$yellow-orange-lighter</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-yellow-orange-lighter"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$yellow-orange-light</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-yellow-orange-light"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$yellow-orange</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-yellow-orange"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$yellow-orange-dark</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-yellow-orange-dark"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$yellow-orange-darker</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-yellow-orange-darker"></span>
      </div>
    </td>
  </tr>

  <!-- Yellow -->
  <tr>
    <td><code>$yellow-pale</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-yellow-pale"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$yellow-lighter</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-yellow-lighter"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$yellow-light</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-yellow-light"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$yellow</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-yellow"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$yellow-dark</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-yellow-dark"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$yellow-darker</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-yellow-darker"></span>
      </div>
    </td>
  </tr>

  <!-- Yellow Green -->
  <tr>
    <td><code>$yellow-green-pale</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-yellow-green-pale"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$yellow-green-lighter</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-yellow-green-lighter"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$yellow-green-light</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-yellow-green-light"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$yellow-green</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-yellow-green"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$yellow-green-dark</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-yellow-green-dark"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$yellow-green-darker</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-yellow-green-darker"></span>
      </div>
    </td>
  </tr>

  <!-- Green -->
  <tr>
    <td><code>$green-pale</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-green-pale"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$green-lighter</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-green-lighter"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$green-light</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-green-light"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$green</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-green"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$green-dark</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-green-dark"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$green-darker</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-green-darker"></span>
      </div>
    </td>
  </tr>

  <!-- Blue Green -->
  <tr>
    <td><code>$blue-green-pale</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-blue-green-pale"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$blue-green-lighter</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-blue-green-lighter"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$blue-green-light</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-blue-green-light"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$blue-green</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-blue-green"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$blue-green-dark</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-blue-green-dark"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$blue-green-darker</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-blue-green-darker"></span>
      </div>
    </td>
  </tr>

  <!-- Blue -->
  <tr>
    <td><code>$blue-pale</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-blue-pale"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$blue-lighter</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-blue-lighter"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$blue-light</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-blue-light"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$blue</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-blue"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$blue-dark</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-blue-dark"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$blue-darker</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-blue-darker"></span>
      </div>
    </td>
  </tr>

  <!-- Blue Violet -->
  <tr>
    <td><code>$blue-violet-pale</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-blue-violet-pale"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$blue-violet-lighter</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-blue-violet-lighter"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$blue-violet-light</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-blue-violet-light"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$blue-violet</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-blue-violet"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$blue-violet-dark</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-blue-violet-dark"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$blue-violet-darker</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-blue-violet-darker"></span>
      </div>
    </td>
  </tr>

  <!-- Violet -->
  <tr>
    <td><code>$violet-pale</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-violet-pale"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$violet-lighter</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-violet-lighter"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$violet-light</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-violet-light"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$violet</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-violet"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$violet-dark</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-violet-dark"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$violet-darker</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-violet-darker"></span>
      </div>
    </td>
  </tr>

  <!-- Red Violet -->
  <tr>
    <td><code>$red-violet-pale</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-red-violet-pale"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$red-violet-lighter</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-red-violet-lighter"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$red-violet-light</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-red-violet-light"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$red-violet</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-red-violet"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$red-violet-dark</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-red-violet-dark"></span>
      </div>
    </td>
  </tr>
  <tr>
    <td><code>$red-violet-darker</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch swatch-red-violet-darker"></span>
      </div>
    </td>
  </tr>

</table>

<script defer="defer">
;(function ($) {
  'use strict';
  $(document).ready(function () {

    //Function to convert hex format to a rgb color
    function rgb2hex(orig){
      var rgb = orig.replace(/\s/g,'').match(/^rgba?\((\d+),(\d+),(\d+)/i);
      return (rgb && rgb.length === 4) ? "#" +
        ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : orig;
    }

    $('.swatch-wrap').each(function() {
      var swatch = $(this).find('.swatch').css('background-color');
      $(this).append('<input type="text" class="input swatch-value" onclick="this.select()" value="' + rgb2hex(swatch) + '" readonly="">');
      // $(this).append('<code>' + rgb2hex(swatch) + '</code>');
    });

  });
}(jQuery));
</script>
