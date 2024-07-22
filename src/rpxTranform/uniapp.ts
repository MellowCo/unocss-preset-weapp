import type { UtilObject } from '@unocss/core'
import { cssRpxTransform, rpxRE } from '.'

/**
 * uniapp vue2 postcss rpx 转换规则
 * pkg: @dcloudio/vue-cli-plugin-uni/packages/postcss 37行
 * @param size
 */
export function uniAppRpxTransform(size: string) {
  return `%?${size}?%`
}

/**
 * uniapp vue2 webpack: h5 rpx 处理
 * @param css
 */
export function uniAppVue2CssRpxTransform(css: UtilObject) {
  cssRpxTransform(css, rpxRE, (value) => {
    return uniAppRpxTransform(value.slice(0, -3))
  })
}
