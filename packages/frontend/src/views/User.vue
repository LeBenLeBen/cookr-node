<template>
  <h1 class="mb-5">{{ username }}</h1>
  <RecipesList :recipes="result?.recipes" :loading="loading" />
</template>

<script>
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';

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
          recipes(where: { author: { username: $username } }) {
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
    };
  },
};
</script>
