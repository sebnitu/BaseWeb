'use strict'

// Core
import gulp from 'gulp'
import gutil from 'gulp-util'
import fs from 'fs'
import path from 'path'
import del from 'del'
import Q from 'q'
import rename from 'gulp-rename'
import replace from 'gulp-replace'
import sourcemaps from 'gulp-sourcemaps'
import livereload from 'gulp-livereload'
import minimist from 'minimist'

// Styles
import sass from 'gulp-sass'
import postcss from 'gulp-postcss'
import autoprefixer from 'autoprefixer'

// JavaScript
import babel from 'gulp-babel'
import concat from 'gulp-concat'
import uglify from 'gulp-uglify'

// Graphics
import imagemin from 'gulp-imagemin'
import feather from 'feather-icons'
import svgSymbols from 'gulp-svg-symbols'

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
const options = minimist(process.argv.slice(2))

/**
 * Replace task
 */

gulp.task('replace', () => {

  var src = typeof searchFiles['exclude'] != "undefined" ? searchFiles['exclude'] : []

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
 * Data
 */

gulp.task('data:icons', () => {

  // Set paths
  const src  = paths.icons
  const dest = paths.docs.data

  // Init our files array
  var files = []

  // Loop through our src files
  fs.readdirSync(src).forEach(file => {
    // If a SVG files exists, save it in our array
    if (path.extname(file) == '.svg') {
      files.push(file.replace(/\.[^/.]+$/, ""))
    }
  })

  // Write the JSON object to a file
  fs.writeFile(dest + 'icons.json', JSON.stringify(files), (err) => {
    if (err) { console.error(err) }
  })
})

/**
 * Clean Task
 */

gulp.task('js:clean', () => {
  return del(paths.dest + 'js')
  return del(paths.docs.dest + 'js')
})

gulp.task('css:clean', () => {
  return del(paths.dest + 'css')
  return del(paths.docs.dest + 'css')
})

gulp.task('dist:clean', () => {
  return del(paths.dest)
})

gulp.task('docs:clean', () => {
  return del(paths.docs.dest)
})

gulp.task('clean', ['dist:clean', 'docs:clean'])

/**
 * Styles
 */

gulp.task('dist:css:clean', () => {
  return del(paths.dest + 'css')
})

const task_css = (key, style, filename) => {
  gulp.task('dist:css:' + key, () => {
    const src = paths.src + 'scss/baseweb.scss'
    const dest = paths.dest + 'css/'
    const css = gulp.src(src)
      .pipe(sourcemaps.init())
      .pipe(sass({
        outputStyle: style
      })
      .on('error', sass.logError))
      .pipe(postcss([
        autoprefixer({ browsers: ['last 2 versions', '> 2%'] })
      ]))
      .pipe(rename(filename))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(dest))

    return css
  })
}

task_css('dev', 'expanded', 'baseweb.css')
task_css('prod', 'compressed', 'baseweb.min.css')

gulp.task('dist:css', ['dist:css:dev', 'dist:css:prod'])

/**
 * JavaScript
 */

const dist_js_files = [
  paths.src + 'js/utility.js',
  paths.src + 'js/**/*.js'
]

gulp.task('dist:js:clean', () => {
  return del(paths.dest + 'js')
})

gulp.task('dist:js:dev', () => {
  const src = dist_js_files
  const dest = paths.dest + 'js/'
  const js = gulp.src(src)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat('baseweb.js'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(dest))

  return js
})

gulp.task('dist:js:prod', () => {
  const src = dist_js_files
  const dest = paths.dest + 'js/'
  const js = gulp.src(src)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat('baseweb.min.js'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(dest))

  return js
})

gulp.task('dist:js', ['dist:js:dev', 'dist:js:prod'])

/**
 * Styles
 */

gulp.task('docs:css:clean', () => {
  return del(paths.dest + 'css')
})

const task_docs_css = (key, style, filename) => {
  gulp.task('docs:css:' + key, () => {
    const src = paths.docs.src + 'scss/baseweb.scss'
    const dest = paths.docs.dest + 'css/'
    const css = gulp.src(src)
      .pipe(sourcemaps.init())
      .pipe(sass({
        outputStyle: style,
        includePaths: [
          paths.docs.src + 'scss/',
          paths.src + 'scss/'
        ],
      })
      .on('error', sass.logError))
      .pipe(postcss([
        autoprefixer({ browsers: ['last 2 versions', '> 2%'] })
      ]))
      .pipe(rename(filename))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(dest))

    return css
  })
}

task_docs_css('dev', 'expanded', 'baseweb.css')
task_docs_css('prod', 'compressed', 'baseweb.min.css')

gulp.task('docs:css', ['docs:css:dev', 'docs:css:prod'])

/**
 * JavaScript
 */

const docs_js_files = [
  paths.src + 'js/utility.js',
  paths.src + 'js/**/*.js',
  paths.docs.src + 'js/**/*.js'
]

gulp.task('docs:js:clean', () => {
  return del(paths.docs.dest + 'js')
})

gulp.task('docs:js:dev', () => {
  const src = docs_js_files
  const dest = paths.docs.dest + 'js/'
  const js = gulp.src(src)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat('baseweb.js'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(dest))

  return js
})

gulp.task('docs:js:prod', () => {
  const src = docs_js_files
  const dest = paths.docs.dest + 'js/'
  const js = gulp.src(src)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat('baseweb.min.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(dest))

  return js
})

gulp.task('docs:js', ['docs:js:dev', 'docs:js:prod'])

/**
 * Images
 */

gulp.task('docs:img:clean', function () {
  return del(paths.docs.dest + 'img')
})

gulp.task('docs:img', function() {
  const src = paths.docs.src + 'img/**/*'
  const dest = paths.docs.dest + 'img/'
  return gulp.src(src)
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

  // Set paths
  const src = paths.icons + '*.svg'
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
  const src = paths.docs.inc + 'icons/*.svg'
  const dest = paths.docs.inc + 'svg/'
  return gulp.src( src )
    .pipe(svgSymbols({
      id: 'icon-%f',
      svgClassname: 'svg-symbols',
      templates: ['default-svg']
    }))
    .pipe(rename('symbols.svg'))
    .pipe(gulp.dest( dest ))
})

gulp.task('svg', ['svg:icons', 'svg:symbols'])

/**
 * Bulk Tasks
 */

gulp.task('js', ['dist:js', 'docs:js'])
gulp.task('css', ['dist:css', 'docs:css'])
gulp.task('dist', ['dist:css', 'dist:js'])
gulp.task('docs', ['docs:css', 'docs:js', 'docs:img', 'svg'])
gulp.task('all', ['dist', 'docs', 'svg'])

/**
 * Watch Task
 */

gulp.task('watch', function() {
  gulp.watch(paths.src + 'scss/**/*', ['css', 'docs:css'])
  gulp.watch(paths.src + 'js/**/*', ['js', 'docs:js'])
  gulp.watch(paths.docs.src + 'scss/**/*', ['docs:css'])
  gulp.watch(paths.docs.src + 'js/**/*', ['docs:js'])
})

/**
 * Default task
 * Builds everything and then initiates the watch task
 */

gulp.task('default', ['all', 'watch'])
