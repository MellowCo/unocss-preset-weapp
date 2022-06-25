import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import Unocss from 'unocss/vite'
import presetWxapp from '../src/index'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    Unocss({
      presets: [
        presetWxapp(),
      ],
    }),
  ],
})

