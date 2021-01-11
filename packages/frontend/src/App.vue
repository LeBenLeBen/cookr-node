<template>
  <Header :menu="menu" />

  <div class="container pb-10">
    <div class="grid md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-14">
      <div class="md:col-span-1 hidden md:block">
        <Nav :menu="menu" />
      </div>

      <main class="md:col-start-2 md:col-span-5">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
import { provide } from 'vue';
import { DefaultApolloClient } from '@vue/apollo-composable';

import apolloClient from './services/apolloClient';

export default {
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  computed: {
    menu() {
      return [
        {
          label: this.$t('app.explore'),
          items: [
            {
              label: this.$t('app.home'),
              icon: 'home-alt2',
              to: { name: 'home' },
            },
            {
              label: this.$t('app.myRecipes'),
              icon: 'book',
              to: {
                name: 'user',
                params: { username: 'leben' },
              },
            },
          ],
        },
      ];
    },
  },
};
</script>
