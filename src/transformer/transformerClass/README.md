# transformerClass

按照自定义转换规则， 转换 `html class` 选择器

> 用于转换 `微信小程序` 不支持的 `\\`，`\:` `\[` `\$`  `\.` 等转义类名， 实现在小程序中使用原子化css
![](https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202209181628083.png)


* 0.1.14 版本后将 `unplugin-transform-class` 核心方法，提取到 `transformerClass` 中
* 如有 webpack 和 vite 插件需求，请使用 [unplugin-transform-class](https://github.com/MellowCo/unplugin-transform-class)

---

## 转换效果

static class

```html
<view class="tracking-[2/5] bg-teal-200:55">
  tracking-[2/5]
</view>
```

setting rules

```js
const rules = {
  '/': '-s-',
  ':': '-c-',
  '[': '-fl-',
  ']': '-fr-',
}
```

transfrom

```html
<view class="tracking--fl-2-s-5-fr- bg-teal-200-c-55">
  tracking-[2/5]
</view>
```
---

## 如何使用

### options
```ts
export interface Options {
  /**
   * 自定义转换规则
   * @default
   * {
      '.': '-d-',
      '/': '-s-',
      ':': '-c-',
      '%': '-p-',
      '!': '-e-',
      '#': '-w-',
      '(': '-bl-',
      ')': '-br-',
      '[': '-fl-',
      ']': '-fr-',
      '$': '-r-',
      ',': '-co-',
    }
   */
  transformRules?: Record<string, string>

  /**
   * 排除转换目标
   * @default [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/]
   */
  exclude?: FilterPattern

  /**
   * 需要转换的目标
   * @default [/\.[jt]sx?$/, /\.vue$/,  /\.vue\?vue/]
   */
  include?: FilterPattern
}
```

---
### 自定义转换规则

```ts
import { transformerClass } from 'unocss-preset-weapp/transformer'

const myRules = {
  '.': '-ddd-',
  '/': '-ss-',
  ':': '-cc-',
  '%': '-pp-'
}

transformerClass({
  transformRules: myRules
})
```

---

### 设置 exclude include
```ts
import { transformerClass } from 'unocss-preset-weapp/transformer'

transformerClass({
  exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]my-folder[\\/]/],
  include: [/\.vue$/, /\.vue\?vue/]
})
```
---

