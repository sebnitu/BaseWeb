// BaseWeb's Gulpfile
// Gulp.js configuration
var
  // Require Modules
  // Global
  gulp = require('gulp'),
  newer = require('gulp-newer'),
  rename = require('gulp-rename'),
  merge = require('merge-stream'),
  // CSS
  sass = require('gulp-sass'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  cssnano = require('cssnano'),
  // JS
  concat = require('gulp-concat'),
  deporder = require('gulp-deporder'),
  stripdebug = require('gulp-strip-debug'),
  uglify = require('gulp-uglify'),
  // Img
  imagemin = require('gulp-imagemin'),

  // folders
  folder = {
    src: 'src/',
    dest: 'dist/',
    srcDocs: 'docs/src/',
    destDocs: 'docs/assets/'
  }
;

// ---

// BaseWeb Source Builds
// CSS processing
// Output expanded and minified CSS files + plugins
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
      .pipe(sass(sassOpts)
      .on('error', sass.logError))
      .pipe(postcss(postcssOpts))
      .pipe(gulp.dest(dest)),
    cssmin = gulp.src(src)
      .pipe(sass(sassOpts)
      .on('error', sass.logError))
      .pipe(postcss(postcssOpts))
      .pipe(postcss([cssnano]))
      .pipe(rename('baseweb.min.css'))
      .pipe(gulp.dest(dest));

  return merge(css, cssmin);
});

// JavaScript processing
// Output expanded and minified JS files + plugins
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

// ---

// Documentation Builds
// CSS processing
gulp.task('docs:css', function() {
  var
    src = folder.srcDocs + 'scss/docs.scss',
    dest = folder.destDocs + 'css/',
    sassOpts = {
      outputStyle: 'expanded',
      includePaths: ['docs/src/scss/', 'src/scss/'],
      precision: 3
    },
    postcssOpts = [
      autoprefixer({ browsers: ['last 2 versions', '> 2%'] })
    ],
    css = gulp.src(src)
      .pipe(sass(sassOpts)
      .on('error', sass.logError))
      .pipe(postcss(postcssOpts))
      .pipe(gulp.dest(dest)),
    cssmin = gulp.src(src)
      .pipe(sass(sassOpts)
      .on('error', sass.logError))
      .pipe(postcss(postcssOpts))
      .pipe(postcss([cssnano]))
      .pipe(rename('docs.min.css'))
      .pipe(gulp.dest(dest));

  return merge(css, cssmin);
});

// JS Processing
gulp.task('docs:js', function() {
  var
    src = folder.srcDocs + 'js/**/*',
    dest = folder.destDocs + 'js/',
    js = gulp.src(src)
      .pipe(deporder())
      .pipe(concat('docs.js'))
      .pipe(gulp.dest(dest)),
    jsmin = gulp.src(src)
      .pipe(deporder())
      .pipe(concat('docs.min.js'))
      .pipe(stripdebug())
      .pipe(uglify())
      .pipe(gulp.dest(dest));

  return merge(js, jsmin);
});

// Image processing
gulp.task('docs:img', function() {
  var dest = folder.destDocs + 'img/';
  return gulp.src(folder.srcDocs + 'img/**/*')
    .pipe(newer(dest))
    .pipe(imagemin({ optimizationLevel: 5 }))
    .pipe(gulp.dest(dest));
});

// ---

// Watch & Bulk Tasks
// Build everything
gulp.task('src', ['css', 'js']);
gulp.task('docs', ['docs:css', 'docs:js', 'docs:img']);
gulp.task('go', ['src', 'docs']);

// watch for changes
gulp.task('watch', function() {

  // src scss changes
  gulp.watch(folder.src + 'scss/**/*', ['css', 'docs:css']);
  // src js changes
  gulp.watch(folder.src + 'js/**/*', ['js']);

  // docs scss changes
  gulp.watch(folder.srcDocs + 'scss/**/*', ['docs:css']);
  // docs js changes
  gulp.watch(folder.srcDocs + 'js/**/*', ['docs:js']);
  // docs img changes
  gulp.watch(folder.srcDocs + 'img/**/*', ['docs:img']);

});

// default task
gulp.task('default', ['go', 'watch']);
