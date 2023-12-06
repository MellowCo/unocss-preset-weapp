import type { Rule } from '@unocss/core'
import { colorResolver, handler as h, isSize } from '../utils'
import { numberWithUnitRE } from '../utils/handlers/regex'
import { cacheRestoreSelector } from 'unplugin-transform-class/utils'
import { Theme } from '../theme'

/**
 * @param root0
 * @param root0."0"
 * @param root0."1"
 * @example op10 op-30 opacity-100
 */
export const opacity: Rule[] = [
  [/^op(?:acity)?-?(.+)$/, ([, d]) => ({ opacity: h.bracket.percent.cssvar(d) })],
]

/**
 * @param root0
 * @param root0."0"
 * @param root0."1"
 * @example c-red color-red5 text-red-300
 */
export const textColors: Rule[] = [
  [/^(?:color|c)-(.+)$/, colorResolver('color', 'text', 'textColor'), { autocomplete: '(text | color | c) - $colors' }],
  // auto detection and fallback to font-size if the content looks like a size
  [/^text-(.+)$/, colorResolver('color', 'text', 'textColor', css => !css.color?.toString().match(numberWithUnitRE)), { autocomplete: '(text|color|c)-$colors' }],
  [/^(?:text|color|c)-op(?:acity)?-?(.+)$/, ([, opacity]) => ({ '--un-text-opacity': h.bracket.percent.cssvar(opacity) }), { autocomplete: '(text|color|c)-(op|opacity)-<percent>' }],
]

const bgUrlRE = /^\[url\(.+\)\]$/
const bgLengthRE = /^\[length:.+\]$/
const bgPositionRE = /^\[position:.+\]$/
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
    return colorResolver('background-color', 'bg', 'backgroundColor')(params, body)
  }],
  [/^bg-op(?:acity)?-?(.+)$/, ([, opacity]) => ({ '--un-bg-opacity': h.bracket.percent.cssvar(opacity) }), { autocomplete: 'bg-(op|opacity)-<percent>' }],
]

export const colorScheme: Rule[] = [
  [/^color-scheme-(\w+)$/, ([, v]) => ({ 'color-scheme': v })],
]
