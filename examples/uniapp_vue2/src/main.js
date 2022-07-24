import Vue from 'vue'
import App from './App'
// 如需要开发app， cssMode: 'style'，不需要在 main.js 中引入 uno.css
// 只开发h5和小程序，cssMode: 'import'，则需要在 main.js 中引入 uno.css
// import 'uno.css'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App,
})
app.$mount()
