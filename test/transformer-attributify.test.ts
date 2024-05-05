import { createGenerator } from '@unocss/core'
import { describe, expect, it } from 'vitest'
import MagicString from 'magic-string'

import { transformerAttributify } from '../src/transformer'
import { presetWeapp } from '../src'

const originalCode = `
<template>
<input type="text"  placeholder="What's your name?" />

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

<view bg="cover active:red-400" text="base hover:blue-600/40">
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

  it('base transformer attributify', async () => {
    const code = new MagicString(originalCode)
    await transformerAttributify().transform(code, 'app.vue', { uno, tokens: new Set() } as any)
    await expect(code.toString()).toMatchFileSnapshot('./assets/output/transformer-attributify/base.vue')
  })
})
