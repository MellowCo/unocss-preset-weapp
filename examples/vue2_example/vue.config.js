const UnoCSS = require('unocss/webpack').default
const transformWxClass = require('unplugin-transform-wx-class/webpack')

module.exports = {
  configureWebpack: {
    plugins: [
      UnoCSS(),
      transformWxClass(),
    ],
  },
}
