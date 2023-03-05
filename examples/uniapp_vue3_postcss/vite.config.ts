import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import UnoCSS from '@unocss/postcss'
import { uniPostcssPlugin } from '@dcloudio/uni-cli-shared'

function pluginsFn(){
  const plugins: any[] = [UnoCSS()]

  if(process.env.UNI_PLATFORM !== 'mp-weixin'){
    plugins.push(uniPostcssPlugin())
  }
  
  return plugins
}


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
      uni(),
    ],
    css: {
      postcss: {
        plugins: pluginsFn(),
      },
    },
  }
)
