import type { UtilObject } from '@unocss/core'

export * from './taro'
export * from './uniapp'

export const pxRE = /-?[\.\d]+px/g
export const rpxRE = /-?[\.\d]+rpx/g
export const rpxOrPxRE = /-?[\.\d]+r?px/g

export function cssRpxTransform(css: UtilObject, regex: RegExp, transform: (val: string) => string) {
  css.entries.forEach((i) => {
    let value = i[1]

    if (value && typeof value === 'string') {
      const matchs = Array.from(value.matchAll(regex))

      if (matchs.length !== 0) {
        matchs.forEach((m) => {
          const size = m[0]
          value = (value as string).replace(size, transform(size))
        })

        i[1] = value
      }
    }
  })
}
