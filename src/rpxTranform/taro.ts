// taro/packages/taro-api/src/tool.js

import type { UtilObject } from '@unocss/core'
import { cssRpxTransform, pxRE, rpxOrPxRE } from '.'

// px -> rpx
export function taroPxToRpx(size: any, designWidth: any, deviceRatio: any) {
  if (!(designWidth in deviceRatio))
    throw new Error(`deviceRatio 配置中不存在 ${designWidth} 的设置！`)
  return `${Number.parseInt(size, 10) * deviceRatio[designWidth]}rpx`
}

// rpx -> px
export function taroRpxToPx(size: any, designWidth: any, deviceRatio: any) {
  if (!(designWidth in deviceRatio))
    throw new Error(`deviceRatio 配置中不存在 ${designWidth} 的设置！`)
  return Number.parseInt(size, 10) / deviceRatio[designWidth]
}

// taro issues
// 3.5.3 的字体相比较3.4.x版本字体偏大
// https://github.com/NervJS/taro/issues/12361
// 针对 webpack4, webpack5 个版本设置2种rem转换规则

// webpack4版本
// taro/packages/taro-h5/src/api/taro.ts
export function taroPxToRemW4(size: any, designWidth: any) {
  return `${Math.ceil((((Number.parseInt(size, 10) / 40) * 640) / designWidth) * 100000) / 100000}rem`
}

// webpack5
// 转换规则: https://github.com/NervJS/taro/blob/next/packages/postcss-pxtransform/index.js
export function taroPxToRemW5(size: any, designWidth: any, deviceRatio: any) {
  // taro 的 postcss baseFontSize 为20
  const baseFontSize = 20
  // 保留小数位数
  const unitPrecision = 5
  const rootValue = baseFontSize / deviceRatio[designWidth] * 2

  const pixels = Number.parseFloat(size)
  return `${toFixed((pixels / rootValue), unitPrecision)}rem`
}

function toFixed(number: number, precision: number) {
  const multiplier = 10 ** (precision + 1)
  const wholeNumber = Math.floor(number * multiplier)
  return Math.round(wholeNumber / 10) * 10 / multiplier
}

/**
 * taro: h5 px rpx 转 rem
 * @param css
 * @param taroWebpack
 * @param designWidth
 * @param deviceRatio
 * @param transformPx
 */
export function taroH5CssRemTransform(css: UtilObject, taroWebpack: string, designWidth: number, deviceRatio: Record<number, number>, transformPx: boolean) {
  // h5 px rpx 转 rem
  cssRpxTransform(css,
    rpxOrPxRE,
    (value) => {
      const size = value.endsWith('rpx') ? taroRpxToPx(value.slice(0, -3), designWidth, deviceRatio) : value.slice(0, -2)
      if (!transformPx)
        return value
      return taroWebpack === 'webpack4' ? taroPxToRemW4(size, designWidth) : taroPxToRemW5(size, designWidth, deviceRatio)
    })
}

/**
 * taro: 小程序 px 转 rpx
 * @param css
 * @param designWidth
 * @param deviceRatio
 * @param transformPx
 */
export function taroCssPxTransform(css: UtilObject, designWidth: number, deviceRatio: Record<number, number>, transformPx: boolean) {
  // h5 px rpx 转 rem
  cssRpxTransform(css,
    pxRE,
    (value) => {
      if (!transformPx)
        return value

      return taroPxToRpx(value.slice(0, -2), designWidth, deviceRatio)
    })
}
