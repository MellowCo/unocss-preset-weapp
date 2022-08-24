// taro/packages/taro-api/src/tool.js
// px -> rpx
export function taroPxToRpx(size: any, designWidth: any, deviceRatio: any) {
  if (!(designWidth in deviceRatio))
    throw new Error(`deviceRatio 配置中不存在 ${designWidth} 的设置！`)
  return `${parseInt(size, 10) * deviceRatio[designWidth]}rpx`
}

// rpx -> px
export function taroRpxToPx(size: any, designWidth: any, deviceRatio: any) {
  if (!(designWidth in deviceRatio))
    throw new Error(`deviceRatio 配置中不存在 ${designWidth} 的设置！`)
  return parseInt(size, 10) / deviceRatio[designWidth]
}

// taro issues
// 3.5.3 的字体相比较3.4.x版本字体偏大
// https://github.com/NervJS/taro/issues/12361
// 针对 webpack4, webpack5 个版本设置2种rem转换规则

// webpack4版本
// taro/packages/taro-h5/src/api/taro.ts
export function taroPxToRemW4(size: any, designWidth: any) {
  return `${Math.ceil((((parseInt(size, 10) / 40) * 640) / designWidth) * 100000) / 100000}rem`
}

// webpack5
// 转换规则: https://github.com/NervJS/taro/blob/next/packages/postcss-pxtransform/index.js
export function taroPxToRemW5(size: any, designWidth: any, deviceRatio: any) {
  // taro 的 postcss baseFontSize 为20
  const baseFontSize = 20
  // 保留小数位数
  const unitPrecision = 5
  const rootValue = baseFontSize / deviceRatio[designWidth] * 2

  const pixels = parseFloat(size)

  return `${toFixed((pixels / rootValue), unitPrecision)}rem`
}

function toFixed(number: number, precision: number) {
  const multiplier = 10 ** (precision + 1)
  const wholeNumber = Math.floor(number * multiplier)
  return Math.round(wholeNumber / 10) * 10 / multiplier
}
