module.exports = {

  // Build Tasks
  build: [{
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
    task: 'js',
    desc: 'Compiles and minifies JS',
    options: [{
      input : [
        'docs/assets/js/jquery.function.js',
        'docs/assets/js/jquery.docready.js'
      ],
      output : 'docs/assets/js/scripts.min.js'
    }]
  }, {
    task: 'img',
    desc: 'Optimizes images',
    options: [{
      input : 'docs/assets/img/raw/*.{gif,jpg,png,svg}',
      output : 'docs/assets/img/'
    }]
  }],

  // Watch Tasks
  watch: [{
    task: 'scss',
    files: [
      'src/scss/',
      'docs/assets/scss/'
    ]
  }, {
    task: 'js',
    files: ['docs/assets/js/'],
    ignore: ['docs/assets/js/scripts.min.js']
  }]

};
