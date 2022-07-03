* init uniapp
```sh
# init uniapp
npx degit dcloudio/uni-preset-vue#vite-ts uniapp_examples

# unocss 小程序预设
pnpm add unocss-preset-wxapp unocss -D 

# 小程序class转换插件
pnpm add vite-plugin-transform-wx-class -D
```

* vite.config.ts

```js
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import Unocss from 'unocss/vite'
import presetWxapp from 'unocss-preset-wxapp'
import transformWxClass, { transformSelector } from 'vite-plugin-transform-wx-class'

export default defineConfig({
  plugins: [
    uni(),
    Unocss({
      presets: [
        presetWxapp(),
      ],
      shortcuts: [
        {
          'border-base': 'border border-gray-500_10',
          'center': 'flex justify-center items-center',
        },
      ],
      postprocess: (css) => {
        css.selector = transformSelector(css.selector)
        return css
      },
    }),
    transformWxClass(),
  ],
})
```

* main.ts

```js
import 'uno.css'
```


<img src="https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202207031414239.png" alt="image-20220703141451188" style="zoom:50%;" />

