![BaseWeb](http://f.cl.ly/items/201U3Y1g0c2M1u1Z3i0n/baseweb-banner.png "BaseWeb — A fresh front-end development framework.")

Currently v1.1.1

## About
BaseWeb is a SCSS front-end development framework built to make working on web based projects more enjoyable. It&#39;s focused on keeping your projects simple, organized and responsive.

### Upcoming Features
The main features being worked on right now are new blocks. The following list of blocks are what is coming soon:

* Create and document form-layout block
* Create and document button-group block
* Create and document notice block
* Create and document breadcrumb block
* Create and document dropdowns block
* Create and document tabs block
* Create and document modals block

## Documentation
Documentation is currently being worked on and you can view them if you clone or download the repo. There will also be an online version at [http://getbaseweb.com/](http://getbaseweb.com/).

### Upcoming Features
Upcoming features and updates to BaseWeb documentation:

* Add some form of change or development log, similar to [Cargo Devlog](http://cargocollective.com/devlog).
* Add a blog to highlight new features and post tutorials.
* Incorporate [markdown-it](https://www.npmjs.com/package/markdown-it) node module for use with the devlog, blog and readme.
* Setup auto deployment for docs to [http://getbaseweb.com/](http://getbaseweb.com/).

## Build Scripts

BaseWeb uses [Node](https://nodejs.org/) and [Jake](http://jakejs.com/) for building both the source and docs. The build scripts themselves are written specifically for BaseWeb, but they are modular so you're free to modify and use them in your own scripts.

### Dependencies

* Install [Node.js](http://nodejs.org/) by downloading the `.pkg` file.
* Install [Jake](https://github.com/mde/jake) globally `sudo npm install -g jake`.
* Install [Jpegtran](http://jpegclub.org/jpegtran/) for the image optimizer to work. With [Homebrew](http://brew.sh/): `brew install jpeg`

### Node Packages
Run `npm install` to install required node modules for build scripts. This is the following node stack used to build BaseWeb and related files:

| Node Modules   | Versions   |
|----------------|------------|
| `node-sass`    | `2.1.1`    |
| `uglify-js`    | `2.4.19`   |
| `mustache`     | `2.0.0`    |
| `imagemin`     | `3.1.0`    |

### Jake tasks
The following tasks are available for building BaseWeb and related files:

* `jake build:scss`   Compiles and minifies SCSS
* `jake build:js`     Compiles and minifies JS
* `jake build:docs`   Build documentation
* `jake build:img`    Optimizes global images
* `jake watch`        Watch for change to files and rebuild if they change

## Copyright and License

BaseWeb and BaseWeb documentation copyright (c) 2015 [Sebastian Nitu](http://sebnitu.com). BaseWeb is released under the [MIT license](https://github.com/sebnitu/BaseWeb/blob/master/LICENSE) and BaseWeb documentation is released under [Creative Commons](https://github.com/sebnitu/BaseWeb/blob/master/docs/LICENSE).