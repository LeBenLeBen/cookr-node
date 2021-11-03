<template>
  <component :is="$route.meta.layout">
    <Notifications />
    <RouterView />
  </component>
</template>

<script>
import { computed, provide, ref } from 'vue';
import gql from 'graphql-tag';
import { useQuery, provideApolloClient } from '@vue/apollo-composable';
import { useTitle } from '@vueuse/core';

import store from './store';
import { currentUserFragment } from './services/fragments';
import apolloClient from './services/apolloClient';

import AppLayout from '@/components/layouts/AppLayout.vue';
import AuthLayout from '@/components/layouts/AuthLayout.vue';

export default {
  components: {
    AppLayout,
    AuthLayout,
  },

  setup() {
    const pageTitle = ref(null);
    const setPageTitle = (value) => {
      pageTitle.value = value;
    };
    const fullPageTitle = computed(() => {
      return pageTitle?.value ? `${pageTitle.value} · Cookr` : 'Cookr';
    });

    useTitle(fullPageTitle);

    provide(
      'pageTitle',
      computed(() => pageTitle.value)
    );
    provide('setPageTitle', setPageTitle);
    provideApolloClient(apolloClient);

    if (store.state.currentUser) {
      const { onResult } = useQuery(
        gql`
          query currentUser {
            me {
              ...CurrentUser
            }
          }
          ${currentUserFragment}
        `,
        null,
        {
          fetchPolicy: 'no-cache',
        }
      );

      onResult((result) => {
        if (result.data.me) {
          store.setCurrentUser(result.data.me);
        }
      });
    }
  },
};
</script>
