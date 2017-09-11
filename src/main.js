import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex'
import Loader from './plugins/loader'

Vue.use(Loader, store)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
