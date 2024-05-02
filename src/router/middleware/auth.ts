import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

import { useAuthStore } from '@/stores/auth';

export async function authMiddleware(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
): Promise<void> {
  if (to.meta.requireAuth && to.path !== '/auth') {
    const authStore = useAuthStore();

    if (!authStore.isAuthenticated) {
      next('/auth');
    } else {
      next();
    }
  } else {
    next();
  }
}
