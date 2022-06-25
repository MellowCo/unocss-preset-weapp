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

> 预设

```js
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



---

### border

| class            | Properties                                               |
| ---------------- | -------------------------------------------------------- |
| border-2         | border-width:2rpx;border-style:solid;                    |
| b-2              | border-width:2rpx;border-style:solid;                    |
| border-b         | border-bottom-width:1px;border-bottom-style:solid        |
| border-t-2       | border-top-width:2rpx;border-top-style:solid             |
| border-size-2    | border-width:2rpx                                        |
| border-x-width-3 | border-left-width:3rpx;border-right-width:3rpx           |
| border-t-size-2  | border-top-width:2rpx                                    |
| border-dashed    | border-style:dashed                                      |
| rounded-1_2      | border-radius:50%                                        |
| rounded-t-sm     | border-top-left-radius:4rpx;border-top-right-radius:4rpx |
| border-l-dashed  | border-left-style:dashed                                 |
| rounded-rb-1_2   | border-bottom-right-radius:50%                           |
| rounded-md       | border-radius:12rpx                                      |

> 预设

```js
export const borderRadius = {
  'DEFAULT': '8rpx',
  'none': '0',
  'sm': '4rpx',
  'md': '12rpx',
  'lg': '16rpx',
  'xl': '24rpx',
  '2xl': '32rpx',
  '3xl': '48rpx',
  'full': '9999px',
}
```



---

### border-color

| class                                                        | Properties                                                   |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| border-blue<br>border-blue                                   | --un-border-opacity:1; <br>border-color:rgba(96,165,250,var(--un-border-opacity)); |
| border-red-100<br>border-red100<br>border-red1  <br>border-red-1 | --un-border-opacity:1;<br>border-color:rgba(254,226,226,var(--un-border-opacity)) |
| border-b-blue                                                | --un-border-opacity:1;<br>--un-border-bottom-opacity:var(--un-border-opacity);<br>border-bottom-color:rgba(96,165,250,var(--un-border-bottom-opacity)); |
| border-s-red-100                                             | --un-border-opacity:1;<br>--un-border-inline-start-opacity:var(--un-border-opacity);<br>border-inline-start-color:rgba(254,226,226,var(--un-border-inline-start-opacity)) |
| border-opacity-20                                            | --un-border-opacity:0.2                                      |
| border-y-op-30                                               | --un-border-top-opacity:0.3;<br>--un-border-bottom-opacity:0.3 |
| border-s-opacity50                                           | --un-border-inline-start-opacity:0.5                         |
| border-b-op40                                                | --un-border-bottom-opacity:0.4;                              |
| border-black_10                                              | border-color:rgba(0,0,0,0.1)                                 |
| border-green-100_20                                          | border-color:rgba(220,252,231,0.2)                           |
