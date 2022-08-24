// taro 匹配 rpx 和 px 结尾
export const taroRpxRE = /^-?[\.\d]+r?px$/

// taro/packages/taro-api/src/tool.js
export function taroWechartRpxTransform(size: any, designWidth: any, deviceRatio: any) {
  if (!(designWidth in deviceRatio))
    throw new Error(`deviceRatio 配置中不存在 ${designWidth} 的设置！`)
  return `${parseInt(size, 10) * deviceRatio[designWidth]}rpx`
}

// taro/packages/taro-h5/src/api/taro.ts
export function taroH5RpxTransform(size: any, designWidth: any) {
  return `${Math.ceil((((parseInt(size, 10) / 40) * 640) / designWidth) * 10000) / 10000}rem`
}
