/**
 * Require Packages
 */
var
  fs = require('fs'),
  path = require('path'),
  gulp = require('gulp'),
  gutil = require('gulp-util'),
  newer = require('gulp-newer'),
  rename = require('gulp-rename'),
  replace = require('gulp-replace'),
  merge = require('merge-stream'),
  minimist = require('minimist'),

  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  cssnano = require('cssnano'),

  concat = require('gulp-concat'),
  deporder = require('gulp-deporder'),
  stripdebug = require('gulp-strip-debug'),
  uglify = require('gulp-uglify'),

  imagemin = require('gulp-imagemin'),
  feather = require('feather-icons'),
  svgSymbols = require('gulp-svg-symbols')
;

/**
 * Settings
 */
var
  folder = {
    src: 'src/',
    dest: 'dist/',
    docs: {
      src: 'docs/src/',
      dest: 'docs/dist/'
    },
    icons: 'node_modules/feather-icons/dist/icons/',
  },

  searchFiles = {
    version: [
      'README.md',
      'package.json',
      'src/scss/_colophon.scss',
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
  },

  // Save passed parameters to use in gulp tasks
  options = minimist(process.argv.slice(2))
;

/**
 * Search and replace for managing current version and other static data that
 * changes accross multiple files: -s SEARCH -r REPLACE -f FILES
 */
gulp.task('replace', function() {

  var src = typeof searchFiles['exclude'] != "undefined" ? searchFiles['exclude'] : [];

  if ((options.s == undefined) || (options.r == undefined) || (options.f == undefined)) {
    console.error('USAGE: gulp replace -s <SEARCH> -r <REPLACE> -f <FILES>');
  } else {
    if (searchFiles[options.f] != undefined) {
      src = searchFiles[options.f].concat(src);
    } else {
      src = String(options.f)
        .replace(/\s+/g, '')
        .split(',')
        .concat(src);
    }

    console.log(
      'Searching for "' + gutil.colors.cyan(String(options.s)) +
      '" to replace with "' + gutil.colors.cyan(String(options.r)) + '"'
    );
    console.log( 'Looking through:', '\n - ' + gutil.colors.yellow(src).replace(/,/g , "\n - ") );

    return gulp.src(src, { base: './' })
      .pipe(replace(String(options.s), String(options.r)))
      .pipe(gulp.dest('./'));
  }

});

/**
 * Writes all the icon svg files as a data object in `icons.json` for Jekyll
 */
gulp.task('data:icons', function() {

  var src  = folder.icons;
  var dest = 'docs/_data/';
  var files = [];

  fs.readdirSync(src).forEach(file => {
    if (path.extname(file) == '.svg') {
      files.push(file.replace(/\.[^/.]+$/, ""));
    }
  });

  fs.writeFile(dest + 'icons.json', JSON.stringify(files), function (err) {
    if (err) { console.error(err); }
  });

});

/**
 * Output expanded and min CSS files with source maps from `src` into `dist`
 */
gulp.task('css', function() {
  var
    src = folder.src + 'scss/baseweb.scss',
    dest = folder.dest + 'css/',
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
      .pipe(gulp.dest(dest));

  return merge(css, cssmin);
});

/**
 * Output expanded and minified JS files from `src` into `dist`
 */
gulp.task('js', function() {
  var
    src = folder.src + 'js/**/*',
    dest = folder.dest + 'js/',
    js = gulp.src(src)
      .pipe(deporder())
      .pipe(concat('baseweb.js'))
      .pipe(gulp.dest(dest)),
    jsmin = gulp.src(src)
      .pipe(deporder())
      .pipe(concat('baseweb.min.js'))
      .pipe(stripdebug())
      .pipe(uglify())
      .pipe(gulp.dest(dest));

  return merge(js, jsmin);
});

/**
 * Copies icons from Feather Icons with custom classes and SVG sprite
 */
gulp.task('icons', function() {

  var src  = folder.icons + '*.svg';
  var dest = folder.dest + 'icons/';

  fs.readdirSync(folder.icons).forEach(icon => {
    icon = path.basename(icon, '.svg');
    var svg = feather.toSvg(icon, {
      class: 'icon icon-' + icon
    });
    fs.writeFile(dest + icon + '.svg', svg, function (err) {
      if (err) { console.error(err); }
    });
  });

  return gulp.src( src )
    .pipe(svgSymbols({
      id: 'icon-%f',
      svgClassname: 'svg-symbols',
      templates: ['default-svg']
    }))
    .pipe(gulp.dest( dest ));

});

/**
 * Output expanded and min CSS files with source maps from `docs/src` into `docs/dist`
 */
gulp.task('docs:css', function() {
  var
    src = folder.docs.src + 'scss/docs.scss',
    dest = folder.docs.dest + 'css/',
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
      .pipe(gulp.dest(dest));

  return merge(css, cssmin);
});

/**
 * Output expanded and minified JS files from `docs/src` into `docs/dist`
 */
gulp.task('docs:js', function() {
  var
    src = [
      folder.src + 'js/**/*',
      folder.docs.src + 'js/**/*'
    ],
    dest = folder.docs.dest + 'js/',
    js = gulp.src(src)
      .pipe(deporder())
      .pipe(concat('baseweb.js'))
      .pipe(gulp.dest(dest)),
    jsmin = gulp.src(src)
      .pipe(deporder())
      .pipe(concat('baseweb.min.js'))
      .pipe(stripdebug())
      .pipe(uglify())
      .pipe(gulp.dest(dest));

  return merge(js, jsmin);
});

/**
 * Compress all image files from `docs/src` into `docs/dist`
 */
gulp.task('docs:img', function() {
  var dest = folder.docs.dest + 'img/';
  return gulp.src(folder.docs.src + 'img/**/*')
    .pipe(newer(dest))
    .pipe(imagemin({ optimizationLevel: 5 }))
    .pipe(gulp.dest(dest));
});

/**
 * Copies icons from Feather Icons with custom classes and SVG sprite
 */
gulp.task('docs:icons', function() {

  var src  = folder.icons + '*.svg';
  var dest = 'docs/_includes/icons/';

  fs.readdirSync(folder.icons).forEach(icon => {
    icon = path.basename(icon, '.svg');
    var svg = feather.toSvg(icon, {
      class: 'icon icon-' + icon
    });
    fs.writeFile(dest + icon + '.svg', svg, function (err) {
      if (err) { console.error(err); }
    });
  });

  return gulp.src( src )
    .pipe(svgSymbols({
      id: 'icon-%f',
      svgClassname: 'svg-symbols',
      templates: ['default-svg']
    }))
    .pipe(gulp.dest( dest ));

});

/**
 * Bulk Tasks
 */
gulp.task('src', ['css', 'js', 'icons']);
gulp.task('docs', ['docs:css', 'docs:js', 'docs:img', 'docs:icons']);
gulp.task('svg', ['icons', 'docs:icons']);
gulp.task('go', ['src', 'docs', 'svg']);

/**
 * Watch all asset files and runs the appropriate build task based on changes
 */
gulp.task('watch', function() {
  gulp.watch(folder.src + 'scss/**/*', ['css', 'docs:css']);
  gulp.watch(folder.src + 'js/**/*', ['js', 'docs:js']);
  gulp.watch(folder.docs.src + 'scss/**/*', ['docs:css']);
  gulp.watch(folder.docs.src + 'js/**/*', ['docs:js']);
  gulp.watch(folder.docs.src + 'img/**/*', ['docs:img']);
});

/**
 * Default task
 * Builds everything and then initiates the watch task
 */
gulp.task('default', ['go', 'watch']);
