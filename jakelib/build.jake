var getjson = require('./modules/getjson');

/**
 * The Build Tasks
 */
namespace('build', function() {
  
  // Build BaseWeb from LESS
  desc('Compiles and minifies BaseWeb using LESS');
  task('less', {async: true}, function() {
    getjson('package.json', function(config) {
      var options = { 
        input : config.paths.less + 'baseweb.less',
        output : [config.paths.css + 'baseweb.css', config.paths.css + 'baseweb.min.css'],
        paths : config.paths.less
      };
      var lessTask = jake.Task.lessc;
      lessTask.reenable(true);
      lessTask.invoke.apply(lessTask, [options]);
    });
  });
  
  // Build BaseWeb from SASS
  desc('Compiles and minifies BaseWeb using SASS');
  task('scss', {async: true}, function() {
    getjson('package.json', function(config) {
      var options = { 
        input : config.paths.scss + '_baseweb.scss',
        output : [config.paths.css + 'baseweb.css', config.paths.css + 'baseweb.min.css'],
        paths : config.paths.scss
      };
      var sassTask = jake.Task.sass;
      sassTask.reenable(true);
      sassTask.invoke.apply(sassTask, [options]);
    });
  });
  
  // Build JS
  desc('Compiles and minifies JavaScript');
  task('js', {async: true}, function() {
    getjson('package.json', function(config) {
      var options = { 
        input : config.js.input,
        output : config.js.output,
        path : config.paths.js
      };
      var uglifyjsTask = jake.Task.uglifyjs;
      uglifyjsTask.reenable(true);
      uglifyjsTask.invoke.apply(uglifyjsTask, [options]);
    });
  });
  
  // Optimize Images
  desc('Optimize images');
  task('img', {async: true}, function() {
    getjson('package.json', function(config) {
      var options = { 
        input : config.paths.img + 'raw/',
        output : config.paths.img,
        paths : config.paths.img
      };
      var imageminTask = jake.Task.imagemin;
      imageminTask.reenable(true);
      imageminTask.invoke.apply(imageminTask, [options]);
    });
  });
  
  // Build docs
  desc('Build documentation pages');
  task('docs', {async: true}, function() {
    getjson('package.json', function(config) {
      var options = { dir: 'docs/' };
      var mustacheTask = jake.Task.mustache;
      mustacheTask.reenable(true);
      mustacheTask.invoke.apply(mustacheTask, [options]);
    });
  });
  
  // Build examples
  desc('Build example pages');
  task('examples', {async: true}, function() {
    getjson('package.json', function(config) {
      var options = { dir : 'examples/' };
      var mustacheTask = jake.Task.mustache;
      mustacheTask.reenable(true);
      mustacheTask.invoke.apply(mustacheTask, [options]);
    });
  });
  
  // Build devlog
  desc('Build development log pages');
  task('devlog', {async: true}, function() {
    getjson('package.json', function(config) {
      var options = { dir : 'devlog/' };
      var mustacheTask = jake.Task.mustache;
      mustacheTask.reenable(true);
      mustacheTask.invoke.apply(mustacheTask, [options]);
    });
  });
  
});

/*
var getjsonsync = require('./modules/getjsonsync');
var runless = require('./modules/runless');
var runuglifyjs = require('./modules/runuglifyjs');
var Imagemin = require('imagemin');
var u = require('./modules/utility');

// The Build Tasks
namespace('build', function() {
  
  var settings = getjsonsync('settings.json');
  
  // Global Image Optimization
  desc('Optimizes global images');
  task('img', {async: true}, function() {
    
    settings.global.imgs.paths.forEach(function (path, index, array) {
      
      var imagemin = new Imagemin()
        .src(path + 'raw/*.{gif,jpg,png,svg}')
        .dest(path)
        .use(Imagemin.jpegtran({ progressive: true }));
      
      imagemin.run(function (err, files) {
        if (err) {
          throw err;
        }
        u.print('√ Global Images optimized: ' + path, 'green');
      });
      
    });
    
  });  
  
  // Theme Specific Build Scripts
  settings.themes.forEach(function (theme, index, array) {
    
    index = index + 1;
    
    // Optimize Images Tasks
    desc('Optimizes images for theme ' + index);
    task('img_' + index, {async: true}, function() {
            
      var imagemin = new Imagemin()
        .src(theme + 'assets/img/raw/*.{gif,jpg,png,svg}')
        .dest(theme + 'assets/img/')
        .use(Imagemin.jpegtran({ progressive: true }));
      
      imagemin.run(function (err, files) {
        if (err) {
          throw err;
        }
        u.print('√ Theme ' + index + ' Images optimized: ' + theme + 'assets/img/', 'green');
      });
      
    });
    
    // Build CSS Tasks
    desc('Compiles and minifies CSS for theme ' + index);
    task('css_' + index, {async: true}, function() {
            
      runless({
        input : theme + 'assets/less/bootstrap.less',
        output : theme + 'assets/css/baseweb.css',
        options : { compress: false }
      });
      
      runless({
        input : theme + 'assets/less/bootstrap.less',
        output : theme + 'assets/css/baseweb.min.css',
        options : { compress: true }
      });
      
    });
    
    // Build JS Tasks
    desc('Compiles and minifies JS for theme ' + index);
    task('js_' + index, {async: true}, function() {
            
      runuglifyjs({
        path : settings.global.js.path,
        input : settings.global.js.files,
        output : theme + 'assets/js/scripts.min.js'
      });
      
    });
    
  });
  
});
*/
