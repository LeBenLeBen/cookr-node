<template>
  <div v-if="user">
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
  </div>
</template>

<script lang="ts" setup>
import { useQuery } from '@urql/vue';
import gql from 'graphql-tag';
import { computed, watchEffect } from 'vue';

import { GRAPHQL_SYSTEM_URL } from '@/services/apiClient';

import { Query } from '@/gql/graphql';

import usePageTitle from '@/composables/usePageTitle';
import useRecipesList from '@/composables/useRecipesList';
import useResult from '@/composables/useResult';

import router from '@/router';
import store from '@/store';

const props = defineProps<{
  username: string;
}>();

const result = await useQuery<Query>({
  query: gql`
    query userProfile($username: String!) {
      users(filter: { username: { _eq: $username } }) {
        id
        username
      }
    }
  `,
  variables: { username: computed(() => props.username) },
  context: {
    url: GRAPHQL_SYSTEM_URL,
  },
});

watchEffect(() => {
  if (result.data.value?.users?.[0]) {
    usePageTitle(result.data.value.users[0].username);
  } else {
    router.replace({ name: 'not-found' });
  }
});

const user = useResult(result.data, null, (data) => data.users?.[0]);

const isCurrentUser = computed(
  () => props.username === store.state.value.currentUser!.username
);

const collection = useRecipesList(
  computed(() => ({
    sort: ['title'],
    filter: {
      author: {
        username: {
          _eq: props.username,
        },
      },
    },
  }))
);
</script>
