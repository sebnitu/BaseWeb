import gulp from 'gulp'
import del from 'del'
import rename from 'gulp-rename'
import svgSymbols from 'gulp-svg-symbols'

import config from './_config'

const symbols = () => {
  return gulp.src(config.symbols.src)
    .pipe(svgSymbols(config.symbols.options))
    .pipe(rename(config.symbols.output))
    .pipe(gulp.dest(config.symbols.dest))
}

const symbols_clean = () => {
  return del(config.symbols.dest + config.symbols.output)
}

const build = gulp.series(
  symbols_clean,
  symbols
)

export {
  symbols,
  symbols_clean,
  build
}

export default build
