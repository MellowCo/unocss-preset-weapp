const UnoCSS = require('unocss-webpack-uniapp2').default
const transformWeClass = require('unplugin-transform-we-class/webpack')
const { defaultAttributes, defaultIgnoreNonValuedAttributes, presetAttributifyWechat } = require('unplugin-unocss-attributify-wechat/webpack')

module.exports = {
  configureWebpack: {
    plugins: [
      // https://github.com/unocss/unocss
      UnoCSS(),
      // https://github.com/MellowCo/unplugin-unocss-attributify-wechat
      presetAttributifyWechat({
        attributes: [...defaultAttributes, 'my-attr'],
        ignoreNonValuedAttributes: [...defaultIgnoreNonValuedAttributes, 'my-ignore'],
        nonValuedAttribute: true,
        prefix: 'li-',
        prefixedOnly: false,
      }),
      // https://github.com/MellowCo/unplugin-transform-we-class
      transformWeClass(),
    ],
  },
}
