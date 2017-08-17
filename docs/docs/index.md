---
layout: page
title: Documentation
order: 2
---

BaseWeb documentation is split into six parts, each representing a distinct section of it's architecture. Below is an overview of what these parts prepresent and how to use/customize them. Need a quick guide on how to install and work with BaseWeb? check out the [get started]({{ site.url }}{{ site.baseurl }}/get-started/) guide.

<div class="widget-list">

  <div class="widget widget-featured card">
    <div class="widget-icon">
      {% include content-icon.html icon="sliders" %}
    </div>
    <div class="widget-content">
      <h2>Settings</h2>
      <p>This is where we store all of our global project variables and maps. Variables and maps that are used in core modules, multiple element and/or block modules go here.</p>
      <p><a href="{{ site.url }}{{ site.baseurl }}/docs/settings/palette/" class="button button-icon-right primary small">Dive In {% include content-icon.html icon="arrow-right" %}</a></p>
    </div>
  </div>

  <div class="widget widget-featured card">
    <div class="widget-icon">
      {% include content-icon.html icon="cpu" %}
    </div>
    <div class="widget-content">
      <h2>Core</h2>
      <p>This is the heart and soul of BaseWeb. At a bear minimum, the Settings and Core files are required for BaseWeb to function. Core files do not output styles directly but are a collection of global functions and mixins.</p>
      <p><a href="{{ site.url }}{{ site.baseurl }}/docs/core/functions/" class="button button-icon-right primary small">Dive In {% include content-icon.html icon="arrow-right" %}</a></p>
    </div>
  </div>

  <div class="widget widget-featured card">
    <div class="widget-icon">
      {% include content-icon.html icon="layers" %}
    </div>
    <div class="widget-content">
      <h2>Elements</h2>
      <p>Elements refer to individual components of an HTML document. They're the backbone of any HTML documents and have inherit semantic meaning. BaseWeb styles these elements here and makes them easy to customize and enhance.</p>
      <p><a href="{{ site.url }}{{ site.baseurl }}/docs/elements/base/" class="button button-icon-right primary small">Dive In {% include content-icon.html icon="arrow-right" %}</a></p>
    </div>
  </div>

  <div class="widget widget-featured card">
    <div class="widget-icon">
      {% include content-icon.html icon="package" %}
    </div>
    <div class="widget-content">
      <h2>Blocks</h2>
      <p>Blocks are a group of Elements that become an independent component. A block can be simple or compound (meaning it contains other blocks). A Block is contextually independent, but can be modified either through an internal modifier or parent block.</p>
      <p><a href="{{ site.url }}{{ site.baseurl }}/docs/blocks/button-groups/" class="button button-icon-right primary small">Dive In {% include content-icon.html icon="arrow-right" %}</a></p>
    </div>
  </div>

  <div class="widget widget-featured card">
    <div class="widget-icon">
      {% include content-icon.html icon="edit-2" %}
    </div>
    <div class="widget-content">
      <h2>Custom</h2>
      <p>The Custom directory is a place to store all of your project specific code. By default, BaseWeb comes with an <code>_override.scs</code> file for setting overrides and <code>_custom.scss</code> file that will output a generic mobile first grid system.</p>
      <p><a href="{{ site.url }}{{ site.baseurl }}/docs/custom/" class="button button-icon-right primary small">Dive In {% include content-icon.html icon="arrow-right" %}</a></p>
    </div>
  </div>

  <div class="widget widget-featured card">
    <div class="widget-icon">
      {% include content-icon.html icon="hash" %}
    </div>
    <div class="widget-content">
      <h2>JavaScript</h2>
      <p>This is where all the component JavaScript lives. Any block that requires some kind of JavaScript behavior will appear here and initiated from <code>baseweb.js</code> where you can change default settings.</p>
      <p><a href="{{ site.url }}{{ site.baseurl }}/docs/javascript/" class="button button-icon-right primary small">Dive In {% include content-icon.html icon="arrow-right" %}</a></p>
    </div>
  </div>

</div>
