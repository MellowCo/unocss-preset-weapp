# taro4_vite_vue3

## 安装

> unocss 0.59.* 之后版本使用 esm 模块, 目前 taro 还不支持, 所以需要安装 0.58.* 版本，原因见[taro issue](https://github.com/NervJS/taro/issues/15487)

```shell
# 安装unocss
pnpm add -D unocss@0.58.9 unocss-preset-weapp@0.58.8
```


## config

> 修改 `config/index.ts` compiler 配置, 增加 vitePlugins


``` ts
import Unocss from 'unocss/vite'

compiler: {
  type: 'vite',
  vitePlugins: [
    Unocss()
  ]
},
```


## unocss.config.ts
```ts
import presetWeapp from 'unocss-preset-weapp'
import { extractorAttributify, transformerClass } from 'unocss-preset-weapp/transformer'

const { presetWeappAttributify, transformerAttributify } = extractorAttributify()

export default {
  presets: [
    // https://github.com/MellowCo/unocss-preset-weapp
    presetWeapp(),
    // attributify autocomplete
    presetWeappAttributify(),
  ],
  shortcuts: [
    {
      'border-base': 'border border-gray-500_10',
      'center': 'flex justify-center items-center',
    },
  ],

  transformers: [
    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerAttributify
    transformerAttributify(),

    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerClass
    transformerClass(),
  ]
}
```

## app.ts

```ts
import 'uno.css'
```

## 存在问题

### 小程序

在 app.ts 中 import 'uno.css' 会报错
[unocss:global:build:bundle] [unocss] does not found CSS placeholder in the generated chunks
This is likely an internal bug of unocss vite plugin


### H5
