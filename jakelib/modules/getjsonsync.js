var fs = require('fs');
var extend = require('./extend');
var colorize = require('./colorize');

// When no files are passed, these are parsed by default
var defaultFiles = [ 'package.json', 'config.json' ];

function getJSONSync(files) {
	// Let's us pass a file or callback first
  if (typeof files === 'undefined') {
    files = defaultFiles;
  }
  
  var json;

  // If `files` is a string, just parse it and send it back
  if (typeof files === 'string') {
  	
    var data = fs.readFileSync(files, 'utf8');
    json = JSON.parse(data);
    return json;
  
  // Otherwise, it's an array and we need to loop through it
  } else {
  
    var a, b;
        
    // Lets us loop through files asyncronously
    files.forEach(function(file) {
      
    	// Check if the files exists
    	var exists = fs.existsSync(file);
      if (exists) {
      
        data = fs.readFileSync(file, 'utf8');
        if (a != 'undefined') {
          b = a;
        }
        a = JSON.parse(data);
        if (b != 'undefined') {
          json = extend(a, b);
        }
        
      } else {
        console.log(colorize('Sorry, but ' + file + ' does not exist!', 'yellow'));
      }
      
    });
    
    return json;
          
  }
}

module.exports = getJSONSync;
