import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
    },
    {
      path: '/u/:username',
      name: 'user',
      component: () => import('./views/User.vue'),
      props: true,
    },
    {
      path: '/recipes/:slug',
      name: 'recipe',
      component: () => import('./views/Recipe.vue'),
      props: true,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
