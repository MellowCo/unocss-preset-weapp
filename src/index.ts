import type { Preset, PresetOptions, UtilObject } from '@unocss/core'
import { defaultRules, transformEscapESelector } from 'unplugin-transform-class/utils'
import preflights from './preflights'
import { rules } from './rules'
import type { Theme, ThemeAnimation } from './theme'
import { theme } from './theme'
import { variants } from './variants'

import { taroPxToRemW4, taroPxToRemW5, taroPxToRpx, taroRpxToPx, uniAppRpxTransform } from './rpxTranform'

export { theme, colors } from './theme'
export { parseColor } from './utils'

// feat(preset-mini)!: use getComponent for variant parameter
export type { ThemeAnimation, Theme }

export interface DarkModeSelectors {
  /**
   * Selector for light variant.
   *
   * @default '.light'
   */
  light?: string

  /**
   * Selector for dark variant.
   *
   * @default '.dark'
   */
  dark?: string
}

export interface PresetWeappOptions extends PresetOptions {
  /**
   * Dark mode options
   *
   */
  dark?: 'class' | 'media' | DarkModeSelectors

  /**
   * @default false
   */
  attributifyPseudo?: Boolean

  /**
   * Prefix for CSS variables.
   *
   * @default 'un-'
   */
  variablePrefix?: string

  /**
   * Utils prefix
   *
   * @default undefined
   */
  prefix?: string

  /**
   * 是否转换微信class
   *
   * @default true
   */
  transform?: boolean

  /**
   * 平台
   * @default 'uniapp'
   */
  platform?: 'taro' | 'uniapp'

  /**
   * taro h5 rem 换算尺寸标准
   * @default 750
   * @link https://taro-docs.jd.com/taro/docs/size
   */
  designWidth?: number

  /**
   * taro 设计稿尺寸换算规则
   * @default { 640: 2.34 / 2, 750: 1, 828: 1.81 / 2}
   * @link https://taro-docs.jd.com/taro/docs/size
   */
  deviceRatio?: { [key: number]: number }

  /**
   * taro webpack 版本
   * taro webpack4 和 webpack5 h5根字体大小，导致不同版本 rem 不一致
   * 见下面issues
   * @link https://github.com/NervJS/taro/issues/12361
   * @default webpack4
   */
  taroWebpack?: 'webpack4' | 'webpack5'

  /**
   * 是否为h5
   * @default false
   */
  isH5?: boolean

  /**
   * 自定义转换规则
   * @default https://github.com/MellowCo/unplugin-transform-class#options
   */
  transformRules?: Record<string, string>
}

export const pxRE = /^-?[\.\d]+px$/
export const rpxRE = /^-?[\.\d]+rpx$/
export const rpxOrPxRE = /^-?[\.\d]+r?px$/

export const presetWeapp = (options: PresetWeappOptions = {}): Preset<Theme> => {
  options.dark = options.dark ?? 'class'
  options.attributifyPseudo = options.attributifyPseudo ?? false
  options.transform = options.transform ?? true
  options.isH5 = options.isH5 ?? false
  options.designWidth = options.designWidth ?? 750
  options.deviceRatio = options.deviceRatio ?? {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
  }
  options.platform = options.platform ?? 'uniapp'
  options.taroWebpack = options.taroWebpack ?? 'webpack4'
  options.transformRules = options.transformRules ?? defaultRules

  return {
    name: 'unocss-preset-weapp',
    theme: {
      ...theme,
      transformRules: options.transformRules,
    },
    rules,
    variants: variants(options),
    options,
    postprocess(css) {
      // 是否转义class
      if (options.transform)
        css.selector = transformEscapESelector(css.selector, options.transformRules)

      // 设置变量前缀
      if (options.variablePrefix && options.variablePrefix !== 'un-')
        VarPrefixPostprocessor(options.variablePrefix, css)

      // taro 处理 h5 和 小程序 px 和 rpx 转换
      if (options.platform === 'taro') {
        if (options.isH5) {
          cssRpxTransform(css,
            (value) => {
              return rpxOrPxRE.test(value)
            },
            (value) => {
              const size = value.endsWith('rpx') ? taroRpxToPx(value.slice(0, -3), options.designWidth, options.deviceRatio) : value.slice(0, -2)

              return options.taroWebpack === 'webpack4' ? taroPxToRemW4(size, options.designWidth) : taroPxToRemW5(size, options.designWidth, options.deviceRatio)
            })
        }
        else {
          // 小程序 taro 处理 px 为 rpx
          cssRpxTransform(css,
            (value) => {
              return pxRE.test(value)
            },
            (value) => {
              return taroPxToRpx(value.slice(0, -2), options.designWidth, options.deviceRatio)
            })
        }
      }

      // uniapp vue2 webpack: h5 rpx 处理
      if (options.platform === 'uniapp' && options.isH5) {
        css.entries.forEach((i) => {
          const value = i[1]
          if (value && typeof value === 'string' && rpxRE.test(value))
            i[1] = `${uniAppRpxTransform(value.slice(0, -3))}`
        })
      }
    },
    preflights: preflights(options.isH5, options.platform),
    prefix: options.prefix,
  }
}

function VarPrefixPostprocessor(prefix: string, obj: any) {
  obj.entries.forEach((i: any) => {
    i[0] = i[0].replace(/^--un-/, `--${prefix}`)
    if (typeof i[1] === 'string')
      i[1] = i[1].replace(/var\(--un-/g, `var(--${prefix}`)
  })
}

function cssRpxTransform(css: UtilObject, condition: (val: string) => boolean, transform: (val: string) => string) {
  css.entries.forEach((i) => {
    const value = i[1]
    if (value && typeof value === 'string' && condition(value))
      i[1] = `${transform(value)}`
  })
}

export default presetWeapp
