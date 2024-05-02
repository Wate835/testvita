import { createRouter, createWebHistory } from 'vue-router'
import { authMiddleware } from '@/router/middleware/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      meta: { requireAuth: true, name: 'Главная' },
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/auth',
      component: () => import('../views/AuthView.vue')
    }
  ]
})

router.beforeEach(authMiddleware);

export default router
