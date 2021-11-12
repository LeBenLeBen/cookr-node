import { createRouter, createWebHistory } from 'vue-router';
import store from './store';

const router = createRouter({
  history: createWebHistory(),

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(savedPosition);
        }, 300);
      });
    } else {
      return { top: 0, behavior: 'smooth' };
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
      path: '/recipes/new',
      name: 'new-recipe',
      component: () => import('./views/NewRecipe.vue'),
      meta: {
        layout: 'AppLayout',
      },
    },
    {
      path: '/recipes/:id(\\d+)-:slug',
      name: 'recipe',
      component: () => import('./views/Recipe.vue'),
      props: true,
      meta: {
        layout: 'AppLayout',
      },
    },
    {
      path: '/recipes/edit/:id',
      name: 'edit-recipe',
      component: () => import('./views/EditRecipe.vue'),
      props: true,
      meta: {
        layout: 'AppLayout',
      },
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: () => import('./views/Recipes.vue'),
      meta: {
        layout: 'AppLayout',
      },
    },
    {
      path: '/recipes/favorites',
      name: 'favorites-recipes',
      component: () => import('./views/Favorites.vue'),
      meta: {
        layout: 'AppLayout',
      },
    },
    {
      path: '/tags/:slug',
      name: 'tag',
      component: () => import('./views/Tag.vue'),
      props: true,
      meta: {
        layout: 'AppLayout',
      },
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('./views/Profile.vue'),
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
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: () => import('./views/ForgotPassword.vue'),
      meta: {
        guest: true,
        layout: 'AuthLayout',
      },
    },
    {
      path: '/reset-password',
      name: 'reset-password',
      component: () => import('./views/ResetPassword.vue'),
      meta: {
        guest: true,
        layout: 'AuthLayout',
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('./views/NotFound.vue'),
      meta: {
        guest: false,
        layout: 'AuthLayout',
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (!to.meta.guest && !store.state.token) {
    next({ name: 'login' });
  } else if (to.meta.guest && store.state.token) {
    next({ name: 'home' });
  } else {
    next();
  }
});

export default router;
