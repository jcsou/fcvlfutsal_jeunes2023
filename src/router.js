import Vue from 'vue'
import Router from 'vue-router'
import AccueilView from './views/AccueilView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: AccueilView
    },
    {
        path: '/U11Poules',
        name: 'U11Poules',
        component: () => import('./views/U11PoulesView.vue')
    },
    {
        path: '/U11Finales',
        name: 'U11Finales',
        component: () => import('./views/U11FinalesView.vue')
    },
    {
        path: '/U9Poules',
        name: 'U9Poules',
        component: () => import('./views/U9PoulesView.vue')
    },
    {
        path: '/U9Finales',
        name: 'U9Finales',
        component: () => import('./views/U9FinalesView.vue')
    }
  ]
})