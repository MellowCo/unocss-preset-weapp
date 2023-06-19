import { createGenerator } from '@unocss/core'
import { expect, it } from 'vitest'
import presetWeapp from '../src/index'

it('split string with custom separator', async () => {
  const uno = createGenerator({
    presets: [
      presetWeapp(),
    ],
    separators: ['__', '_a_'],
  })

  const cssTargets = [
    'hover__bg-green-500',
    'active__bg-red-500',
    'hover_a_bg-green-500',
    'active_a_bg-red-500',
  ]

  const { css } = await uno.generate(cssTargets.join(' '), { preflights: false })
  expect(css).toMatchSnapshot()
})

it('unable to generate token variant with explicit separator without dash', async () => {
  const uno = createGenerator({
    presets: [
      presetWeapp(),
    ],
    separators: '_c_',
  })

  const cssTargets = [
    'hover_c_bg-green-500',
    'active_c_bg-red-500',
  ]

  const { css } = await uno.generate(cssTargets.join(' '), { preflights: false })
  expect(css).toMatchSnapshot()
})
