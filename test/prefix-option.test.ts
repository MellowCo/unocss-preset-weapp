import { createGenerator } from '@unocss/core'
import { describe, expect, test } from 'vitest'
import presetWeapp from '../src/index'

describe('prefix', () => {
  test('preset prefix', async () => {
    const uno = createGenerator({
      presets: [
        presetWeapp({ prefix: 'h-' }),
      ],
      rules: [
        ['bar', { color: 'bar' }, { prefix: 'bar-' }],
      ],
      shortcuts: [
        ['shortcut', 'bar-bar', { prefix: 'bar-' }],
      ],
    })

    const unexpected = [
      'text-red',
      'hover:p4',
      'bar',
      'shortcut',
    ]

    const expected = [
      'h-text-red',
      'hover:h-p4',
      'bar-bar',
      'bar-shortcut',
      'h-space-x-4',
      'h-divide-x',
    ]

    const { css, matched } = await uno.generate(new Set([
      ...unexpected,
      ...expected,
    ]), { preflights: false })

    expect([...matched].sort()).toEqual(expected.sort())
    expect(css).toMatchSnapshot()
  })

  test('multiple preset prefix', async () => {
    const uno = createGenerator({
      presets: [
        presetWeapp({ prefix: ['h-', 'x-'] }),
      ],
      rules: [
        ['bar', { color: 'bar' }, { prefix: ['bar-', 'foo-', ''] }],
        [/^regex$/, () => ({ color: 'regex' }), { prefix: ['bar-', 'foo-', ''] }],
      ],
      shortcuts: [
        ['shortcut', 'bar-bar', { prefix: ['bar-', 'x-'] }],
      ],
    })

    const unexpected = [
      'text-red',
      'hover:p4',
      'bar',
      'shortcut',
    ]

    const expected = [
      'h-text-red',
      'hover:h-p4',

      'bar-bar',
      'foo-bar',
      'bar',

      'bar-regex',
      'foo-regex',
      'regex',

      'bar-shortcut',
      'x-shortcut',

    ]

    const { css, matched } = await uno.generate(new Set([
      ...unexpected,
      ...expected,
    ]), { preflights: false })

    expect([...matched].sort()).toEqual(expected.sort())
    expect(css).toMatchSnapshot()
  })
})
