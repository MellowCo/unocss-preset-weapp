import { createGenerator } from '@unocss/core'
import MagicString from 'magic-string'
import { describe, expect, it } from 'vitest'

import { presetWeapp } from '../src'
import { transformerClass } from '../src/transformer'

describe('transformerClass', () => {
  const uno = createGenerator({
    presets: [
      presetWeapp(),
    ],
  })

  it('base transform vue', async () => {
    const originalCode = `
      <view class="bg-[url(https://img.cdn.sugarat.top/mdImg/MTY2ODA4OTc3MjcyMg==unocss-icon-gray.svg)]" />
      <view class="bg-[--l-tab-bar-bg-color,theme(backgroundColor.container)]" />
      <view :class="{'bg-[--l-tab-bar-bg-color,theme(backgroundColor.container)]': true}" />

      <view class="center h-200 rounded-md bg-gradient-to-t from-#f39c22/60 via-#2ecc71:80 to-#9b59b6_70 mb-3">
        to-t
      </view>

      <view class="h-200 mb3 bg-white center shadow-[0px_4px_4px_0px_rgba(237,_0,_0,_1)]">
        [0px_4px_4px_0px_rgba(237,_0,_0,_1)]
      </view>

      <view class="animate-[4s_linear_0s_infinite_alternate_bounce] bg-indigo text-white mb-6 p-2">
        animate-[4s_linear_0s_infinite_alternate_bounce]
      </view>

      <view class="bg-[#3498db]:60">
        bg-[#3498db] 60
      </view>

      <view class="even:bg-red odd:bg-green">
        2
      </view>

      <view class="first:bg-red last:bg-green bg-blue mb-1">
        1 
      </view>

      <view class="c-[#157]:60">
        c-[#157]:60
      </view>

      <view
      class="mb-3 text-xs"
      :class="{ 'bg-blue-600:80': flag, 'text-green-600/80': !flag }"
      >
        { 'bg-blue-600:80': flag, 'text-green-600/80': !flag }
      </view>

      <view
      class="mb-3 text-xs"
      :class="[
        flag ? 'bg-blue-600/80' : 'bg-red-600:80',
        !flag ? 'text-yellow-800/80' : 'text-green-800/80',
      ]"
      >
      [
      flag ? 'bg-blue-600/80' : 'bg-red-600:80',
      !flag ? 'text-yellow-800/80' : 'text-green-800/80',
      ]
      </view>
`

    const code = new MagicString(originalCode)
    await transformerClass().transform(code, 'app.vue', { uno, tokens: new Set() } as any)
    await expect(code.toString()).toMatchFileSnapshot('./assets/output/transformer-class/base.vue')
  })

  it('base transform react', async () => {
    const originalCode = `
    export default function(){
      const day = 10
    
      const classnames = (p:any) => {
        return p
      }
    
      return (
        <>
          <div className={day < 20 ? 'c-#e67e22' : "c-[#157]/60"} >剩余 {day} 天</div>
    
      <div className={classnames({
        'c-#e67e22':true, 
          "tracking-[2/5]":false
        })
      }
      />
    
      <div className='tracking-[2/5] bg-teal-200:55'> tracking-[2/5] </div>
      </>
      )
    }
    `

    const code = new MagicString(originalCode)
    await transformerClass().transform(code, 'app.tsx', { uno, tokens: new Set() } as any)
    await expect(code.toString()).toMatchFileSnapshot('./assets/output/transformer-class/base.tsx')
  })
})
