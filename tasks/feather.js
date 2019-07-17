import gulp from 'gulp'
import del from 'del'
import fs from 'fs'
import path from 'path'

import feather from 'feather-icons'
import Q from 'q'

import config from './_config'

const feather_clean = () => {
  return del(config.feather.dest)
}

const feather_copy = () => {

  // Setup our promise and set item processed to 0
  var deferred = Q.defer()
  var itemsProcessed = 0

  // Get our icons array
  var icons = fs.readdirSync(config.feather.src)

  // Create the direcotry if it doesn't exist
  if (!fs.existsSync(config.feather.dest)){
    fs.mkdirSync(config.feather.dest)
  }

  // Loop through our icons
  icons.forEach(icon => {
    icon = path.basename(icon, '.svg')
    var svg = feather.icons[icon].toSvg({
      class: 'icon icon-' + icon + '{%if include.class%} {{include.class}}{%endif%}'
    })

    // Write our icons to file
    fs.writeFile(config.feather.dest + icon + '.svg', svg, function (err) {
      if (err) { console.error(err) }
    })

    // Add count to processed items
    itemsProcessed++

    // If we're done, set deferred promise to resolved
    if(itemsProcessed === icons.length) {
      deferred.resolve()
    }
  })

  // Return our promise
  return deferred.promise
}

const build = gulp.series(
  feather_clean,
  feather_copy
)

export {
  feather_clean,
  feather_copy,
  build
}

export default build
