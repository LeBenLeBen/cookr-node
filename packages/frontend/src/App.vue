<template>
  <component :is="$route.meta.layout">
    <Notifications />
    <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <transition
          enter-active-class="transition-opacity ease-in-out"
          leave-active-class="transition-opacity ease-in-out"
          enter-from-class="opacity-0"
          leave-to-class="opacity-0"
          mode="out-in"
        >
          <Suspense>
            <component :is="Component"></component>
          </Suspense>
        </transition>
      </template>
    </RouterView>
  </component>
</template>

<script>
import { computed, provide, ref } from 'vue';
import gql from 'graphql-tag';
import { useQuery, provideClient } from '@urql/vue';
import { useTitle } from '@vueuse/core';

import store from './store';

import { currentUserFragment } from './services/fragments';
import client from './services/apiClient';

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
    provideClient(client);

    if (store.state.currentUser) {
      useQuery({
        query: gql`
          query currentUser {
            me {
              ...CurrentUser
            }
          }
          ${currentUserFragment}
        `,
        context: {
          requestPolicy: 'no-cache',
        },
      }).then((result) => {
        if (result.data.me) {
          store.setCurrentUser(result.data.me);
        }
      });
    }
  },
};
</script>
