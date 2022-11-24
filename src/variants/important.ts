import type { Variant, VariantContext } from '@unocss/core'
import { restoreSelector } from 'unplugin-transform-class/utils'
import type { Theme } from '../theme'

export const variantImportant: Variant = {
  name: 'important',
  match(matcher, { theme }: VariantContext<Theme>) {
    let base: string | undefined

    matcher = restoreSelector(matcher, theme?.transformRules)
    const match = matcher.match(/^(important[:-]|!)/)

    if (match)
      base = matcher.slice(match[0].length)

    else if (matcher.endsWith('!'))
      base = matcher.slice(0, -1)

    if (base) {
      return {
        matcher: base,
        body: (body) => {
          body.forEach((v) => {
            if (v[1])
              v[1] += ' !important'
          })
          return body
        },
      }
    }
  },
}
