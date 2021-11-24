<template>
  <div>
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
  </div>
</template>

<script lang="ts" setup>
import { useQuery } from '@urql/vue';
import gql from 'graphql-tag';

import { recipeCardFragment } from '@/services/fragments';
import i18n from '@/i18n';
import useResult from '@/composables/useResult';
import usePageTitle from '@/composables/usePageTitle';
import {
  GQLRecipe,
  GQLTags,
  GQLUsersViewedRecipes,
} from '@/types/graphqlTypes';

usePageTitle(i18n.global.t('home.title'));

interface HomeResponse {
  recipes: GQLRecipe[];
  usersViewedRecipes: Pick<GQLUsersViewedRecipes, 'id' | 'recipe'>[];
  tags: Pick<GQLTags, 'id' | 'title' | 'slug'>[];
}

const result = useQuery<HomeResponse>({
  query: gql`
    query getHome {
      recipes(start: 0, limit: 5, sort: "created_at:desc") {
        ...RecipeCard
      }
      usersViewedRecipes(sort: "updated_at:desc") {
        id
        recipe {
          ...RecipeCard
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
  context: {
    requestPolicy: 'cache-and-network',
  },
});

const recipes = useResult(result.data, [], (data) => data.recipes);
const lastViewedRecipes = useResult(result.data, [], (data) =>
  data.usersViewedRecipes.filter((r) => !!r.recipe).map((r) => r.recipe)
);
const tags = useResult(result.data, [], (data) => data.tags);
const loading = result.fetching;
</script>
