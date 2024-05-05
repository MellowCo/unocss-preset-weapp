import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

// https://vitejs.dev/config/
export default defineConfig(async ()=>{
  const UnoCss = await import('unocss/vite').then(i => i.default)

  return {
    plugins: [
      uni(),
  
      // https://github.com/unocss/unocss
      UnoCss(),
    ],
  }
})
