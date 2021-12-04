import { useStorage } from '@vueuse/core';
import {
  UsersPermissionsMe,
  UsersPermissionsUserEntityResponse,
} from '@/gql/graphql';

interface State {
  token: string | null;
  currentUser: UsersPermissionsMe | null;
}

const state = useStorage<State>('cookr', {
  token: null,
  currentUser: null,
});

export default {
  state: state.value,

  setToken(token: string | null) {
    state.value.token = token;
  },

  setCurrentUser(user: UsersPermissionsMe | null) {
    state.value.currentUser = user;
  },

  updateCurrentUserProfile(user: UsersPermissionsUserEntityResponse) {
    if (!state.value.currentUser?.user) return;

    state.value.currentUser.user = Object.assign(
      {},
      state.value.currentUser?.user,
      user
    );
  },
};
