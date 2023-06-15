import { createGenerator } from '@unocss/core'
import { describe, expect, test } from 'vitest'
import presetWeapp from '../src/index'
import { presetMiniTargets } from './assets/preset-mini-targets'
import { presetWeappTargets } from './assets/preset-weapp-targets'

const uno = createGenerator({
  presets: [
    presetWeapp(),
  ],
  theme: {
    colors: {
      custom: {
        a: 'var(--custom)',
        b: 'rgba(var(--custom), %alpha)',
      },
    },
  },
})

describe('preset-weapp', () => {
  test('presetMiniTargets', async () => {
    const code = [...presetMiniTargets, ...presetWeappTargets].join(' ')
    const { css } = await uno.generate(code)
    await expect(css).toMatchFileSnapshot('./assets/output/preset-weapp.css')
  })
})
