import { useStorage } from '@vueuse/core';

const state = useStorage('cookr', {
  token: null,
  currentUser: null,
});

export default {
  state: state.value,

  setToken(token) {
    state.value.token = token;
  },

  setCurrentUser(user) {
    state.value.currentUser = user;
  },

  updateCurrentUser(user) {
    state.value.currentUser = Object.assign({}, state.value.currentUser, user);
  },
};
