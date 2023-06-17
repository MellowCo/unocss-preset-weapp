import type { Options } from 'unplugin-attributify-to-class/types'
import transformer from './transformer'
import { presetWeappAttributify as preset } from './autocomplete'

export function extractorAttributify(options: Options = {}) {
  return {
    transformerAttributify: () => transformer(options),
    presetWeappAttributify: () => preset(options),
  }
}

export const transformerAttributify = transformer
