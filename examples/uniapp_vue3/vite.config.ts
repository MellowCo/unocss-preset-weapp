import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import Unocss from 'unocss/vite'
import transformWeClass from 'unplugin-transform-we-class/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    Unocss(),
    transformWeClass(),
  ],
})
