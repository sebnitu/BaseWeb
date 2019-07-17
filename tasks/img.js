import gulp from 'gulp'
import del from 'del'
import imagemin from 'gulp-imagemin'

import config from './_config'

const img = () => {
  return gulp.src(config.img.src)
    .pipe(imagemin({
      optimizationLevel: 5
    }))
    .pipe(gulp.dest(config.img.dest))
}

const img_clean = () => {
  return del(config.img.dest)
}

const build = gulp.series(
  img_clean,
  img
)

export {
  img,
  img_clean,
  build
}

export default build
