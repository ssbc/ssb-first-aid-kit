import Vue from 'vue'
import Vuex from 'vuex'
import App from './views/'
import ssbClient from 'ssb-client'

let vue

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

ssbClient((err, sbot) => {
  if (err) {
    console.error('Could not connect to ssb-server')
    throw err
  }

  Vue.prototype.$sbot = sbot

  vue = new Vue({
    store,
    render: h => h(App)
  }).$mount('#app')
})
