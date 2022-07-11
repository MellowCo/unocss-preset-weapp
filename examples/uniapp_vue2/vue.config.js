const UnoCSS = require('unocss/webpack').default
// const presetWxapp = require('unocss-preset-wxapp').default
const presetWxapp = require('../../dist/index.cjs').default
const transformWxClass = require('unplugin-transform-wx-class/webpack')

module.exports = {
  configureWebpack: {
    plugins: [
      UnoCSS({
        presets: [
          presetWxapp(),
        ],
        shortcuts: [
          {
            'border-base': 'border border-gray-500_10',
            'center': 'flex justify-center items-center',
          },
        ]
      }),
      transformWxClass(),
    ],
  },
}
