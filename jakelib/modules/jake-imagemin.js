var fs = require('fs');
var u = require('./node-utility');
var Imagemin = require('imagemin');

module.exports = function runimagemin(o) {
  
  var imagemin = new Imagemin()
      .src(o.input)
      .dest(o.output)
      .use(Imagemin.jpegtran({ progressive: true }));
  
  imagemin.run(function (err, files) {
    if (err) {
      throw err;
    }
    u.print('√ imagemin: ' + o.dest, 'green');
  });
  
}
