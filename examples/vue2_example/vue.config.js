const UnoCSS = require('unocss/webpack').default

module.exports = {
  configureWebpack: {
    plugins: [
      UnoCSS(),
    ],
  },
}
