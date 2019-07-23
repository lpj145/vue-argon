import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import('./views/Dashboard.vue')
    },
    {
      path: '/cards',
      name: 'cards',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/buttons',
      name: 'buttons',
      component: () => import('./views/Buttons.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/tables',
      name: 'tables',
      component: () => import('./views/Tables.vue')
    }
  ]
})
