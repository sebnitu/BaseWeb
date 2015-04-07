module.exports = {

  build: [{
    key: 'scss',
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
      input   : 'docs/scss/_baseweb.scss',
      output  : 'docs/css/baseweb.css',
      paths   : ['docs/scss/', 'src/scss/'],
      style   : 'expanded'
    }, {
      input   : 'docs/scss/_baseweb.scss',
      output  : 'docs/css/baseweb.min.css',
      paths   : ['docs/scss/', 'src/scss/'],
      style   : 'compressed'
    }]
  }, {
    key: 'js',
    desc: 'Compiles and minifies JS',
    options: [{
      path : 'docs/js/',
      input : [
        'jquery.smoothState.js',
        'prism.js',
        'jquery.function.js',
        'jquery.docready.js'
      ],
      output : 'docs/js/scripts.min.js'
    }]
  }, {
    key: 'img',
    desc: 'Optimizes images',
    options: [{
      src : 'docs/img/raw/*.{gif,jpg,png,svg}',
      dest : 'docs/img/'
    }]
  }, {
    key: 'docs',
    desc: 'Build documentation',
    module: 'mustache',
    options: [{
      dir : 'docs/'
    }]
  }, {
    key: 'examples',
    desc: 'Build examples',
    module: 'mustache',
    options: [{
      dir : 'examples/'
    }]
  }],
  
  watch: [{
    key: 'scss',
    files: [
      'src/scss/',
      'docs/scss/'
    ]
  }, {
    key: 'js',
    files: ['docs/js/'],
    ignore: ['docs/js/scripts.min.js']
  }, {
    key: 'docs',
    files: [
      'docs/templates/layouts/',
      'docs/templates/pages/',
      'docs/templates/partials/'
    ]
  }, {
    key: 'examples',
    files: [
      'examples/templates/layouts/',
      'examples/templates/pages/',
      'examples/templates/partials/'
    ]
  }]

};
