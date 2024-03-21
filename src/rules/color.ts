import type { Rule } from '@unocss/core'
import { cacheRestoreSelector } from 'unplugin-transform-class/utils'
import { colorResolver, handler as h, isSize } from '../utils'
import type { Theme } from '../theme'

/**
 * @param root0
 * @param root0."0"
 * @param root0."1"
 * @example op10 op-30 opacity-100
 */
export const opacity: Rule[] = [
  [/^op(?:acity)?-?(.+)$/, ([, d]) => ({ opacity: h.bracket.percent.cssvar(d) })],
]

const bgUrlRE = /^\[url\(.+\)\]$/
const bgLengthRE = /^\[length:.+\]$/
const bgPositionRE = /^\[position:.+\]$/
const bgGradientRE = /^\[(linear|conic|radial)-gradient\(.+\)\]$/
export const bgColors: Rule<Theme>[] = [
  [/^bg-(.+)$/, (params, body) => {
    let [, d] = params

    d = cacheRestoreSelector(d, body.theme?.transformRules)
    if (bgUrlRE.test(d))
      return { '--un-url': h.bracket(d), 'background-image': 'var(--un-url)' }
    if (bgLengthRE.test(d) && h.bracketOfLength(d) != null)
      return { 'background-size': h.bracketOfLength(d)!.split(' ').map(e => h.fraction.auto.px.cssvar(e) ?? e).join(' ') }
    if ((isSize(d) || bgPositionRE.test(d)) && h.bracketOfPosition(d) != null)
      return { 'background-position': h.bracketOfPosition(d)!.split(' ').map(e => h.position.fraction.auto.px.cssvar(e) ?? e).join(' ') }
    if (bgGradientRE.test(d))
      return { 'background-image': h.bracket(d) }
    return colorResolver('background-color', 'bg', 'backgroundColor')(params, body)
  }, { autocomplete: 'bg-$colors' }],
  [/^bg-op(?:acity)?-?(.+)$/, ([, opacity]) => ({ '--un-bg-opacity': h.bracket.percent.cssvar(opacity) }), { autocomplete: 'bg-(op|opacity)-<percent>' }],
]

export const colorScheme: Rule[] = [
  [/^color-scheme-(\w+)$/, ([, v]) => ({ 'color-scheme': v })],
]
