var getjson = require('./modules/getjson');

namespace('build', function() {
  
  // Build BaseWeb from LESS
  desc('Compiles and minifies BaseWeb using LESS');
  task('baseweb-less', {async: true}, function() {
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
  task('baseweb-sass', {async: true}, function() {
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
        input : config.paths.js + 'baseweb.js',
        output : config.paths.js + 'baseweb.min.js',
        paths : config.paths.js
      };
      var uglifyjsTask = jake.Task.uglifyjs;
      uglifyjsTask.reenable(true);
      uglifyjsTask.invoke.apply(uglifyjsTask, [options]);
    });
  });
  
  // Build docs
  desc('Build documentation');
  task('docs', {async: true}, function() {
    getjson('package.json', function(config) {
      var options = { dir: 'docs/' };
      var mustacheTask = jake.Task.mustache;
      mustacheTask.reenable(true);
      mustacheTask.invoke.apply(mustacheTask, [options]);
    });
  });
  
  // Build tests
  desc('Build test suite');
  task('tests', {async: true}, function() {
    getjson('package.json', function(config) {
      var options = { dir : 'tests/' };
      var mustacheTask = jake.Task.mustache;
      mustacheTask.reenable(true);
      mustacheTask.invoke.apply(mustacheTask, [options]);
    });
  });
});
