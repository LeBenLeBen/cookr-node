<template>
  <div class="flex items-center justify-between mb-6">
    <h1 class="h1 mr-4">{{ username }}</h1>

    <CBtn
      v-if="isCurrentUser"
      variant="primary"
      :to="{ name: 'new-recipe' }"
      class="inline-flex items-center"
    >
      <CIcon id="plus" class="-m-1 text-primary-200" />
      <div class="hidden sm:block ml-3">{{ $t('recipe.new.title') }}</div>
    </CBtn>
  </div>
  <RecipesList :recipes="result?.recipes" :loading="loading" />
</template>

<script>
import { computed } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';

import store from '@/store';
import { recipeCardFragment } from '@/services/fragments';

export default {
  props: {
    username: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const { result, loading } = useQuery(
      gql`
        query getRecipesForUser($username: String!) {
          recipes(
            where: { author: { username: $username } }
            sort: "title:asc"
          ) {
            ...RecipeCard
          }
        }
        ${recipeCardFragment}
      `,
      () => ({ username: props.username })
    );

    return {
      result,
      loading,
      isCurrentUser: computed(
        () => props.username === store.state.currentUser.username
      ),
    };
  },
};
</script>
