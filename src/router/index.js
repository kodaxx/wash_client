import Vue from 'vue'
import Router from 'vue-router'
import Air from '@/views/Air'
import Wash from '@/views/Wash'
import Shop from '@/views/Shop'
import Map from '@/views/Map'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/1' },
    { path: '/1', component: Air },
    { path: '/2', component: Wash },
    { path: '/3', component: Shop },
    { path: '/4', component: Map }
  ]
})
