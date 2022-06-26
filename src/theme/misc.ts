// keep in ASC order: container.ts and breakpoints.ts need that order
export const breakpoints = {
  'sm': '640px',
  'md': '768px',
  'lg': '1024px',
  'xl': '1280px',
  '2xl': '1536px',
}

export const verticalBreakpoints = { ...breakpoints }

export const lineWidth = {
  DEFAULT: '1px',
  none: '0px',
}

export const spacing = {
  'DEFAULT': '32rpx',
  'none': '0',
  'xs': '24rpx',
  'sm': '28rpx',
  'lg': '36rpx',
  'xl': '40rpx',
  '2xl': '48rpx',
  '3xl': '60rpx',
  '4xl': '72rpx',
  '5xl': '96rpx',
  '6xl': '120rpx',
  '7xl': '144rpx',
  '8xl': '192rpx',
  '9xl': '256rpx',
}

export const duration = {
  DEFAULT: '150ms',
  none: '0ms',
  75: '75ms',
  100: '100ms',
  150: '150ms',
  200: '200ms',
  300: '300ms',
  500: '500ms',
  700: '700ms',
  1000: '1000ms',
}

export const borderRadius = {
  'DEFAULT': '8rpx',
  'none': '0',
  'sm': '4rpx',
  'md': '12rpx',
  'lg': '16rpx',
  'xl': '24rpx',
  '2xl': '32rpx',
  '3xl': '48rpx',
  'full': '9999px',
}

export const boxShadow = {
  'DEFAULT': ['var(--un-shadow-inset) 0 2rpx 6rpx 0 rgba(0,0,0,0.1)', 'var(--un-shadow-inset) 0 2rpx 4rpx -2rpx rgba(0,0,0,0.1)'],
  'none': '0 0 #0000',
  'sm': 'var(--un-shadow-inset) 0 2rpx 4rpx 0 rgba(0,0,0,0.05)',
  'md': ['var(--un-shadow-inset) 0 8rpx 12rpx -2rpx rgba(0,0,0,0.1)', 'var(--un-shadow-inset) 0 4rpx 8rpx -4rpx rgba(0,0,0,0.1)'],
  'lg': ['var(--un-shadow-inset) 0 20rpx 30rpx -6rpx rgba(0,0,0,0.1)', 'var(--un-shadow-inset) 0 8rpx 12rpx -8rpx rgba(0,0,0,0.1)'],
  'xl': ['var(--un-shadow-inset) 0 40rpx 50rpx -10rpx rgba(0,0,0,0.1)', 'var(--un-shadow-inset) 0 16rpx 20rpx -12rpx rgba(0,0,0,0.1)'],
  '2xl': 'var(--un-shadow-inset) 0 50rpx 100rpx -24rpx rgba(0,0,0,0.25)',
  'inner': 'inset 0 4rpx 8rpx 0 rgba(0,0,0,0.05)',
}

export const easing = {
  'DEFAULT': 'cubic-bezier(0.4, 0, 0.2, 1)',
  'linear': 'linear',
  'in': 'cubic-bezier(0.4, 0, 1, 1)',
  'out': 'cubic-bezier(0, 0, 0.2, 1)',
  'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
}

export const ringWidth = {
  DEFAULT: '1px',
  none: '0px',
}
