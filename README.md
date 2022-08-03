# unocss-preset-weapp

[UnoCSS](https://github.com/unocss/unocss) 微信小程序预设 [unocss-preset-weapp](https://github.com/MellowCo/unocss-preset-weapp) , fork form [@unocss/preset-mini](https://github.com/unocss/unocss/tree/main/packages/preset-mini)

在小程序中使用`原子化css`时，`bg-[#153]/10`经过编辑，会变成`bg-\[\#153\]\/10`, 由于小程序不支持`\\`，`\:`，`\[`，`\$`,`\.`等转义类名，导致报错。

通过 [unplugin-transform-we-class](https://github.com/MellowCo/unplugin-transform-we-class) 转换转义类名，保持`原子化css`的规范去书写`class`

支持
* <a href='#uniapp-vue2'>uniapp vue2</a>
* <a href='#uni-app-vue3'>uni-app vue3</a>
* <a href='#taro-react'>taro react</a>
* <a href='#taro-vue2'>taro vue2</a>
* <a href='#taro-vue3'>taro vue3</a>

## 安装

```sh
pnpm add unocss-preset-weapp unocss -D
```

## 基本使用

> uniapp by vue3

* vite.config.ts

```js
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import Unocss from 'unocss/vite'
import presetWeapp from 'unocss-preset-weapp'

export default defineConfig({
  plugins: [
    uni(),
    Unocss({
      presets: [
        presetWeapp(),
      ],
      // 设置快捷
      shortcuts: [
        {
          'border-base': 'border border-gray-500_10',
          'center': 'flex justify-center items-center',
        },
      ],
    }),
  ],
})
```

* main.ts

```js
import 'uno.css'
```

## 示例

[uniapp_vue3](https://github.com/MellowCo/unocss-preset-weapp/tree/main/examples/uniapp_vue3)   
[uniapp_vue2](https://github.com/MellowCo/unocss-preset-weapp/tree/main/examples/uniapp_vue2)   
[taro_react](https://github.com/MellowCo/unocss-preset-weapp/tree/main/examples/taro_react)   
[taro_vue2](https://github.com/MellowCo/unocss-preset-weapp/tree/main/examples/taro_vue2)   
[taro_vue3](https://github.com/MellowCo/unocss-preset-weapp/tree/main/examples/taro_vue3)   

<img src="https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202207031414239.png" alt="image-20220703141451188" style="zoom:50%;" />



---


## webpack

### uniapp-vue2
> 在 [uniapp vue2](https://uniapp.dcloud.io/quickstart-cli.html#创建uni-app) 中使用

```shell
# 创建uni-app
vue create -p dcloudio/uni-preset-vue my-project

# @unocss/webpack 与 uniapp 不兼容 无法及时生成css代码
# yarn add -D unocss @unocss/webpack unplugin-transform-we-class unocss-preset-weapp

# 安装unocss
yarn add -D unocss unocss-webpack-uniapp2 unplugin-transform-we-class unocss-preset-weapp

```

> 使用 [unocss-webpack-uniapp2](https://github.com/MellowCo/unocss-webpack-uniapp2#unocss-webpack-uniapp2) 替换 @unocss/webpack，[原因](https://github.com/MellowCo/unocss-webpack-uniapp2#unocss-webpack-uniapp2)

* vue.config.js

> uniapp vue2 使用`import 'uno.css'` 无法及时生成`css`代码，导致打包时没有`css`代码
>
> 去除`cssMode`参数

```js
// 使用 unocss-webpack-uniapp2 替换 @unocss/webpack
const UnoCSS = require('unocss-webpack-uniapp2').default
const transformWeClass = require('unplugin-transform-we-class/webpack')

module.exports = {
  configureWebpack: {
    plugins: [
      UnoCSS(),
      transformWeClass(),
    ],
  },
}

```
* unocss.config.js
> 添加unocss.config.js文件，搭配[unocss vscode](https://marketplace.visualstudio.com/items?itemName=antfu.unocss)插件，智能提示

<img src="https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202207171840689.png" alt="image-20220703141451188" style="zoom:50%;" />

```js
import presetWeapp from 'unocss-preset-weapp'

export default {
  presets: [
    presetWeapp(
      // 如有h5开发需求
      // h5兼容
      // {
      // platform: 'uniapp',
      // isH5: process.env.UNI_PLATFORM === 'h5'
      // }
    ),
  ],
  shortcuts: [
    {
      'border-base': 'border border-gray-500_10',
      'center': 'flex justify-center items-center',
    },
  ],
}
```

* main.js

```js
// 不在需要导入 uno.css
// import 'uno.css'
```

* App.vue

> 原为`注释占位符`，但是在`app`打包时，会将注释删除，导致打包后的`app`没有`css`文件，小程序和h5不会删除`注释`。。。
>
> 将`注释占位符`改为`css选择器占位符`,使用`uno-start`和`uno-end`,作为占位符，内容随意

```vue
<script>
export default {
  onLaunch() {
    console.log('App Launch')
  },
  onShow() {
    console.log('App Show')
  },
  onHide() {
    console.log('App Hide')
  },
}
</script>

<style>
.uno-start {
  --un: 0;
}
/* unocss 代码生成在这 */
.uno-end {
  --un: 0;
}
</style>
```

---

### taro-react

[安装及使用 | Taro 文档 (jd.com)](https://taro-docs.jd.com/taro/docs/GETTING-STARTED)

> `taro 3.4.x` 很多是通过是靠`幽灵依赖`来引用的，`pnpm`不允许`幽灵依赖`,使用`pnpm`会出现一些无厘头的问题

<img src="https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202207091012142.png" alt="image-20220709101250085" style="zoom: 67%;" />

```shell
# 创建taro项目 选择react
taro init taro_react
# 安装unocss
yarn add -D unocss @unocss/webpack unplugin-transform-we-class unocss-preset-weapp
```

* config/index.js
> 通过[miniwebpackchain](https://taro-docs.jd.com/taro/docs/config-detail#miniwebpackchain)，合并webpack配置

```js
// 导入unocss
import UnoCSS from 'unocss/webpack'
import transformWeClass from 'unplugin-transform-we-class/webpack'

const config = {
  mini: {
    // 合并webpack配置
    webpackChain(chain) {
      chain.plugin('unocss')
        .use(UnoCSS())
      chain
        .plugin('transformWeClass')
        .use(transformWeClass())
    },
  },
  h5: {
    // 合并webpack配置
    webpackChain(chain) {
      chain.plugin('unocss')
        .use(UnoCSS())
      chain
        .plugin('transformWeClass')
        .use(transformWeClass())
    },
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development')
    return merge({}, config, require('./dev'))

  return merge({}, config, require('./prod'))
}
```
* unocss.config.ts
> 添加unocss.config.js文件，搭配[unocss vscode](https://marketplace.visualstudio.com/items?itemName=antfu.unocss)插件，智能提示

```ts
import presetWeapp from 'unocss-preset-weapp'

export default {
  presets: [
    presetWeapp(
      // 如有h5开发需求
      // h5兼容
      // {
      // isH5: process.env.TARO_ENV === 'h5',
      // platform: 'taro',
      // designWidth: 750
      // }
    ),
  ],
  shortcuts: [
    {
      'border-base': 'border border-gray-500/10',
      'center': 'flex justify-center items-center',
    },
  ]
}
```

* app.ts

```js
import 'uno.css'
```

---

### taro-vue2
见 <a href='#taro-react'>taro-react</a>

---

### taro-vue3
见 <a href='#taro-react'>taro-react</a>

---

## vite

### uni-app-vue3

> 在[uni-app vue3中使用](https://ask.dcloud.net.cn/article/37834)中使用

```shell
# 使用Vue3/Vite版
npx degit dcloudio/uni-preset-vue#vite-ts my-vue3-project
# 安装unocss
pnpm add -D unocss unplugin-transform-we-class unocss-preset-weapp
```

* vite.config.ts

```ts
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import Unocss from 'unocss/vite'
import transformWeClass from 'unplugin-transform-we-class/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    Unocss(),
    transformWeClass(),
  ],
})
```

* unocss.config.ts
> 添加unocss.config.js文件，搭配[unocss vscode](https://marketplace.visualstudio.com/items?itemName=antfu.unocss)插件，智能提示
```ts
import presetWeapp from 'unocss-preset-weapp'
export default {
  presets: [
    presetWeapp(),
  ],
  shortcuts: [
    {
      'border-base': 'border border-gray-500_10',
      'center': 'flex justify-center items-center',
    },
  ],
}
```

* mian.ts

```ts
import 'uno.css'
```

> app打包中断问题， <a href='#uniapp vue3 vite app打包中断'>见注意事项</a>

---
## 注意事项

**小程序不支持使用`\\`，`\:`，`\[`，`\$`,`\.`等转义类名，可通过[插件](https://github.com/MellowCo/unplugin-transform-we-class)转换支持**

> 不支持`% ` h-1.000%

> 不支持`/`，可以将`/`改为`_`  h-1/2 => h-1_2

> 不支持`[] `  bg-[#153]/10

> 不支持`$var` h-$var

> 不支持`:`  bg-teal-300:50

### 使用class转换插件

> 使用[unplugin-transform-we-class](https://github.com/MellowCo/unplugin-transform-we-class)，转换`\\`，`\:`，`\[`，`\$`,`\.`等转义类名

![image-20220703141301371](https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202207031413496.png)



---

### uniapp vue2 app兼容

[见unocss-webpack-uniapp2](https://github.com/MellowCo/unocss-webpack-uniapp2#unocss-webpack-uniapp2)



---
### h5兼容
> `uniapp vite vue3` 会将css编译各平台需要的单位，如小程序使用`rpx`，h5使用`rem`
>
> **vite太香了**

<img src="https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202207231615696.png" style="zoom:50%;" />

> `taro ` `uniapp vue2` 在h5中还是使用`rpx`

<img src="https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202207231620090.png" style="zoom: 50%;" />

  

#### taro h5兼容

> unocss.config.ts

```js
import presetWeapp from 'unocss-preset-weapp'

export default {
  presets: [
    presetWeapp({
      isH5: process.env.TARO_ENV === 'h5',
      platform: 'taro',
      designWidth: 750
    }),
  ],
  shortcuts: [
    {
      'border-base': 'border border-gray-500/10',
      'center': 'flex justify-center items-center',
    },
  ]
}
```



---

#### uniapp-vue2 h5兼容

> unocss.config.js

```js
import presetWeapp from 'unocss-preset-weapp'

export default {
  presets: [
    presetWeapp({
      platform: 'uniapp',
      isH5: process.env.UNI_PLATFORM === 'h5'
    }),
  ],
  shortcuts: [
    {
      'border-base': 'border border-gray-500_10',
      'center': 'flex justify-center items-center',
    },
  ],
}

```





---
### taro h5 基准字体
* 添加兼容代码后，大小显示正常

<img src="https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202207231622120.png" alt="image-20220703141451188" style="zoom: 67%;" />

* 但是`taro` h5的375基准的`rem`为`24px`，不是`16px`，导致默认字体很大，。。。。

<img src="https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202207231625587.png" style="zoom:50%;" />

> 在`index.html` 中设置body

<img src="https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202207231650890.png" style="zoom: 67%;" />

```html
<body class="text-base">
  <div id="app"></div>
</body>
```

<img src="https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202207231629548.png" style="zoom: 50%;" />

---
### uniapp vue3 vite app打包中断
> vue3 APP打包 `warn` 导致打包中断
>
> [unocss] entry module not found, have you add `import 'uno.css'` in your main entry?

![image-20220730140841046](https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202207301416199.png)

> 在 `node_modules/@unocss/vite/index.cjs` 中，将 `warn` 注释掉即可完成打包

![image-20220730140554224](https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202207301416930.png)

##  使用
[UnoCSS 文档](https://uno.antfu.me/)

[Windi CSS文档](https://windicss.org/)

> 默认单位`rpx`，w-100 => w-100rpx
>
> **不使用 [unplugin-transform-we-class](https://github.com/MellowCo/unplugin-transform-we-class)**，请将百分比`/`改为`_`，h-1/2 => h-1_2


### safe-area (v0.1.6)
| class              | Properties       |
| ------------------ | ---------------- |
| p-safe | padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)    |
| pt-safe        | padding-top: env(safe-area-inset-top) |
| pb-safe           | padding-bottom: env(safe-area-inset-bottom)    |
| pl-safe        | padding-left: env(safe-area-inset-left)     |
| pr-safe               | padding-right: env(safe-area-inset-right)   |

### width and height

| class              | Properties       |
| ------------------ | ---------------- |
| h-1_2,h-1/2,h-half | height: 50%      |
| w-1_3,w-1/3        | width: 33.33333% |
| width-20           | width: 20rpx     |
| width-50rpx        | width: 50rpx     |
| h-xs               | height: 180rpx   |
| h-xl               | height: 340rpx   |
| h-full             | height: 100%     |

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

| class                   | Properties                            |
| ----------------------- | ------------------------------------- |
| border-2                | border-width:2rpx;border-style:solid; |
| b-2                     | border-width:2rpx;border-style:solid; |
| border-dashed           | border-style:dashed                   |
| rounded-1_2,rounded-1/2 | border-radius:50%                     |
| rounded-md              | border-radius:12rpx                   |

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
| border-red-100<br/>border-red100<br/>border-red1<br/>border-red-1 | --un-border-opacity:1;  border-color:rgba(254,226,226,var(--un-border-opacity)) |
| border-opacity-20,border-op-20,border-op20                   | --un-border-opacity:0.2                                      |
| border-black_10,border-black/10,border-black:10              | border-color:rgba(0,0,0,0.1)                                 |



---
### color

| class                                                        | Properties                                                   |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| op-10,opacity-10                                             | opacity:0.1                                                  |
| color-hex-157,c-hex-157,c-[#157]                             | --un-text-opacity:1;color:rgba(17,85,119,var(--un-text-opacity)) |
| c-hex-157_10,c-hex-157/10,c-[#157]/10,c-[#157]:10,c-[#157]_10 | color:rgba(17,85,119,0.1)                                    |
| color-blue,color-blue-400,c-blue                             | --un-text-opacity:1;color:rgba(96,165,250,var(--un-text-opacity)) |
| text-red-100,text-red100,text-red1                           | --un-text-opacity:1;color:rgba(254,226,226,var(--un-text-opacity)) |
| text-red-100_20,text-red-100/20,text-red-100:20              | color:rgba(254,226,226,0.2)                                  |



### bg

| class                                                        | Properties                                                   |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| bg-hex-452233_40,bg-[#452233]_40,bg-[#452233]/40,bg-[#452233]:40 | background-color:rgba(69,34,51,0.4)                          |
| bg-red-100,bg-red1,bg-red100                                 | --un-bg-opacity:1;background-color:rgba(254,226,226,var(--un-bg-opacity)) |
| bg-teal-100_55,bg-teal-100/55,bg-teal-100:55                 | background-color:rgba(204,251,241,0.55)                      |
| bg-opacity-45                                                | --un-bg-opacity:0.45                                         |


### typography

| class                            | Properties                                                   |
| -------------------------------- | ------------------------------------------------------------ |
| text-base                        | font-size:32rpx;line-height:48rpx                            |
| text-100,text-size-100           | font-size:100rpx                                             |
| text-2em                         | font-size:2em                                                |
| font-900,font-black,fw-900       | font-weight:900                                              |
| font-leading-2 ,leading-2        | line-height:16rpx                                            |
| indent                           | text-indent:48rpx                                            |
| indent-2                         | text-indent:16rpx                                            |
| indent-1_2,indent-1/2,indent-1:2 | text-indent:50%                                              |
| indent-lg                        | text-indent:64rpx                                            |
| text-shadow-lg                   | --un-text-shadow:6rpx 6rpx 12rpx var(--un-text-shadow-color, rgba(0,0,0,0.26)),0 0 10rpx var(--un-text-shadow-color, rgba(15,3,86,0.22));text-shadow:var(--un-text-shadow) |
| word-spacing-2                   | word-spacing:16rpx                                           |
| tracking-2                       | letter-spacing:16rpx                                         |



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

```text
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
> p-2    
> padding: 0.5rem    
> padding:16rpx

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



### flex gap

| class          | Properties                              |
| -------------- | --------------------------------------- |
| flex-basis-1_2 | flex-basis:50%                          |
| flex-basis-2   | flex-basis:16rpx                        |
| gap-4          | grid-gap:32rpx;gap:32rpx                |
| gap-x-2        | grid-column-gap:16rpx;column-gap:16rpx; |
