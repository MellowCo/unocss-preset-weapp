import type { SourceCodeTransformer } from '@unocss/core'
import type { Options } from 'unplugin-transform-we-class/types'
import { transformCode } from 'unplugin-transform-we-class/utils'
import { createFilter } from '@rollup/pluginutils'

export default function transformerWeClass(options: Options = {}): SourceCodeTransformer {
  const idFilter = createFilter(
    options.include || [/\.[jt]sx?$/, /\.vue$/, /\.vue\?vue/],
    options.exclude || [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/],
  )

  return {
    name: 'we-class',
    idFilter,
    enforce: 'pre',
    transform(code) {
      const newCode = transformCode(code.toString(), options.rules)
      code.overwrite(0, code.original.length, newCode)
    },
  }
}
