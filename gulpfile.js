// BaseWeb's Gulpfile
// Gulp.js configuration
var
  // modules
  gulp = require('gulp'),
  sass = require('gulp-sass'),

  // folders
  folder = {
    src: 'src/',
    dest: 'dist/',
    docs: 'docs/'
  }
;

// CSS processing
gulp.task('css', /*['img'],*/ function() {

  var out = folder.dest + 'css/';

  return gulp.src(folder.src + 'scss/**/*.scss')
    .pipe(sass({
      outputStyle: 'expanded',
      precision: 3
    })
    .on('error', sass.logError))
    .pipe(gulp.dest(out));

});
