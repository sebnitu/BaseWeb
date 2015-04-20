var fs = require('fs');

module.exports = {
  
  /**
   * Colorize
   */
  colorize : function(str, color) {
    var colors =
      { 'blue': '34m'
      , 'cyan': '36m'
      , 'green': '32m'
      , 'magenta': '35m'
      , 'red': '31m'
      , 'yellow': '33m'
      };
    return colors[color] ? '\033[' + colors[color] + str + '\033[39m' : str;
  },
  
  /**
   * Notice
   */
  notice : function(msg) {
    var notice = ""
      + "//////////////////////////////////////////////////////////////////////\n"
      + "// " + msg + "  \n"
      + "//////////////////////////////////////////////////////////////////////";
    return notice;
  },
  
  /**
   * Print
   */
  print : function(str, color) {
    console.log(this.colorize(str, color));
  },
  
  /**
   * Notice
   */
  printNotice : function(str, color) {
    console.log(this.colorize(this.notice(str), color));
  },
  
  /**
   * Extend
   */
  extend : function() {
    // copy reference to target object
    var target = arguments[0] || {}, i = 1, length = arguments.length, deep = false, options;
    
    // Handle a deep copy situation
    if ( typeof target === "boolean" ) {
      deep = target;
      target = arguments[1] || {};
      // skip the boolean and the target
      i = 2;
    }
    
    // Handle case when target is a string or something (possible in deep copy)
    if ( typeof target !== "object" && !jQuery.isFunction(target) )
      target = {};
    
    // extend jQuery itself if only one argument is passed
    if ( length == i ) {
      target = this;
      --i;
    }
    
    for ( ; i < length; i++ )
      // Only deal with non-null/undefined values
      if ( (options = arguments[ i ]) != null )
        // Extend the base object
        for ( var name in options ) {
          var src = target[ name ], copy = options[ name ];
    
          // Prevent never-ending loop
          if ( target === copy )
            continue;
    
          // Recurse if we're merging object values
          if ( deep && copy && typeof copy === "object" && !copy.nodeType )
            target[ name ] = jQuery.extend( deep
              // Never move original objects, clone them
            ,   src || ( copy.length != null ? [ ] : { } )
            ,   copy );
    
          // Don't bring in undefined values
          else if ( copy !== undefined )
            target[ name ] = copy;
    
        }
    
    // Return the modified object
    return target;
  },
  
  /**
   * Asynchronous For Each
   */
  asyncForEach : function(array, fn, callback) {
    array = array.slice(0);
    function processOne() {
      var item = array.pop();
      fn(item, function(result) {
        if(array.length > 0) {
          processOne();
        } else {
          callback();
        }
      });
    }
    if(array.length > 0) {
      processOne();
    } else {
      callback();
    }
  },
  
  /**
   * Get JSON
   */
  getjson : function(files, callback) {
    // When no files are passed, these are parsed by default
    var defaultFiles = 'package.json';
    var json;
    
    // Let's us pass a file or callback first
    if (typeof files === 'function') {
      callback = files;
      files = defaultFiles;
    }
    
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
      this.asyncForEach(files, function(file, callback) {
        
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
                json = this.extend(a, b);
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
  },
  
  /**
   * Get JSON Synchronously
   */
  getjsonsync : function(files) {
    // When no files are passed, these are parsed by default
    var defaultFiles = 'package.json';
    
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
            json = this.extend(a, b);
          }
          
        } else {
          u.print('Sorry, but ' + file + ' does not exist!', 'yellow');
        }
        
      });
      
      return json;
            
    }
  }
  
}
