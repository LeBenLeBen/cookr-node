<template>
  <RecipesList :recipes="result?.recipes" :loading="loading" />
</template>

<script>
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';

import { recipeCardFragment } from '@/services/fragments';

export default {
  setup() {
    const { result, loading } = useQuery(gql`
      query getMostRecentRecipes {
        recipes(limit: 10, sort: "created_at:asc") {
          ...RecipeCard
        }
      }
      ${recipeCardFragment}
    `);

    return {
      result,
      loading,
    };
  },
};
</script>
