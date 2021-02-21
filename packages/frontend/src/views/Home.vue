<template>
  <h1 class="h1 sr-only">{{ $t('home.title') }}</h1>

  <h2 class="h2 mb-4">
    {{ $t('home.recentlyAdded') }}
  </h2>
  <RecipesCarousel :recipes="result?.recipes" :loading="loading" />
</template>

<script>
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';

import { recipeCardFragment } from '@/services/fragments';

export default {
  setup() {
    const { result, loading } = useQuery(gql`
      query getMostRecentRecipes {
        recipes(limit: 5, sort: "created_at:asc") {
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
