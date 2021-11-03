<template>
  <h1 class="h1 sr-only">{{ $t('home.title') }}</h1>

  <h2 class="h2 mb-4">
    {{ $t('home.recentlyAdded') }}
  </h2>
  <RecipesCarousel :recipes="recipes" :loading="loading" />

  <template v-if="lastViewedRecipes?.length">
    <h2 class="h2 mt-8 mb-4">
      {{ $t('home.recentlyViewed') }}
    </h2>
    <RecipesCarousel :recipes="lastViewedRecipes" :loading="loading" />
  </template>

  <template v-if="tags?.length">
    <hr class="my-6 md:my-8" />
    <TagsList :tags="tags" />
  </template>
</template>

<script>
import { inject, onMounted } from 'vue';
import { useQuery, useResult } from '@vue/apollo-composable';
import gql from 'graphql-tag';

import { recipeCardFragment } from '@/services/fragments';
import i18n from '@/i18n';

export default {
  setup() {
    const setPageTitle = inject('setPageTitle');
    onMounted(() => {
      setPageTitle(i18n.global.t('home.title'));
    });

    const { result, loading } = useQuery(
      gql`
        query getHome {
          recipes(limit: 5, sort: "created_at:desc") {
            ...RecipeCard
          }
          me {
            user {
              id
              lastViewedRecipes {
                recipe {
                  ...RecipeCard
                }
              }
            }
          }
          tags(sort: "title") {
            id
            title
            slug
          }
        }
        ${recipeCardFragment}
      `,
      null,
      {
        fetchPolicy: 'network-only',
      }
    );

    const recipes = useResult(result, [], (data) => data.recipes);
    const lastViewedRecipes = useResult(result, [], (data) =>
      data.me.user.lastViewedRecipes
        .filter((r) => !!r.recipe)
        .map((r) => r.recipe)
    );
    const tags = useResult(result, [], (data) => data.tags);

    return {
      recipes,
      lastViewedRecipes,
      tags,
      loading,
    };
  },
};
</script>
