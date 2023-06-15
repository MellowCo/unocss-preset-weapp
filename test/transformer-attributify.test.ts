import { createGenerator } from '@unocss/core'
import { describe, expect, test } from 'vitest'
import MagicString from 'magic-string'

import { transformerAttributify } from '../src/transformer'
import { presetWeapp } from '../src'

const originalCode = `
<template>
<view
  text="sm green"
  p="y-2 x-4"
  m="4"
>
xx
</view>

<view flex="~ col wrap" class="m4">
  xxx
</view>


<view even:bg-red odd:bg-green>
  1
</view>

<view first:bg-red last:bg-green bg-blue mb-1>
  1
</view>
</template>
`

describe('transformerAttributify', () => {
  const uno = createGenerator({
    presets: [
      presetWeapp(),
    ],
  })

  test('transform', async () => {
    const code = new MagicString(originalCode)
    await transformerAttributify().transform(code, 'app.vue', { uno, tokens: new Set() } as any)
    await expect(code.toString()).toMatchFileSnapshot('./assets/output/transformer-attributify.vue')
  })
})
