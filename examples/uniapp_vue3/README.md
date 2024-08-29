# uni-app-vue3


## 注意事项
如出现小程序样式失效问题，[请检查 unocss 和 uniapp 版本是否兼容](https://github.com/MellowCo/unocss-preset-weapp/issues/20)


## 使用
> 在[uni-app vue3中使用](https://ask.dcloud.net.cn/article/37834)中使用

> uniapp-vite 模版 [uni-vue3-starter](https://github.com/MellowCo/uni-vue3-starter)


```shell
# 使用Vue3/Vite版
npx degit dcloudio/uni-preset-vue#vite-ts my-vue3-project

# 安装unocss
pnpm add -D unocss unocss-preset-weapp
```


* unocss 0.59.* 之后版本  vite.config.ts
> Error [ERR_REQUIRE_ESM]: require() of ES Module,  https://github.com/dcloudio/uni-app/issues/4815  https://github.com/unocss/unocss/issues/3776

```ts
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

// https://vitejs.dev/config/
export default defineConfig(async ()=>{
  const UnoCss = await import('unocss/vite').then(i => i.default)

  return {
    plugins: [
      uni(),
  
      // https://github.com/unocss/unocss
      UnoCss(),
    ],
  }
})
```


* unocss 0.59.* 之前版本  vite.config.ts
```ts
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    // https://github.com/antfu/unocss
    Unocss(),
  ],
})
```

* unocss.config.ts
> 添加unocss.config.js文件，搭配 [unocss vscode](https://marketplace.visualstudio.com/items?itemName=antfu.unocss) 插件，智能提示
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

* main.ts

```ts
import 'uno.css'
```
