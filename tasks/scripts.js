import gulp from 'gulp'
import del from 'del'
import rename from 'gulp-rename'
import sourcemaps from 'gulp-sourcemaps'

import browserify from 'browserify'
import babel from 'babelify'
import uglify from 'gulp-uglify'

import source from 'vinyl-source-stream'
import buffer from 'vinyl-buffer'

import config from './_config'

const scripts_clean = () => {
  return del(config.scripts.dest)
}

const scripts_dev = () => {
  var bundle = browserify({
    entries: config.scripts.src,
    paths: config.scripts.search,
    debug: true
  }).transform(babel, {
    global: true,
    presets: ['@babel/preset-env']
  })

  return bundle.bundle()
    .pipe(source(config.scripts.src))
    .pipe(buffer())
    .pipe(sourcemaps.init())
    .pipe(rename({
      dirname: '',
      basename: config.scripts.output,
      extname: '.js'
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.scripts.dest))
}

const scripts_prod = () => {
  var bundle = browserify({
    entries: config.scripts.src,
    paths: config.scripts.search,
    debug: true
  }).transform(babel, {
    global: true,
    presets: ['@babel/preset-env']
  })

  return bundle.bundle()
    .pipe(source(config.scripts.src))
    .pipe(buffer())
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(rename({
      dirname: '',
      basename: config.scripts.output,
      extname: '.min.js'
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.scripts.dest))
}

const scripts_vendor = (done) => {
  if (Array.isArray(config.scripts.vendors) && config.scripts.vendors.length) {
    return gulp.src(config.scripts.vendors).pipe(gulp.dest(config.scripts.dest))
  } else {
    done()
  }
}

const scripts_watch = (done) => {
  if (Array.isArray(config.scripts.watch) && config.scripts.watch.length) {
    gulp.watch(config.scripts.watch, gulp.parallel(
      scripts_dev,
      scripts_prod
    ))
  } else {
    done()
  }
}

const build = gulp.series(
  scripts_clean,
  gulp.parallel(
    scripts_dev,
    scripts_prod,
    scripts_vendor
  )
)

export {
  scripts_clean,
  scripts_dev,
  scripts_prod,
  scripts_vendor,
  scripts_watch,
  build
}

export default build
