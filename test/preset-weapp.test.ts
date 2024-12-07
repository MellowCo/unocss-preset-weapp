import { createGenerator } from '@unocss/core'
import { describe, expect, it } from 'vitest'
import presetWeapp from '../src/index'
import { defaultRules } from '../src/transformer'
import { presetMiniTargets, targets2 } from './assets/preset-mini-targets'
import { presetWeappTargets } from './assets/preset-weapp-targets'

const uno = await createGenerator({
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
  it('targets', async () => {
    const code = [...presetMiniTargets, ...presetWeappTargets].join(' ')
    const { css } = await uno.generate(code)
    await expect(css).toMatchFileSnapshot('./assets/output/preset-weapp/targets.css')
  })

  it('targets 2', async () => {
    const code = targets2.join(' ')
    const { css } = await uno.generate(code, { preflights: false })
    const { css: css2 } = await uno.generate(code, { preflights: false })

    await expect(css).toMatchFileSnapshot('./assets/output/preset-weapp/targets-2.css')
    expect(css).toEqual(css2)
  })

  it('rules targets', async () => {
    const uno = await createGenerator({
      presets: [
        presetWeapp({
          transformRules: {
            ...defaultRules,
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

    const code = presetMiniTargets.join(' ')
    const { css } = await uno.generate(code)
    await expect(css).toMatchFileSnapshot('./assets/output/preset-weapp/targets-custom-rules.css')
  })
})
