# uniapp-vue2
> 在 [uniapp vue2](https://uniapp.dcloud.io/quickstart-cli.html#创建uni-app) 中使用

## 注意事项

1. @unocss/webpack v0.45.8 之前和之后版本，会出现无法及时生成`css`代码，导致打包时没有`css`代码

> 解决方法：使用 v0.45.8
```shell
npm i -D @unocss/webpack@0.45.8
```

2. App平台 v3 模式暂不支持在 js 文件中引用"uno.css" 请改在 style 内引用
> 解决方法：使用 [unocss-webpack-uniapp2](https://github.com/MellowCo/unocss-webpack-uniapp2#unocss-webpack-uniapp2) 替换 @unocss/webpack，[见 App 小程序 h5 平台](https://github.com/MellowCo/unocss-preset-weapp/tree/main/examples/uniapp_vue2#app-%E5%B0%8F%E7%A8%8B%E5%BA%8F-h5-%E5%B9%B3%E5%8F%B0)
>
> 开发 `小程序` `h5` 平台，使用 [@unocss/webpack](https://github.com/unocss/unocss/tree/main/packages/webpack)
>
> 开发 `小程序` `h5` `app` 平台，使用 [unocss-webpack-uniapp2](https://github.com/MellowCo/unocss-webpack-uniapp2#unocss-webpack-uniapp2)



## 小程序 h5 平台
```shell
# 创建uni-app
vue create -p dcloudio/uni-preset-vue my-project

# @unocss/webpack 请使用 v0.45.8 
yarn add -D unocss @unocss/webpack@0.45.8 unocss-preset-weapp
```

* vue.config.js
```js
// 请使用 @unocss/webpack 0.45.8
// 0.45.8 之前和之后版本 会出现无法及时生成`css`代码，导致打包时没有`css`代码
const UnoCSS = require('@unocss/webpack').default

module.exports = {
  configureWebpack: {
    plugins: [
      // https://github.com/unocss/unocss
      UnoCSS(),
    ],
  },
}
```
* unocss.config.js
> 添加unocss.config.js文件，搭配[unocss vscode](https://marketplace.visualstudio.com/items?itemName=antfu.unocss)插件，智能提示

<img src="https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202207171840689.png" alt="image-20220703141451188" style="zoom:50%;" />

* [h5兼容说明](https://github.com/MellowCo/unocss-preset-weapp/tree/main/examples/uniapp_vue2#h5%E5%85%BC%E5%AE%B9)

```js
import presetWeapp from 'unocss-preset-weapp'
import { defineConfig } from 'unocss'
import { transformerAttributify, transformerClass } from 'unocss-preset-weapp/transformer'

export default defineConfig({
  presets: [
    // https://github.com/MellowCo/unocss-preset-weapp
    presetWeapp({
      // h5兼容设置，只开发小程序可删除
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

  // v0.1.14 unplugin-attributify-to-class 和 unplugin-transform-class 内置到 transformer 中
  transformers: [
    // options 见 https://github.com/MellowCo/unplugin-attributify-to-class#options
    transformerAttributify(),

    // options 见 https://github.com/MellowCo/unplugin-transform-class#options
    transformerClass(),
  ]
})

```

* main.js

```js
import 'uno.css'
```

## App 小程序 h5 平台
> unocss-webpack-uniapp2 同样支持 小程序 和 h5 平台

```shell
# 创建uni-app
vue create -p dcloudio/uni-preset-vue my-project

# unocss-webpack-uniapp2 兼容 vue2 app
# 解决 App平台 v3 模式暂不支持在 js 文件中引用"uno.css" 请改在 style 内引用
yarn add -D unocss unocss-webpack-uniapp2 unocss-preset-weapp
```

* vue.config.js
```js
// 兼容 app
// 解决 App平台 v3 模式暂不支持在 js 文件中引用"uno.css" 请改在 style 内引用
const UnoCSS = require('unocss-webpack-uniapp2').default

module.exports = {
  configureWebpack: {
    plugins: [
      // https://github.com/unocss/unocss
      UnoCSS(),
    ],
  },
}
```

* unocss.config.js
> 添加unocss.config.js文件，搭配 [unocss vscode ](https://marketplace.visualstudio.com/items?itemName=antfu.unocss)插件，智能提示

* [h5兼容说明](https://github.com/MellowCo/unocss-preset-weapp#h5%E5%85%BC%E5%AE%B9)


```js
import presetWeapp from 'unocss-preset-weapp'
import { defineConfig } from 'unocss'
import { transformerAttributify, transformerClass } from 'unocss-preset-weapp/transformer'

export default defineConfig({
  presets: [
    // https://github.com/MellowCo/unocss-preset-weapp
    presetWeapp({
      // h5兼容
      // 只开发小程序可删除
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

  // v0.1.14 unplugin-attributify-to-class 和 unplugin-transform-class 内置到 transformer 中
  transformers: [
    // options 见https://github.com/MellowCo/unplugin-attributify-to-class#options
    transformerAttributify(),

    // options 见https://github.com/MellowCo/unplugin-transform-class#options
    transformerClass(),
  ],
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

## 注意事项
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
  ]
}

```
