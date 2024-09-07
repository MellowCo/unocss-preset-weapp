import { warnOnce } from '@unocss/core'
import { variantGetParameter } from '@unocss/rule-utils'
import type { VariantContext, VariantObject } from '@unocss/core'
import { h } from '../utils'
import type { Theme } from '../theme'

export const variantContainerQuery: VariantObject = {
  name: '@',
  match(matcher, ctx: VariantContext<Theme>) {
    if (matcher.startsWith('@container'))
      return

    const variant = variantGetParameter('@', matcher, ctx.generator.config.separators)
    if (variant) {
      const [match, rest, label] = variant
      const unbracket = h.bracket(match)
      let container: string | undefined
      if (unbracket) {
        const minWidth = h.numberWithUnit(unbracket)
        if (minWidth)
          container = `(min-width: ${minWidth})`
      }
      else {
        container = ctx.theme.containers?.[match] ?? ''
      }

      if (container) {
        warnOnce('The container query variant is experimental and may not follow semver.')

        let order = 1000 + Object.keys(ctx.theme.containers ?? {}).indexOf(match)

        if (label)
          order += 1000

        return {
          matcher: rest,
          handle: (input, next) => next({
            ...input,
            parent: `${input.parent ? `${input.parent} $$ ` : ''}@container${label ? ` ${label} ` : ' '}${container}`,
            parentOrder: order,
          }),
        }
      }
    }
  },
  multiPass: true,
}
