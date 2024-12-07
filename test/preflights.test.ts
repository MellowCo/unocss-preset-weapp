import { createGenerator } from '@unocss/core'
import { describe, expect, it } from 'vitest'
import presetWeapp from '../src'

describe('on demand generate preflights', () => {
  it('default preflights', async () => {
    const uno = await createGenerator({
      presets: [
        presetWeapp({ preflight: 'on-demand' }),
      ],
    })
    const { css: noPreflightCSS } = await uno.generate('text-red')
    expect(noPreflightCSS).toMatchInlineSnapshot(`
      "/* layer: default */
      .text-red{--un-text-opacity:1;color:rgb(248 113 113 / var(--un-text-opacity));}"
    `)

    const { css: hasPreflightCSS } = await uno.generate('ring')
    expect(hasPreflightCSS).toMatchInlineSnapshot(`
      "/* layer: preflights */
      page,root-portal-content,::before,::after{--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset:var(--un-empty,/*!*/ /*!*/);--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);}
      /* layer: default */
      .ring{--un-ring-width:3px;--un-ring-offset-shadow:var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);--un-ring-shadow:var(--un-ring-inset) 0 0 0 calc(var(--un-ring-width) + var(--un-ring-offset-width)) var(--un-ring-color);box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}"
    `)
  })

  it('custom depends', async () => {
    const uno = await createGenerator({
      presets: [
        presetWeapp({ preflight: 'on-demand' }),
      ],
      rules: [
        [
          'custom-rule',
          { blur: 'var(--un-shadow)' },
          // depend on `--shadow` from presetMini
          { custom: { preflightKeys: '--un-shadow' } },
        ],
      ],
    })
    const { css } = await uno.generate('custom-rule')

    expect(css).toMatchInlineSnapshot(`
      "/* layer: preflights */
      page,root-portal-content,::before,::after{--un-shadow:0 0 rgb(0 0 0 / 0);}
      /* layer: default */
      .custom-rule{blur:var(--un-shadow);}"
    `)
  })
})

describe('preflights', () => {
  it('original preflight', async () => {
    const uno = await createGenerator({
      presets: [
        presetWeapp(),
      ],
    })
    const { css } = await uno.generate('')
    await expect(css).toMatchFileSnapshot('./assets/output/preflight/original.css')
  })

  it('preflight root can be customized with string', async () => {
    const uno = await createGenerator({
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
    const uno = await createGenerator({
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
    const uno = await createGenerator({
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
