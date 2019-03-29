import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Air from '@/views/Air'
import Wash from '@/views/Wash'
import Shop from '@/views/Shop'
import Map from '@/views/Map'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: Home },
    { path: '/1', component: Air },
    { path: '/2', component: Wash },
    { path: '/3', component: Shop },
    { path: '/4', component: Map }
  ]
})
