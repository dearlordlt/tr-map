import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/map',
    name: 'Map',
    component: () => import(/* webpackChunkName: "about" */ '../views/Map.vue')
  },
  {
    path: '/NPC',
    name: 'NPC',
    component: () => import(/* webpackChunkName: "about" */ '../views/NPC.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
