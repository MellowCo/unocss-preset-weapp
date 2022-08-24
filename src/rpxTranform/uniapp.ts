/**
 * uniapp postcss rpx 转换规则
 * pkg: @dcloudio/vue-cli-plugin-uni/packages/postcss 37行
 */
export function uniAppRpxTransform(size: string) {
  return `%?${size}?%`
}
