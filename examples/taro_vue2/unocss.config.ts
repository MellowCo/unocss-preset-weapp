import presetWeapp from 'unocss-preset-weapp'

export default {
  presets: [
    presetWeapp({
      // h5兼容
      isH5: process.env.TARO_ENV === 'h5',
      platform: 'taro',
      designWidth: 750
    }),
  ],
  shortcuts: [
    {
      'border-base': 'border border-gray-500/10',
      'center': 'flex justify-center items-center',
    },
  ]
}
