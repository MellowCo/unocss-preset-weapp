import type { UtilObject } from '@unocss/core'
import { cssRpxTransform, rpxRE } from '.'

/**
 * uniapp postcss rpx 转换规则
 * pkg: @dcloudio/vue-cli-plugin-uni/packages/postcss 37行
 */
export function uniAppRpxTransform(size: string) {
  return `%?${size}?%`
}

/**
 * uniapp vue2 webpack: h5 rpx 处理
 * @param css
 */
export function uniAppVue2CssRpxTransform(css: UtilObject) {
  cssRpxTransform(css,
    (value) => {
      return rpxRE.test(value)
    },
    (value) => {
      return uniAppRpxTransform(value.slice(0, -3))
    })
}
