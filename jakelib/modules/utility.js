var utility = {
    
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
  
  notice : function(msg) {
    var notice = ""
      + "//////////////////////////////////////////////////////////////////////\n"
      + "// " + msg + "  \n"
      + "//////////////////////////////////////////////////////////////////////";
    return notice;
  },
  
  print : function(str, color) {
    console.log(this.colorize(str, color));
  },
  
  print_notice : function(str, color) {
    console.log(this.colorize(this.notice(str), color));
  }
  
}

module.exports = utility;
