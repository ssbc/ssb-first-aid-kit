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

  sbot.whoami((err, keys) => {
    if (err) console.log('could not get keys, got err', err)
    else console.log('whoami details:', keys)

    console.log('disconnecting from server')
    sbot.close()
  })

  vue = new Vue({
    render: h => h(App)
  }).$mount('#app')
})
