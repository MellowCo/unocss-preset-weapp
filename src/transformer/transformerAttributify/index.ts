import type { Options } from 'unplugin-attributify-to-class/types'
import { presetWeappAttributify as preset } from './autocomplete'
import transformer from './transformer'

export function extractorAttributify(options: Options = {}) {
  return {
    transformerAttributify: () => transformer(options),
    presetWeappAttributify: () => preset(options),
  }
}

export const transformerAttributify = transformer
