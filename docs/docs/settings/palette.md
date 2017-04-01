---
layout: page
title: "Palette Variables"
link:
  text: "Palette"
order: 2
---

BaseWeb comes with variables of all the base colors, shades and accents found in [Material Design](https://material.io/guidelines/style/color.html)'s color styles and guidelines. They are stored in `/settings/_palette.scss` where they can be overridden, expanded upon, or changed in a separate file and loaded before all other element and block components. It's recommended to not delete colors from this file as they may be used in components throughout BaseWeb.

Also included are the social brand colors map which contains the hex values for many popular social networks. These are primarily used when creating share or social links in your projects. They are located in `_palette-social.scss` (also in the `settings` directory) and you can [see the output here](#social-colors).

<div class="swatch-card-wrap">

  {% for swatch-card in site.data.palette %}
  <div class="swatch-card">

    {% assign default = swatch-card[1].shades | map: swatch-card[1].default %}

    <div class="swatch primary" style="background-color:{{ default }};">
      <span class="name">{{ swatch-card[0] | replace: '-', ' '}}</span>
      <span class="var">${{ swatch-card[0] }}</span>
      <span class="hex">{{ default }}</span>
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

</div><!-- .swatch-card-wrap -->

## Social Colors

Social network colors are made available in the `$social` map. These can be accessed using the `map-get` function:

```scss
.twitter {
  background: map-get($social, 'twitter');
}
```

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Default</th>
  </tr>

  {% for swatch in site.data.palette-social %}
  <tr>
    <td><code>$social('{{ swatch[0] }}')</code></td>
    <td>
      <div class="swatch-wrap">
        <span class="swatch bg-{{ swatch[0] }}" style="background: {{ swatch[1] }};"></span>
        <input type="text" class="input swatch-value" onclick="this.select()" value="{{ swatch[1] }}" readonly="">
      </div>
    </td>
  </tr>
  {% endfor %}

</table>
