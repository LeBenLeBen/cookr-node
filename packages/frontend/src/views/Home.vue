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

import i18n from '@/i18n';
import store from '@/store';

import useResult from '@/composables/useResult';
import usePageTitle from '@/composables/usePageTitle';

import { recipeCardFragment } from '@/services/fragments';
import { Query } from '@/gql/graphql';

usePageTitle(i18n.global.t('home.title'));

const result = useQuery<Query>({
  query: gql`
    query getHome($currentUserId: ID!) {
      recipes(pagination: { start: 0, limit: 5 }, sort: "createdAt:desc") {
        data {
          id
          attributes {
            ...RecipeCard
          }
        }
      }
      usersViewedRecipes(
        filters: { user: { id: { eq: $currentUserId } } }
        sort: "updatedAt:desc"
      ) {
        data {
          id
          attributes {
            recipe {
              data {
                id
                attributes {
                  ...RecipeCard
                }
              }
            }
          }
        }
      }
      tags(sort: "title") {
        data {
          id
          attributes {
            title
            slug
          }
        }
      }
    }
    ${recipeCardFragment}
  `,
  variables: {
    currentUserId: store.state.currentUser?.id,
  },
  context: {
    requestPolicy: 'cache-and-network',
  },
});

const recipes = useResult(result.data, [], (data) => data.recipes.data);
const lastViewedRecipes = useResult(result.data, [], (data) =>
  data.usersViewedRecipes.data.map((uvr) => uvr.attributes.recipe.data)
);
const tags = useResult(result.data, [], (data) => data.tags.data);
const loading = result.fetching;
</script>
