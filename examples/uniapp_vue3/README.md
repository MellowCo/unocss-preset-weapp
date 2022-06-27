* init uniapp
```sh
# init uniapp
npx degit dcloudio/uni-preset-vue#vite-ts uniapp_examples

npm i unocss-preset-wxapp unocss --save-dev # with npm
yarn add unocss-preset-wxapp unocss -D # with yarn
pnpm add unocss-preset-wxapp unocss -D # with pnpm
```

* vite.config.ts

```js
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import Unocss from 'unocss/vite'
import presetWxapp from 'unocss-preset-wxapp'

export default defineConfig({
  plugins: [
    uni(),
    Unocss({
      presets: [
        presetWxapp(),
      ],
      // 设置快捷方式
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


<img src="https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202206262006057.png" alt="image-20220626200638930" style="zoom:50%;" />

<img src="https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202206262008208.png" alt="image-20220626200851164" style="zoom:50%;" />

<img src="https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202206262007807.png" alt="image-20220626200728759" style="zoom:50%;" />
