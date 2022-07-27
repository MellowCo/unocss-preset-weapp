import type { Preflight, PreflightContext } from '@unocss/core'
import { entriesToCss } from '@unocss/core'
import type { Theme } from './theme'

const wxPrefix = 'page'
const taroPrefix = '*'
const uniappPrefix = 'uni-page-body'

// export const preflights: Preflight[] = [
//   {
//     layer: 'preflights',
//     getCSS(ctx: PreflightContext<Theme>) {
//       if (ctx.theme.preflightBase) {
//         const css = entriesToCss(Object.entries(ctx.theme.preflightBase))
//         return `,::before,::after{${css}}::backdrop{${css}}`
//       }
//     },
//   },
// ]

export default function (isH5: boolean, platform: string): Preflight[] {
  return [
    {
      layer: 'preflights',
      getCSS(ctx: PreflightContext<Theme>) {
        if (ctx.theme.preflightBase) {
          const css = entriesToCss(Object.entries(ctx.theme.preflightBase))
          const preflights = `,::before,::after{${css}}::backdrop{${css}}`

          if (isH5)
            return `${platform === 'uniapp' ? uniappPrefix : taroPrefix}${preflights}`
          else
            return `${wxPrefix}${preflights}`
        }
      },
    },
  ]
}
