![BaseWeb](http://f.cl.ly/items/201U3Y1g0c2M1u1Z3i0n/baseweb-banner.png "BaseWeb - A fresh front-end development framework.")

#BaseWeb
A fresh front-end development framework.

---

## About
BaseWeb is a front-end development framework built to make building web based projects more enjoyable. It's focused on keeping your projects simple, organized and responsive.

---

## Build Scripts

* Setup the docs as the website for [http://getbaseweb.com/](http://getbaseweb.com/).
* Add responsive styles for docs.
* Add some form of change or development log, similar to [Cargo Devlog](http://cargocollective.com/devlog).
* Incorporate [markdown-it](https://www.npmjs.com/package/markdown-it) node module for use with the dev log.
* Figure out versioning using [Semantic Versioning 2.0.0](http://semver.org/).
* `npm install` latest versions of node packages and fix any issues with build scripts.

---

## Build Scripts

BaseWeb uses [Node](https://nodejs.org/) and [Jake](http://jakejs.com/) for building both the source and docs. The build scripts themselves are written specifically for BaseWeb, but they are modular so you're free to modify and use them in your own scripts.

### Dependencies

* Install [Node.js](http://nodejs.org/) by downloading the `.pkg` file.
* Install [Jake](https://github.com/mde/jake) globally `sudo npm install -g jake`
* Install [Jpegtran](http://jpegclub.org/jpegtran/) for the image optimizer to work. With [Homebrew](http://brew.sh/): `brew install jpeg`

### Node Packages

* Run `sudo npm install` (Should be run every time a new module is added)
* You should now be able to start running jake tasks!

### Jake tasks

* `jake build:scss`   Compiles and minifies SCSS
* `jake build:js`     Compiles and minifies JS
* `jake build:docs`   Build documentation
* `jake build:img`    Optimizes global images
* `jake watch`        Watch for change to files and rebuild if they change

---

## Copyright and License

BaseWeb and BaseWeb documentation copyright (c) 2015 [Sebastian Nitu](http://sebnitu.com). BaseWeb is released under the [MIT license](https://github.com/sebnitu/BaseWeb/blob/master/LICENSE) and BaseWeb documentation is released under [Creative Commons](https://github.com/sebnitu/BaseWeb/blob/master/docs/LICENSE).