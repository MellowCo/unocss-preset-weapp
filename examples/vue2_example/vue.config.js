const UnoCSS = require('unocss/webpack').default
const transformWeClass = require('unplugin-transform-we-class/webpack')

module.exports = {
  configureWebpack: {
    plugins: [
      UnoCSS(),
      transformWeClass(),
    ],
  },
}
