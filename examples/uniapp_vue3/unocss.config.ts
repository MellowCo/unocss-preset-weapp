import presetWeapp from 'unocss-preset-weapp'
import { defaultAttributes, transformerAttributify, transformerClass } from 'unocss-preset-weapp/transformer'

export default {
  presets: [
    // https://github.com/MellowCo/unocss-preset-weapp
    presetWeapp({
      preflight: false,
    }),
  ],
  shortcuts: [
    {
      'border-base': 'border border-gray-500_10',
      'center': 'flex justify-center items-center',
    },
  ],
  transformers: [
    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerAttributify
    transformerAttributify({
      attributes: [...defaultAttributes, 'active:bg'],
    }),

    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerClass
    transformerClass(),
  ],
}
