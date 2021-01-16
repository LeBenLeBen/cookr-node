<template>
  <CBtn
    v-if="currentUser"
    class="flex items-center font-medium"
    :title="$t('auth.logout')"
    @click.prevent="confirm"
  >
    <Avatar :image="currentUser.user.avatar" class="mr-3" />
    {{ currentUser.username }}
  </CBtn>
</template>

<script>
import gql from 'graphql-tag';
import { useMutation } from '@vue/apollo-composable';

import store from '@/store';
import router from '@/router';

export default {
  setup() {
    const currentUser = store.state.currentUser;
    const { mutate: logout, onDone } = useMutation(
      gql`
        mutation logout {
          logout {
            authorized
            message
          }
        }
      `
    );

    onDone(() => {
      store.setCurrentUser(null);
      router.push({ name: 'login' });
    });

    return {
      currentUser,
      logout,
    };
  },

  methods: {
    confirm() {
      if (confirm(this.$t('auth.logoutConfirm'))) {
        this.logout();
      }
    },
  },
};
</script>
