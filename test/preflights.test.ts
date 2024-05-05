import { createGenerator } from '@unocss/core'
import { describe, expect, it } from 'vitest'
import presetWeapp from '../src'

describe('preflights', () => {
  it('original preflight', async () => {
    const uno = createGenerator({
      presets: [
        presetWeapp(),
      ],
    })
    const { css } = await uno.generate('')
    await expect(css).toMatchFileSnapshot('./assets/output/preflight/original.css')
  })

  it('preflight root can be customized with string', async () => {
    const uno = createGenerator({
      presets: [
        presetWeapp(),
      ],
      theme: {
        preflightRoot: ':root',
      },
    })
    const { css } = await uno.generate('')
    await expect(css).toMatchFileSnapshot('./assets/output/preflight/custom.css')
  })

  it('preflight root can be customized with array', async () => {
    const uno = createGenerator({
      presets: [
        presetWeapp(),
      ],
      theme: {
        preflightRoot: ['.scope-1', '[data-scope-2]'],
      },
    })
    const { css } = await uno.generate('')
    await expect(css).toMatchFileSnapshot('./assets/output/preflight/custom-array.css')
  })

  it('preflight root can be disabled using empty array', async () => {
    const uno = createGenerator({
      presets: [
        presetWeapp(),
      ],
      theme: {
        preflightRoot: [],
      },
    })
    const { css } = await uno.generate('')
    expect(css).eql('')
  })
})
