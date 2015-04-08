var u = require('./modules/node-utility');

// Initiate our dependency variables
var modules = {};
var dependencies = u.getjsonsync('package.json').devDependencies;

// Include our module dependencies
if ('node-sass' in dependencies) {
  var runscss = require('./modules/jake-scss');
  modules.scss = runscss;
}
if ('less' in dependencies) {
  var runless = require('./modules/jake-less');
  modules.less = runless;
}
if ('uglify-js' in dependencies) {
  var runuglifyjs = require('./modules/jake-uglifyjs');
  modules.js = runuglifyjs;
}
if ('mustache' in dependencies) {
  var runmustache = require('./modules/jake-mustache');
  modules.mustache = runmustache;
}
if ('imagemin' in dependencies) {
  var runimagemin = require('./modules/jake-imagemin');
  modules.img = runimagemin;
}

// Get our configuration settings
var config = require('../jake-config');

// Create our build tasks under the build namespace
if ('build' in config) {
  
  // Build everything task
  desc('Build everything');
  task('build', {async: true}, function() {
    u.printNotice('Building everything', 'yellow');
    config.build.forEach(function (item, i, a) {
      jake.Task['build:' + item.task].execute();
    });
  });
  
  // Our build namespace
  namespace('build', function() {
    
    config.build.forEach(function (item, i, a) {
                    
      desc(item.desc);
      task(item.task, {async: true}, function() {

        item.options.forEach(function(option, i, a) {
          if ('module' in item) {
            modules[item.module](option);
          } else {
            modules[item.task](option);
          }
        });

      });
      
    });
    
  });
  
}
