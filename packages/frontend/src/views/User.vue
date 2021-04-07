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
    <RecipesList sort="title:asc" :where="{ author: { username: username } }" />
  </template>
</template>

<script>
import { computed, inject } from 'vue';
import { useQuery, useResult } from '@vue/apollo-composable';
import gql from 'graphql-tag';

import store from '@/store';
import router from '@/router';

export default {
  props: {
    username: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const setPageTitle = inject('setPageTitle');

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

    return {
      user,
      isCurrentUser: computed(
        () => props.username === store.state.currentUser?.username
      ),
    };
  },
};
</script>
