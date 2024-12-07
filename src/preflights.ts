import type { Preflight, PreflightContext } from '@unocss/core'
import type { PresetWeappOptions } from '.'
import type { Theme } from './theme'
import { entriesToCss, toArray } from '@unocss/core'

const wxPrefix = ['page,root-portal-content,::before,::after']
const taroPrefix = ['*,::before,::after']
const uniappPrefix = ['uni-page-body,::before,::after']
// const defaultPrefix = ['*,::before,::after', '::backdrop']

export default function (options: PresetWeappOptions): Preflight<Theme>[] | undefined {
  if (options.preflight) {
    return [
      {
        layer: 'preflights',
        getCSS({ theme, generator }) {
          if (theme.preflightBase) {
            // let entries = entriesToCss(Object.entries(theme.preflightBase))
            let entries = Object.entries(theme.preflightBase)
            if (options.preflight === 'on-demand') {
              const keys = new Set(Array.from(generator.activatedRules).map(r => r[2]?.custom?.preflightKeys).filter(Boolean).flat())
              entries = entries.filter(([k]) => keys.has(k))
            }

            if (entries.length > 0) {
              let css = entriesToCss(entries)
              if (options.variablePrefix !== 'un-') {
                css = css.replace(/--un-/g, `--${options.variablePrefix}`)
              }

              let preflightRoot = theme.preflightRoot

              if (!preflightRoot) {
                if (options.isH5)
                  preflightRoot = options.platform === 'uniapp' ? uniappPrefix : taroPrefix
                else
                  preflightRoot = wxPrefix
              }

              const roots = toArray(preflightRoot)
              return roots.map(root => `${root}{${css}}`).join('')
            }
          }
        },
      },
    ]
  }
}
