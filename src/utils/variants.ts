import { escapeRegExp } from '@unocss/core'
import { cacheRestoreSelector, defaultRules } from 'unplugin-transform-class/utils'
import type { VariantHandlerContext, VariantObject } from '@unocss/core'

export function variantMatcher(name: string, handler: (input: VariantHandlerContext) => Record<string, any>, transformRules: Record<string, string> = defaultRules): VariantObject {
  let re: RegExp

  return {
    name,
    match(input, ctx) {
      if (!re)
        re = new RegExp(`^${escapeRegExp(name)}(?:${ctx.generator.config.separators.join('|')})`)

      input = cacheRestoreSelector(input, transformRules)
      const match = input.match(re)
      if (match) {
        return {
          matcher: input.slice(match[0].length),
          handle: (input, next) => next({
            ...input,
            ...handler(input),
          }),
        }
      }
    },
    autocomplete: `${name}:`,
  }
}

export function variantParentMatcher(name: string, parent: string, transformRules: Record<string, string> = defaultRules): VariantObject {
  let re: RegExp
  return {
    name,
    match(input, ctx) {
      if (!re)
        re = new RegExp(`^${escapeRegExp(name)}(?:${ctx.generator.config.separators.join('|')})`)

      input = cacheRestoreSelector(input, transformRules)
      const match = input.match(re)
      if (match) {
        return {
          matcher: input.slice(match[0].length),
          handle: (input, next) => next({
            ...input,
            parent: `${input.parent ? `${input.parent} $$ ` : ''}${parent}`,
          }),
        }
      }
    },
    autocomplete: `${name}:`,
  }
}
