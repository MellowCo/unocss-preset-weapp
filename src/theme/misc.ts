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
  'md': '36rpx',
  'lg': '40rpx',
  'xl': '48rpx',
  '2xl': '60rpx',
  '3xl': '72rpx',
  '4xl': '96rpx',
  '5xl': '120rpx',
  '6xl': '144rpx',
  '7xl': '192rpx',
  '8xl': '256rpx',
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
  'half': '50%',
  '2xl': '32rpx',
  '3xl': '48rpx',
  'full': '9999px',
}

export const boxShadow = {
  'DEFAULT': ['var(--un-shadow-inset) 0 1px 3px 0 rgba(0,0,0,0.1)', 'var(--un-shadow-inset) 0 1px 2px -1px rgba(0,0,0,0.1)'],
  'none': '0 0 rgba(0,0,0,0)',
  'sm': 'var(--un-shadow-inset) 0 1px 2px 0 rgba(0,0,0,0.05)',
  'md': ['var(--un-shadow-inset) 0 4px 6px -1px rgba(0,0,0,0.1)', 'var(--un-shadow-inset) 0 2px 4px -2px rgba(0,0,0,0.1)'],
  'lg': ['var(--un-shadow-inset) 0 10px 15px -3px rgba(0,0,0,0.1)', 'var(--un-shadow-inset) 0 4px 6px -4px rgba(0,0,0,0.1)'],
  'xl': ['var(--un-shadow-inset) 0 20px 25px -5px rgba(0,0,0,0.1)', 'var(--un-shadow-inset) 0 8px 10px -6px rgba(0,0,0,0.1)'],
  '2xl': 'var(--un-shadow-inset) 0 25px 50px -12px rgba(0,0,0,0.25)',
  'inner': 'inset 0 2px 4px 0 rgba(0,0,0,0.05)',
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
