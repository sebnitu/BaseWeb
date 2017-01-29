![BaseWeb](https://d3vv6lp55qjaqc.cloudfront.net/items/3N173I3s2s211E1q1e1N/baseweb-logo-readme.svg "BaseWeb")

Currently v2.2.4

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

BaseWeb leverages Gulp for its build process. To use our Gulp tasks, after cloning this repo, you'll need to run `npm install`. Once all the necessary node packages are installed, you should have the following tasks available:

| Task | Description |
|------|-------------|
| `gulp css` | Output expanded and minified CSS files from source |
| `gulp js` | Output expanded and minified JS files from source |
| `gulp docs:css` | Output expanded and minified CSS files from documentation |
| `gulp docs:js` | Output expanded and minified JS files from documentation |
| `gulp docs:img` | Compress all image files from documentation |
| `gulp src` | Builds all source assets |
| `gulp docs` | Builds all documentation assets |
| `gulp go` | Builds everything |
| `gulp watch` | Watches all asset files and runs the appropriate build task based on changed |
| `gulp` | Builds everything and then initiates the watch task |
| `gulp replace` | Runs a search and replace task on a given set of files.\* |

\*Great for updating current version numbers that are located throughout a project. 

```
Usage: gulp replace -s SEARCH -r REPLACE -f FILES
```

*All of BaseWeb's build tasks are located in `gulpfile.js`. Check out [Gulp's documentation](http://gulpjs.com/) for how to create your own builds.*

## Copyright and License

BaseWeb and BaseWeb documentation copyright (c) 2017 [Sebastian Nitu](http://sebnitu.com). BaseWeb is released under the [MIT license](https://github.com/sebnitu/BaseWeb/blob/master/LICENSE) and BaseWeb documentation is released under [Creative Commons](https://github.com/sebnitu/BaseWeb/blob/master/docs/LICENSE).
