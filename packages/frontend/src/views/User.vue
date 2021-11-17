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
import { watchEffect, computed } from 'vue';
import { useQuery } from '@urql/vue';
import gql from 'graphql-tag';

import store from '@/store';
import router from '@/router';

import useRecipesList from '@/composables/useRecipesList';
import useResult from '@/composables/useResult';
import usePageTitle from '@/composables/usePageTitle';

const props = defineProps({
  username: {
    type: String,
    required: true,
  },
});

const result = await useQuery({
  query: gql`
    query userProfile($username: String!) {
      users(where: { username: $username }) {
        id
        username
      }
    }
  `,
  variables: { username: computed(() => props.username) },
});

watchEffect(() => {
  if (result.data.value.users?.[0]) {
    usePageTitle(result.data.value.users[0].username);
  } else {
    router.replace({ name: 'not-found' });
  }
});

const user = useResult(result.data, null, (data) => data.users?.[0]);

const isCurrentUser = computed(
  () => props.username === store.state.currentUser!.username
);

const collection = useRecipesList({
  sort: 'title:asc',
  where: {
    author: {
      username: computed(() => props.username),
    },
  },
});
</script>
