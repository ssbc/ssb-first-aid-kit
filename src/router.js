import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import StatusIndexing from '@/views/StatusIndexing'
import StatusEbt from '@/views/StatusEbt'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    { path: '/', component: Home },
    { path: '/indexing', component: StatusIndexing },
    { path: '/ebt', component: StatusEbt },
    //{ path: '*', redirect: '/' }
  ],
})
