<template>
  <div>
    <h1 class="h1 sr-only">{{ $t('home.title') }}</h1>

    <template v-if="recipes?.length">
      <h2 class="h2 mb-4">
        {{ $t('home.recentlyAdded') }}
      </h2>
      <RecipesCarousel :recipes="recipes" :loading="loading" />
    </template>

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

import { Query } from '@/gql/graphql';

import usePageTitle from '@/composables/usePageTitle';
import useResult from '@/composables/useResult';

import i18n from '@/i18n';
import store from '@/store';

usePageTitle(i18n.global.t('home.title'));

const result = useQuery<Query>({
  query: gql`
    query getHome($currentUserId: String) {
      recipes(offset: 0, limit: 5, sort: "-date_created") {
        ...RecipeCard
      }
      users_viewed_recipes(
        filter: { user: { id: { _eq: $currentUserId } } }
        sort: "-date_updated"
      ) {
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
  variables: {
    currentUserId: store.state.value.currentUser?.id,
  },
  context: {
    requestPolicy: 'cache-and-network',
  },
});

const recipes = useResult(result.data, [], (data) => data.recipes);
const lastViewedRecipes = useResult(result.data, [], (data) =>
  data.users_viewed_recipes.filter((r) => !!r.recipe).map((r) => r.recipe)
);
const tags = useResult(result.data, [], (data) => data.tags);
const loading = result.fetching;
</script>
