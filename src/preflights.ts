import type { Preflight, PreflightContext } from '@unocss/core'
import { entriesToCss } from '@unocss/core'
import type { Theme } from './theme'

const wxPrefix = 'page'
const h5Prefix = '*'

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

/**
 * taro h5替换prefix
 * @param isTaroH5
 */
export default function (isTaroH5: boolean): Preflight[] {
  return [
    {
      layer: 'preflights',
      getCSS(ctx: PreflightContext<Theme>) {
        if (ctx.theme.preflightBase) {
          const css = entriesToCss(Object.entries(ctx.theme.preflightBase))
          return `${isTaroH5 ? h5Prefix : wxPrefix},::before,::after{${css}}::backdrop{${css}}`
        }
      },
    },
  ]
}
