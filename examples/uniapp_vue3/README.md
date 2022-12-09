# uni-app-vue3


## 注意事项
`unocss@0.47.0` 后在 `uniapp` 上失效，目前的解决方案：先使用 0.46.5 版本

```shell
npm install -D unocss@0.46.5
```


## 使用
> 在[uni-app vue3中使用](https://ask.dcloud.net.cn/article/37834)中使用

> uniapp-vite 模版 [uni-vue3-starter](https://github.com/MellowCo/uni-vue3-starter)


```shell
# 使用Vue3/Vite版
npx degit dcloudio/uni-preset-vue#vite-ts my-vue3-project

# 安装unocss
pnpm add -D unocss unocss-preset-weapp
```

* vite.config.ts

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
import { defineConfig } from 'unocss'
import { transformerAttributify, transformerClass } from 'unocss-preset-weapp/transformer'

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

  transformers: [
    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerAttributify
    transformerAttributify(),

    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerClass
    transformerClass(),
  ]
})
```

* mian.ts

```ts
import 'uno.css'
```
