var u = require('./modules/utility');
var getjsonsync = require('./modules/getjsonsync');
var runscss = require('./modules/runscss');
var runmustache = require('./modules/runmustache');
var sassdoc = require('sassdoc');
var Imagemin = require('imagemin');

/**
 * The Build Tasks
 */
namespace('build', function() {
  
  var settings = getjsonsync('settings.json');
  
  // Build SCSS
  desc('Compiles and minifies SCSS');
  task('scss', {async: true}, function() {
    
    runscss({
      input   : 'src/scss/_baseweb.scss',
      output  : 'src/css/baseweb.css',
      paths   : ['src/scss/'],
      style   : 'expanded'
    });
    
    runscss({
      input   : 'src/scss/_baseweb.scss',
      output  : 'src/css/baseweb.min.css',
      paths   : ['src/scss/'],
      style   : 'compressed'
    });
    
    runscss({
      input   : 'docs/scss/_baseweb.scss',
      output  : 'docs/css/baseweb.css',
      paths   : ['docs/scss/', 'src/scss/'],
      style   : 'expanded'
    });
    
    runscss({
      input   : 'docs/scss/_baseweb.scss',
      output  : 'docs/css/baseweb.min.css',
      paths   : ['docs/scss/', 'src/scss/'],
      style   : 'compressed'
    });
    
  });
  
  // Build Docs
  desc('Build documentation');
  task('docs', {async: true}, function() {
    runmustache({
      dir : 'docs/'
    });
  });
  
  // Build SassDocs
  desc('Build SassDocs');
  task('sassdocs', {async: true}, function() {
    
    sassdoc('src/scss/', { verbose: true })
    .then(function () {
      console.log('Your documentation has been generated!');
    }, function (err) {
      console.error(err);
    });
    
  });
  
  // Build Images
  desc('Optimizes global images');
  task('img', {async: true}, function() {
      
    var imagemin = new Imagemin()
      .src('docs/img/raw/*.{gif,jpg,png,svg}')
      .dest('docs/img/')
      .use(Imagemin.jpegtran({ progressive: true }));
    
    imagemin.run(function (err, files) {
      if (err) {
        throw err;
      }
      u.print('√ Global Images optimized: docs/img/', 'green');
    });
          
  });
  
});
