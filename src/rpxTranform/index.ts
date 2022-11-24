import type { UtilObject } from '@unocss/core'

export * from './taro'
export * from './uniapp'

export const pxRE = /^-?[\.\d]+px$/
export const rpxRE = /^-?[\.\d]+rpx$/
export const rpxOrPxRE = /^-?[\.\d]+r?px$/
export const importantStr = ' !important'

export function cssRpxTransform(css: UtilObject, condition: (val: string) => boolean, transform: (val: string) => string) {
  css.entries.forEach((i) => {
    let value = i[1]

    if (value && typeof value === 'string' && value.includes('px')) {
      const hasImportant = value.includes(importantStr)

      // 处理末尾为 !important，padding: 10rpx !important;
      if (hasImportant)
        value = value.replace(importantStr, '')

      if (condition(value))
        i[1] = hasImportant ? `${transform(value)}${importantStr}` : `${transform(value)}`
    }
  })
}
