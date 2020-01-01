import gulp from 'gulp'
import del from 'del'
import rename from 'gulp-rename'
import through2 from 'through2'
import sourcemaps from 'gulp-sourcemaps'

import sass from 'gulp-sass'
import postcss from 'gulp-postcss'
import autoprefixer from 'autoprefixer'

import config from './_config'

const styles_clean = () => {
  return del(config.styles.dest)
}

const styles_dev = () => {
  return gulp.src(config.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded',
      includePaths: config.styles.search
    })
    .on('error', sass.logError))
    .pipe(postcss([
      autoprefixer({
        overrideBrowserslist: ['last 2 versions', '> 2%']
      })
    ]))
    .pipe(rename({
      basename: config.styles.output,
      extname: '.css'
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(through2.obj(function(file, enc, cb) {
    	var date = new Date()
    	file.stat.atime = date
    	file.stat.mtime = date
    	cb(null, file)
    }))
    .pipe(gulp.dest(config.styles.dest))
}

const styles_prod = () => {
  return gulp.src(config.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: config.styles.search
    })
    .on('error', sass.logError))
    .pipe(postcss([
      autoprefixer({
        overrideBrowserslist: ['last 2 versions', '> 2%']
      })
    ]))
    .pipe(rename({
      basename: config.styles.output,
      extname: '.min.css'
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(through2.obj(function(file, enc, cb) {
    	var date = new Date()
    	file.stat.atime = date
    	file.stat.mtime = date
    	cb(null, file)
    }))
    .pipe(gulp.dest(config.styles.dest))
}

const styles_vendor = (done) => {
  if (Array.isArray(config.styles.vendors) && config.styles.vendors.length) {
    return gulp.src(config.styles.vendors).pipe(gulp.dest(config.styles.dest))
  } else {
    done()
  }
}

const styles_watch = (done) => {
  if (Array.isArray(config.styles.watch) && config.styles.watch.length) {
    gulp.watch(config.styles.watch, gulp.parallel(
      styles_dev,
      styles_prod
    ))
  } else {
    done()
  }
}

const build = gulp.series(
  styles_clean,
  gulp.parallel(
    styles_dev,
    styles_prod,
    styles_vendor
  )
)

export {
  styles_clean,
  styles_dev,
  styles_prod,
  styles_vendor,
  styles_watch,
  build
}

export default build
