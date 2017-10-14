---
layout: home
title: Home
class: home
---

<section class="hero">

  {% if site.data.settings.render.fast != true %}
  <header class="header">
    <div class="container">
      {% include header.html %}
    </div>
  </header>
  {% endif %}

  <div class="hero-content">
    <div class="container">
      <h1>{{ site.description }}</h1>
      <div class="action">
        <a href="{{ site.github.repository_url }}" class="button large">Download</a>
        <pre class="highlight"><code><span class="editor-prefixed">npm install baseweb</span></code></pre>
      </div>
    </div>
  </div>

</section><!-- .hero -->

<section class="main">
  <div class="container">

    <header class="main-header">
      <h2>What's the scuttlebutt?</h2>
      <p class="text-lead">BaseWeb is the passion project of a UI designer and front-end developer. The goal is to take care of the boring stuff and let you focus on building an interface that's sexy as hell.</p>
    </header>

    <div class="feature">
      <div class="feature-ill">
        {% include svg/ill-framework.svg %}
      </div>
      <div class="feature-content">
        <h3>It's a Framework</h3>
        <p>Build on top of beautiful default styles and components. BaseWeb provides a starting point for your website or application that will make development faster and easier.</p>
        <p><a href="{{ site.url }}{{ site.baseurl }}/get-started/" class="button">Learn More</a></p>
      </div>
    </div><!-- .feature -->

    <div class="feature reverse">
      <div class="feature-ill">
        {% include svg/ill-library.svg %}
      </div>
      <div class="feature-content">
        <h3>It's a Library</h3>
        <p>Written to give you full control of production output, BaseWeb makes available all mixins and functions with the option to omit default classes and styles.</p>
        <p><a href="{{ site.url }}{{ site.baseurl }}/docs/" class="button">Learn More</a></p>
      </div>
    </div><!-- .feature -->

    <div class="feature">
      <div class="feature-ill">
        {% include svg/ill-flexible.svg %}
      </div>
      <div class="feature-content">
        <h3>It's Flexible</h3>
        <p>BaseWeb is built mobile first, starting from the grid system to each component block. Using media queries to deliver the best user experience regardless of device.</p>
        <p><a href="{{ site.url }}{{ site.baseurl }}/docs/core/media/" class="button">Learn More</a></p>
      </div>
    </div><!-- .feature -->

  </div><!-- .container -->
</section><!-- .main -->

<section class="main">
  <div class="container">

    <header class="main-header">
      <h2>Take a peek under the hood</h2>
      <p class="text-lead">This shit is organized. BaseWeb's architeture is designed to be easy to maintain and expand. Go ahead, take a look and see what I mean.</p>
    </header>

    <div class="block-file-structure">

      <div class="item item-files">
        {% include content-ascii-src.html %}
      </div><!-- .item -->

      <div class="item item-details">

        {% include content-doc-sections.html %}

      </div><!-- .item -->

    </div><!-- .block-file-structure -->

    <div class="block block-action">
      <h2>I won't be held responsible...</h2>
      <p>if you end up loving the shit out of BaseWeb. I'm not saying it's going to save your marriage... or am I? Here are some links to get you started.</p>
      <div class="action">
        <a href="{{ site.url }}{{ site.baseurl }}/get-started" class="button outline">Get Started</a>
        <a href="{{ site.github.repository_url }}" class="button outline">Download</a>
      </div>
    </div>

  </div><!-- .container -->
</section><!-- .main -->
