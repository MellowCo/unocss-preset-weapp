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



---

### size

> 去除`%`

```js
'h-1.000%',
'h-1.001%',
'h-1.010%',
'h-1.100%',
```



> `/`改为`_`

```js
'h-1/2', => 'h-1_2'
'h-2/2', => 'h-2_2'
'h-3/2', => 'h-3_2'
'h-1/3', => 'h-1_3'
'h-2/3', => 'h-2_3'
```



> 去除`[]`

```js
'max-h-[1px]',
'h-[calc(1000px-4rem)]'
```



> 去除`$var`

```js
'max-w-$var'
'min-w-$var'
'h-$var'
```



