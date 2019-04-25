import Vue from 'vue'
import App from './App'
import router from './router'
import 'mint-ui/lib/style.css'
import Vuex from "vuex"
import store from './store'

Vue.config.productionTip = false

import MintUI from 'mint-ui'
Vue.use(MintUI)
Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
