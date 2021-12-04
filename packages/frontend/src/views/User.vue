<template>
  <div v-if="user">
    <PageHeader :title="user.attributes.username">
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
import { watchEffect, computed, ref } from 'vue';
import { useQuery } from '@urql/vue';
import gql from 'graphql-tag';

import store from '@/store';
import router from '@/router';

import useRecipesList from '@/composables/useRecipesList';
import useResult from '@/composables/useResult';
import usePageTitle from '@/composables/usePageTitle';
import { Query } from '@/gql/graphql';

const props = defineProps({
  username: {
    type: String,
    required: true,
  },
});

const result = await useQuery<Query>({
  query: gql`
    query userProfile($username: String!) {
      usersPermissionsUsers(filters: { username: { eq: $username } }) {
        data {
          id
          attributes {
            username
          }
        }
      }
    }
  `,
  variables: { username: computed(() => props.username) },
});

watchEffect(() => {
  const user = result.data.value?.usersPermissionsUsers?.data?.[0];

  if (user) {
    usePageTitle(user.attributes?.username);
  } else {
    router.replace({ name: 'not-found' });
  }
});

const user = useResult(
  result.data,
  null,
  (data) => data.usersPermissionsUsers?.data?.[0]
);

const isCurrentUser = computed(
  () => props.username === store.state.currentUser!.username
);

const params = ref({
  sort: ['title:asc'],
  filters: {
    author: {
      username: {
        eq: props.username,
      },
    },
  },
});

const collection = useRecipesList(params);
</script>
