import { createGenerator, escapeSelector } from '@unocss/core'
import { describe, expect, test } from 'vitest'
import presetWeapp from '../src/index'
import { presetMiniNonTargets, presetMiniTargets } from './assets/preset-mini-targets'

const uno = createGenerator({
  presets: [
    presetWeapp({
      dark: 'media',
      variablePrefix: 'licl-',
      transform: false,
    }),
  ],
  theme: {
    colors: {
      custom: {
        a: 'var(--custom)',
        b: 'rgba(var(--custom), %alpha)',
      },
      a: {
        b: {
          c: '#514543',
        },
        camelCase: '#234',
      },
    },
    spacing: {
      safe: 'max(env(safe-area-inset-left), env(safe-area-inset-right))',
    },
  },
  data: {
    dropdown: 'data-bs-toggle="dropdown"',
  },
})

describe('preset-mini', () => {
  test('dark customizing selector', async () => {
    const uno = createGenerator({
      presets: [
        presetWeapp({
          dark: {
            dark: '[data-mode="dark"]',
            light: '[data-mode="light"]',
          },
          transform: false,
        }),
      ],
    })

    const { css } = await uno.generate([
      'dark:bg-white',
      'dark:text-lg',
      'dark:hover:rounded',
      'light:bg-black',
      'light:text-sm',
      'light:disabled:w-full',
    ].join(' '), {
      preflights: false,
    })

    expect(css).toMatchSnapshot()
  })

  test('targets', async () => {
    const code = presetMiniTargets.join(' ')
    const { css } = await uno.generate(code)
    const { css: css2 } = await uno.generate(code)

    const unmatched = []
    for (const i of presetMiniTargets) {
      if (!css.includes(escapeSelector(i)))
        unmatched.push(i)
    }
    expect(unmatched).toEqual([])
    expect(css).toMatchSnapshot()
    expect(css).toEqual(css2)
  })

  test('custom var prefix', async () => {
    const uno = createGenerator({
      presets: [
        presetWeapp({
          variablePrefix: 'hi-',
        }),
      ],
    })

    const { css } = await uno.generate([
      'text-opacity-50',
      'text-red',
      'scale-100',
    ].join(' '), { preflights: false })

    expect(css).toMatchSnapshot()
  })

  test('nested theme colors', async () => {
    const { css, matched } = await uno.generate([
      'text-a-b-c',
      'text-a-camel-case',
      'bg-a-b-c',
    ], { preflights: false })

    expect(css).toMatchSnapshot('')
    expect(matched.size).toBe(3)
  })

  test('none targets', async () => {
    const { css, matched } = await uno.generate(new Set(presetMiniNonTargets), { minify: true, preflights: false })

    expect(css).toMatchInlineSnapshot('""')
    expect([...matched]).toEqual([])
  })

  test('preflight root can be customized with string', async () => {
    const uno = createGenerator({
      presets: [
        presetWeapp(),
      ],
      theme: {
        preflightRoot: ':root',
      },
    })
    const { css } = await uno.generate('')
    expect(css).toMatchSnapshot()
  })

  test('preflight root can be customized with array', async () => {
    const uno = createGenerator({
      presets: [
        presetWeapp(),
      ],
      theme: {
        preflightRoot: ['.scope-1', '[data-scope-2]'],
      },
    })
    const { css } = await uno.generate('')
    expect(css).toMatchSnapshot()
  })

  test('preflight root can be disabled using empty array', async () => {
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
