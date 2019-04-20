import Vue from 'vue'
import App from './App'
import router from './router'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false

import MintUI from 'mint-ui'
Vue.use(MintUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
