var fs = require('fs');
var u = require('./node-utility');
var Imagemin = require('imagemin');

module.exports = function runimagemin(o) {
  
  var imagemin = new Imagemin()
      .src(o.src)
      .dest(o.dest)
      .use(Imagemin.jpegtran({ progressive: true }));
  
  imagemin.run(function (err, files) {
    if (err) {
      throw err;
    }
    u.print('√ Global Images optimized: docs/img/', 'green');
  });
  
}
