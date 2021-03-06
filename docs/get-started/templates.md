---
layout: page
title: Markup Templates
link:
  text: Templates
order: 1
---

<div class="notice warning">
  <p>The markup templates documentation is still being written and may not currently be up to date or contain all relevant information. Please check back again soon.</p>
</div>

Here is a starter HTML document with the bear essentials to get you started. A few things of note include the HTML5 declaration, the three `<meta>` tags (to specify encoding, browser settings and mobile scale settings), a title and the link to BaseWeb's stylesheet.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required Meta Data -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>BaseWeb</title>

    <!-- BaseWeb Styles -->
    <link rel="stylesheet" href="baseweb.min.css">
  </head>
  <body>

    <!-- BaseWeb Scripts -->
    <script src="baseweb.min.js"></script>
  </body>
</html>
```

Here is a starter template for a typical document structure. This includes some common classes and uses the class based grid system:

```html
<header class="header">
  <div class="container">

    <a href="#" class="logo">
      Company Name
    </a><!-- .logo -->

    <nav class="nav">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Work</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav><!-- .nav -->

  </div><!-- .container -->
</header><!-- .header -->

<section class="main">
  <div class="container">

    <div class="row">
      <div class="col col-8 content">

        <p>Document content goes here...</p>

      </div><!-- .col -->
      <aside class="col col-4 sidebar">

        <p>Sidebar content goes here...</p>

      </aside><!-- .col -->
    </div><!-- .row -->

  </div><!-- .container -->
</section><!-- .main -->

<footer class="footer">
  <div class="container">
    <p>&copy; {{ 'now' | date: "%Y" }} <a href="#">Company Name</a>. All rights reserved.</p>
  </div><!-- .container -->
</footer><!-- .footer -->
```

<div class="notice info" markdown="1">
More HTML examples and starter templates are planned to be released in the future. They'll be announced on the [development log]({{ site.url }}{{ site.baseurl }}/blog/) as soon as they are available!
</div>
