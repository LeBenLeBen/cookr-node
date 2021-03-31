<template>
  <h1 class="h1 sr-only">{{ $t('home.title') }}</h1>

  <h2 class="h2 mb-4">
    {{ $t('home.recentlyAdded') }}
  </h2>
  <RecipesCarousel :recipes="recipes" :loading="loading" />

  <template v-if="tags.length">
    <hr class="my-8" />
    <TagsList :tags="tags" />
  </template>
</template>

<script>
import { useQuery, useResult } from '@vue/apollo-composable';
import gql from 'graphql-tag';

import { recipeCardFragment } from '@/services/fragments';

export default {
  setup() {
    const { result, loading } = useQuery(gql`
      query getHome {
        recipes(limit: 5, sort: "created_at:asc") {
          ...RecipeCard
        }
        tags(sort: "title") {
          title
          slug
        }
      }
      ${recipeCardFragment}
    `);

    const recipes = useResult(result, [], (data) => data.recipes);
    const tags = useResult(result, [], (data) => data.tags);

    return {
      recipes,
      tags,
      loading,
    };
  },
};
</script>
