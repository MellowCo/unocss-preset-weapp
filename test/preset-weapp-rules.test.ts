import { createGenerator } from '@unocss/core'
import { describe, expect, test } from 'vitest'
import presetWeapp from '../src/index'
import { presetMiniTargets } from './assets/preset-mini-targets'

const uno = createGenerator({
  presets: [
    presetWeapp({
      dark: 'media',
      transformRules: {
        '.': '-dr1-',
        '/': '-sr1-',
        ':': '-cr1-',
        '%': '-pr1-',
        '!': '-er1-',
        '#': '-wr1-',
        '(': '-bl1r-',
        ')': '-br1r-',
        '[': '-fl1r-',
        ']': '-fr1r-',
        '$': '-rr1-',
        ',': '-ccc-',
      },
    }),
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

describe('preset-weapp-rules', () => {
  test('presetMiniTargets', async () => {
    const code = presetMiniTargets.join(' ')
    const { css } = await uno.generate(code)
    expect(css).toMatchSnapshot()
  })
})
