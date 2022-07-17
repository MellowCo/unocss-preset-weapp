import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import Unocss from 'unocss/vite'
import transformWxClass from 'unplugin-transform-wx-class/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    Unocss(),
    transformWxClass(),
  ],
})
