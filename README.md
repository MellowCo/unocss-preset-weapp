# unocss-preset-weapp

[![Version](https://img.shields.io/npm/v/unocss-preset-weapp.svg?style=flat-square&logo=npm) 
![Downloads](https://img.shields.io/npm/dm/unocss-preset-weapp.svg?style=flat-square&logo=npm)](https://www.npmjs.com/package/unocss-preset-weapp)

[UnoCSS](https://github.com/unocss/unocss) 微信小程序预设 [unocss-preset-weapp](https://github.com/MellowCo/unocss-preset-weapp) , fork form [@unocss/preset-mini](https://github.com/unocss/unocss/tree/main/packages/preset-mini)

在小程序中使用`原子化css`时，`bg-[#153]/10`经过编辑，会变成`bg-\[\#153\]\/10`, 由于小程序不支持`\\`，`\:`，`\[`，`\$`,`\.`等转义类名，导致报错。


通过 [unplugin-transform-we-class](https://github.com/MellowCo/unplugin-transform-we-class) 转换转义类名，保持`原子化css`的规范去书写`class`

通过 [unplugin-unocss-attributify-wechat](https://github.com/MellowCo/unplugin-unocss-attributify-wechat)，支持 [UnoCSS presetAttributify](https://github.com/unocss/unocss/tree/main/packages/preset-attributify)

支持
* <a href='#uniapp-vue2'>uniapp vue2</a>
* <a href='#uni-app-vue3'>uniapp vue3</a>
* <a href='#taro-react'>taro react</a>
* <a href='#taro-vue2'>taro vue2</a>
* <a href='#taro-vue3'>taro vue3</a>

相关链接
* [UnoCSS](https://github.com/unocss/unocss) - 即时按需原子CSS引擎
* [unocss-preset-weapp](https://github.com/MellowCo/unocss-preset-weapp) - UnoCSS 微信小程序预设
* [unplugin-transform-we-class](https://github.com/MellowCo/unplugin-transform-we-class) - 小程序原子化 CSS 转换转义类名插件
* [unplugin-unocss-attributify-wechat](https://github.com/MellowCo/unplugin-unocss-attributify-wechat) - 小程序 Attributify Mode 插件
* [unocss-webpack-uniapp2](https://github.com/MellowCo/unocss-webpack-uniapp2#unocss-webpack-uniapp2) - 兼容 UniApp Vue2 App开发插件
* [uni-vue3-starter](https://github.com/MellowCo/uni-vue3-starter) - Uniapp-Vite 模版
* 原子化css冲突问题，例 [tmui](https://tmui.design/) 内置 [原子化css](https://tmui.design/doc/CSSTool/css.html) 与 unocss 冲突问题，[解决方案](https://github.com/MellowCo/unplugin-unocss-attributify-wechat#%E5%8E%9F%E5%AD%90%E5%8C%96-css-%E5%86%B2%E7%AA%81%E9%97%AE%E9%A2%98)


## 示例

[uniapp_vue3](https://github.com/MellowCo/unocss-preset-weapp/tree/main/examples/uniapp_vue3)   
[uniapp_vue2](https://github.com/MellowCo/unocss-preset-weapp/tree/main/examples/uniapp_vue2)   
[taro_react](https://github.com/MellowCo/unocss-preset-weapp/tree/main/examples/taro_react)   
[taro_vue2](https://github.com/MellowCo/unocss-preset-weapp/tree/main/examples/taro_vue2)   
[taro_vue3](https://github.com/MellowCo/unocss-preset-weapp/tree/main/examples/taro_vue3)   

<img src="https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202207031414239.png" alt="image-20220703141451188" style="zoom:50%;" />



---

## webpack

* 重要的事情说三遍 说三遍 说三遍
> @unocss/webpack 0.45.8 之后版本，windows 系统出现 unocss 失效的问题，[unocss issues](https://github.com/unocss/unocss/issues/1455)，暂时没有解决，请使用 `@unocss/webpack@0.45.8`


### uniapp-vue2
> 在 [uniapp vue2](https://uniapp.dcloud.io/quickstart-cli.html#创建uni-app) 中使用

#### 注意事项

1. @unocss/webpack v0.45.8 之前和之后版本，会出现无法及时生成`css`代码，导致打包时没有`css`代码

> 解决方法：使用 v0.45.8
```shell
npm i -D @unocss/webpack@0.45.8
```

1. App平台 v3 模式暂不支持在 js 文件中引用"uno.css" 请改在 style 内引用
> 解决方法：使用 [unocss-webpack-uniapp2](https://github.com/MellowCo/unocss-webpack-uniapp2#unocss-webpack-uniapp2) 替换 @unocss/webpack，<a href='#App平台'>见 App 平台</a>
>
> 开发 `小程序` `h5` 平台，使用 [@unocss/webpack](https://github.com/unocss/unocss/tree/main/packages/webpack)
>
> 开发 `小程序` `h5` `app` 平台，使用 [unocss-webpack-uniapp2](https://github.com/MellowCo/unocss-webpack-uniapp2#unocss-webpack-uniapp2)

#### 小程序 h5 平台
```shell
# 创建uni-app
vue create -p dcloudio/uni-preset-vue my-project

# @unocss/webpack 请使用 v0.45.8 
yarn add -D unocss @unocss/webpack@0.45.8 unplugin-transform-we-class unocss-preset-weapp unplugin-unocss-attributify-wechat
```

* vue.config.js
```js
// 请使用 @unocss/webpack 0.45.8
// 0.45.8 之前和之后版本 会出现无法及时生成`css`代码，导致打包时没有`css`代码
const UnoCSS = require('@unocss/webpack').default
const transformWeClass = require('unplugin-transform-we-class/webpack')
const { defaultAttributes, defaultIgnoreNonValuedAttributes, presetAttributifyWechat } = require('unplugin-unocss-attributify-wechat/webpack')

module.exports = {
  configureWebpack: {
    plugins: [
      // https://github.com/unocss/unocss
      UnoCSS(),
      // https://github.com/MellowCo/unplugin-unocss-attributify-wechat
      presetAttributifyWechat({
        // options
      }),
      // https://github.com/MellowCo/unplugin-transform-we-class
      transformWeClass({
        // options
      }),
    ],
  },
}
```
* unocss.config.js
> 添加unocss.config.js文件，搭配[unocss vscode](https://marketplace.visualstudio.com/items?itemName=antfu.unocss)插件，智能提示

<img src="https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202207171840689.png" alt="image-20220703141451188" style="zoom:50%;" />


```js
import presetWeapp from 'unocss-preset-weapp'
import { defineConfig } from 'unocss'

export default defineConfig({
  presets: [
    // https://github.com/MellowCo/unocss-preset-weapp
    presetWeapp({
      // h5兼容
      platform: 'uniapp',
      isH5: process.env.UNI_PLATFORM === 'h5',
    }),
  ],
  shortcuts: [
    {
      'border-base': 'border border-gray-500_10',
      'center': 'flex justify-center items-center',
    },
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

* main.js

```js
import 'uno.css'
```

#### App平台
> unocss-webpack-uniapp2 同样支持 小程序 和 h5 平台


```shell
# 创建uni-app
vue create -p dcloudio/uni-preset-vue my-project

# unocss-webpack-uniapp2 兼容 vue2 app
# 解决 App平台 v3 模式暂不支持在 js 文件中引用"uno.css" 请改在 style 内引用
yarn add -D unocss unocss-webpack-uniapp2 unplugin-transform-we-class unocss-preset-weapp unplugin-unocss-attributify-wechat 
```

* vue.config.js
```js
// 兼容 app
// 解决 App平台 v3 模式暂不支持在 js 文件中引用"uno.css" 请改在 style 内引用
const UnoCSS = require('unocss-webpack-uniapp2').default

const transformWeClass = require('unplugin-transform-we-class/webpack')
const { defaultAttributes, defaultIgnoreNonValuedAttributes, presetAttributifyWechat } = require('unplugin-unocss-attributify-wechat/webpack')

module.exports = {
  configureWebpack: {
    plugins: [
      // https://github.com/unocss/unocss
      UnoCSS(),
      // https://github.com/MellowCo/unplugin-unocss-attributify-wechat
      presetAttributifyWechat({
        // options
      }),
      // https://github.com/MellowCo/unplugin-transform-we-class
      transformWeClass({
        // options
      }),
    ],
  },
}
```

* unocss.config.js
> 添加unocss.config.js文件，搭配 [unocss vscode ](https://marketplace.visualstudio.com/items?itemName=antfu.unocss)插件，智能提示


```js
import presetWeapp from 'unocss-preset-weapp'
import { defineConfig } from 'unocss'

export default defineConfig({
  presets: [
    // https://github.com/MellowCo/unocss-preset-weapp
    presetWeapp({
      // h5兼容
      platform: 'uniapp',
      isH5: process.env.UNI_PLATFORM === 'h5',
    }),
  ],
  shortcuts: [
    {
      'border-base': 'border border-gray-500_10',
      'center': 'flex justify-center items-center',
    },
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

* main.js

```js
// 不再需要导入 uno.css
// import 'uno.css'
```


* App.vue
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
# 创建taro项目
taro init taro_xxx
# 安装unocss
yarn add -D unocss @unocss/webpack@0.45.8 unplugin-transform-we-class unocss-preset-weapp unplugin-unocss-attributify-wechat
```

* config/index.js
> 通过[miniwebpackchain](https://taro-docs.jd.com/taro/docs/config-detail#miniwebpackchain)，合并webpack配置

```js
// 导入unocss
import UnoCSS from 'unocss/webpack'
import transformWeClass from 'unplugin-transform-we-class/webpack'
import { defaultAttributes, defaultIgnoreNonValuedAttributes, presetAttributifyWechat } from 'unplugin-unocss-attributify-wechat/webpack'

const config = {
  mini: {
    // 合并webpack配置
    webpackChain(chain) {
      // https://github.com/unocss/unocss
      chain.plugin('unocss')
        .use(UnoCSS())

      // https://github.com/MellowCo/unplugin-unocss-attributify-wechat
      // taro-react 不支持 Attributify Mode ，react不支持，react不支持，react不支持
      chain.plugin('presetAttributifyWechat').use(
        presetAttributifyWechat({
          // options
        }))

      // https://github.com/MellowCo/unplugin-transform-we-class
      chain
        .plugin('transformWeClass')
        .use(transformWeClass({
          // options
        }))
    },
  },
  h5: {
    // 合并webpack配置
    webpackChain(chain) {
      // https://github.com/unocss/unocss
      chain.plugin('unocss')
        .use(UnoCSS())

      // https://github.com/MellowCo/unplugin-unocss-attributify-wechat
      // taro-react 不支持 Attributify Mode ，react不支持，react不支持，react不支持
      chain.plugin('presetAttributifyWechat').use(
        presetAttributifyWechat({
          // options
        }))

      // https://github.com/MellowCo/unplugin-transform-we-class
      chain
        .plugin('transformWeClass')
        .use(transformWeClass({
          // options
        }))
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

> 默认生成 css 单位为 `rpx` ，`rpx` 在h5平台中，会自动转为 `rem`

> 由于 taro 建议使用 px，针对 `taro` 加入小程序  `px` 转 `rpx`，h5 `px` 转 `rem` , 设置 `designWidth` ,`deviceRatio` <a href='#taro-px-to-rpx-rem'>转换说明</a>

> taro `webpack4` 和 `webpack5`  [h5根字体(rem)](https://github.com/MellowCo/unocss-preset-weapp#taro-h5兼容)大小不同，导致不同版本字体大小不同 [taro issues](https://github.com/NervJS/taro/issues/12361) 

```ts
export interface PresetWeappOptions extends PresetOptions {
  /**
   * 平台
   * @default 'uniapp'
   */
  platform?: 'taro' | 'uniapp'

  /**
   * taro h5 rem 换算尺寸标准
   * @default 750
   * @link https://taro-docs.jd.com/taro/docs/size
   */
  designWidth?: number

  /**
   * taro 设计稿尺寸换算规则
   * @default { 640: 2.34 / 2, 750: 1, 828: 1.81 / 2}
   * @link https://taro-docs.jd.com/taro/docs/size
   */
  deviceRatio?: { [key: number]: number }

  /**
   * taro webpack 版本
   * taro webpack4 和 webpack5 h5根字体(rem)大小不同，导致不同版本字体大小不同
   * @link https://github.com/NervJS/taro/issues/12361
   * @default webpack4
   */
  taroWebpack?: 'webpack4' | 'webpack5'

  /**
   * 是否为h5 针对h5转为rem 小程序转为rpx
   * @default false
   */
  isH5?: boolean
}
```

```ts
import presetWeapp from 'unocss-preset-weapp'

export default {
  presets: [
    // https://github.com/MellowCo/unocss-preset-weapp
    presetWeapp(
      // 默认为 750 标准 webpack4 平台
      {
        isH5: process.env.TARO_ENV === 'h5',
        platform: 'taro',
      }
    ),
  ],
  shortcuts: [
    {
      'border-base': 'border border-gray-500/10',
      'center': 'flex justify-center items-center',
    },
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
}
```

* app.ts

```js
import 'uno.css'
```

* index.html
> `taro h5` 的基准文字不是 `16px` ，导致默认文字过大   

> 在`index.html` 中设置body

<img src="https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202207231650890.png" style="zoom: 67%;" />

```html
<body class="text-base">
  <div id="app"></div>
</body>
```

<img src="https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202207231629548.png" style="zoom: 50%;" />

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

> uniapp-vite 模版 [uni-vue3-starter](https://github.com/MellowCo/uni-vue3-starter)



```shell
# 使用Vue3/Vite版
npx degit dcloudio/uni-preset-vue#vite-ts my-vue3-project
# 安装unocss
pnpm add -D unocss unplugin-transform-we-class unocss-preset-weapp unplugin-unocss-attributify-wechat
```

* vite.config.ts

```ts
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import Unocss from 'unocss/vite'
import transformWeClass from 'unplugin-transform-we-class/vite'
import { presetAttributifyWechat } from 'unplugin-unocss-attributify-wechat/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),

    // https://github.com/MellowCo/unplugin-unocss-attributify-wechat
    presetAttributifyWechat({
      // options
    }),

    // https://github.com/antfu/unocss
    // Unocss(),

    // app打包配置
    // uniapp打包app时，打包2次，一次使用 vue 模式打包h5，第2次使用 nvue 模式打包app，
    // 第2次打包 unocss 会抛出warn
    // entry module not found, have you add `import 'uno.css'` in your main entry?
    // 导致打包终止
    process.env.UNI_COMPILER !== 'nvue' ? Unocss() : undefined,

    // https://github.com/MellowCo/unplugin-transform-we-class
    transformWeClass({
      // options
    }),
  ],
})
```

> [unocss] entry module not found, have you add `import 'uno.css'` in your main entry?

![image-20220730140841046](https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202207301416199.png)

* unocss.config.ts
> 添加unocss.config.js文件，搭配 [unocss vscode](https://marketplace.visualstudio.com/items?itemName=antfu.unocss) 插件，智能提示
```ts
import presetWeapp from 'unocss-preset-weapp'
import { defineConfig } from 'unocss'

export default defineConfig({
  presets: [
    // https://github.com/MellowCo/unocss-preset-weapp
    presetWeapp(),
  ],
  shortcuts: [
    {
      'border-base': 'border border-gray-500_10',
      'center': 'flex justify-center items-center',
    },
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

* mian.ts

```ts
import 'uno.css'
```
---
## 注意事项

**小程序不支持使用`\\`，`\:`，`\[`，`\$`,`\.`等转义类名，可通过 [插件](https://github.com/MellowCo/unplugin-transform-we-class) 转换支持**

> 不支持`% ` h-1.000%

> 不支持`/`，可以将`/`改为`_`  h-1/2 => h-1_2

> 不支持`[] `  bg-[#153]/10

> 不支持`$var` h-$var

> 不支持`:`  bg-teal-300:50

### 使用 class 转换插件

> 使用 [unplugin-transform-we-class](https://github.com/MellowCo/unplugin-transform-we-class) ，转换`\\`，`\:`，`\[`，`\$`,`\.`等转义类名

![image-20220703141301371](https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202207031413496.png)

### 使用 attributify 插件
```html
<view>
    <button
      text="sm green"
      p="y-2 x-4"
      m="4"
      my-attr="y-1 x-2 sm"
    >
      Button
    </button>

    <button
      text-base text-blue
      py-2 px-4
      m-4
    >
      Button
    </button>

    <button
      li-text="sm green"
      li-p="y-2 x-4"
      li-m="4"
      li-my-attr="y-1 x-2 sm"
    >
      Button
    </button>

    <button border="~ red" m="4">
      Button
    </button>

    <button flex="~ col wrap" class="m4">
      Button
    </button>

    <text text="red" li-text="blue">
      This conflicts with links' text prop
    </text>
  </view>
```
![](https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202208082120717.png)
---

### uniapp vue2 app兼容

[见unocss-webpack-uniapp2](https://github.com/MellowCo/unocss-webpack-uniapp2#unocss-webpack-uniapp2)

---
### h5兼容
> `uniapp vite vue3` 会将css编译各平台需要的单位，如小程序使用`rpx`，h5使用`rem`

<img src="https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202207231615696.png" style="zoom:50%;" />

> `taro ` `uniapp vue2` 在h5中还是使用`rpx`

<img src="https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202207231620090.png" style="zoom: 50%;" />

---
### uniapp-vue2 h5兼容

* unocss.config.js

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

### taro h5兼容
>  taro `webpack4` 和 `webpack5` h5根字体(rem)大小不同，导致不同版本字体大小不同 [taro issues](https://github.com/NervJS/taro/issues/12361)

* webpack5 375 根字体为 20.0178px

  ![](https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202208242311419.png)

  

* webpack4 375 根字体为 23.4583px

  ![](https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202208242310456.png)



* unocss.config.ts

```js
import presetWeapp from 'unocss-preset-weapp'

export default {
  presets: [
    presetWeapp({
      isH5: process.env.TARO_ENV === 'h5',
      platform: 'taro',
      // 区分版本 生成对应的 rem
      // webpack4, webpack5
      taroWebpack: 'webpack5'
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
### taro px to rpx rem
> 这里以 640 标准，为例子，
* [taro 的尺寸设计稿设置](https://taro-docs.jd.com/taro/docs/size) ，设置为 640
```ts
// config/index.js
const config = {
  projectName: 'Taro3',
  date: '2021-12-18',
  designWidth: 640,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2 / 1
  },
}
```

* unocss 与 taro config 保持一致
```ts
// unocss.config.ts
presetWeapp({
  isH5: process.env.TARO_ENV === 'h5',
  platform: 'taro',
  designWidth: 640,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2 / 1
  },
  taroWebpack: 'webpack5'
})
```

* 使用时，使用 `px` 即可转换为对应的 `rpx` `rem`
> h5

![](https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202208281719097.png)

> 小程序

![](https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202208281720438.png)

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

* vite.config.ts

```ts
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // app打包配置
    // uniapp打包app时，打包2次，一次使用 vue 模式打包h5，第2次使用 nvue 模式打包app，
    // 第2次打包 unocss 会抛出warn
    // entry module not found, have you add `import 'uno.css'` in your main entry?
    // 导致打包终止
    process.env.UNI_COMPILER !== 'nvue' ? Unocss() : undefined,
  ],
})
```

![image-20220730140841046](https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202207301416199.png)

---
### 自定义转换规则
> 自定义转换规则 `:`，`[`，`$`,`.` 

* 以 vite 为例子
```ts
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
  ',': '-co111-',
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    // https://github.com/unocss/unocss
    Unocss({
      presets: [
        // https://github.com/MellowCo/unocss-preset-weapp
        presetWeapp({
          transformRules,
        }),
      ],
    }),

    // https://github.com/MellowCo/unplugin-unocss-attributify-wechat
    presetAttributifyWechat({
      transformRules,
    }),

    // https://github.com/MellowCo/unplugin-transform-we-class
    transformWeClass({
      rules: transformRules,
    }),
  ],
})

```



##  使用
[UnoCSS 文档](https://uno.antfu.me/)

[Windi CSS文档](https://windicss.org/)

> 默认单位`rpx`，w-100 => w-100rpx
>
> **不使用 [unplugin-transform-we-class](https://github.com/MellowCo/unplugin-transform-we-class)**，请将百分比`/`改为`_`，h-1/2 => h-1_2

### 渐变背景 (v0.1.12)

[gradients](https://cn.windicss.org/utilities/backgrounds/gradients.html)

```html
<view class="center h-200 bg-gradient-to-t from-#f39c12/60 via-#2ecc71:80 to-#9b59b6_70 mb-3">
  to-t
</view>
```

<img src="https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202208281630260.png" style="zoom: 50%;" />


### animation (v0.1.9)
参考 [windicss-animation](https://cn.windicss.org/utilities/animations/animation.html) [@windicss/plugin-animations](https://cn.windicss.org/plugins/community/animations.html)

相关动画网站 [animate.css](https://animate.style/) [animista.net](https://animista.net/play/basic)

<img src="https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202208211944041.gif" style="zoom: 50%;" />

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
