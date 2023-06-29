# taro webpack4 vue3

## 配置与DEMO
[taro_webpack5_vue3](https://github.com/MellowCo/unocss-preset-weapp/tree/main/examples/taro_webpack5_vue3) 

[taro_webpack4_vue2](https://github.com/MellowCo/unocss-preset-weapp/tree/main/examples/taro_vue2) 

[taro_react](https://github.com/MellowCo/unocss-preset-weapp/tree/main/examples/taro_react) 

## 说明

* 默认生成 css 单位为 `rpx` ，`rpx` 在h5平台中，会自动转为 `rem`

* 由于 taro 建议使用 px，针对 `taro` 加入小程序  `px` 转 `rpx`，h5 `px` 转 `rem` , 设置 `designWidth` ,`deviceRatio` <a href='#taro-px-to-rpx-rem'>转换说明</a>

* taro `webpack4` 和 `webpack5`  [h5根字体(rem)](https://github.com/MellowCo/unocss-preset-weapp/tree/main/examples/taro_webpack4_vue3#taro-h5%E5%85%BC%E5%AE%B9)大小不同，导致不同版本字体大小不同 [taro issues](https://github.com/NervJS/taro/issues/12361) 

* [h5兼容说明](https://github.com/MellowCo/unocss-preset-weapp/tree/main/examples/taro_webpack4_vue3#h5%E5%85%BC%E5%AE%B9)

## 使用
[安装及使用 | Taro 文档 (jd.com)](https://taro-docs.jd.com/docs/GETTING-STARTED)


```shell
# 创建taro项目
taro init taro_xxx
# 安装unocss
yarn add -D unocss @unocss/webpack unocss-preset-weapp
```

* config/index.js
> 通过 [miniwebpackchain](https://taro-docs.jd.com/docs/config-detail#miniwebpackchain) ，合并webpack配置

```js
// 导入unocss
import UnoCSS from 'unocss/webpack'

const config = {
  mini: {
    // 合并webpack配置
    webpackChain(chain) {
      // https://github.com/unocss/unocss
      chain.plugin('unocss').use(UnoCSS())
    },
  },
  h5: {
    // 合并webpack配置
    webpackChain(chain) {
      // https://github.com/unocss/unocss
      chain.plugin('unocss').use(UnoCSS())
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
```ts
// unocss.config.ts
import presetWeapp from 'unocss-preset-weapp'
import { extractorAttributify, transformerClass } from 'unocss-preset-weapp/transformer'

const { presetWeappAttributify, transformerAttributify } = extractorAttributify()

export default {
  presets: [
    // https://github.com/MellowCo/unocss-preset-weapp
    presetWeapp(
      // 以下配置为 webpack4 平台
      // h5兼容设置，默认为 750 标准（designWidth: 750），webpack4 平台(taroWebpack: webpack4)
      // 只开发小程序可删除
      {
        isH5: process.env.TARO_ENV === 'h5',
        platform: 'taro',
      }),
    // attributify autocomplete
    presetWeappAttributify(),
  ],
  shortcuts: [
    {
      'border-base': 'border border-gray-500/10',
      'center': 'flex justify-center items-center',
    },
  ],

  transformers: [
    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerAttributify
    // taro-react 不支持 Attributify Mode ，react不支持，react不支持，react不支持
    transformerAttributify(),

    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerClass
    transformerClass(),
  ],
}
```

* app.ts

```js
import 'uno.css'
```

* index.html
> `taro h5` 的基准文字不是 `16px` ，默认字体较大

> 如需更改，可在`index.html` 中设置 `body` 中设置 `text-base`

<img src="https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202207231650890.png" style="zoom: 67%;" />

```html
<body class="text-base">
  <div id="app"></div>
</body>
```


---

## 注意事项

### h5兼容
> `uniapp vite vue3` 会将css编译各平台需要的单位，如小程序使用`rpx`，h5使用`rem`

<img src="https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202207231615696.png" style="zoom:50%;" />

> `taro ` `uniapp vue2` 在h5中还是使用`rpx`

<img src="https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202207231620090.png" style="zoom: 50%;" />

---

### taro h5兼容
* taro `webpack4` 和 `webpack5` h5根字体(rem)大小不同，导致不同版本字体大小不同 [taro issues](https://github.com/NervJS/taro/issues/12361)

> webpack5 375 根字体为 20.0178px

  ![](https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202208242311419.png)

  

> webpack4 375 根字体为 23.4583px

  ![](https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202208242310456.png)


---

* unocss.config.ts

> 添加平台区分，指定 rem 策略

```js
import presetWeapp from 'unocss-preset-weapp'

export default {
  presets: [
    presetWeapp({
      isH5: process.env.TARO_ENV === 'h5',
      platform: 'taro',
      // 通过设置 taroWebpack 版本，指定 rem 策略
      // webpack4 webpack5
      taroWebpack: 'webpack5'
    }),
  ]
}
```

---

### taro h5 基准字体
* 添加兼容代码后，`text-base` 大小显示正常

<img src="https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202207231622120.png" alt="image-20220703141451188" style="zoom: 67%;" />

* 但是`taro` h5的375基准的`rem`为`24px`，不是`16px`，默认字体较大

<img src="https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202207231625587.png" style="zoom:50%;" />

> 如需更改，可在`index.html` 中设置 `body` 中设置 `text-base`

<img src="https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202207231650890.png" style="zoom: 67%;" />

```html
<body class="text-base">
  <div id="app"></div>
</body>
```

<img src="https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202207231629548.png" style="zoom: 50%;" />

---

### taro px to (rpx rem)
> 这里以 640 的设计稿为例子，**使用时请按实际需求设置，designWidth deviceRatio**

* [taro 的尺寸设计稿设置](https://taro-docs.jd.com/docs/GETTING-STARTED) ，设置为 640
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

* `unocss config` 中`designWidth` ,`deviceRatio`与 `taro config` 保持一致
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
