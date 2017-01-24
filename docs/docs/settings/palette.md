---
layout: page
title: "Palette Variables"
link:
  text: "Palette"
order: 2
---

<div class="swatch-cards-wrapper">

  {% for swatch-card in site.data.palette %}
  <div class="swatch-card">

    {% assign default = swatch-card[1].shades | map: swatch-card[1].default %}

    <div class="swatch primary" style="background-color:{{ default }};">
      <span class="name">{{ swatch-card[0] | replace: '-', ' '}}</span>
      <span class="var">${{ swatch-card[0] }}</span>
      <span class="hex">{{ swatch-card[1].default }}</span>
    </div>

    {% if swatch-card[1].shades %}
    <ul class="swatch-shades">
    {% for swatch in swatch-card[1].shades %}
      <li class="swatch shade" style="background-color:{{ swatch[1] }};">
        <span class="var">${{ swatch-card[0] }}-{{ swatch[0] }}</span>
        <span class="hex">{{ swatch[1] }}</span>
      </li>
    {% endfor %}
    </ul>
    {% endif %}

    {% if swatch-card[1].accents %}
    <ul class="swatch-accents">
    {% for swatch in swatch-card[1].accents %}
      <li class="swatch accent" style="background-color:{{ swatch[1] }};">
        <span class="var">${{ swatch-card[0] }}-{{ swatch[0] }}</span>
        <span class="hex">{{ swatch[1] }}</span>
      </li>
    {% endfor %}
    </ul>
    {% endif %}

  </div>
  {% endfor %}

  <div class="swatch-card">
    <div class="swatch primary" style="background-color:#f5f5f5;">
      <span class="name">Utility Colors</span>
      <span class="var">&mdash;</span>
      <span class="hex"></span>
    </div>
    <ul class="swatch-shades">
      <li class="swatch shade" style="background-color:#000;">
        <span class="var">$black</span>
        <span class="hex">#000</span>
      </li>
      <li class="swatch shade" style="background-color:#fff;">
        <span class="var">$white</span>
        <span class="hex">#fff</span>
      </li>
    </ul>
  </div>

</div><!-- .swatch-cards-wrapper -->

<script>
// Source: http://stackoverflow.com/questions/1740700/how-to-get-hex-color-value-rather-than-rgb-value
var hexDigits = new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f");

//Function to convert hex format to a rgb color
function rgb2hex(rgb) {
  rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  // I removed the `'#' +` from the return
  return hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function hex(x) {
  return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
}

// Source: https://24ways.org/2010/calculating-color-contrast
function getContrastYIQ(hexcolor){
	var r = parseInt(hexcolor.substr(0,2),16);
	var g = parseInt(hexcolor.substr(2,2),16);
	var b = parseInt(hexcolor.substr(4,2),16);
	var yiq = ((r*299)+(g*587)+(b*114))/1000;
  // Range is between 0 and 255. 128 is the 50% mark. My pref is 170 (2/3 of 255)
	return (yiq >= 170) ? 'text-dark' : '';
}

;(function ($) {
  'use strict';

  $(document).ready(function () {

    // Looping threw our swatches
    $('.swatch').each(function() {
      var bg = $(this).css('backgroundColor');
      var text = getContrastYIQ(rgb2hex(bg));
      $(this).addClass(text);
    });

  });

}(jQuery));
</script>
