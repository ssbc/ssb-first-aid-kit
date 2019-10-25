import Vue from 'vue'
import App from './views/'
import ssbClient from "ssb-client"

let vue

ssbClient((err, sbot) => {
  if (err) {
    console.error('Could not connect to ssb-server')
    throw err
  }

  Vue.prototype.$sbot = sbot

  vue = new Vue({
    render: h => h(App)
  }).$mount('#app')
})
