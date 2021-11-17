<template>
  <Header :menu="menu" />

  <div class="container pb-20">
    <div class="grid md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-14">
      <div class="md:col-span-1 hidden md:block">
        <Nav :menu="menu" />
      </div>

      <main class="min-w-full md:col-start-2 md:col-span-2 lg:col-span-3">
        <slot />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
type MenuItem = {
  label: string;
  icon: string;
  to: RouteLocationRaw;
};

export type MenuGroup = {
  label: string;
  items: MenuItem[];
};
</script>

<script lang="ts" setup>
import { computed } from 'vue';
import { RouteLocationRaw } from 'vue-router';
import { useI18n } from 'vue-i18n';

import store from '@/store';

const { t } = useI18n();

const menu = computed<MenuGroup[]>(() => {
  return [
    {
      label: t('app.explore'),
      items: [
        {
          label: t('app.home'),
          icon: 'home-alt2',
          to: { name: 'home' },
        },
        {
          label: t('app.browse'),
          icon: 'restaurant',
          to: {
            name: 'recipes',
          },
        },
      ],
    },
    {
      label: t('app.mySpace'),
      items: [
        {
          label: t('app.myRecipes'),
          icon: 'book',
          to: {
            name: 'user',
            params: { username: store.state.currentUser!.username },
          },
        },
        {
          label: t('app.favoritesRecipes'),
          icon: 'favourite',
          to: {
            name: 'favorites-recipes',
          },
        },
      ],
    },
  ];
});
</script>
