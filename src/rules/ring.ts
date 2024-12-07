import type { CSSObject, Rule, RuleContext } from '@unocss/core'
import type { Theme } from '../theme'
import { colorResolver, handler as h, isCSSMathFn } from '../utils'
import { varEmpty } from './constant'

export const ringBase = {
  '--un-ring-inset': varEmpty,
  '--un-ring-offset-width': '0px',
  '--un-ring-offset-color': '#fff',
  '--un-ring-width': '0px',
  '--un-ring-color': 'rgb(147 197 253 / 0.5)',
  '--un-shadow': '0 0 rgb(0 0 0 / 0)',
}

const preflightKeys = Object.keys(ringBase)

export const rings: Rule<Theme>[] = [
  // size
  [/^ring(?:-(.+))?$/, ([, d], { theme }) => {
    const value = theme.ringWidth?.[d || 'DEFAULT'] ?? h.px(d || '1')
    if (value) {
      return {
        '--un-ring-width': value,
        '--un-ring-offset-shadow': 'var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color)',
        '--un-ring-shadow': 'var(--un-ring-inset) 0 0 0 calc(var(--un-ring-width) + var(--un-ring-offset-width)) var(--un-ring-color)',
        'box-shadow': 'var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow)',
      }
    }
  }, { custom: { preflightKeys }, autocomplete: 'ring-$ringWidth' }],

  // size
  [/^ring-(?:width-|size-)(.+)$/, handleWidth, { autocomplete: 'ring-(width|size)-$lineWidth' }],

  // offset size
  ['ring-offset', { '--un-ring-offset-width': '1px' }],
  [/^ring-offset-(?:width-|size-)?(.+)$/, ([, d], { theme }) => ({ '--un-ring-offset-width': theme.lineWidth?.[d] ?? h.bracket.cssvar.px(d) }), { autocomplete: 'ring-offset-(width|size)-$lineWidth' }],

  // colors
  [/^ring-(.+)$/, handleColorOrWidth, { autocomplete: 'ring-$colors' }],
  [/^ring-op(?:acity)?-?(.+)$/, ([, opacity]) => ({ '--un-ring-opacity': h.bracket.percent.cssvar(opacity) }), { autocomplete: 'ring-(op|opacity)-<percent>' }],

  // offset color
  [/^ring-offset-(.+)$/, colorResolver('--un-ring-offset-color', 'ring-offset', 'borderColor'), { autocomplete: 'ring-offset-$colors' }],
  [/^ring-offset-op(?:acity)?-?(.+)$/, ([, opacity]) => ({ '--un-ring-offset-opacity': h.bracket.percent.cssvar(opacity) }), { autocomplete: 'ring-offset-(op|opacity)-<percent>' }],

  // style
  ['ring-inset', { '--un-ring-inset': 'inset' }],
]

function handleWidth([, b]: string[], { theme }: RuleContext<Theme>): CSSObject {
  return { '--un-ring-width': theme.ringWidth?.[b] ?? h.bracket.cssvar.px(b) }
}

function handleColorOrWidth(match: RegExpMatchArray, ctx: RuleContext<Theme>): CSSObject | undefined {
  if (isCSSMathFn(h.bracket(match[1])))
    return handleWidth(match, ctx)
  return colorResolver('--un-ring-color', 'ring', 'borderColor')(match, ctx) as CSSObject | undefined
}
