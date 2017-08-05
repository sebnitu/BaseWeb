---
layout: page
title: "Icons"
order: 11
---

There's more than one way to include icons into a project. The preferred way in BaseWeb is using an SVG icon system as described in [CSS-Tricks](https://css-tricks.com/pretty-good-svg-icon-system/). The icon set included is the amazing opensource project [Feather Icons](https://feathericons.com/) by [Cole Bemis](http://colebemis.com/).

{% assign text_icon = "download-cloud" %}

<form>
  <div class="form-group inline">
    <input type="text" class="input" placeholder="Username" required="">
    <input type="password" class="input" placeholder="Password" required="">
    <button class="button primary button-icon">{% include icons/{{ text_icon }}.svg %}</button>
    <button type="submit" class="button primary">Sign In</button>
    <button class="button primary">{% include icons/{{ text_icon }}.svg %} Button</button>
  </div>
</form>

<p>
  <button class="button large">{% include icons/{{ text_icon }}.svg %} Button</button>
  <button class="button">{% include icons/{{ text_icon }}.svg %} Button</button>
  <button class="button small">{% include icons/{{ text_icon }}.svg %} Button</button>
  <button class="button large">Button {% include icons/{{ text_icon }}.svg %}</button>
  <button class="button">Button {% include icons/{{ text_icon }}.svg %}</button>
  <button class="button small">Button {% include icons/{{ text_icon }}.svg %}</button>
</p>

<p>
  <button class="button primary large">{% include icons/{{ text_icon }}.svg %} Button</button>
  <button class="button primary">{% include icons/{{ text_icon }}.svg %} Button</button>
  <button class="button primary small">{% include icons/{{ text_icon }}.svg %} Button</button>
  <button class="button primary large">Button {% include icons/{{ text_icon }}.svg %}</button>
  <button class="button primary">Button {% include icons/{{ text_icon }}.svg %}</button>
  <button class="button primary small">Button {% include icons/{{ text_icon }}.svg %}</button>
</p>

<p>
  <button class="button small">{% include icons/{{ text_icon }}.svg %}</button>
  <button class="button">{% include icons/{{ text_icon }}.svg %}</button>
  <button class="button large">{% include icons/{{ text_icon }}.svg %}</button>
  <button class="button primary small">{% include icons/{{ text_icon }}.svg %}</button>
  <button class="button primary">{% include icons/{{ text_icon }}.svg %}</button>
  <button class="button primary large">{% include icons/{{ text_icon }}.svg %}</button>
</p>

<p>
  <button class="button button-icon small">{% include icons/{{ text_icon }}.svg %}</button>
  <button class="button button-icon">{% include icons/{{ text_icon }}.svg %}</button>
  <button class="button button-icon large">{% include icons/{{ text_icon }}.svg %}</button>
  <button class="button button-icon primary small">{% include icons/{{ text_icon }}.svg %}</button>
  <button class="button button-icon primary">{% include icons/{{ text_icon }}.svg %}</button>
  <button class="button button-icon primary large">{% include icons/{{ text_icon }}.svg %}</button>
</p>

<div class="icons-listing">
  {% for icon in site.data.icons %}
  <div class="icon-item">{% include icons/{{ icon }}.svg %} <code>{{ icon }}</code></div>
  {% endfor %}
</div>
