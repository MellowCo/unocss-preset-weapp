const UnoCSS = require('unocss-webpack-uniapp2').default
const transformWeClass = require('unplugin-transform-we-class/webpack')

module.exports = {
  configureWebpack: {
    plugins: [
      UnoCSS({
        cssMode: 'style'
      }),
      transformWeClass(),
    ],
  }
}
