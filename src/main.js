import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import Store from './store/'
import router from "./router"

Vue.use(Vuex)

const store = new Vuex.Store(Store)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
