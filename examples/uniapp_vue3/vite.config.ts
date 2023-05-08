import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),

    // https://github.com/unocss/unocss
    Unocss({
      mode: 'vue-scoped',
    }),
  ],
})
