import type { Theme } from './types'

export const fontFamily = {
  sans: [
    'ui-sans-serif',
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    '"Noto Sans"',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Noto Color Emoji"',
  ].join(','),
  serif: [
    'ui-serif',
    'Georgia',
    'Cambria',
    '"Times New Roman"',
    'Times',
    'serif',
  ].join(','),
  mono: [
    'ui-monospace',
    'SFMono-Regular',
    'Menlo',
    'Monaco',
    'Consolas',
    '"Liberation Mono"',
    '"Courier New"',
    'monospace',
  ].join(','),
}

export const fontSize: Theme['fontSize'] = {
  'xs': ['24rpx', '32rpx'],
  'sm': ['28rpx', '40rpx'],
  'base': ['32rpx', '48rpx'],
  'lg': ['36rpx', '56rpx'],
  'xl': ['40rpx', '56rpx'],
  '2xl': ['48rpx', '64rpx'],
  '3xl': ['60rpx', '72rpx'],
  '4xl': ['72rpx', '80rpx'],
  '5xl': ['96rpx', '1'],
  '6xl': ['120rpx', '1'],
  '7xl': ['144rpx', '1'],
  '8xl': ['192rpx', '1'],
  '9xl': ['256rpx', '1'],
}

export const textIndent: Theme['textIndent'] = {
  'DEFAULT': '48rpx',
  'xs': '16rpx',
  'sm': '32rpx',
  'md': '48rpx',
  'lg': '64rpx',
  'xl': '80rpx',
  '2xl': '96rpx',
  '3xl': '128rpx',
}

export const textStrokeWidth: Theme['textStrokeWidth'] = {
  DEFAULT: '48rpx',
  none: '0',
  sm: 'thin',
  md: 'medium',
  lg: 'thick',
}

export const textShadow: Theme['textShadow'] = {
  DEFAULT: ['0 0 2rpx rgba(0,0,0,0.2)', '0 0 2rpx rgba(1,0,5,0.1)'],
  none: '0 0 rgba(0,0,0,0)',
  sm: '2rpx 2rpx 6rpx rgba(36,37,47,0.25)',
  md: ['0 2rpx 4rpx rgba(30,29,39,0.19)', '2rpx 4rpx 8rpx rgba(54,64,147,0.18)'],
  lg: ['6rpx 6rpx 12rpx rgba(0,0,0,0.26)', '0 0 10rpx rgba(15,3,86,0.22)'],
  xl: ['2rpx 2rpx 6rpx rgba(0,0,0,0.29)', '4rpx 8rpx 14rpx rgba(73,64,125,0.35)'],
}

export const lineHeight: Theme['lineHeight'] = {
  none: '1',
  tight: '1.25',
  snug: '1.375',
  normal: '1.5',
  relaxed: '1.625',
  loose: '2',
}

export const letterSpacing: Theme['letterSpacing'] = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0em',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
}

export const fontWeight = {
  thin: '100',
  extralight: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
  // int[0, 900] -> int
} satisfies Theme['fontWeight']

export const wordSpacing: Theme['wordSpacing'] = letterSpacing
