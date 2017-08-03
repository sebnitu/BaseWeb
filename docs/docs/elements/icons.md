---
layout: page
title: "Icons"
order: 11
---

<div class="icons-listing">
  {% for icon in site.data.icons %}
  <div class="icon-item">{% include content-icon.html icon=icon %} <code>{{ icon }}</code></div>
  {% endfor %}
</div>
