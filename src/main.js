import Vue from 'vue'
import Vuex from 'vuex'
import App from './views/'
import Store from './store/'

Vue.use(Vuex)

const store = new Vuex.Store(Store)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
