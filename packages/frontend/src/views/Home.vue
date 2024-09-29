<template>
  <div class="container container--md">
    <h1 class="h1 sr-only">{{ $t('home.title') }}</h1>

    <template v-if="tags?.length">
      <h2 class="h2 mb-4">{{ $t('home.tags') }}</h2>
      <TagsList :tags="tags" />
    </template>

    <template v-if="recipes?.length">
      <h2 class="h2 mt-8 mb-4">{{ $t('home.recentlyAdded') }}</h2>
      <ul class="space-y-3 sm:space-y-4">
        <li v-for="recipe in recipes" :key="recipe.id">
          <RecipeListItem
            :recipe="recipe"
            :username="recipe.author?.username ?? null"
          />
        </li>
      </ul>
    </template>

    <template v-if="lastViewedRecipes?.length">
      <h2 class="h2 mt-8 mb-4">{{ $t('home.recentlyViewed') }}</h2>
      <ul class="space-y-3 sm:space-y-4">
        <li v-for="recipe in lastViewedRecipes" :key="recipe.id">
          <RecipeListItem
            :recipe="recipe"
            :username="recipe.author?.username ?? null"
          />
        </li>
      </ul>
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
      recipes(offset: 0, limit: 3, sort: "-date_created") {
        ...RecipeCard
      }
      users_viewed_recipes(
        filter: { user: { id: { _eq: $currentUserId } } }
        limit: 3
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
</script>
