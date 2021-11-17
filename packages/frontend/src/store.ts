import { useStorage } from '@vueuse/core';
import { GQLUsersPermissionsMe } from './types/graphqlTypes';

interface State {
  token: string | null;
  currentUser: GQLUsersPermissionsMe | null;
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

  setCurrentUser(user: GQLUsersPermissionsMe | null) {
    state.value.currentUser = user;
  },

  updateCurrentUser(user: GQLUsersPermissionsMe) {
    state.value.currentUser = Object.assign({}, state.value.currentUser, user);
  },
};
