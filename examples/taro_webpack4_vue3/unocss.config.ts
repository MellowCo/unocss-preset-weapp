import presetWeapp from 'unocss-preset-weapp'
import { transformerClass , transformerAttributify } from 'unocss-preset-weapp/transformer';
import { defineConfig } from 'unocss'

export default defineConfig({
  presets: [
    // https://github.com/MellowCo/unocss-preset-weapp
    presetWeapp({
      isH5: process.env.TARO_ENV === 'h5',
      platform: 'taro',
    }),
  ],
  shortcuts: [
    {
      'border-base': 'border border-gray-500_10',
      'center': 'flex justify-center items-center',
    },
  ],
  transformers:[
    transformerAttributify(),
    transformerClass()
  ]
})
