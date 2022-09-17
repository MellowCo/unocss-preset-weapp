import type { SourceCodeTransformer } from '@unocss/core'
import type { Options } from 'unplugin-unocss-attributify-wechat/types'
import { extractorAttributify } from 'unplugin-unocss-attributify-wechat/utils'
import { createFilter } from '@rollup/pluginutils'

export default function transformerWeAttributify(options: Options = {}): SourceCodeTransformer {
  const idFilter = createFilter(
    options.include || [/\.vue$/, /\.vue\?vue/],
    options.exclude || [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/],
  )

  const extractor = extractorAttributify(options)

  return {
    name: 'transformer-applet-attributify',
    idFilter,
    enforce: 'pre',
    transform(code) {
      const newCode = extractor(code.toString())
      code.overwrite(0, code.original.length, newCode)
    },
  }
}
