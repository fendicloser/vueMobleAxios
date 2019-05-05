import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './components/tabbar/Login.vue'
import signUp from './components/tabbar/signUp.vue'
import swipe from './components/mintUITry.vue'

import tryParam from './views/tryParam.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/tryParam',
      component:tryParam
    },
    {
      path:'/swipe',
      component:swipe
    },
    {
      path:'/signUp',
      component:signUp
    },
    {
      path:'/Login',
      component:Login
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
