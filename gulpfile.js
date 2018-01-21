'use strict'

// Core
const gulp = require('gulp')
const gutil = require('gulp-util')
const fs = require('fs')
const path = require('path')
const del = require('del')
const Q = require('q')
const newer = require('gulp-newer')
const rename = require('gulp-rename')
const replace = require('gulp-replace')
const sourcemaps = require('gulp-sourcemaps')
const livereload = require('gulp-livereload')
const minimist = require('minimist')
const merge = require('merge-stream')

// Styles
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')

// JavaScript
const concat = require('gulp-concat')
const deporder = require('gulp-deporder')
const stripdebug = require('gulp-strip-debug')
const uglify = require('gulp-uglify')

// Graphics
const imagemin = require('gulp-imagemin')
const feather = require('feather-icons')
const svgSymbols = require('gulp-svg-symbols')

// Paths
const paths = {
  src: 'src/',
  dest: 'dist/',
  docs: {
    src: 'docs/src/',
    dest: 'docs/dist/',
    inc: 'docs/_includes/',
    data: 'docs/_data/'
  },
  icons: 'node_modules/feather-icons/dist/icons/',
}

/**
 * Search and replace for managing current version and other static data that
 * changes accross multiple files: -s SEARCH -r REPLACE -f FILES
 */

const searchFiles = {
  version: [
    'README.md',
    'package.json',
    'src/scss/core/_colophon.scss',
    'docs/_config.yml'
  ],
  year: [
    'README.md',
    'LICENSE',
    'src/scss/_colophon.scss'
  ],
  exclude: [
    '!./node_modules/**',
    '!./bower_components/**'
  ]
}

// Save passed parameters to use in gulp tasks
var options = minimist(process.argv.slice(2))

/**
 * Replace task
 */

gulp.task('replace', function() {

  const src = typeof searchFiles['exclude'] != "undefined" ? searchFiles['exclude'] : []

  if ((options.s == undefined) || (options.r == undefined) || (options.f == undefined)) {
    console.error('USAGE: gulp replace -s <SEARCH> -r <REPLACE> -f <FILES>')
  } else {
    if (searchFiles[options.f] != undefined) {
      src = searchFiles[options.f].concat(src)
    } else {
      src = String(options.f)
        .replace(/\s+/g, '')
        .split(',')
        .concat(src)
    }

    console.log(
      'Searching for "' + gutil.colors.cyan(String(options.s)) +
      '" to replace with "' + gutil.colors.cyan(String(options.r)) + '"'
    )
    console.log( 'Looking through:', '\n - ' + gutil.colors.yellow(src).replace(/,/g , "\n - ") )

    return gulp.src(src, { base: './' })
      .pipe(replace(String(options.s), String(options.r)))
      .pipe(gulp.dest('./'))
  }

})

/**
 * Icons Data
 */

gulp.task('data:icons', function() {

  const src  = paths.icons
  const dest = paths.docs.data

  var files = []

  fs.readdirSync(src).forEach(file => {
    if (path.extname(file) == '.svg') {
      files.push(file.replace(/\.[^/.]+$/, ""))
    }
  })

  fs.writeFile(dest + 'icons.json', JSON.stringify(files), function (err) {
    if (err) { console.error(err) }
  })

})

/**
 * Styles
 */

gulp.task('css', function() {
  var
    src = paths.src + 'scss/baseweb.scss',
    dest = paths.dest + 'css/',
    sassOpts = {
      outputStyle: 'expanded',
      precision: 3
    },
    postcssOpts = [
      autoprefixer({ browsers: ['last 2 versions', '> 2%'] })
    ],
    css = gulp.src(src)
      .pipe(sourcemaps.init())
      .pipe(sass(sassOpts)
      .on('error', sass.logError))
      .pipe(postcss(postcssOpts))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(dest)),
    cssmin = gulp.src(src)
      .pipe(sourcemaps.init())
      .pipe(sass(sassOpts)
      .on('error', sass.logError))
      .pipe(postcss(postcssOpts))
      .pipe(postcss([cssnano]))
      .pipe(rename('baseweb.min.css'))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(dest))

  return merge(css, cssmin)
})

/**
 * JavaScript
 */

gulp.task('js', function() {
  var
    src = paths.src + 'js/**/*',
    dest = paths.dest + 'js/',
    js = gulp.src(src)
      .pipe(deporder())
      .pipe(concat('baseweb.js'))
      .pipe(gulp.dest(dest)),
    jsmin = gulp.src(src)
      .pipe(deporder())
      .pipe(concat('baseweb.min.js'))
      .pipe(stripdebug())
      .pipe(uglify())
      .pipe(gulp.dest(dest))

  return merge(js, jsmin)
})

/**
 * Styles
 */

gulp.task('docs:css', function() {
  var
    src = paths.docs.src + 'scss/docs.scss',
    dest = paths.docs.dest + 'css/',
    sassOpts = {
      outputStyle: 'expanded',
      includePaths: ['docs/src/scss/', 'src/scss/'],
      precision: 3
    },
    postcssOpts = [
      autoprefixer({ browsers: ['last 2 versions', '> 2%'] })
    ],
    css = gulp.src(src)
      .pipe(sourcemaps.init())
      .pipe(sass(sassOpts)
      .on('error', sass.logError))
      .pipe(postcss(postcssOpts))
      .pipe(rename('baseweb.css'))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(dest)),
    cssmin = gulp.src(src)
      .pipe(sourcemaps.init())
      .pipe(sass(sassOpts)
      .on('error', sass.logError))
      .pipe(postcss(postcssOpts))
      .pipe(postcss([cssnano]))
      .pipe(rename('baseweb.min.css'))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(dest))

  return merge(css, cssmin)
})

/**
 * JavaScript
 */

gulp.task('docs:js', function() {
  var
    src = [
      paths.src + 'js/**/*',
      paths.docs.src + 'js/**/*'
    ],
    dest = paths.docs.dest + 'js/',
    js = gulp.src(src)
      .pipe(deporder())
      .pipe(concat('baseweb.js'))
      .pipe(gulp.dest(dest)),
    jsmin = gulp.src(src)
      .pipe(deporder())
      .pipe(concat('baseweb.min.js'))
      .pipe(stripdebug())
      .pipe(uglify())
      .pipe(gulp.dest(dest))

  return merge(js, jsmin)
})

/**
 * Images
 */

gulp.task('docs:img', function() {
  var dest = paths.docs.dest + 'img/'
  return gulp.src(paths.docs.src + 'img/**/*')
    .pipe(newer(dest))
    .pipe(imagemin({ optimizationLevel: 5 }))
    .pipe(gulp.dest(dest))
})

/**
 * SVG Tasks
 */

 gulp.task('svg:clean', function () {
   return del([
     paths.docs.inc + 'icons',
     paths.docs.inc + 'svg/symbols.svg'
   ])
 })

gulp.task('svg:icons', ['svg:clean'], function() {

  const src  = paths.icons + '*.svg'
  const dest = paths.docs.inc + 'icons/'

  // Setup our promise and set item processed to 0
  var deferred = Q.defer()
  var itemsProcessed = 0

  // Get our icons array
  var icons = fs.readdirSync(paths.icons)

  // Create the direcotry if it doesn't exist
  if (!fs.existsSync(dest)){
    fs.mkdirSync(dest)
  }

  // Loop through our icons
  icons.forEach(icon => {
    icon = path.basename(icon, '.svg')
    var svg = feather.icons[icon].toSvg({
      class: 'icon icon-' + icon
    })

    // Write our icons to file
    fs.writeFile(dest + icon + '.svg', svg, function (err) {
      if (err) { console.error(err) }
    })

    // Add count to processed items
    itemsProcessed++

    // If we're done, set deferred promise to resolved
    if(itemsProcessed === icons.length) {
      deferred.resolve()
    }
  })

  // Return our promise
  return deferred.promise
})

gulp.task('svg:symbols', ['svg:icons'], function() {

  const src  = paths.docs.inc + 'icons/*.svg'
  const dest = paths.docs.inc + 'svg/'

  var symbols = gulp.src( src )
    .pipe(svgSymbols({
      id: 'icon-%f',
      svgClassname: 'svg-symbols',
      templates: ['default-svg']
    }))
    .pipe(rename('symbols.svg'))
    .pipe(gulp.dest( dest ))

  return symbols
})

gulp.task('svg', ['svg:icons', 'svg:symbols'])

/**
 * Bulk Tasks
 */
gulp.task('src', ['css', 'js', 'icons'])
gulp.task('docs', ['docs:css', 'docs:js', 'docs:img', 'docs:icons'])
gulp.task('go', ['src', 'docs', 'svg'])

/**
 * Watch all asset files and runs the appropriate build task based on changes
 */
gulp.task('watch', function() {
  gulp.watch(paths.src + 'scss/**/*', ['css', 'docs:css'])
  gulp.watch(paths.src + 'js/**/*', ['js', 'docs:js'])
  gulp.watch(paths.docs.src + 'scss/**/*', ['docs:css'])
  gulp.watch(paths.docs.src + 'js/**/*', ['docs:js'])
  gulp.watch(paths.docs.src + 'img/**/*', ['docs:img'])
})

/**
 * Default task
 * Builds everything and then initiates the watch task
 */
gulp.task('default', ['go', 'watch'])
