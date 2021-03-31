<template>
  <transition-group
    appear
    tag="ul"
    name="fade-in-left"
    class="fixed z-40 right-2 sm:right-3 md:right-4 top-20 sm:top-23 md:top-24 left-2 sm:left-3 md:left-auto md:max-w-84 space-y-3"
    :style="style"
  >
    <li v-for="(notification, i) in notifications" :key="i">
      <Alert
        :variant="notification.type"
        class="cursor-pointer"
        @click="hide(notification)"
      >
        <div v-if="notification.title" class="mb-2 font-bold">
          {{ notification.title }}
        </div>
        {{ notification.message }}
      </Alert>
    </li>
  </transition-group>
</template>

<script>
import { computed } from 'vue';
import { useWindowScroll, useMediaQuery } from '@vueuse/core';

import { notifications, hide } from '@/composables/useNotifications';

export default {
  setup() {
    const { y } = useWindowScroll();
    const isHeaderNotSticky = useMediaQuery('(min-width: 768px)');
    const header = document.querySelector('#app-header');
    const headerHeight = header ? header.getBoundingClientRect().height : 0;

    return {
      notifications: notifications.value,
      hide,
      style: computed(() => {
        if (isHeaderNotSticky.value) {
          return {
            top: `${Math.max(16, headerHeight - y.value)}px`,
          };
        }
        return null;
      }),
    };
  },
};
</script>
