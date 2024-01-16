import { createGenerator, escapeSelector } from '@unocss/core'
import { describe, expect, it, test } from 'vitest'
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
      'custom': {
        a: 'var(--custom)',
        b: 'rgba(var(--custom), %alpha)',
      },
      'a': {
        b: {
          c: '#514543',
        },
        camelCase: '#234',
      },
      'with-hyphen': '#123456',
      'numbered-123': '#123',
      'numbered321': '#321',
    },
    spacing: {
      safe: 'max(env(safe-area-inset-left), env(safe-area-inset-right))',
    },
    data: {
      dropdown: 'data-bs-toggle="dropdown"',
    },
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

    await expect(css).toMatchFileSnapshot('./assets/output/preset-mini/dark-customizing-selector.css')
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
    await expect(css).toMatchFileSnapshot('./assets/output/preset-mini/targets.css')
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

    await expect(css).toMatchFileSnapshot('./assets/output/preset-mini/custom-var-prefix.css')
  })

  test('empty prefix', async () => {
    const uno = createGenerator({
      presets: [
        presetWeapp({
          variablePrefix: '',
        }),
      ],
    })

    const { css } = await uno.generate([
      'text-opacity-50',
      'text-red',
      'scale-100',
    ].join(' '), { preflights: false })

    await expect(css).toMatchFileSnapshot('./assets/output/preset-mini/empty-prefix.css')
  })

  test('nested theme colors', async () => {
    const { css, matched } = await uno.generate([
      'text-a-b-c',
      'text-a-camel-case',
      'bg-a-b-c',
    ], { preflights: false })

    expect(css).toMatchFileSnapshot('./assets/output/preset-mini/nested-theme-colors.css')
    expect(matched.size).toBe(3)
  })

  test('non-nested theme colors with hyphens and/or numbers', async () => {
    const { css, matched } = await uno.generate([
      'text-with-hyphen',
      'bg-with-hyphen',
      'text-numbered-123',
      'bg-numbered321',
    ], { preflights: false })

    expect(css).toMatchFileSnapshot('./assets/output/preset-mini/non-nested-theme-colors.css')
    expect(matched.size).toBe(4)
  })

  test('none targets', async () => {
    const { css, matched } = await uno.generate(new Set(presetMiniNonTargets), { minify: true, preflights: false })

    expect([...matched]).toEqual([])
    expect(css).toEqual('')
  })

  test('fontSize theme', async () => {
    const uno = createGenerator({
      presets: [
        presetWeapp(),
      ],
      theme: {
        fontSize: {
          small: '1rem',
          medium: ['2rem', '1.5em'],
          xs: '2rem',
          lg: ['3rem', '1.5em'],
        },
      },
    })

    const { css } = await uno.generate([
      'text-small',
      'text-medium',
      'text-xs',
      'text-lg',
    ].join(' '), { preflights: false })

    // @ts-expect-error types
    expect(uno.config.theme.fontSize.lg).toEqual(['3rem', '1.5em'])
    await expect(css).toMatchFileSnapshot('./assets/output/preset-mini/font-size-theme.css')
  })

  test('fontWeight theme', async () => {
    const uno = createGenerator({
      presets: [
        presetWeapp(),
      ],
      theme: {
        fontWeight: {
          head: '900',
          foot: '100',
        },
      },
    })

    const { css } = await uno.generate([
      'font-head',
      'font-foot',
    ].join(' '), { preflights: false })

    // @ts-expect-error types
    expect(uno.config.theme.fontWeight.head).toEqual('900')
    await expect(css).toMatchFileSnapshot('./assets/output/preset-mini/font-weight-theme.css')
  })

  test('dark class', async () => {
    const uno = createGenerator({
      presets: [
        presetWeapp(),
      ],
    })

    const { css } = await uno.generate([
      'dark:scope-[.hello]:text-1/2',
      'scope-[[world]]:light:text-1/3',
    ].join(' '), {
      preflights: false,
    })

    await expect(css).toMatchFileSnapshot('./assets/output/preset-mini/dark-class.css')
  })

  test('the :active pseudo is sorted and separated after other pseudo', async () => {
    const uno = createGenerator({
      presets: [
        presetWeapp(),
      ],
    })

    const { css } = await uno.generate([
      'hover:bg-blue-3',
      'active:bg-blue-3',
      'focus:bg-blue-3',
    ].join(' '), {
      preflights: false,
    })

    await expect(css).toMatchFileSnapshot('./assets/output/preset-mini/active-pseudo.css')
  })

  test('css variable with `{` `}` will not generate css ', async () => {
    const uno = createGenerator({
      presets: [
        presetWeapp(),
      ],
    })

    const { css } = await uno.generate([
      // eslint-disable-next-line no-template-curly-in-string
      'c-${variable}',
    ].join(' '), {
      preflights: false,
    })

    expect(css).toBe('')
  })

  test('define breakpoints with other unit', async () => {
    const uno = createGenerator({
      presets: [
        presetWeapp(),
      ],
      theme: {
        breakpoints: {
          md: '48rem',
          lg: '64rem',
          xl: '1000px',
        },
      },
    })

    const { css } = await uno.generate([
      'md:text-xl',
      '<lg:text-sm',
      '~md:text-base',
      '<xl:text-3xl',
    ], { preflights: false })

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      @media (max-width: 999.9px){
      .\\<xl_cl_text-3xl{font-size:60rpx;line-height:72rpx;}
      }
      @media (max-width: calc(64rem - 0.1px)){
      .\\<lg_cl_text-sm{font-size:28rpx;line-height:40rpx;}
      }
      @media (min-width: 48rem){
      .md_cl_text-xl{font-size:40rpx;line-height:56rpx;}
      }
      @media (min-width: 48rem) and (max-width: calc(64rem - 0.1px)){
      .\\~md_cl_text-base{font-size:32rpx;line-height:48rpx;}
      }"
    `)
  })

  test('theme for zIndex', async () => {
    const uno = createGenerator({
      presets: [
        presetWeapp(),
      ],
      theme: {
        zIndex: {
          header: '500',
        },
      },
    })
    expect((await uno.generate('z-header', { preflights: false })).css)
      .toMatchInlineSnapshot(`
        "/* layer: default */
        .z-header{z-index:500;}"
      `)
  })

  it('theme font-size with letter-space', async () => {
    const uno = createGenerator({
      presets: [
        presetWeapp(),
      ],
      theme: {
        fontSize: {
          normal: '24px',
          ls: ['8rem', '1', '2.25rem'],
          obj: ['8rem', {
            'line-height': '2.25rem',
            'letter-spacing': '-0.02em',
            'font-weight': '700',
          }],
        },
      },
    })

    expect((await uno.generate('text-sm text-normal text-ls text-obj', { preflights: false })).css)
      .toMatchInlineSnapshot(`
        "/* layer: default */
        .text-ls{font-size:8rem;line-height:1;letter-spacing:2.25rem;}
        .text-normal{font-size:24px;line-height:1;}
        .text-obj{font-size:8rem;line-height:2.25rem;letter-spacing:-0.02em;font-weight:700;}
        .text-sm{font-size:28rpx;line-height:40rpx;}"
      `)
  })

  it('override colors differently', async () => {
    const uno = createGenerator({
      presets: [
        presetWeapp(),
      ],
      theme: {
        colors: {
          blue: {
            400: 'rgb(0 0 400)',
          },
        },
        textColor: {
          blue: {
            400: 'rgb(0 0 700)',
          },
        },
      },
    })

    expect((await uno.generate('bg-blue-400 text-blue-400', { preflights: false })).css)
      .toMatchInlineSnapshot(`
        "/* layer: default */
        .bg-blue-400{--un-bg-opacity:1;background-color:rgba(0,0,400,var(--un-bg-opacity));}
        .text-blue-400{--un-text-opacity:1;color:rgba(0,0,400,var(--un-text-opacity));}"
      `)
  })
})
