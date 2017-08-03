---
layout: page
title: "Icons"
order: 11
---

{% assign text_icon = "download-cloud" %}

<form>
  <div class="form-group inline">
    <input type="text" class="input" placeholder="Username" required="">
    <input type="password" class="input" placeholder="Password" required="">
    <button class="button primary button-icon">{% include content-icon.html icon=text_icon %}</button>
    <button type="submit" class="button primary">Sign In</button>
    <button class="button primary">{% include content-icon.html icon=text_icon modifier="icon-left" %} Button</button>
  </div>
</form>

<p>
  <button class="button large">{% include content-icon.html icon=text_icon modifier="icon-left" %} Button</button>
  <button class="button">{% include content-icon.html icon=text_icon modifier="icon-left" %} Button</button>
  <button class="button small">{% include content-icon.html icon=text_icon modifier="icon-left" %} Button</button>
  <button class="button large">Button {% include content-icon.html icon=text_icon modifier="icon-right" %}</button>
  <button class="button">Button {% include content-icon.html icon=text_icon modifier="icon-right" %}</button>
  <button class="button small">Button {% include content-icon.html icon=text_icon modifier="icon-right" %}</button>
</p>

<p>
  <button class="button primary large">{% include content-icon.html icon=text_icon modifier="icon-left" %} Button</button>
  <button class="button primary">{% include content-icon.html icon=text_icon modifier="icon-left" %} Button</button>
  <button class="button primary small">{% include content-icon.html icon=text_icon modifier="icon-left" %} Button</button>
  <button class="button primary large">Button {% include content-icon.html icon=text_icon modifier="icon-right" %}</button>
  <button class="button primary">Button {% include content-icon.html icon=text_icon modifier="icon-right" %}</button>
  <button class="button primary small">Button {% include content-icon.html icon=text_icon modifier="icon-right" %}</button>
</p>

<p>
  <button class="button small">{% include content-icon.html icon=text_icon %}</button>
  <button class="button">{% include content-icon.html icon=text_icon %}</button>
  <button class="button large">{% include content-icon.html icon=text_icon %}</button>
  <button class="button primary small">{% include content-icon.html icon=text_icon %}</button>
  <button class="button primary">{% include content-icon.html icon=text_icon %}</button>
  <button class="button primary large">{% include content-icon.html icon=text_icon %}</button>
</p>

<p>
  <button class="button button-icon small">{% include content-icon.html icon=text_icon %}</button>
  <button class="button button-icon">{% include content-icon.html icon=text_icon %}</button>
  <button class="button button-icon large">{% include content-icon.html icon=text_icon %}</button>
  <button class="button button-icon primary small">{% include content-icon.html icon=text_icon %}</button>
  <button class="button button-icon primary">{% include content-icon.html icon=text_icon %}</button>
  <button class="button button-icon primary large">{% include content-icon.html icon=text_icon %}</button>
</p>

<div class="icons-listing">
  {% for icon in site.data.icons %}
  <div class="icon-item">{% include content-icon.html icon=icon %} <code>{{ icon }}</code></div>
  {% endfor %}
</div>
