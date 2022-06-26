# unocss-preset-wxapp

[unocss](https://github.com/unocss/unocss) 小程序预设

## 安装

```sh
npm i unocss-preset-wxapp unocss --save-dev # with npm
yarn add unocss-preset-wxapp unocss -D # with yarn
pnpm add unocss-preset-wxapp unocss -D # with pnpm
```

## 引入插件

> uniapp by vue3

* vite.config.ts

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

* main.ts

```js
import 'uno.css'
```



##  使用

<a href="https://uno.antfu.me/">🧑‍💻 Interactive Docs <sup>Beta</sup></a>

> 默认单位`rpx`，w-100 => w-100rpx
>
> 百分比`/`改为`_`，h-1/2 => h-1_2

### width and height

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

| class            | Properties                                        |
| ---------------- | ------------------------------------------------- |
| border-2         | border-width:2rpx;border-style:solid;             |
| b-2              | border-width:2rpx;border-style:solid;             |
| border-dashed    | border-style:dashed                               |
| rounded-1_2      | border-radius:50%                                 |
| rounded-md       | border-radius:12rpx                               |

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

| class                                                       | Properties                                                   |
| ----------------------------------------------------------- | ------------------------------------------------------------ |
| border-red-100   border-red100   border-red1   border-red-1 | --un-border-opacity:1;  border-color:rgba(254,226,226,var(--un-border-opacity)) |
| border-opacity-20                                           | --un-border-opacity:0.2                                      |
| border-y-op-30                                              | --un-border-top-opacity:0.3;   --un-border-bottom-opacity:0.3 |
| border-b-op40                                               | --un-border-bottom-opacity:0.4;                              |
| border-black_10                                             | border-color:rgba(0,0,0,0.1)                                 |
| border-green-100_20                                         | border-color:rgba(220,252,231,0.2)                           |



---
### color

| class                                | Properties                                                   |
| ------------------------------------ | ------------------------------------------------------------ |
| op-10 opacity-10                     | opacity:0.1                                                  |
| color-hex-157   c-hex-157            | --un-text-opacity:1;color:rgba(17,85,119,var(--un-text-opacity)) |
| c-hex-157_10                         | color:rgba(17,85,119,0.1)                                    |
| color-blue   color-blue-400   c-blue | --un-text-opacity:1;color:rgba(96,165,250,var(--un-text-opacity)) |
| text-red-100 text-red100 text-red1   | --un-text-opacity:1;color:rgba(254,226,226,var(--un-text-opacity)) |
| text-red-100_20                      | color:rgba(254,226,226,0.2)                                  |
