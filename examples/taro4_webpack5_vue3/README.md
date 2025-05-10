# taro4_webpack5_vue3

## 安装

> unocss 0.59.* 之后版本使用 esm 模块, 目前 taro 还不支持, 所以需要安装 0.58.* 版本，原因见[taro issue](https://github.com/NervJS/taro/issues/15487)

```shell
# 安装unocss
pnpm add -D unocss@0.58.9 @unocss/webpack@0.58.9 unocss-preset-weapp@0.58.8
```


## config

> 通过 webpackChain ，合并webpack配置


``` ts
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
```


## unocss.config.ts
```ts
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

## app.ts

```ts
import 'uno.css'
```

## index.html
```html
<body class="text-base">
  <div id="app"></div>
</body>
```
