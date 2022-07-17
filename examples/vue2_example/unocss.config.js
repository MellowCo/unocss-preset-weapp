const presetWxapp = require('../../dist/index.cjs').default

export default {
  presets: [
    presetWxapp(),
  ],
  shortcuts: [
    {
      'border-base': 'border border-gray-500_10',
      'center': 'flex justify-center items-center',
    },
  ],
}
