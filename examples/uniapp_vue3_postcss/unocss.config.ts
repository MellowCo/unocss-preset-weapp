import presetWeapp from 'unocss-preset-weapp'
// import { transformerAttributify, transformerClass } from 'unocss-preset-weapp/transformer'
// import { transformerDirectives } from 'unocss'

export default {
  presets: [
    // https://github.com/MellowCo/unocss-preset-weapp
    presetWeapp(),
  ],
  shortcuts: [
    {
      'border-base': 'border border-gray-500_10',
      'center': 'flex justify-center items-center',
    },
  ],
  // transformers: [
  //   // https://github.com/unocss/unocss/tree/main/packages/transformer-directives
  //   transformerDirectives(),

  //   // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerAttributify
  //   transformerAttributify(),

  //   // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerClass
  //   transformerClass(),
  // ],
}
