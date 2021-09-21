<template>
  <CBtn
    v-if="currentUser"
    :to="{ name: 'profile' }"
    class="
      font-medium
      rounded-l-3xl rounded-r-lg
      ring-offset-alt-800
      md:ring-offset-white
      align-middle
    "
    :title="$t('auth.logout')"
  >
    <Avatar :image="currentUser.user.avatar" class="mr-3" />
    {{ currentUser.username }}
  </CBtn>
</template>

<script>
import { computed } from 'vue';

import store from '@/store';

export default {
  setup() {
    return {
      currentUser: computed(() => store.state.currentUser),
    };
  },
};
</script>
