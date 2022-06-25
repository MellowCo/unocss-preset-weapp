## fix

### * 选择器

> 小程序不支持`*`选择器

![image-20220625135411354](https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202206251354402.png)

> 将`*`改为`view`

```js
const wxPerfix = 'view'

export const preflights: Preflight[] = [
  {
    layer: 'preflights',
    getCSS(ctx: PreflightContext<Theme>) {
      if (ctx.theme.preflightBase)
        return `${wxPerfix},::before,::after{${entriesToCss(Object.entries(ctx.theme.preflightBase))}}`
    },
  },
]
```



