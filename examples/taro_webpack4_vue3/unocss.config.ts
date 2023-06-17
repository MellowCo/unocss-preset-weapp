import presetWeapp from 'unocss-preset-weapp'
import { transformerClass, extractorAttributify } from 'unocss-preset-weapp/transformer';
import { defineConfig, presetIcons } from 'unocss'

const {presetWeappAttributify,transformerAttributify} = extractorAttributify()

export default defineConfig({
  presets: [
    // https://github.com/MellowCo/unocss-preset-weapp
    presetWeapp({
      isH5: process.env.TARO_ENV === 'h5',
      platform: 'taro',
    }),
    presetWeappAttributify(),
    presetIcons()
  ],
  shortcuts: [
    {
      'border-base': 'border border-gray-500_10',
      'center': 'flex justify-center items-center',
    },
  ],
  transformers: [
    transformerAttributify(),
    transformerClass()
  ]
})
