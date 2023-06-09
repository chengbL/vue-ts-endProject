import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/views/Layout/index.vue')
    },
    {
      path: '/login',
      component: () => import('@/views/Login/index.vue')
    }
  ]
})

export default router
