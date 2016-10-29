module.exports = {

  // Build Tasks
  build: [{
    // SCSS Build Task
    task: 'scss',
    desc: 'Compiles and minifies SCSS',
    options: [{
      input   : 'src/scss/_baseweb.scss',
      output  : 'src/css/baseweb.css',
      paths   : ['src/scss/'],
      style   : 'expanded'
    }, {
      input   : 'src/scss/_baseweb.scss',
      output  : 'src/css/baseweb.min.css',
      paths   : ['src/scss/'],
      style   : 'compressed'
    }, {
      input   : 'docs/assets/scss/_baseweb.scss',
      output  : 'docs/assets/css/baseweb.css',
      paths   : ['docs/assets/scss/', 'src/scss/'],
      style   : 'expanded'
    }, {
      input   : 'docs/assets/scss/_baseweb.scss',
      output  : 'docs/assets/css/baseweb.min.css',
      paths   : ['docs/assets/scss/', 'src/scss/'],
      style   : 'compressed'
    }]
  }, {
    // JS Build Task
    task: 'js',
    desc: 'Compiles and minifies JS',
    options: [{
      input : [
        'docs/assets/js/jquery.sticky.js',
        'docs/assets/js/jquery.function.js',
        'docs/assets/js/jquery.docready.js'
      ],
      output : 'docs/assets/js/scripts.min.js'
    }]
  }],

  // Watch Tasks
  watch: [{
    // SCSS Watch Task
    task: 'scss',
    files: [
      'src/scss/',
      'docs/assets/scss/'
    ]
  }, {
    // JS Watch Task
    task: 'js',
    files: ['docs/assets/js/'],
    ignore: ['docs/assets/js/scripts.min.js']
  }]

};
