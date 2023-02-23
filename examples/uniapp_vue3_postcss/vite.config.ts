import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import UnoCSS from '@unocss/postcss'
import { uniPostcssPlugin } from '@dcloudio/uni-cli-shared'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
  ],
  css: {
    postcss: {
      plugins: [
        UnoCSS(),
        uniPostcssPlugin(),
      ],
    },
  },
})
