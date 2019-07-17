import gulp from 'gulp'
import del from 'del'
import imagemin from 'gulp-imagemin'

import config from './_config'

const svg = () => {
  return gulp.src(config.svg.src)
    .pipe(imagemin([
      imagemin.svgo({
        plugins: [{
          removeViewBox: false
        }]
      })
    ]))
    .pipe(gulp.dest(config.svg.dest))
}

const svg_clean = () => {
  return del(config.svg.dest)
}

const build = gulp.series(
  svg_clean,
  svg
)

export {
  svg,
  svg_clean,
  build
}

export default build
