import type { Rule } from '@unocss/core'
import type { Theme } from '../theme'

export const safeArea: Rule<Theme>[] = [
  ['p-safe', { padding: 'env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)' }],
  ['pt-safe', { 'padding-top': 'env(safe-area-inset-top)' }],
  ['pb-safe', { 'padding-bottom': 'env(safe-area-inset-bottom)' }],
  ['pl-safe', { 'padding-left': 'env(safe-area-inset-left)' }],
  ['pr-safe', { 'padding-right': 'env(safe-area-inset-right)' }],
]
