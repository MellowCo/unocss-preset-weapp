const UnoCSS = require('unocss/webpack').default
const transformWeClass = require('unplugin-transform-class/webpack')

module.exports = {
  configureWebpack: {
    plugins: [
      UnoCSS(),
      transformWeClass(),
    ],
  },
}
