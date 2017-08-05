---
layout: page
title: Documentation
order: 2
---

BaseWeb documentation is split in size parts, each representing the architecture and explaining what each file does and how it can be used. The most important aspects of BaseWeb is understanding the distinctions of these parts and their roles.

Settings and Core encompass the required BaseWeb files that should be included in all uses of this project. Elements and Blocks represent components of a web project. The custom directory is allocated for writing project specific styles, components and overrides.

<div class="widget fill">
  <ul class="list-ascii">
    <li>
      <strong>src/</strong>
      <ul>
        <li>
          <strong>scss/</strong>
          <ul>
            <li><strong>settings/</strong>...</li>
            <li><strong>core/</strong>...</li>
            <li><strong>elements/</strong>...</li>
            <li><strong>blocks/</strong>...</li>
            <li><strong>custom/</strong>...</li>
            <li>_baseweb-core.scss</li>
            <li>_baseweb-elements.scss</li>
            <li>_baseweb-blocks.scss</li>
            <li>baseweb.scss</li>
          </ul>
        </li>
        <li>
          <strong>js/...</strong>
        </li>
      </ul>
    </li>
  </ul>
</div>

<div class="widget fill">
  <ul class="list-ascii">
    <li>
      <strong>dist/</strong>
      <ul>
        <li>
          <strong>css/</strong>
          <ul>
            <li>baseweb.css</li>
            <li>baseweb.css.map</li>
            <li>baseweb.min.css</li>
            <li>baseweb.min.css.map</li>
          </ul>
        </li>
        <li>
          <strong>js/</strong>
          <ul>
            <li>baseweb.js</li>
            <li>baseweb.min.js</li>
          </ul>
        </li>
        <li>
          <strong>icons/...</strong>
        </li>
      </ul>
    </li>
  </ul>
</div>

All of BaseWeb components are routed through `_baseweb.scss`, where all our `@import` calls are made. The only required files are located in Settings and Core directories. These files, by default, have no CSS output and function simply as a library of functions and variables that you can use in your project.
