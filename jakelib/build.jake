var u = require('./modules/node-utility');
var runscss =     require('./modules/jake-scss');
var runuglifyjs = require('./modules/jake-uglifyjs');
var runmustache = require('./modules/jake-mustache');
var runimagemin = require('./modules/jake-imagemin');

namespace('build', function() {
  
  // var settings = u.getjsonsync('settings.json');
  
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
  
  // Build JS Tasks
  desc('Compiles and minifies JS');
  task('js', {async: true}, function() {
          
    runuglifyjs({
      path : 'docs/js/',
      input : ['jquery.smoothState.js', 'prism.js', 'jquery.function.js', 'jquery.docready.js'],
      output : 'docs/js/scripts.min.js'
    });
    
  });
  
  // Build Docs
  desc('Build documentation');
  task('docs', {async: true}, function() {
    runmustache({
      dir : 'docs/'
    });
  });
  
  // Build Examples
  desc('Build examples');
  task('examples', {async: true}, function() {
    runmustache({
      dir : 'examples/'
    });
  });
  
  // Build Images
  desc('Optimizes global images');
  task('img', {async: true}, function() {
    runimagemin({
      src : 'docs/img/raw/*.{gif,jpg,png,svg}',
      dest : 'docs/img/'
    });
  });
  
});
