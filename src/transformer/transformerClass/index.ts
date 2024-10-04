import type { FilterPattern } from '@rollup/pluginutils'
import type { SourceCodeTransformer } from '@unocss/core'
import { createFilter } from '@rollup/pluginutils'
import { getClass, transformCode } from 'unplugin-transform-class/utils'

interface Options {
  /**
   * 自定义转换规则
   * @default https://github.com/MellowCo/unplugin-transform-class#options
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

  /**
   * 是否生成 class 标签
   * 会在模板中生成 <!-- class --> 标签，用于 unocss vscode 插件识别
   * https://github.com/MellowCo/unocss-preset-weapp/issues/53
   * @default true
   */
  classTags?: boolean
}

const defaultOptions = {
  classTags: true,
  include: [/\.[jt]sx?$/, /\.vue$/, /\.vue\?vue/],
  exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/],
}

export default function transformerClass(options: Options = {}): SourceCodeTransformer {
  options = {
    ...defaultOptions,
    ...options,
  }

  const idFilter = createFilter(
    options.include,
    options.exclude,
  )

  // vue template
  const vueFilter = createFilter(
    [/\.vue$/, /\.vue\?vue/],
  )

  return {
    name: 'transformer-weapp-class',
    idFilter,
    enforce: 'pre',
    transform(code, id) {
      let newCode = transformCode(code.toString(), options.transformRules)

      if (options.classTags) {
        const classNames = getClass(code.toString())
        const injectStr = Array.from(new Set(classNames.map(x => x[1]).filter(x => x).flatMap(x => x.split(' ')))).join(' ')

        if (vueFilter(id))
          newCode = newCode.replace('<template>', `<template>\n<!-- ${injectStr} -->\n`)
        else
          newCode = `/* ${injectStr} */\n${newCode}`
      }

      code.overwrite(0, code.original.length, newCode)
    },
  }
}
