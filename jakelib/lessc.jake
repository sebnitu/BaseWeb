var fs = require('fs');
var less = require('less');
var colorize = require('./modules/colorize');
var extend = require('./modules/extend');

var parseLESS = function(o, callback) {
  fs.readFile(o.input, 'utf8', function(err, data) {
    if (err) throw new Error(colorize(err, 'red'));
    var parser = new(less.Parser)(o);
    parser.parse(data, function (err, tree) {
      if (err) {
        less.writeError(err, o);
        return;
      } else {
        callback(tree);
      }
    });
  });
};

var writeCSS = function(tree, output, settings) {
  var css = tree.toCSS(settings);
  fs.writeFile(output, css, 'utf8', function(err) {
    if (err) throw new Error(colorize(err, 'red'));
    console.log(colorize('√ lessc: wrote ' + output, 'green'));
  });
};

desc('Parse a LESS file and write CSS to an output');
task('lessc', {async: true}, function(options) {
  
  // Default Options
  var defaultOptions = 
    { input: false
    , output: false
    , depends: false
    , compress: false
    , yuicompress: false
    , max_line_len: -1
    , optimization: 1
    , silent: false
    , verbose: false
    , lint: true
    , paths: []
    , color: true
    , strictImports: false
    , rootpath: ''
    , relativeUrls: false
    , ieCompat: true
    , strictMath: false
    , strictUnits: false 
    };
  
  // Extend passed options with the defaults
  var o = extend(defaultOptions, options);
  
  // Parse the LESS files
  parseLESS(o, function(tree) {
    try {
      if (typeof o.output === 'string') {
        writeCSS(tree, o.output);
      } else {
        writeCSS(tree, o.output[0]);
        writeCSS(tree, o.output[1], {compress: true});
      }
    } catch (err) {
      less.writeError(err, o);
      return;
    }
  });
});
