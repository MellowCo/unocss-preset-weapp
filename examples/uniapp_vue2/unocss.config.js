import presetWxapp from 'unocss-preset-wxapp';

export default {
  presets: [
    presetWxapp({
      // h5兼容
      platform: 'uniapp',
      isH5: process.env.UNI_PLATFORM === 'h5'
    }),
  ],
  shortcuts: [
    {
      'border-base': 'border border-gray-500_10',
      'center': 'flex justify-center items-center',
    },
  ],
}
