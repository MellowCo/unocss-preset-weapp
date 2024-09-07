import { entriesToCss, toArray } from '@unocss/core'
import type { Preflight, PreflightContext } from '@unocss/core'
import type { Theme } from './theme'

const wxPrefix = ['page,root-portal-content,::before,::after']
const taroPrefix = ['*,::before,::after']
const uniappPrefix = ['uni-page-body,::before,::after']
// const defaultPrefix = ['*,::before,::after', '::backdrop']

export default function (isH5: boolean, platform: string): Preflight[] {
  return [
    {
      layer: 'preflights',
      getCSS(ctx: PreflightContext<Theme>) {
        if (ctx.theme.preflightBase) {
          const css = entriesToCss(Object.entries(ctx.theme.preflightBase))
          let preflightRoot = ctx.theme.preflightRoot

          if (!preflightRoot) {
            if (isH5)
              preflightRoot = platform === 'uniapp' ? uniappPrefix : taroPrefix
            else
              preflightRoot = wxPrefix
          }

          const roots = toArray(preflightRoot)
          return roots.map(root => `${root}{${css}}`).join('')
        }
      },
    },
  ]
}
