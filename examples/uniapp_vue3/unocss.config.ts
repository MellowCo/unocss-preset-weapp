import presetWeapp from 'unocss-preset-weapp'
import { extractorAttributify, transformerClass } from 'unocss-preset-weapp/transformer'
import { presetIcons } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'

const { presetWeappAttributify, transformerAttributify } = extractorAttributify()

export default {
  presets: [
    // https://github.com/MellowCo/unocss-preset-weapp
    presetWeapp(),
    // attributify autocomplete
    presetWeappAttributify(),
    presetIcons(),
  ],
  shortcuts: [
    {
      'border-base': 'border border-gray-500_10',
      'center': 'flex justify-center items-center',
    },
  ],
  transformers: [
    transformerDirectives({
      enforce: 'pre',
    }),

    transformerVariantGroup(),

    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerAttributify
    transformerAttributify(),

    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerClass
    transformerClass(),
  ],
  theme: {
    colors: {
      'gray-color-3': 'var(--l-gray-color-3, #e7e7e7)',
      'font-white-1': 'var(--l-font-white-1, rgba(255, 255, 255, 1))',
    },
    backgroundColor: {
      container: 'var(--l-bg-color-container, var(--l-font-white-1, rgba(22, 33, 255, 1)))', // 色彩 - 容器
    },
    borderColor: 'var(--l-border-color, var(--l-gray-color-3, #e7e7e7))', // 边框色
  },
}
