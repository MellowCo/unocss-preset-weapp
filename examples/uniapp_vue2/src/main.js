import Vue from 'vue'
import App from './App'
// 不再需要导入 uno.css
import 'uno.css'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App,
})
app.$mount()
