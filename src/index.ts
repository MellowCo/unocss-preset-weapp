import type { Preset, PresetOptions } from '@unocss/core'
import preflights from './preflights'
import { rules } from './rules'
import type { Theme, ThemeAnimation } from './theme'
import { theme } from './theme'
import { transformSelector } from './transform'
import { variants } from './variants'

export { theme, colors } from './theme'
export { parseColor } from './utils'

// fix(preset-mini): stricter color match, close
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
   * taro h5 rem transform
   * @default false
   */
  isTaroH5?: boolean

  /**
   * taro h5 rem 换算尺寸标准
   * @default 750
   */
  designWidth?: number
}

const rpxRE = /^-?[\.\d]+rpx$/

function taroRpxTransform(size: string, designWidth: number) {
  return `${Math.ceil((((parseInt(size, 10) / 40) * 640) / designWidth) * 100000) / 100000}`
}

export const presetWeapp = (options: PresetMiniOptions = {}): Preset<Theme> => {
  options.dark = options.dark ?? 'class'
  options.attributifyPseudo = options.attributifyPseudo ?? false
  options.transform = options.transform ?? true
  options.isTaroH5 = options.isTaroH5 ?? false
  options.designWidth = options.designWidth ?? 750

  return {
    name: 'unocss-preset-weapp',
    theme,
    rules,
    variants: variants(options),
    options,
    postprocess(css) {
      if (options.transform) {
        // 转换
        css.selector = transformSelector(css.selector)
      }

      // 设置变量前缀
      if (options.variablePrefix && options.variablePrefix !== 'un-')
        VarPrefixPostprocessor(options.variablePrefix, css)

      if (options.isTaroH5) {
        // taro h5换算rem尺寸
        css.entries.forEach((i) => {
          const value = i[1]
          if (value && typeof value === 'string' && rpxRE.test(value))
            i[1] = `${taroRpxTransform(value.slice(0, -3), options.designWidth!)}rem`
        })
      }
    },
    preflights: preflights(options.isTaroH5),
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
