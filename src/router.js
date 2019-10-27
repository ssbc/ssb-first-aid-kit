import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import StatusIndexing from '@/views/StatusIndexing'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    { path: '/', component: Home },
    { path: '/indexing', component: StatusIndexing },
    //{ path: '*', redirect: '/' }
  ],
})
