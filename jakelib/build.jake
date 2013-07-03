var getjson = require('./utilities/getjson');

namespace('build', function() {
  
  desc('Compiles and minifies BaseWeb');
  task('baseweb', {async: true}, function() {
    getjson('config.json', function(config) {
      var input = config.paths.less + 'baseweb.less'
        , output = [config.paths.css + 'baseweb.css', config.paths.css + 'baseweb.min.css']
        , lessTask = jake.Task.lessc
        ;
      lessTask.reenable(true);
      lessTask.invoke.apply(lessTask, [input, output, {paths: config.paths.less}]);
    });
  });

  desc('Build documentation');
  task('docs', {async: true}, function() {
    getjson('config.json', function(config) {
      var input = config.paths.docs
        , output = config.paths.docs
        , mustacheTask = jake.Task.mustache
        ;
      mustacheTask.reenable(true);
      mustacheTask.invoke.apply(mustacheTask, [input, output]);
    });
  });
  
  desc('Build test suite');
  task('tests', {async: true}, function() {
    getjson('config.json', function(config) {
      var input = config.paths.tests
        , output = config.paths.tests
        , mustacheTask = jake.Task.mustache
        ;
      mustacheTask.reenable(true);
      mustacheTask.invoke.apply(mustacheTask, [input, output]);
    });
  });
});
