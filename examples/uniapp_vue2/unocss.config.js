import presetWeapp from 'unocss-preset-weapp'
import { defineConfig } from 'unocss'
import { transformerAttributify, transformerClass } from 'unocss-preset-weapp/transformer'

export default defineConfig({
  presets: [
    // https://github.com/MellowCo/unocss-preset-weapp
    presetWeapp({
      // h5兼容
      platform: 'uniapp',
      isH5: process.env.UNI_PLATFORM === 'h5',
    }),
  ],
  shortcuts: [
    {
      'border-base': 'border border-gray-500_10',
      'center': 'flex justify-center items-center',
    },
  ],
  transformers: [
    // options https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerAttributify
    transformerAttributify(),
    // options https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerClass
    transformerClass(),
  ],
})
