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

// taro/packages/taro-h5/src/api/taro.ts
export function taroPxToRem(size: any, designWidth: any) {
  return `${Math.ceil((((parseInt(size, 10) / 40) * 640) / designWidth) * 10000) / 10000}rem`
}
