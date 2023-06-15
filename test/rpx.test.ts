import { createGenerator } from '@unocss/core'
import { describe, expect, test } from 'vitest'
import presetMini from '../src'

const taroH5_750_W4 = createGenerator({
  presets: [
    presetMini({
      isH5: true,
      platform: 'taro',
    }),
  ],
})

const taroWe_750_W4 = createGenerator({
  presets: [
    presetMini({
      isH5: false,
      platform: 'taro',
    }),
  ],
})

const taroH5_375_W4 = createGenerator({
  presets: [
    presetMini({
      isH5: true,
      platform: 'taro',
      designWidth: 375,
      deviceRatio: {
        375: 2 / 1,
      },
    }),
  ],
})

const taroWe_750_W5 = createGenerator({
  presets: [
    presetMini({
      isH5: false,
      platform: 'taro',
      taroWebpack: 'webpack5',
    }),
  ],
})

const taroH5_375_W5 = createGenerator({
  presets: [
    presetMini({
      isH5: true,
      platform: 'taro',
      designWidth: 375,
      deviceRatio: {
        375: 2 / 1,
      },
      taroWebpack: 'webpack5',
    }),
  ],
})

const taroWe_375_W4 = createGenerator({
  presets: [
    presetMini({
      isH5: false,
      platform: 'taro',
      designWidth: 375,
      deviceRatio: {
        375: 2 / 1,
      },
    }),
  ],
})

const uniapp_750 = createGenerator({
  presets: [
    presetMini({
      isH5: true,
      platform: 'uniapp',
    }),
  ],
})

const size = [
  // 'w-100px',
  // 'w-100',
  // 'w-100rpx',

  'text-base',
  'text-16px',
  // 'm-6',
]

describe('rpx-tranform', () => {
  test('taroH5_750', async () => {
    const code = size.join(' ')
    const { css } = await taroH5_750_W4.generate(code)
    await expect(css).toMatchFileSnapshot('./assets/output/taro-h5-750-webpack4.css')
  })

  test('taroWe_750_W4', async () => {
    const code = size.join(' ')
    const { css } = await taroWe_750_W4.generate(code)
    await expect(css).toMatchFileSnapshot('./assets/output/taro-weapp-750-webpack4.css')
  })

  test('taroH5_375_W4', async () => {
    const code = size.join(' ')
    const { css } = await taroH5_375_W4.generate(code)
    await expect(css).toMatchFileSnapshot('./assets/output/taro-h5-375-webpack4.css')
  })

  test('taroWe_750_W5', async () => {
    const code = size.join(' ')
    const { css } = await taroWe_750_W5.generate(code)
    await expect(css).toMatchFileSnapshot('./assets/output/taro-weapp-750-webpack5.css')
  })

  test('taroH5_375_W5', async () => {
    const code = size.join(' ')
    const { css } = await taroH5_375_W5.generate(code)
    await expect(css).toMatchFileSnapshot('./assets/output/taro-weapp-375-webpack5.css')
  })

  test('taroWe_375', async () => {
    const code = size.join(' ')
    const { css } = await taroWe_375_W4.generate(code)
    await expect(css).toMatchFileSnapshot('./assets/output/taro-weapp-375-webpack4.css')
  })

  test('uniapp_750', async () => {
    const code = size.join(' ')
    const { css } = await uniapp_750.generate(code)
    await expect(css).toMatchFileSnapshot('./assets/output/uniapp-750.css')
  })
})
