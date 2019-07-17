export default {
  styles: {
    src: 'src/scss/baseweb.scss',
    dest: 'dist/css/',
    output: 'baseweb',
    watch: ['src/scss/**/*'],
    search: [
      'src/scss/',
      'node_modules/'
    ],
    vendors: []
  },

  scripts: {
    src: 'src/js/baseweb.js',
    dest: 'dist/js/',
    output: 'scripts',
    watch: ['src/js/**/*'],
    search: [
      'src/js/',
      'node_modules/'
    ],
    vendors: []
  }
}
