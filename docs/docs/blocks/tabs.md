---
layout: page
title: "Tabs"
order: 5
---

Tabs are a navigation type component that gives a layered feel to a document. It usually will show and hide content without linking to a separate page entirely.

<div class="tabs">
  <nav class="tabs-nav">
    <ul>
      <li><a href="#tab-panel-1">Tab 1</a></li>
      <li class="active"><a href="#tab-panel-2">Tab 2</a></li>
      <li><a href="#tab-panel-3">Tab 3</a></li>
      <li><a href="#tab-panel-4">Tab 4</a></li>
      <li><a href="#tab-panel-5">Tab 5</a></li>
    </ul>
  </nav>
  <div class="tabs-content">
    <section id="tab-panel-1" class="tab-panel"><p>Tab Content 1</p></section>
    <section id="tab-panel-2" class="tab-panel active"><p>Tab Content 2</p></section>
    <section id="tab-panel-3" class="tab-panel"><p>Tab Content 3</p></section>
    <section id="tab-panel-4" class="tab-panel"><p>Tab Content 4</p></section>
    <section id="tab-panel-5" class="tab-panel"><p>Tab Content 5</p></section>
  </div>
</div>

<nav class="tabs-nav" data-content="tabs-content-id">
  <ul>
    <li><a href="#tab-panel-6">Tab 1</a></li>
    <li class="active"><a href="#tab-panel-7">Tab 2</a></li>
    <li><a href="#tab-panel-8">Tab 3</a></li>
    <li><a href="#tab-panel-9">Tab 4</a></li>
    <li><a href="#tab-panel-10">Tab 5</a></li>
  </ul>
</nav>

<div id="tabs-content-id" class="tabs-content">
  <section id="tab-panel-6" class="tab-panel"><p>Tab Content 1</p></section>
  <section id="tab-panel-7" class="tab-panel active"><p>Tab Content 2</p></section>
  <section id="tab-panel-8" class="tab-panel"><p>Tab Content 3</p></section>
  <section id="tab-panel-9" class="tab-panel"><p>Tab Content 4</p></section>
  <section id="tab-panel-10" class="tab-panel"><p>Tab Content 5</p></section>
</div>

<nav class="tabs-nav">
  <ul>
    <li><a href="#tab-panel-6">Tab 1</a></li>
    <li class="active"><a href="#tab-panel-7">Tab 2</a></li>
    <li><a href="#tab-panel-8">Tab 3</a></li>
    <li><a href="#tab-panel-9">Tab 4</a></li>
    <li><a href="#tab-panel-10">Tab 5</a></li>
  </ul>
</nav>
