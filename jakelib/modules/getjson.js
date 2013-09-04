var fs = require('fs');
var extend = require('./extend');
var asyncForEach = require('./asyncForEach');
var u = require('./utility');

// When no files are passed, these are parsed by default
var defaultFiles = [ 'package.json' ];

function getJSON(files, callback) {
  
  // Let's us pass a file or callback first
  if (typeof files === 'function') {
    callback = files;
    files = defaultFiles;
  }
  
  var json;
  
  // If `files` is a string, just parse it and send it back
  if (typeof files === 'string') {
  
    fs.readFile(files, 'utf8', function(err, data) {
      if (err) throw new Error(u.colorize(err, 'red'));
      json = JSON.parse(data);
      callback(json);
    });
  
  // Otherwise, it's an array and we need to loop through it
  } else {
  
    var a, b;
    
    // Lets us loop through files asyncronously
    asyncForEach(files, function(file, callback) {
      
      // Check if the files exists
      fs.exists(file, function(exists) {
        if (exists) {
        
          fs.readFile(file, 'utf8', function(err, data) {
            if (err) throw new Error(u.colorize(err, 'red'));
            if (a != 'undefined') {
              b = a;
            }
            a = JSON.parse(data);
            if (b != 'undefined') {
              json = extend(a, b);
            }
            callback();
          });
          
        } else {
          u.print('Sorry, but ' + file + ' does not exist!', 'yellow');
          callback();
        }
      });
      
    }, function() {
      
      // Called after our loop has finished
      callback(json);
      
    });
    
  }
}

module.exports = getJSON;
