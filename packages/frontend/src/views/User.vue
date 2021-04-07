<template>
  <PageHeader :title="username">
    <CBtn
      v-if="isCurrentUser"
      variant="primary small"
      :to="{ name: 'new-recipe' }"
      class="inline-flex items-center"
    >
      <CIcon id="plus" class="-m-1 text-primary-200" />
      <div class="hidden sm:block ml-3">{{ $t('recipe.new.title') }}</div>
    </CBtn>
  </PageHeader>

  <RecipesList sort="title:asc" :where="{ author: { username: username } }" />
</template>

<script>
import { computed, inject, onMounted } from 'vue';

import store from '@/store';

export default {
  props: {
    username: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const setPageTitle = inject('setPageTitle');
    onMounted(() => {
      setPageTitle(props.username);
    });

    return {
      isCurrentUser: computed(
        () => props.username === store.state.currentUser?.username
      ),
    };
  },
};
</script>
