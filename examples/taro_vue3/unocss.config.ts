import presetWxapp from 'unocss-preset-wxapp'

export default {
  presets: [
    presetWxapp({
      isTaroH5: process.env.TARO_ENV === 'h5',
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
