import gulp from 'gulp'

import styles, { styles_watch, styles_clean } from './tasks/styles'
import scripts, { scripts_watch, scripts_clean } from './tasks/scripts'

const clean = gulp.parallel(
  styles_clean,
  scripts_clean
)

const watch = gulp.parallel(
  styles_watch,
  scripts_watch
)

const build = gulp.parallel(
  styles,
  scripts
)

export {
  styles,
  styles_clean,
  scripts,
  scripts_clean,
  clean,
  watch
}

export default build
