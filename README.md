#BaseWeb
A fresh front-end development framework.

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
