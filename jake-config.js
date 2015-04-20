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
    task: 'js',
    desc: 'Compiles and minifies JS',
    options: [{
      input : [
        'docs/js/jquery.smoothState.js',
        'docs/js/prism.js',
        'docs/js/jquery.function.js',
        'docs/js/jquery.docready.js'
      ],
      output : 'docs/js/scripts.min.js'
    }]
  }, {
    task: 'img',
    desc: 'Optimizes images',
    options: [{
      input : 'docs/img/raw/*.{gif,jpg,png,svg}',
      output : 'docs/img/'
    }]
  }, {
    task: 'docs',
    desc: 'Build documentation',
    module: 'mustache',
    options: [{
      dir : 'docs/'
    }]
  }, {
    task: 'examples',
    desc: 'Build examples',
    module: 'mustache',
    options: [{
      dir : 'examples/'
    }]
  }],
  
  // Watch Tasks
  watch: [{
    task: 'scss',
    files: [
      'src/scss/',
      'docs/scss/'
    ]
  }, {
    task: 'js',
    files: ['docs/js/'],
    ignore: ['docs/js/scripts.min.js']
  }, {
    task: 'docs',
    files: [
      'docs/templates/layouts/',
      'docs/templates/pages/',
      'docs/templates/partials/'
    ]
  }, {
    task: 'examples',
    files: [
      'examples/templates/layouts/',
      'examples/templates/pages/',
      'examples/templates/partials/'
    ]
  }]

};
