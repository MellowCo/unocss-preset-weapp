// 兼容 app
// 解决 App平台 v3 模式暂不支持在 js 文件中引用"uno.css" 请改在 style 内引用
// const UnoCSS = require('unocss-webpack-uniapp2').default

// 请使用 @unocss/webpack 0.45.8 后版本
// 0.45.8 之前版本 会出现无法及时生成`css`代码，导致打包时没有`css`代码
const UnoCSS = require('@unocss/webpack').default

module.exports = {
  configureWebpack: {
    plugins: [
      // https://github.com/unocss/unocss
      UnoCSS(),
    ],
  },
}
