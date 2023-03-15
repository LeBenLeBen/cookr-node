import { useStorage } from '@vueuse/core';

import { Directus_Users } from '@/gql/graphql';

interface State {
  auth: {
    accessToken: string;
    refreshToken: string;
    expires: number;
  } | null;
  currentUser: Directus_Users | null;
}

const state = useStorage<State>('cookr', {
  auth: null,
  currentUser: null,
});

export default {
  state,

  setAuth(accessToken: string, refreshToken: string, expires: number) {
    state.value.auth = {
      accessToken,
      refreshToken,
      expires: Date.now() + expires,
    };
  },

  resetAuth() {
    state.value.auth = null;
    state.value.currentUser = null;
  },

  setCurrentUser(user: Directus_Users | null) {
    state.value.currentUser = user;
  },

  updateCurrentUser(user: Directus_Users) {
    state.value.currentUser = Object.assign({}, state.value.currentUser, user);
  },
};
