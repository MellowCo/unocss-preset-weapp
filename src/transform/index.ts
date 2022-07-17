import { escapeRegExp } from '@unocss/core'

const rules: Record<string, string> = {
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
}

/**
 * unocss webpack会先postprocess转换class 在生成css
 * 例 c-[#157]:60 转成成 c-fl--w-157-fr--c-60 导致匹配的规则无效
 * 复原转换后的class 用于规则匹配
 * @param selector
 */
export function restoreSelector(selector: string) {
  for (const rule in rules) {
    const replaceReg = new RegExp(rules[rule], 'g')
    selector = selector.replace(replaceReg, rules[rule])
  }
  return selector
}

export function transformSelector(selector: string) {
  // selector = selector.slice(1)
  // .ring-offset-size-\$variable => .ring-offset-size--r-variable

  if (/[\.\/:%!#\(\)\[\]$]/.test(selector)) {
    for (const rule in rules) {
      const replaceReg = new RegExp(escapeRegExp(`\\${rule}`), 'g')
      selector = selector.replace(replaceReg, rules[rule])
    }
  }
  return selector
}
