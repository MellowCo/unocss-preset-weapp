/*
 * @Author: licl
 * @Date: 2022-07-07 21:07:52
 * @LastEditTime: 2022-07-07 21:17:38
 * @LastEditors: licl
 * @Description:
 */
const rules: { [key: string]: string } = {
  '-d-': '.',
  '-s-': '/',
  '-c-': ':',
  '-p-': '%',
  '-e-': '!',
  '-w-': '#',
  '-bl-': '(',
  '-br-': ')',
  '-fl-': '[',
  '-fr-': ']',
  '-r-': '$',
}

/**
 * unocss webpack会先postprocess转换class 在生成css
 * 例 c-[#157]:60 转成成 c-fl--w-157-fr--c-60 导致匹配的规则无效
 * 复原转换后的class 用于规则匹配
 * @param selector
 */
export function restoreSelector(selector: string) {
  for (const rule in rules)
    selector = selector.replaceAll(rule, rules[rule])
  return selector
}
