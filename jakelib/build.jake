var getjson = require('./modules/getjson');

namespace('build', function() {
  
  desc('Compiles and minifies BaseWeb');
  task('baseweb', {async: true}, function() {
    getjson('config.json', function(config) {
      var options = { 
            input : config.paths.less + 'baseweb.less',
            output : [config.paths.css + 'baseweb.css', config.paths.css + 'baseweb.min.css'],
            paths : config.paths.less
          }
        , lessTask = jake.Task.lessc
        ;
      lessTask.reenable(true);
      lessTask.invoke.apply(lessTask, [options]);
    });
  });

  desc('Build documentation');
  task('docs', {async: true}, function() {
    getjson('config.json', function(config) {
      var options = { root: 'docs/' }
        , mustacheTask = jake.Task.mustache
        ;
      mustacheTask.reenable(true);
      mustacheTask.invoke.apply(mustacheTask, [options]);
    });
  });
  
  desc('Build test suite');
  task('tests', {async: true}, function() {
    getjson('config.json', function(config) {
      var options = { 
            root : 'tests/',
            customLayouts : { 'test.mustache' : 'test.mustache' }
          }
        , mustacheTask = jake.Task.mustache
        ;
      mustacheTask.reenable(true);
      mustacheTask.invoke.apply(mustacheTask, [options]);
    });
  });
});
