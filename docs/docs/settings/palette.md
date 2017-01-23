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

    {% assign default = swatch-card[1].shades | map: swatch-card[1].value %}
    {% if default[0].hex %}
      {% assign default = default[0].hex %}
    {% else %}
      {% assign default = default %}
    {% endif %}

    <li class="swatch base" style="background-color:{{ default }};">
      <span class="name">{{ swatch-card[1].name }}</span>
      <span class="var">{{ swatch-card[1].var }}</span>
      <span class="hex">{{ swatch-card[1].value }}</span>
    </li>

    {% for swatch in swatch-card[1].shades %}
      {% if swatch[1].hex %}
      <li class="swatch {{ swatch[1].class | join: ' ' }}" style="background-color:{{ swatch[1].hex }};">
        <span class="var">{{ swatch-card[1].var }}-{{ swatch[0] }}</span>
        <span class="hex">{{ swatch[1].hex }}</span>
      </li>
      {% else %}
      <li class="swatch" style="background-color:{{ swatch[1] }};">
        <span class="var">{{ swatch-card[1].var }}-{{ swatch[0] }}</span>
        <span class="hex">{{ swatch[1] }}</span>
      </li>
      {% endif %}
    {% endfor %}

  </ul>
</div>
{% endfor %}
