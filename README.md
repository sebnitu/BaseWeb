![BaseWeb](https://d3vv6lp55qjaqc.cloudfront.net/items/3N173I3s2s211E1q1e1N/baseweb-logo-readme.svg "BaseWeb")

Currently v2.2.1

## About
BaseWeb is a fresh SCSS front-end development framework and library built to help keep your projects simple, organized and responsive.

### Upcoming Features
The main features being worked on right now are blocks. The following list of blocks are currently on the production list:

* Modals
* Tabs
* Pagination
* Tooltips

## Documentation
Documentation can be found at [http://getbaseweb.com/](http://getbaseweb.com/). A copy of the docs are also included when downloading this repo. If you see any errors or problems with the docs, please feel free to open an issue ticket and I'll do my best to get things fixed. BaseWeb is built on [Jekyll](https://jekyllrb.com/).

### Upcoming Features
Upcoming features and updates to BaseWeb documentation:

* Add some form of change or development log, similar to [Cargo Devlog](http://cargocollective.com/devlog).
* Add a blog to highlight new features and post tutorials.
* Incorporate [markdown-it](https://www.npmjs.com/package/markdown-it) node module for use with the devlog, blog and readme.
* Setup auto deployment for docs to [http://getbaseweb.com/](http://getbaseweb.com/).

## Build Scripts

BaseWeb uses [Node](https://nodejs.org/), [Jake](http://jakejs.com/) and [Jake-Builds](https://github.com/sebnitu/jake-builds) for building both the source and docs. For more information on how to update build scripts using this stack, make sure to checkout [Jake-Builds](https://github.com/sebnitu/jake-builds).

### Node Packages
Run `sudo npm install` to install required node modules for build scripts. This is the following node stack used to build BaseWeb assets and documentation files:

| Node Modules   | Versions   | Description |
|----------------|------------|-------------|
| `node-watch`   | `0.4.*`    | Used in handling the watch task |
| `node-sass`    | `3.10.*`   | Used for compiling and minifying CSS from SCSS files |
| `uglify-js`    | `2.7.*`    | Used to compile and minify our JavaScript files |

### Jake Tasks
To see the full list of available Jake tasks for a project, use `jake -ls`. The following tasks are available for building BaseWeb and related files:

| Jake Tasks            | Description                                          |
|-----------------------|------------------------------------------------------|
| `jake build`          | Build everything                                     |
| `jake build:scss`     | Compiles and minifies SCSS                           |
| `jake build:js`       | Compiles and minifies JS                             |
| `jake watch`          | Watch for change to files and rebuild if they change |

## Copyright and License

BaseWeb and BaseWeb documentation copyright (c) 2017 [Sebastian Nitu](http://sebnitu.com). BaseWeb is released under the [MIT license](https://github.com/sebnitu/BaseWeb/blob/master/LICENSE) and BaseWeb documentation is released under [Creative Commons](https://github.com/sebnitu/BaseWeb/blob/master/docs/LICENSE).
