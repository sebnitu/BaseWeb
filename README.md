#BaseWeb
A fresh front-end development framework.

---

# Upcoming Features
Some features I have planned to implement in the near future.

### To-Do List

* Add copy button feature for example code blocks
* Want to try collapsable variable, function and mixin displays for the docs (accordion style). Might help with navigating through all of them more easily.
* Add hash tags back to the URL when clicking internal page links.
* Add a table of context widget.
* Automatic SVG compilation. SVGs saved to `img > svg` should get compiled to a single file in `img` called `svg-difs.svg` for use in SVG sprites. Source: [Icon System with SVG Sprites by Chris Coyier](http://css-tricks.com/svg-sprites-use-better-icon-fonts/)
* Include some custom SVG icons directly in the framework for general web application use. Might be worth starting a new project for this and having SVGs seperate. Still deciding on this.
* Tie documentation styles directly into BaseWeb so I can use Scss for docs but not have ot modify BaseWeb source directly. Should then include watch and build tasks for this.
* Create a partials system for including parts or widgets within mustache page and layout templates.
* Include README.md somehow into the homepage of the docs. Was thinking this could be a dropdown somehow to show. This could be included using the future partials system.
* Add function and mixin documentation directly in source. The comment syntax should mimic what is done in `_functions.scss` for functions/mixins and `_global.scss` for variables.

---

# Using Build Scripts

### Global Installations (One time)

* Make sure that you have [Node.js](http://nodejs.org/) installed.
* Install [Jake](https://github.com/mde/jake) globally `sudo npm install -g jake`
* Install [Jpegtran](http://jpegclub.org/jpegtran/) for the image optimizer to work. With [Homebrew](http://brew.sh/): `brew install jpeg`

### Project specific (Per project)

* Run `npm install` (Should be run every time a new module is added)
* You should now be able to start running jake tasks!

---

### Current jake tasks

* `jake build:less` : Compiles and minifies BaseWeb using LESS *(soon to be depricated)*
* `jake build:scss` : Compiles and minifies BaseWeb using SASS
* `jake build:js` : Compiles and minifies JavaScript
* `jake build:img` : Optimize Images
* `jake build:docs` : Build documentation pages
* `jake build:examples` : Build example pages
* `jake watch` : Watch for change to files and rebuild if they change
