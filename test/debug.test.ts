import { createGenerator } from '@unocss/core'
import { expect, it } from 'vitest'
import presetWeapp from '../src/index'

it('debug', async () => {
  const uno = createGenerator({
    presets: [
      presetWeapp(),
    ],
    theme: {
      colors: {
        blackA7: 'hsla(0, 0%, 0%, 0.169)',
      },
    },
  })

  expect((await uno.generate('shadow-[0_0_7.5rem_0_var(--shadow)]', { preflights: false })).css)
    .toMatchInlineSnapshot(`
      "/* layer: default */
      .shadow-_lfl_0_0_7_dl_5rem_0_var_lbl_--shadow_lbr__lfr_{--un-shadow:0 0 7.5rem 0 var(--un-shadow-color, var(--shadow));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}"
    `)

  expect((await uno.generate('shadow-[0_0_7.5rem_0_#000]', { preflights: false })).css)
    .toMatchInlineSnapshot(`
      "/* layer: default */
      .shadow-_lfl_0_0_7_dl_5rem_0__wn_000_lfr_{--un-shadow:0 0 7.5rem 0 var(--un-shadow-color, rgb(0 0 0));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}"
    `)
})
