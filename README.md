# unocss-preset-weapp

[UnoCSS](https://github.com/unocss/unocss)小程序预设 [unocss-preset-weapp](https://github.com/MellowCo/unocss-preset-weapp)

--- 

内置 `transformer` 用于兼容小程序

*  [transformerClass](https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerClass) 转换转义类名，保持`原子化css`的规范去书写`class`
*  [transformerAttributify](https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerAttributify)，用于支持 [attributify mode](https://github.com/unocss/unocss/tree/main/packages/preset-attributify#attributify-mode)
---

升级变化
* 在 `v0.1.14` 后，将 [unplugin-transform-class](https://github.com/MellowCo/unplugin-transform-class) 和 [unplugin-attributify-to-class](https://github.com/MellowCo/unplugin-attributify-to-class) 核心方法，提取到 `transformer` 中，
* 如之前安装 `unplugin-transform-class` 和 `unplugin-attributify-to-class` 可以将其卸载，使用  `transformer` 代替即可
---

重要的事情说三遍 说三遍 说三遍
> @unocss/webpack 0.45.8 之后版本，windows 系统出现 unocss 失效的问题，[unocss issues](https://github.com/unocss/unocss/issues/1455)
>
> 暂时没有解决，请使用 `@unocss/webpack@0.45.8`


## 使用
### uniapp-vue2
[使用配置与DEMO](https://github.com/MellowCo/unocss-preset-weapp/tree/main/examples/uniapp_vue2) 

### uniapp-vue3
[使用配置与DEMO](https://github.com/MellowCo/unocss-preset-weapp/tree/main/examples/uniapp_vue3) 

### taro for react vue2 vue3
[使用配置与DEMO](https://github.com/MellowCo/unocss-preset-weapp/tree/main/examples/taro_vue3) 

### 原生微信小程序 wxml
[使用配置与DEMO](https://github.com/MellowCo/unocss-wechat) 

<img src="https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202207031414239.png" alt="image-20220703141451188" style="zoom:50%;" />

---

## 其他

### 自定义转换规则
> 如需更改默认的转换规则，可通过 `transformRules` 进行修改

* unocss.config.js
```ts
import presetWeapp from 'unocss-preset-weapp'
import { defaultAttributes, defaultIgnoreNonValuedAttributes, transformerAttributify, transformerClass } from 'unocss-preset-weapp/transformer'
import { defineConfig } from 'unocss'

const transformRules = {
  '.': '-d111-',
  '/': '-s111-',
  ':': '-c111-',
  '%': '-p111-',
  '!': '-e111-',
  '#': '-w111-',
  '(': '-b111l-',
  ')': '-b111r-',
  '[': '-f111l-',
  ']': '-f111r-',
  '$': '-r111-',
  ',': '-r222-',
}

export default defineConfig({
  presets: [
    // https://github.com/MellowCo/unocss-preset-weapp
    presetWeapp({
      transformRules,
    }),
  ],
  transformers: [
    // options 见https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerAttributify
    transformerAttributify({
      transformRules,
    }),

    // options 见https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerClass
    transformerClass({
      transformRules,
    }),
  ],
})
```


---
### 原子化 css 冲突问题
> 例如 [tmui](https://tmui.design/)，自身有一套[原子化 css](https://tmui.design/doc/CSSTool/css.html)，导致与 unocss 冲突

![](https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202208311130610.png)

* unocss.config.ts

> `presetWeapp` 配置 `prefix`, `transformerAttributify` 配置 `classPrefix`

```ts
export default defineConfig({
  presets: [
    // https://github.com/MellowCo/unocss-preset-weapp
    presetWeapp({
      prefix: 'li-',
    }),
  ],
  transformers: [
    // options 见https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerAttributify
    transformerAttributify({
      classPrefix: 'li-'
    }),

    // options 见https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerClass
    transformerClass(),
  ],
})
```

> 这样冲突问题就解决了
```html
<view bg="#333" p="x-6 y-10" w100 h200 class="li-bg-red">
  this is a unocss
</view>
```

transform
```html
<view class="li-bg-red li-bg-#333 li-p-x-6 li-p-y-10 li-w100 li-200">
  this is a unocss
</view>
```


![](https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202208311149877.png)

[tm-ui-demo](https://github.com/MellowCo/unplugin-attributify-to-class/tree/master/examples/tm-ui-demo)

## css预设
[UnoCSS 文档](https://uno.antfu.me/)

[Windi CSS文档](https://windicss.org/)

> 默认单位`rpx`，w-100 => w-100rpx
>

### 渐变背景 (v0.1.12)

[gradients](https://cn.windicss.org/utilities/backgrounds/gradients.html)

```html
<view class="bg-gradient-to-t from-#f39c12/60 via-#2ecc71:80 to-#9b59b6_70"></view>
```

<img src="https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202208281630260.png" style="zoom: 50%;" />


### animation (v0.1.9)
参考 [windicss-animation](https://cn.windicss.org/utilities/animations/animation.html) [@windicss/plugin-animations](https://cn.windicss.org/plugins/community/animations.html)

相关动画网站 [animate.css](https://animate.style/) [animista.net](https://animista.net/play/basic)

* unocss.config.js 自定义动画

```js
import presetWeapp from 'unocss-preset-weapp'
import { defineConfig } from 'unocss'

export default defineConfig({
  presets: [
    // https://github.com/MellowCo/unocss-preset-weapp
    presetWeapp(),
  ],
  theme: {
    // v0.1.9 加入动画预设
    // https://github.com/MellowCo/unocss-preset-weapp#animation-v019
    // 设置自定义动画
    animation: {
      keyframes: {
        'my-animation': '{0% {letter-spacing: -0.5em;transform: translateZ(-700px);opacity: 0;}40% {opacity: 0.6;}100% {transform: translateZ(0);opacity: 1;}}',
      },
      durations: {
        'my-animation': '0.8s',
      },
      counts: {
        'my-animation': 'infinite',
      },
      timingFns: {
        'my-animation': 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
      },
    },
  },
})
```

```html
<view class="animate-pulse"></view>

<view class="animate-back-in-down animate-iteration-infinite"></view>

<view class="animate-[4s_linear_0s_infinite_alternate_bounce]"></view>

.animate--fl-4s_linear_0s_infinite_alternate_bounce-fr- {
  -webkit-animation: 4s linear 0s infinite alternate bounce;
  animation: 4s linear 0s infinite alternate bounce;
}
```

<img src="https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202208211944041.gif" style="zoom: 50%;" />

### safe-area (v0.1.6)
| class                             | Properties       |
| ----------------------- | ---------------- |
| p-safe            | padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)     |
| pt-safe          | padding-top: env(safe-area-inset-top) |
| pb-safe           | padding-bottom: env(safe-area-inset-bottom)    |
| pl-safe          | padding-left: env(safe-area-inset-left)     |
| pr-safe               | padding-right: env(safe-area-inset-right)   |

### width and height

| class                      | Properties       |
| -------------------------- | ---------------- |
| h-1_2<br/>h-1/2<br/>h-half | height: 50%      |
| w-1_3<br/>w-1/3            | width: 33.33333% |
| h-full                     | height: 100%     |
| width-20                   | width: 20r       |
| h-xs                       | height: 180rpx   |

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

| class                                      | Properties                            |
| ------------------------------------------ | ------------------------------------- |
| border-2                                   | border-width:2rpx;border-style:solid; |
| b-2                                        | border-width:2rpx;border-style:solid; |
| border-dashed                              | border-style:dashed                   |
| rounded-1_2<br>rounded-1/2<br>rounded-half | border-radius:50%                     |
| rounded-md                                 | border-radius:12rpx                   |

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
  'half': '50%',
  'full': '9999px',
}
```



---

### border-color

| class                                                   | Properties                                                   |
| ------------------------------------------------------- | ------------------------------------------------------------ |
| border-red-100<br/>border-red-1                         | --un-border-opacity:1;  border-color:rgba(254,226,226,var(--un-border-opacity)) |
| border-opacity-20<br/>border-op-20<br/>                 | --un-border-opacity:0.2                                      |
| border-black_10<br/>border-black/10<br/>border-black:10 | border-color:rgba(0,0,0,0.1)                                 |



---
### color

| class                                                        | Properties                                                   |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| op-10<br/>opacity-10                                         | opacity:0.1                                                  |
| color-hex-157<br/>c-hex-157<br/>c-[#157]                     | --un-text-opacity:1;color:rgba(17,85,119,var(--un-text-opacity)) |
| c-hex-157_10<br/>c-hex-157/10<br/>c-[#157]/10<br/>c-[#157]:10<br/>c-[#157]_10 | color:rgba(17,85,119,0.1)                                    |
| color-blue,<br/>color-blue-400,<br/>c-blue                   | --un-text-opacity:1;color:rgba(96,165,250,var(--un-text-opacity)) |
| text-red-100<br/>text-red100<br/>text-red1                   | --un-text-opacity:1;color:rgba(254,226,226,var(--un-text-opacity)) |
| text-red-100_20<br/>text-red-100/20<br/>text-red-100:20      | color:rgba(254,226,226,0.2)                                  |



### bg

| class                                                        | Properties                                                   |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| bg-hex-452233_40<br/>bg-[#452233]_40<br/>bg-[#452233]/40<br/>bg-[#452233]:40 | background-color:rgba(69,34,51,0.4)                          |
| bg-red-100<br/>bg-red1<br/>bg-red100                         | --un-bg-opacity:1;background-color:rgba(254,226,226,var(--un-bg-opacity)) |
| bg-teal-100_55<br/>bg-teal-100/55<br/>bg-teal-100:55         | background-color:rgba(204,251,241,0.55)                      |
| bg-opacity-45                                                | --un-bg-opacity:0.45                                         |


### typography

| class                                    | Properties                                                   |
| ---------------------------------------- | ------------------------------------------------------------ |
| text-base                                | font-size:32rpx;line-height:48rpx                            |
| text-100<br/>text-size-100               | font-size:100rpx                                             |
| text-2em                                 | font-size:2em                                                |
| font-900,<br/>font-black<br/>fw-900      | font-weight:900                                              |
| font-leading-2 <br/>leading-2            | line-height:16rpx                                            |
| indent                                   | text-indent:48rpx                                            |
| indent-2                                 | text-indent:16rpx                                            |
| indent-1_2<br/>indent-1/2<br/>indent-1:2 | text-indent:50%                                              |
| indent-lg                                | text-indent:64rpx                                            |
| text-shadow-lg                           | --un-text-shadow:6rpx 6rpx 12rpx var(--un-text-shadow-color, rgba(0,0,0,0.26)),0 0 10rpx var(--un-text-shadow-color, rgba(15,3,86,0.22));text-shadow:var(--un-text-shadow) |
| word-spacing-2                           | word-spacing:16rpx                                           |
| tracking-2                               | letter-spacing:16rpx                                         |



> fontSize预设 `text-base`   

```ts
export const fontSize: Theme['fontSize'] = {
  'xs': ['24rpx', '32rpx'],
  'sm': ['28rpx', '40rpx'],
  'base': ['32rpx', '48rpx'],
  'lg': ['36rpx', '56rpx'],
  'xl': ['40rpx', '56rpx'],
  '2xl': ['48rpx', '64rpx'],
  '3xl': ['60rpx', '72rpx'],
  '4xl': ['72rpx', '80rpx'],
  '5xl': ['96rpx', '1'],
  '6xl': ['120rpx', '1'],
  '7xl': ['144rpx', '1'],
  '8xl': ['192rpx', '1'],
  '9xl': ['256rpx', '1'],
}
```
```
text-100 => font-size:100rpx
```


> textIndent 预设 `indent-lg`
```js
export const textIndent: Theme['textIndent'] = {
  'DEFAULT': '48rpx',
  'xs': '16rpx',
  'sm': '32rpx',
  'md': '48rpx',
  'lg': '64rpx',
  'xl': '80rpx',
  '2xl': '96rpx',
  '3xl': '128rpx',
}
```

> `leadings`  `tracking`  `word-spacing`  `indent` 计算方式

`indent-2` 原为 `text-indent: 0.5rem` 等于 `8px` ,

小程序使用 `750rpx` 的基准是 `2倍px` 等于 `16rpx` ,

所以计算为 `2*0.5*1rem = 2*0.5*16px = 16rpx`

```css
indent-2    
text-indent: 0.5rem 
text-indent: 16rpx

tracking-2    
letter-spacing: 0.5rem  
letter-spacing:16rpx

word-spacing-2   
word-spacing: 0.5rem  
word-spacing:16rpx

leadings-2  
line-height: 0.5rem  
line-height:16rpx
```

### spacing

| class   | Properties                           |
| ------- | ------------------------------------ |
| p-2,p2  | padding:16rpx                        |
| mx-2    | margin-left:16rpx;margin-right:16rpx |
| -m-lg   | margin:-36rpx                        |
| pl-10px | padding-left:10px                    |
| m-10rpx | margin:10rpx                         |
> 预设

```ts
export const spacing = {
  'DEFAULT': '32rpx',
  'none': '0',
  'xs': '24rpx',
  'sm': '28rpx',
  'md': '36rpx',
  'lg': '40rpx',
  'xl': '48rpx',
  '2xl': '60rpx',
  '3xl': '72rpx',
  '4xl': '96rpx',
  '5xl': '120rpx',
  '6xl': '144rpx',
  '7xl': '192rpx',
  '8xl': '256rpx',
}
```

### box-shadow

> 预设

```js
export const boxShadow = {
  'DEFAULT': ['var(--un-shadow-inset) 0 1px 3px 0 rgba(0,0,0,0.1)', 'var(--un-shadow-inset) 0 1px 2px -1px rgba(0,0,0,0.1)'],
  'none': '0 0 rgba(0,0,0,0)',
  'sm': 'var(--un-shadow-inset) 0 1px 2px 0 rgba(0,0,0,0.05)',
  'md': ['var(--un-shadow-inset) 0 4px 6px -1px rgba(0,0,0,0.1)', 'var(--un-shadow-inset) 0 2px 4px -2px rgba(0,0,0,0.1)'],
  'lg': ['var(--un-shadow-inset) 0 10px 15px -3px rgba(0,0,0,0.1)', 'var(--un-shadow-inset) 0 4px 6px -4px rgba(0,0,0,0.1)'],
  'xl': ['var(--un-shadow-inset) 0 20px 25px -5px rgba(0,0,0,0.1)', 'var(--un-shadow-inset) 0 8px 10px -6px rgba(0,0,0,0.1)'],
  '2xl': 'var(--un-shadow-inset) 0 25px 50px -12px rgba(0,0,0,0.25)',
  'inner': 'inset 0 2px 4px 0 rgba(0,0,0,0.05)',
}
```

> 连体写法
```html
<view class="shadow-[0px_4px_4px_0px_rgba(237,_0,_0,_1)]"></view>
```



### flex gap

| class          | Properties                              |
| -------------- | --------------------------------------- |
| flex-basis-1_2 | flex-basis:50%                          |
| flex-basis-2   | flex-basis:16rpx                        |
| gap-4          | grid-gap:32rpx;gap:32rpx                |
| gap-x-2        | grid-column-gap:16rpx;column-gap:16rpx; |
