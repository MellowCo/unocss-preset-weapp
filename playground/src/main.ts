import { createSSRApp } from 'vue'
import App from './App.vue'
import 'unocss'

export function createApp() {
  const app = createSSRApp(App)
  return {
    app,
  }
}
