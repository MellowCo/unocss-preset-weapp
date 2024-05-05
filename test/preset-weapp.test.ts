import { createGenerator } from '@unocss/core'
import { describe, expect, it } from 'vitest'
import presetWeapp from '../src/index'
import { defaultRules } from '../src/transformer'
import { presetMiniTargets } from './assets/preset-mini-targets'
import { presetWeappTargets } from './assets/preset-weapp-targets'

describe('preset-weapp', () => {
  it('targets', async () => {
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

    const code = [...presetMiniTargets, ...presetWeappTargets].join(' ')
    const { css } = await uno.generate(code)
    await expect(css).toMatchFileSnapshot('./assets/output/preset-weapp/targets.css')
  })

  it('rules targets', async () => {
    const uno = createGenerator({
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
