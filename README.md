# unocss-preset-wxapp

## Installation

```sh
npm i unocss-preset-wxapp unocss --save-dev # with npm
yarn add unocss-preset-wxapp unocss -D # with yarn
pnpm add unocss-preset-wxapp unocss -D # with pnpm
```

## Usage

> uniapp by vue3

```js
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import Unocss from 'unocss/vite'
import presetWxapp from 'unocss-preset-wxapp'


export default defineConfig({
  plugins: [
    uni(),
    Unocss({
      presets: [
        presetWxapp(),
      ],
    }),
  ],
})
```

##  How to use

### width and height

> 默认单位`rpx`，w-100 => w-100rpx
>
> 百分比`/`改为`_`，h-1/2 => h-1_2

| class       | Properties       |
| ----------- | ---------------- |
| h-1_2       | height: 50%      |
| w-1_3       | width: 33.33333% |
| width-20    | width: 20rpx     |
| width-50rpx | width: 50rpx     |
| h-xs        | height: 180rpx   |
| h-xl        | height: 340rpx   |
| h-full      | height: 100%     |
| h-half      | height: 50%      |

> size预设

```
export const baseSize = {
  'xs': '180rpx',
  'sm': '220rpx',
  'md': '260rpx',
  'lg': '300rpx',
  'xl': '340rpx',
  '2xl': '390rpx',
  '3xl': '440rpx',
  '4xl': '490rpx',
  '5xl': '540rpx',
  '6xl': '590rpx',
  '7xl': '640rpx',
  '8xl': '690rpx',
  '9xl': '740rpx',
  'full': '100%',
  'half': '50%',
}
```



