---
layout: page
title: "Icons"
order: 11
---

There's more than one way to include icons into a project. The preferred method in BaseWeb is using the SVG icon system as described in [CSS-Tricks](https://css-tricks.com/pretty-good-svg-icon-system/). The icon set included is the amazing opensource project [Feather Icons](https://feathericons.com/) by [Cole Bemis](http://colebemis.com/).

Since this method requires you to inject the SVG of an icon directly into your document, it's recommended to use some kind of file include system. In the BaseWeb docs, we simply use the Jekyll include:

```liquid
{% raw %}{% include icons/circle.svg %}{% endraw %}
```

```html
{% include icons/circle.svg %}
```

<div class="demo demo-icons">
  <p class="text-center">{% include icons/circle.svg %} This is a circle icon</p>
</div>

<p>
  <button class="button button-icon primary large">{% include icons/circle.svg %}</button>
  <button class="button primary large">Basic Button</button>
  <button class="button button-icon-left primary large">{% include icons/circle.svg %} Button Icon Left</button>
  <button class="button button-icon-right primary large">Button Icon Right {% include icons/circle.svg %}</button>
</p>

<p>
  <button class="button button-icon primary">{% include icons/circle.svg %}</button>
  <button class="button primary">Basic Button</button>
  <button class="button button-icon-left primary">{% include icons/circle.svg %} Button with Icon</button>
  <button class="button button-icon-right primary">Button Icon Right {% include icons/circle.svg %}</button>
</p>

<p>
  <button class="button button-icon primary small">{% include icons/circle.svg %}</button>
  <button class="button primary small">Basic Button</button>
  <button class="button button-icon-left primary small">{% include icons/circle.svg %} Button with Icon</button>
  <button class="button button-icon-right primary small">Button Icon Right {% include icons/circle.svg %}</button>
</p>

<div class="icons-listing">
  {% for icon in site.data.icons %}
  <div class="icon-item">{% include icons/{{ icon }}.svg %} <code>{{ icon }}</code></div>
  {% endfor %}
</div>
