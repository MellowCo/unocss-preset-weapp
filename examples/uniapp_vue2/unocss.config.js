import presetWeapp from 'unocss-preset-weapp'
import { defineConfig } from 'unocss'
import { defaultAttributes, defaultIgnoreNonValuedAttributes, transformerAttributify, transformerClass } from 'unocss-preset-weapp/transformer'

const transformRules = {
  '.': '-dr1-',
  '/': '-sr1-',
  ':': '-cr1-',
  '%': '-pr1-',
  '!': '-er1-',
  '#': '-wr1-',
  '(': '-bl1r-',
  ')': '-br1r-',
  '[': '-fl1r-',
  ']': '-fr1r-',
  '$': '-rr1-',
  ',': '-ccc-',
}

export default defineConfig({
  presets: [
    // https://github.com/MellowCo/unocss-preset-weapp
    presetWeapp({
      // h5兼容
      platform: 'uniapp',
      isH5: process.env.UNI_PLATFORM === 'h5',
      transformRules,
    }),
  ],
  shortcuts: [
    {
      'border-base': 'border border-gray-500_10',
      'center': 'flex justify-center items-center',
    },
  ],
  theme: {
    // 自定义动画
    animation: {
      keyframes: {
        'my-animation': '{0% {letter-spacing: -0.5em;transform: translateZ(-700px);opacity: 0;}40% {opacity: 0.6;}100% {transform: translateZ(0);opacity: 1;}}',
      },
      durations: {
        'my-animation': '0.8s',
      },
      counts: {
        'my-animation': 'infinite',
      },
      timingFns: {
        'my-animation': 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
      },
    },
  },
  transformers: [

    // options https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerAttributify
    transformerAttributify({
      attributes: [...defaultAttributes, 'my-attr'],
      ignoreNonValuedAttributes: [...defaultIgnoreNonValuedAttributes, 'my-ignore'],
      nonValuedAttribute: true,
      prefix: 'li-',
      prefixedOnly: false,
      transformRules,
    }),

    // options https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerClass
    transformerClass({
      transformRules,
    }),

  ],
})
