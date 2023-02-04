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

<script lang="ts">
import { provideClient } from '@urql/vue';
import { defineComponent } from 'vue';

import client from './services/apiClient';

import AppLayout from '@/components/layouts/AppLayout.vue';
import AuthLayout from '@/components/layouts/AuthLayout.vue';

export default defineComponent({
  components: {
    AppLayout,
    AuthLayout,
  },

  setup() {
    provideClient(client);
  },
});
</script>
