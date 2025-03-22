import type { Variant } from '@unocss/core'
import type { PresetWeappOptions } from '..'
import { toArray } from '@unocss/core'
import { variantMatcher, variantParentMatcher } from '../utils'

export function variantColorsMediaOrClass(options: PresetWeappOptions = {}): Variant[] {
  const { transformRules } = options

  if (options?.dark === 'class' || typeof options.dark === 'object') {
    const { dark = '.dark', light = '.light' } = typeof options.dark === 'string'
      ? {}
      : options.dark
    return [

      variantMatcher('dark', toArray(dark).map(dark => input => ({ prefix: `${dark} $$ ${input.prefix}` })), transformRules),
      variantMatcher('light', toArray(light).map(light => input => ({ prefix: `${light} $$ ${input.prefix}` })), transformRules),
    ]
  }

  return [
    variantParentMatcher('dark', '@media (prefers-color-scheme: dark)', transformRules),
    variantParentMatcher('light', '@media (prefers-color-scheme: light)', transformRules),
  ]
}
