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
    <Avatar :image="currentUser.user?.data?.attributes?.avatar" class="mr-3" />
    {{ currentUser.user?.data?.attributes?.username }}
  </CBtn>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

import store from '@/store';

const currentUser = computed(() => store.state.currentUser);
</script>
