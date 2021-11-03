<template>
  <template v-if="user">
    <PageHeader :title="user.username">
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
    <RecipesList v-bind="collection.state" @load-more="collection.loadMore" />
  </template>
</template>

<script setup>
import { computed, inject } from 'vue';
import { useQuery, useResult } from '@vue/apollo-composable';
import gql from 'graphql-tag';

import store from '@/store';
import router from '@/router';
import useRecipesList from '@/composables/useRecipesList';

const setPageTitle = inject('setPageTitle');
const props = defineProps({
  username: {
    type: String,
    required: true,
  },
});
const { result, onResult } = useQuery(
  gql`
    query userProfile($username: String!) {
      users(where: { username: $username }) {
        id
        username
      }
    }
  `,
  () => ({ username: props.username })
);
const user = useResult(result, null, (data) => data.users?.[0]);

onResult((response) => {
  if (response.data.users?.[0]) {
    setPageTitle(response.data.users[0].username);
  } else {
    router.replace({ name: 'not-found' });
  }
});

const isCurrentUser = computed(
  () => props.username === store.state.currentUser?.username
);
const collection = useRecipesList({
  sort: 'title:asc',
  where: {
    author: {
      username: props.username,
    },
  },
});
</script>
