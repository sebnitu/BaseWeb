---
layout: page
title: "Palette Variables"
link:
  text: "Palette"
order: 2
---

{% for swatch-card in site.data.palette %}
<div class="swatch-card">
  <ul>

    {% assign default = swatch-card[1].shades | map: swatch-card[1].default %}

    <li class="swatch" style="background-color:{{ default }};">
      <span class="name">{{ swatch-card[0] | replace: '-', ' '}}</span>
      <span class="var">${{ swatch-card[0] }}</span>
      <span class="hex">{{ swatch-card[1].default }}</span>
    </li>

    {% for swatch in swatch-card[1].shades %}
      <li class="swatch" style="background-color:{{ swatch[1] }};">
        <span class="var">${{ swatch-card[0] }}-{{ swatch[0] }}</span>
        <span class="hex">{{ swatch[1] }}</span>
      </li>
    {% endfor %}

  </ul>
</div>
{% endfor %}

<script>
var hexDigits = new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f");

//Function to convert hex format to a rgb color
function rgb2hex(rgb) {
  rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  return hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function hex(x) {
  return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
}

function getContrastYIQ(hexcolor){
	var r = parseInt(hexcolor.substr(0,2),16);
	var g = parseInt(hexcolor.substr(2,2),16);
	var b = parseInt(hexcolor.substr(4,2),16);
	var yiq = ((r*299)+(g*587)+(b*114))/1000;
  // Range is between 0 and 255. 128 is the 50% mark.
	return (yiq >= 170) ? 'text-dark' : '';
}

;(function ($) {
  'use strict';

  $(document).ready(function () {

    $('.swatch').each(function() {
      var bg = $(this).css('backgroundColor');
      var text = getContrastYIQ(rgb2hex(bg));
      $(this).addClass(text);
    });

  });

}(jQuery));
</script>
