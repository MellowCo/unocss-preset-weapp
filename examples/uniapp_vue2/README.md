* init uniapp

```sh
# 创建uni-app
vue create -p dcloudio/uni-preset-vue my-project
# 安装unocss
yarn add -D unocss @unocss/webpack unplugin-transform-wx-class unocss-preset-wxapp
```

* vue.config.js

```js
const UnoCSS = require('unocss/webpack').default
const presetWxapp = require('unocss-preset-wxapp').default
const transformWxClass = require('unplugin-transform-wx-class/webpack')
const transformSelector = require('unplugin-transform-wx-class/transformSelector')

module.exports = {
  configureWebpack: {
    plugins: [
      UnoCSS({
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
  },
}
```

* main.js

```js
import 'uno.css'
```


<img src="https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202207031414239.png" alt="image-20220703141451188" style="zoom:50%;" />

