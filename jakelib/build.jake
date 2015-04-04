var u = require('./modules/node-utility');

var runscss =     require('./modules/jake-scss');
var runuglifyjs = require('./modules/jake-uglifyjs');
var runmustache = require('./modules/jake-mustache');
var runimagemin = require('./modules/jake-imagemin');

var config = require('../jakefile');

if ('build' in config) {
  
  namespace('build', function() {
    
    config.build.forEach(function (item, i, a) {
                    
      desc(item.desc);
      task(item.key, {async: true}, function() {

        item.options.forEach(function(option, i, a) {
            
          var myModules = {
              scss : runscss,
              js : runuglifyjs,
              img : runimagemin,
              mustache : runmustache
          };
          
          if ('module' in item) {
            myModules[item.module](option);
          } else {
            myModules[item.key](option);
          }

        });

      });
      
    });
    
  });
  
}
