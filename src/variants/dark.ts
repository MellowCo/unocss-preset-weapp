import type { Variant } from '@unocss/core'
import type { PresetWeappOptions } from '..'
import { variantMatcher, variantParentMatcher } from '../utils'

export const variantColorsMediaOrClass = (options: PresetWeappOptions = {}): Variant[] => {
  const { transformRules } = options

  if (options?.dark === 'class' || typeof options.dark === 'object') {
    const { dark = '.dark', light = '.light' } = typeof options.dark === 'string'
      ? {}
      : options.dark
    return [
      variantMatcher('dark', input => ({ prefix: `${dark} $$ ${input.prefix}` }), transformRules),
      variantMatcher('light', input => ({ prefix: `${light} $$ ${input.prefix}` }), transformRules),
    ]
  }

  return [
    variantParentMatcher('dark', '@media (prefers-color-scheme: dark)', transformRules),
    variantParentMatcher('light', '@media (prefers-color-scheme: light)', transformRules),
  ]
}
