import { createGenerator } from '@unocss/core'
import { describe, expect, test } from 'vitest'
import presetWeapp from '../src/index'
import { presetMiniTargets } from './assets/preset-mini-targets'

const uno = createGenerator({
  presets: [
    presetWeapp({
      transformRules: {
        '.': '_dl11_',
        '/': '_sl11_',
        ':': '_cl11_',
        '%': '_pes11_',
        '!': '_el11_',
        '#': '_wn11_',
        '(': '_lbl11_',
        ')': '_lbr11_',
        '[': '_lfl11_',
        ']': '_lfr11_',
        '$': '_do11_',
        ',': '_lco11_',
        '=': '_eqe11_',
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
