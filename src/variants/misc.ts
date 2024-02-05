import type { Variant } from '@unocss/core'
import { hasThemeFn, transformThemeFn } from '@unocss/rule-utils'
import { getBracket, h, variantGetBracket, variantGetParameter } from '../utils'

export const variantSelector: Variant = {
  name: 'selector',
  match(matcher, ctx) {
    const variant = variantGetBracket('selector-', matcher, ctx.generator.config.separators)
    if (variant) {
      const [match, rest] = variant
      const selector = h.bracket(match)
      if (selector) {
        return {
          matcher: rest,
          selector: () => selector,
        }
      }
    }
  },
}

export const variantCssLayer: Variant = {
  name: 'layer',
  match(matcher, ctx) {
    const variant = variantGetParameter('layer-', matcher, ctx.generator.config.separators)
    if (variant) {
      const [match, rest] = variant
      const layer = h.bracket(match) ?? match
      if (layer) {
        return {
          matcher: rest,
          handle: (input, next) => next({
            ...input,
            parent: `${input.parent ? `${input.parent} $$ ` : ''}@layer ${layer}`,
          }),
        }
      }
    }
  },
}

export const variantInternalLayer: Variant = {
  name: 'uno-layer',
  match(matcher, ctx) {
    const variant = variantGetParameter('uno-layer-', matcher, ctx.generator.config.separators)
    if (variant) {
      const [match, rest] = variant
      const layer = h.bracket(match) ?? match
      if (layer) {
        return {
          matcher: rest,
          layer,
        }
      }
    }
  },
}

export const variantScope: Variant = {
  name: 'scope',
  match(matcher, ctx) {
    const variant = variantGetBracket('scope-', matcher, ctx.generator.config.separators)
    if (variant) {
      const [match, rest] = variant
      const scope = h.bracket(match)
      if (scope) {
        return {
          matcher: rest,
          selector: s => `${scope} $$ ${s}`,
        }
      }
    }
  },
}

export const variantVariables: Variant = {
  name: 'variables',
  match(matcher, ctx) {
    if (!matcher.startsWith('['))
      return

    const [match, rest] = getBracket(matcher, '[', ']') ?? []
    if (!(match && rest))
      return

    let newMatcher: string | undefined
    for (const separator of ctx.generator.config.separators) {
      if (rest.startsWith(separator)) {
        newMatcher = rest.slice(separator.length)
        break
      }
    }

    if (newMatcher == null)
      return

    const variant = h.bracket(match) ?? ''
    const useParent = variant.startsWith('@')
    if (!(useParent || variant.includes('&')))
      return

    return {
      matcher: newMatcher,
      handle(input, next) {
        const updates = useParent
          ? {
              parent: `${input.parent ? `${input.parent} $$ ` : ''}${variant}`,
            }
          : {
              selector: variant.replace(/&/g, input.selector),
            }
        return next({
          ...input,
          ...updates,
        })
      },
    }
  },
  multiPass: true,
}

const els = ['view', 'button', 'text', 'image', 'uni-view', 'uni-button', 'uni-text', 'uni-image', 'taro-view-core', 'taro-image-core', 'taro-text-core', 'taro-button-core']

export const variantSpaceAndDivide: Variant = (matcher) => {
  if (matcher.startsWith('_'))
    return

  if (/space-([xy])-(-?.+)$/.test(matcher) || /divide-/.test(matcher)) {
    return {
      matcher,
      selector: (input) => {
        /**
         * [ WXSS 文件编译错误] ./app.wxss
            error at token ":"
              1780 | }
              1781 |
            > 1782 | .space-x-4 > :not([hidden]) ~ :not([hidden]) {
                  |             ^
              1783 |   margin-left: calc(1rem * calc(1 - var(--un-space-x-reverse)));
              1784 |   margin-right: calc(1rem * var(--un-space-x-reverse));
              1785 |
            at files://app.wxss#1782(env: Windows,mp,1.06.2209190; lib: 2.25.0)
         */
        // 小程序 不支持 :not([hidden])~:not([hidden])
        // return `${input}>:not([hidden])~:not([hidden])`

        // > uni-view + uni-view
        const selectors = els.map((el) => {
          return `${input}>${el}+${el}`
        })

        return selectors.join(',')
      },
    }
  }
}

export const variantTheme: Variant = {
  name: 'theme-variables',
  match(matcher, ctx) {
    if (!hasThemeFn(matcher))
      return

    return {
      matcher,
      handle(input, next) {
        return next({
          ...input,
          //  entries: [ [ '--css-spacing', '28rpx' ] ],
          entries: JSON.parse(transformThemeFn(JSON.stringify(input.entries), ctx.theme)),
          sort: 9,
        })
      },
    }
  },
}
