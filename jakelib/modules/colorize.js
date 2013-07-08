function colorize(str, color) {
  var colors =
    { 'blue': '34m'
    , 'cyan': '36m'
    , 'green': '32m'
    , 'magenta': '35m'
    , 'red': '31m'
    , 'yellow': '33m'
    };
  return colors[color] ? '\033[' + colors[color] + str + '\033[39m' : str;
}

module.exports = colorize;
