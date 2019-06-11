import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard'
import About from './views/About'
import Sites from './views/Sites'
import Pchelp from './views/Pchelp'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/sites',
      name: 'sites',
      component: Sites
    },
    {
      path: '/pchelp',
      name: 'pchelp',
      component: Pchelp
    },
  ]
})