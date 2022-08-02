/*
 * @Author: licl
 * @Date: 2022-06-25 13:30:37
 * @LastEditTime: 2022-08-02 21:09:04
 * @LastEditors: licl
 * @Description:
 */
import { createGenerator } from '@unocss/core'
import { describe, expect, test } from 'vitest'
import presetWeapp from '../src/index'
import { align, bg, border, borderColor, color, flex, grid, position, replaceAll, shadow, size, spacing, typography, safeArea } from './assets/weapp'

const uno = createGenerator({
  presets: [
    presetWeapp({
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

  test('border', async () => {
    const code = border.join(' ')
    const { css } = await uno.generate(code)
    expect(css).toMatchSnapshot()
  })

  test('borderColor', async () => {
    const code = borderColor.join(' ')
    const { css } = await uno.generate(code)
    expect(css).toMatchSnapshot()
  })

  test('align', async () => {
    const code = align.join(' ')
    const { css } = await uno.generate(code)
    expect(css).toMatchSnapshot()
  })

  test('color', async () => {
    const code = color.join(' ')
    const { css } = await uno.generate(code)
    expect(css).toMatchSnapshot()
  })

  test('bg', async () => {
    const code = bg.join(' ')
    const { css } = await uno.generate(code)
    expect(css).toMatchSnapshot()
  })

  test('typography', async () => {
    const code = typography.join(' ')
    const { css } = await uno.generate(code)
    expect(css).toMatchSnapshot()
  })

  test('spacing', async () => {
    const code = spacing.join(' ')
    const { css } = await uno.generate(code)
    expect(css).toMatchSnapshot()
  })

  test('shadow', async () => {
    const code = shadow.join(' ')
    const { css } = await uno.generate(code)
    expect(css).toMatchSnapshot()
  })

  test('flex', async () => {
    const code = flex.join(' ')
    const { css } = await uno.generate(code)
    expect(css).toMatchSnapshot()
  })

  test('grid', async () => {
    const code = grid.join(' ')
    const { css } = await uno.generate(code)
    expect(css).toMatchSnapshot()
  })

  test('position', async () => {
    const code = position.join(' ')
    const { css } = await uno.generate(code)
    expect(css).toMatchSnapshot()
  })

  test('replaceAll', async () => {
    const code = replaceAll.join(' ')
    const { css } = await uno.generate(code)
    expect(css).toMatchSnapshot()
  })

  test('safeArea', async () => {
    const code = safeArea.join(' ')
    const { css } = await uno.generate(code)
    expect(css).toMatchSnapshot()
  })
})
