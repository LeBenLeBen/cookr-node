<template>
  <component :is="$route.meta.layout">
    <RouterView />
  </component>
</template>

<script>
import { provide } from 'vue';
import { DefaultApolloClient } from '@vue/apollo-composable';

import apolloClient from './services/apolloClient';
import AppLayout from '@/components/layouts/AppLayout.vue';
import AuthLayout from '@/components/layouts/AuthLayout.vue';

export default {
  components: {
    AppLayout,
    AuthLayout,
  },

  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
};
</script>
