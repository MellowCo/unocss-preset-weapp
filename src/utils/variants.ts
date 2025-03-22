import type { Arrayable, VariantHandler, VariantHandlerContext, VariantObject } from '@unocss/core'

import { escapeRegExp, toArray } from '@unocss/core'
import { cacheRestoreSelector, defaultRules } from 'unplugin-transform-class/utils'

export function variantMatcher(name: string, handler: Arrayable<(input: VariantHandlerContext) => Record<string, any>>, transformRules: Record<string, string> = defaultRules): VariantObject {
  let re: RegExp

  return {
    name,
    match(input, ctx) {
      if (!re)
        re = new RegExp(`^${escapeRegExp(name)}(?:${ctx.generator.config.separators.join('|')})`)

      input = cacheRestoreSelector(input, transformRules)
      const match = input.match(re)

      if (match) {
        const matcher = input.slice(match[0].length)
        const handlers: VariantHandler[] = toArray(handler).map(handler => ({
          matcher,

          handle: (input, next) => next({
            ...input,
            ...handler(input),
          }),
        }))
        return handlers.length === 1
          ? handlers[0]
          : handlers
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
