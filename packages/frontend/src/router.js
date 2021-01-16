import { createRouter, createWebHistory } from 'vue-router';
import store from './store';

const router = createRouter({
  history: createWebHistory(),

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },

  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
      meta: {
        layout: 'AppLayout',
      },
    },
    {
      path: '/u/:username',
      name: 'user',
      component: () => import('./views/User.vue'),
      props: true,
      meta: {
        layout: 'AppLayout',
      },
    },
    {
      path: '/recipes/:slug',
      name: 'recipe',
      component: () => import('./views/Recipe.vue'),
      props: true,
      meta: {
        layout: 'AppLayout',
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
      meta: {
        guest: true,
        layout: 'AuthLayout',
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (!to.meta.guest && !store.state.currentUser) {
    next({ name: 'login' });
  } else if (to.meta.guest && store.state.currentUser) {
    next({ name: 'home' });
  } else {
    next();
  }
});

export default router;
