<template>
  <component :is="$route.meta.layout">
    <Notifications />
    <RouterView />
  </component>
</template>

<script>
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';

import store from './store';
import { currentUserFragment } from './services/fragments';

import AppLayout from '@/components/layouts/AppLayout.vue';
import AuthLayout from '@/components/layouts/AuthLayout.vue';

export default {
  components: {
    AppLayout,
    AuthLayout,
  },

  setup() {
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
  },
};
</script>
