// BaseWeb's Gulpfile
// Gulp.js configuration
var
  // Require Modules
  // Gulp
  gulp = require('gulp'),
  rename = require('gulp-rename'),
  merge = require('merge-stream'),
  // CSS
  sass = require('gulp-sass'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  mqpacker = require('css-mqpacker'),
  cssnano = require('cssnano'),
  // JS
  concat = require('gulp-concat'),
  deporder = require('gulp-deporder'),
  stripdebug = require('gulp-strip-debug'),
  uglify = require('gulp-uglify'),

  // folders
  folder = {
    src: 'src/',
    dest: 'dist/',
    docs: 'docs/'
  }
;

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
      autoprefixer({ browsers: ['last 2 versions', '> 2%'] }),
      mqpacker
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
