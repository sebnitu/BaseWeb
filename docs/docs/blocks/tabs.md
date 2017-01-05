---
layout: page
title: "Tabs"
order: 5
---

Tabs are a navigation type component that gives a layered feel to a document. It usually will show and hide content without linking to a separate page entirely.


## Default Style

<div class="tabs tabs-default">
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

<nav class="tabs-nav tabs-default" data-content="tabs-content-1">
  <ul>
    <li><a href="#tab-panel-6">Tab 1</a></li>
    <li class="active"><a href="#tab-panel-7">Tab 2</a></li>
    <li><a href="#tab-panel-8">Tab 3</a></li>
    <li><a href="#tab-panel-9">Tab 4</a></li>
    <li><a href="#tab-panel-10">Tab 5</a></li>
  </ul>
</nav>

<div class="tabs-content tabs-default" id="tabs-content-1">
  <section id="tab-panel-6" class="tab-panel"><p>Tab Content 1</p></section>
  <section id="tab-panel-7" class="tab-panel active"><p>Tab Content 2</p></section>
  <section id="tab-panel-8" class="tab-panel"><p>Tab Content 3</p></section>
  <section id="tab-panel-9" class="tab-panel"><p>Tab Content 4</p></section>
  <section id="tab-panel-10" class="tab-panel"><p>Tab Content 5</p></section>
</div>


## Android Style

<div class="tabs tabs-android">
  <nav class="tabs-nav">
    <ul>
      <li><a href="#tab-panel-11">Tab 1</a></li>
      <li class="active"><a href="#tab-panel-12">Tab 2</a></li>
      <li><a href="#tab-panel-13">Tab 3</a></li>
      <li><a href="#tab-panel-14">Tab 4</a></li>
      <li><a href="#tab-panel-15">Tab 5</a></li>
    </ul>
  </nav>
  <div class="tabs-content">
    <section id="tab-panel-11" class="tab-panel"><p>Tab Content 1</p></section>
    <section id="tab-panel-12" class="tab-panel active"><p>Tab Content 2</p></section>
    <section id="tab-panel-13" class="tab-panel"><p>Tab Content 3</p></section>
    <section id="tab-panel-14" class="tab-panel"><p>Tab Content 4</p></section>
    <section id="tab-panel-15" class="tab-panel"><p>Tab Content 5</p></section>
  </div>
</div>

<nav class="tabs-nav tabs-android" data-content="tabs-content-2">
  <ul>
    <li><a href="#tab-panel-16">Tab 1</a></li>
    <li class="active"><a href="#tab-panel-17">Tab 2</a></li>
    <li><a href="#tab-panel-18">Tab 3</a></li>
    <li><a href="#tab-panel-19">Tab 4</a></li>
    <li><a href="#tab-panel-20">Tab 5</a></li>
  </ul>
</nav>

<div class="tabs-content tabs-android" id="tabs-content-id-2">
  <section id="tab-panel-16" class="tab-panel"><p>Tab Content 1</p></section>
  <section id="tab-panel-17" class="tab-panel active"><p>Tab Content 2</p></section>
  <section id="tab-panel-18" class="tab-panel"><p>Tab Content 3</p></section>
  <section id="tab-panel-19" class="tab-panel"><p>Tab Content 4</p></section>
  <section id="tab-panel-20" class="tab-panel"><p>Tab Content 5</p></section>
</div>
