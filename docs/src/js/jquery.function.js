/**
 * jquery.function.js
 * A place to store all your project specific JavaScript functions
 *
 * @author Sebastian Nitu
 * @url https://github.com/sebnitu/BaseWeb
 * @url http://sebnitu.com
 */

// Source: http://stackoverflow.com/questions/1740700/how-to-get-hex-color-value-rather-than-rgb-value
var hexDigits = new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f");

function hex(x) {
  return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
}

//Function to convert hex format to a rgb color
function rgb2hex(rgb) {
  rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  // I removed the `'#' +` from the return
  return hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

// Source: https://24ways.org/2010/calculating-color-contrast
function getContrastYIQ(hexcolor) {
  var r = parseInt(hexcolor.substr(0,2),16);
  var g = parseInt(hexcolor.substr(2,2),16);
  var b = parseInt(hexcolor.substr(4,2),16);
  var yiq = ((r*299)+(g*587)+(b*114))/1000;
  // Range is between 0 and 255. 128 is the 50% mark. My pref is 170 (2/3 of 255)
  return (yiq >= 170) ? 'text-dark' : '';
}
