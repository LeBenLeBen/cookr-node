import { useStorage } from '@vueuse/core';

const state = useStorage('cookr', {
  currentUser: null,
});

export default {
  state: state.value,

  setCurrentUser(user) {
    state.value.currentUser = user;
  },
};
