import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FormView from '../views/FormView.vue'
import TableView from '../views/TableView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta:{
      isAuthenticated: true
    }
  },
  {
    path: '/table',
    name: 'table',
    component: TableView,
    meta:{
      isAuthenticated: true
    }
  },
  {
    path: '/form',
    name: 'form',
    component: FormView,
    meta:{
      isAuthenticated: true
    }
  },
  {
    path: '/extras',
    name: 'extras',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
