/*
 * @Author: licl
 * @Date: 2022-06-25 13:30:37
 * @LastEditTime: 2022-06-25 19:21:16
 * @LastEditors: licl
 * @Description:
 */
import { createGenerator } from '@unocss/core'
import { describe, expect, test } from 'vitest'
import presetMini from '../src/index'
import { presetMiniTargets } from './assets/preset-mini-targets'
import { size } from './assets/weapp'

const uno = createGenerator({
  presets: [
    presetMini({
      dark: 'media',
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

describe('preset-weapp', () => {
  test('size', async () => {
    const code = size.join(' ')
    const { css } = await uno.generate(code)
    expect(css).toMatchSnapshot()
  })

  test('targets', async () => {
    const code = presetMiniTargets.join(' ')
    const { css } = await uno.generate(code)

    expect(css).toMatchSnapshot()
  })
})
