import presetWeapp from 'unocss-preset-weapp'
import {transformerClass} from 'unocss-preset-weapp/transformer';
import {defineConfig} from 'unocss';

export default defineConfig({
  presets: [
    presetWeapp({
      // h5兼容
      isH5: process.env.TARO_ENV === 'h5',
      platform: 'taro',
    }),
  ],
  shortcuts: [
    {
      'border-base': 'border border-gray-500/10',
      'center': 'flex justify-center items-center',
    },
  ],
  transformers:[
    transformerClass()
  ]
})
