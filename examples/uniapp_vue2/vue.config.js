const UnoCSS = require('unocss/webpack').default
const transformWxClass = require('unplugin-transform-wx-class/webpack')

// const presetWxapp = require('unocss-preset-wxapp').default

module.exports = {
  configureWebpack: {
    plugins: [
      UnoCSS(),
      transformWxClass(),
    ],
  },
}
