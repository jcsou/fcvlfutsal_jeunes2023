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
      path: '/AccueilU13',
      name: 'AccueilU13',
      component: () => import('./views/AccueilU13View.vue')
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
    },
    {
        path: '/SenFPoules',
        name: 'SenFPoules',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ './views/SenFPoulesView.vue')
    },
    {
        path: '/SenFFinales',
        name: 'SenFFinales',
        component: () => import('./views/SenFFinalesView.vue')
    },
    {
        path: '/U15FPoules',
        name: 'U15FPoules',
        component: () => import('./views/U15FPoulesView.vue')
    },
    {
        path: '/U15FFinales',
        name: 'U15FFinales',
        component: () => import('./views/U15FFinalesView.vue')
    },
    {
         path: '/TimelineU13',
         name: 'TimelineU13',
         component: () => import('./views/TimelineU13View.vue')
    }
  ]
})