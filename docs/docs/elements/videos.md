---
layout: page
title: "Videos"
order: 12
---

Videos in HTML can be embedded into a document in a few different ways. If you're using YouTube or Vimeo, they provide an <code><iframe></code> for embedding videos. Flash based video implementations use the `<object>` and `<embed>` elements. And then there is the native HTML5 `<video>` element.

Regardless of the method you use embedding a video, chances are you want that video to be responsive (or fluid). For those cases, you have the `.video-wrapper` element:

```html
<div class="video-wrapper">
  <iframe src="..."></iframe>
</div>
```

<div class="demo">
  <div class="video-wrapper">
    <iframe src="https://player.vimeo.com/video/90881247" width="500" height="281" frameborder="0" allowfullscreen></iframe>
  </div>
</div>

You also have the `.video-item` class to specifically declare a video.

```html
<div class="video-wrapper">
  <iframe class="video-item" src="..."></iframe>
</div>
```

## Video Ratios

The default video ratio can be set using the `$videos('ratio')` variable (56.25% by default). Alternatively, you can also specifically set a video's ratio by applying the ratio classes to the video wrapper element.

```html
<!-- Sets video ratio to 16x9 (56.25% height) -->
<div class="video-wrapper ratio-16x9">...</div>

<!-- Sets video ratio to 4x3 (75% height) -->
<div class="video-wrapper ratio-4x3">...</div>
```

<div class="notice info">
  <p>For more information on the technique BaseWeb uses to create fluid videos, checkout <a href="https://css-tricks.com/NetMag/FluidWidthVideo/Article-FluidWidthVideo.php">this tutorial over at CSS-Tricks</a>.</p>
</div>

## Variables

Video variables are encompassed within the `$videos` map and are used in video mixins to set default values.

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Default</th>
  </tr>

  <tr>
    <td><code>$videos('classes')</code></td>
    <td><code>true</code></td>
  </tr>
  <tr>
    <td><code>$videos('margin')</code></td>
    <td><code>2em 0</code></td>
  </tr>
  <tr>
    <td><code>$videos('ratio')</code></td>
    <td><code>56.25%</code></td>
  </tr>
</table>

## Functions

<ul class="list list-docs">

<li markdown="1">

### aspect-ratio

Returns the aspect ratio in the form of a percentage.

```scss
aspect-ratio( $width, $height )
```

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>$width</code></td>
    <td>Number</td>
    <td><span class="text-soften">None</span></td>
    <td>Width aspect ratio</td>
  </tr>
  <tr>
    <td><code>$height</code></td>
    <td>Number</td>
    <td><span class="text-soften">None</span></td>
    <td>Height aspect ratio</td>
  </tr>
  <tr>
    <th>Return</th>
    <td colspan="3">Height percentage of aspect ratio</td>
  </tr>
</table>

</li>

</ul>

## Mixins

<ul class="list list-docs">

<li markdown="1">

### make-video-fluid

Adds styles for creating fluid videos. Should be applied to a wrapping element of a video.

```scss
@include make-video-fluid( $options: () );
```

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$options</code></td>
    <td>Map</td>
    <td><code>$video()</code></td>
  </tr>
</table>

</li>

<li markdown="1">

### build-video-ratio

Creates a ratio class using an aspect width and height. The class that's created uses the passed in ratio `.ratio-AxB` where `A` is the passed in width and `B` is the passed in height.

```scss
@include build-video-ratio( $width, $height );
```

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$width</code></td>
    <td>Width aspect ratio (number)</td>
    <td><span class="text-soften">None</span></td>
  </tr>
  <tr>
    <td><code>$height</code></td>
    <td>Height aspect ratio (number)</td>
    <td><span class="text-soften">None</span></td>
  </tr>
</table>

#### Example Usage

```scss
// SCSS
.video-wrapper {
  @include build-video-ratio(16, 9);
  @include build-video-ratio(4, 3);
}

// CSS Output
.video-wrapper .ratio-16x9 {
  padding-bottom: 56.25%;
}
.video-wrapper .ratio-4x3 {
  padding-bottom: 75%;
}
```

</li>

</ul>
