import { createGenerator } from '@unocss/core'
import { describe, expect, test } from 'vitest'
import presetWeapp from '../src/index'
import { align, animation, background, bg, border, borderColor, color, flex, grid, position, replaceAll, safeArea, shadow, size, spacing, typography } from './assets/weapp'

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

  test('animation', async () => {
    const code = animation.join(' ')
    const { css } = await uno.generate(code)
    expect(css).toMatchSnapshot()
  })

  test('background', async () => {
    const code = background.join(' ')
    const { css } = await uno.generate(code)
    expect(css).toMatchSnapshot()
  })
})
