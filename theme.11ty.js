const path = require('path')
const Sass = require('sass')

module.exports = class SassTemplate {
  data() {
    return { permalink: '/styles.css' }
  }

  render(data) {
    return Sass.renderSync({
      file: path.join(__dirname, './src/sass/styles.scss'),
      includePaths: [path.join(__dirname, './node_modules')],
      outputStyle: 'compressed'
    }).css
  }
}