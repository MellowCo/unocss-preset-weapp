import { createGenerator } from '@unocss/core'
import { describe, expect, it } from 'vitest'
import presetWeapp from '../src'

const taroH5_750_W4 = await createGenerator({
  presets: [
    presetWeapp({
      isH5: true,
      platform: 'taro',
    }),
  ],
})

const taroWe_750_W4 = await createGenerator({
  presets: [
    presetWeapp({
      isH5: false,
      platform: 'taro',
    }),
  ],
})

const taroH5_375_W4 = await createGenerator({
  presets: [
    presetWeapp({
      isH5: true,
      platform: 'taro',
      designWidth: 375,
      deviceRatio: {
        375: 2 / 1,
      },
    }),
  ],
})

const taroWe_750_W5 = await createGenerator({
  presets: [
    presetWeapp({
      isH5: false,
      platform: 'taro',
      taroWebpack: 'webpack5',
    }),
  ],
})

const taroH5_375_W5 = await createGenerator({
  presets: [
    presetWeapp({
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

const taroWe_375_W4 = await createGenerator({
  presets: [
    presetWeapp({
      isH5: false,
      platform: 'taro',
      designWidth: 375,
      deviceRatio: {
        375: 2 / 1,
      },
    }),
  ],
})

const uniapp_750 = await createGenerator({
  presets: [
    presetWeapp({
      isH5: true,
      platform: 'uniapp',
    }),
  ],
})

const size = [
  'w-100px',
  'w-100',
  'w-100rpx',

  'text-base',
  'text-16px',
  'm-6',
]

describe('rpx-tranform', () => {
  it('taroH5_750', async () => {
    const code = size.join(' ')
    const { css } = await taroH5_750_W4.generate(code)
    await expect(css).toMatchFileSnapshot('./assets/output/rpx/taro-h5-750-webpack4.css')
  })

  it('taroWe_750_W4', async () => {
    const code = size.join(' ')
    const { css } = await taroWe_750_W4.generate(code)
    await expect(css).toMatchFileSnapshot('./assets/output/rpx/taro-weapp-750-webpack4.css')
  })

  it('taroH5_375_W4', async () => {
    const code = size.join(' ')
    const { css } = await taroH5_375_W4.generate(code)
    await expect(css).toMatchFileSnapshot('./assets/output/rpx/taro-h5-375-webpack4.css')
  })

  it('taroWe_750_W5', async () => {
    const code = size.join(' ')
    const { css } = await taroWe_750_W5.generate(code)
    await expect(css).toMatchFileSnapshot('./assets/output/rpx/taro-weapp-750-webpack5.css')
  })

  it('taroH5_375_W5', async () => {
    const code = size.join(' ')
    const { css } = await taroH5_375_W5.generate(code)
    await expect(css).toMatchFileSnapshot('./assets/output/rpx/taro-h5-375-webpack5.css')
  })

  it('taroWe_375', async () => {
    const code = size.join(' ')
    const { css } = await taroWe_375_W4.generate(code)
    await expect(css).toMatchFileSnapshot('./assets/output/rpx/taro-weapp-375-webpack4.css')
  })

  it('uniapp_750', async () => {
    const code = size.join(' ')
    const { css } = await uniapp_750.generate(code)
    await expect(css).toMatchFileSnapshot('./assets/output/rpx/uniapp-750.css')
  })
})
