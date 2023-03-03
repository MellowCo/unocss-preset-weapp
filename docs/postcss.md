[unocss](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Funocss%2Funocss) 小程序预设 [unocss-preset-weapp](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2FMellowCo%2Funocss-preset-weapp) 支持  [uniapp](https://uniapp.dcloud.io/) 和 [taro](https://taro-docs.jd.com/taro/docs)

---

​	在写小程序预设前 ，我的想法是基础单位使用 `rpx`，通过uniapp 和 taro 自身的 postcss ，根据不同平台转换成 `rpx` 或 `rem`，但是在 unocss@0.50.0 之前 `webpack平台` 和   [@unocss/transformer-directives](https://github.com/unocss/unocss/tree/main/packages/transformer-directives) 在项目使用过程中，生成的css是不会经过 `postcss` 的。

​	所以在h5环境下，需要在 `unocss-preset-weapp` 中定义转换规则，将 `rpx`转换成`rem` ，所以在`uniapp` 和 `taro` 的源码中关于 `rpx` 的 `postcss` 规则，都提取到 [rpxTransform](https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/rpxTranform) 中, 如果postcss规则发生变化对应的 `rpxTransform` 也要跟着改变无法实现同步。之前 `taro3` 发布时，从 `webpack4` 更新到 `webpack5`，顺带把 `postcss` 规则也重写了,  [升级后字体大了一圈](https://github.com/MellowCo/unocss-preset-weapp/tree/main/examples/taro_webpack4_vue3#taro-h5兼容)，后面也是加入了 taro3 的 `rpxTransform`

​	在 unocss@0.50.0 加入 [postcss](https://github.com/unocss/unocss/tree/main/packages/postcss) 插件，是不是也就意味着可以去除 `rpxTransform` 了呢。

---

## uniapp vue3 vite

1. 安装相关依赖

```shell
ni -D unocss unocss-preset-weapp @unocss/postcss
```

2. unocss.config.ts

```ts
import presetWeapp from 'unocss-preset-weapp'
import { transformerAttributify, transformerClass } from 'unocss-preset-weapp/transformer'
import { transformerDirectives } from 'unocss'

export default {
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
    // https://github.com/unocss/unocss/tree/main/packages/transformer-directives
    transformerDirectives(),

    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerAttributify
    transformerAttributify(),

    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerClass
    transformerClass(),
  ],
}
```

3. vite.config.ts

> 现在通过 postcss 方式，加载 unocss

```ts
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import UnoCSS from '@unocss/postcss'
import { uniPostcssPlugin } from '@dcloudio/uni-cli-shared'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
  ],
  css: {
    postcss: {
      plugins: [
        UnoCSS(),
        uniPostcssPlugin(),
      ],
    },
  },
})
```

4. 新建 style.css

```css
@unocss all;
```

5. 在main.ts 中导入 style.css

```ts
import { createSSRApp } from 'vue'
import App from './App.vue'
import './style.css'

export function createApp() {
  const app = createSSRApp(App)
  return {
    app,
  }
}
```







