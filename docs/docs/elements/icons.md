---
layout: page
title: "Icons"
order: 11
---

<div class="notice warning">
  <p>The Icons module is currently being developed.</p>
</div>

<div class="icons-listing">
  {% for icon in site.data.icons %}
  <div class="icon-item">{% include content-icon.html icon=icon %} <code>.icon-{{ icon }}</code></div>
  {% endfor %}
</div>
