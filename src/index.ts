import type { Preset, PresetOptions } from '@unocss/core'
import { transformEscapESelector } from 'unplugin-transform-we-class/utils'
import preflights from './preflights'
import { rules } from './rules'
import type { Theme, ThemeAnimation } from './theme'
import { theme } from './theme'
import { variants } from './variants'

export { theme, colors } from './theme'
export { parseColor } from './utils'

// feat(preset-mini): add more overflowValues
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

export interface PresetMiniOptions extends PresetOptions {
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
   */
  designWidth?: number

  /**
   * 是否为h5
   * @default false
   */
  isH5?: boolean
}

const rpxRE = /^-?[\.\d]+rpx$/

function taroRpxTransform(size: string, designWidth: number) {
  return `${Math.ceil((((parseInt(size, 10) / 40) * 640) / designWidth) * 100000) / 100000}rem`
}

/**
 * uniapp postcss rpx 转换规则
 * pkg: @dcloudio/vue-cli-plugin-uni/packages/postcss 37行
 */
function uniAppRpxTransform(size: string) {
  return `%?${size}?%`
}

export const presetWeapp = (options: PresetMiniOptions = {}): Preset<Theme> => {
  options.dark = options.dark ?? 'class'
  options.attributifyPseudo = options.attributifyPseudo ?? false
  options.transform = options.transform ?? true
  options.isH5 = options.isH5 ?? false
  options.designWidth = options.designWidth ?? 750
  options.platform = options.platform ?? 'uniapp'

  return {
    name: 'unocss-preset-weapp',
    theme,
    rules,
    variants: variants(options),
    options,
    postprocess(css) {
      // 是否转义class
      if (options.transform)
        css.selector = transformEscapESelector(css.selector)

      // 设置变量前缀
      if (options.variablePrefix && options.variablePrefix !== 'un-')
        VarPrefixPostprocessor(options.variablePrefix, css)

      // h5 rpx 处理
      if (options.isH5) {
        css.entries.forEach((i) => {
          const value = i[1]
          if (value && typeof value === 'string' && rpxRE.test(value)) {
            if (options.platform === 'taro')
              i[1] = `${taroRpxTransform(value.slice(0, -3), options.designWidth!)}`
            else
              i[1] = `${uniAppRpxTransform(value.slice(0, -3))}`
          }
        })
      }
    },
    preflights: preflights(options.isH5, options.platform),
    prefix: options.prefix,
  }
}

export default presetWeapp

function VarPrefixPostprocessor(prefix: string, obj: any) {
  obj.entries.forEach((i: any) => {
    i[0] = i[0].replace(/^--un-/, `--${prefix}`)
    if (typeof i[1] === 'string')
      i[1] = i[1].replace(/var\(--un-/g, `var(--${prefix}`)
  })
}
