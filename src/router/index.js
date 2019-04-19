import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Air from '@/views/Air'
import Wash from '@/views/Wash'
import Advert from '@/views/Advert'
import Wash1 from '@/views/Wash1'
import Pay from '@/views/Pay'
import Shop from '@/views/Shop'
import Map from '@/views/Map'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/air', component: Air },
    { path: '/ad', component: Advert },
    { path: '/wash', component: Wash },
    { path: '/wash1', component: Wash1 },
    { path: '/pay', component: Pay },
    { path: '/shop', component: Shop },
    { path: '/map', component: Map }
  ]
})
