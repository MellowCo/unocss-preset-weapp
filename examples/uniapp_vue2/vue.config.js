const UnoCSS = require('unocss/webpack').default
const transformWeClass = require('unplugin-transform-we-class/webpack')

module.exports = {
  configureWebpack: {
    plugins: [
      UnoCSS(),
      transformWeClass(),
    ],
  },
  chainWebpack(config) {
    config.module.rule('vue').uses.delete('cache-loader')
    config.module.rule('tsx').uses.delete('cache-loader')
    config.merge({
      cache: false,
    })
  },
}
