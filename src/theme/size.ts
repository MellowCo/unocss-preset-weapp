import type { Theme } from '../'

export const baseSize = {
  'xs': '180rpx',
  'sm': '220rpx',
  'md': '260rpx',
  'lg': '300rpx',
  'xl': '340rpx',
  '2xl': '390rpx',
  '3xl': '440rpx',
  '4xl': '490rpx',
  '5xl': '540rpx',
  '6xl': '590rpx',
  '7xl': '640rpx',
  '8xl': '690rpx',
  '9xl': '740rpx',
  'full': '100%',
  'half': '50%',
}

export const width = {
  auto: 'auto',
  ...baseSize,
  screen: '100vw',
}

export const maxWidth = {
  none: 'none',
  ...baseSize,
  screen: '100vw',
}

export const blockSize = {
  auto: 'auto',
  ...baseSize,
  screen: '100vb',
} satisfies Theme['blockSize']

export const inlineSize = {
  auto: 'auto',
  ...baseSize,
  screen: '100vi',
} satisfies Theme['inlineSize']

export const height = {
  auto: 'auto',
  ...baseSize,
  screen: '100vh',
}

export const maxHeight = {
  none: 'none',
  ...baseSize,
  screen: '100vh',
}

export const maxBlockSize = {
  none: 'none',
  ...baseSize,
  screen: '100vb',
} satisfies Theme['maxBlockSize']

export const maxInlineSize = {
  none: 'none',
  ...baseSize,
  screen: '100vi',
} satisfies Theme['maxInlineSize']

export const containers = { ...baseSize } satisfies Theme['containers']
