import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      component: AboutView
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('../views/List.vue')
      // component: () => import('../views/Test.vue')
    }
  ]
})

export default router
