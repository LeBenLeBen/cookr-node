<template>
  <CBtn
    v-if="currentUser"
    class="font-medium rounded-l-3xl rounded-r-lg ring-offset-alt-800 md:ring-offset-white align-middle"
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
