<template>
  <div>
    <PageHeader :title="$t('favorites.title')" />

    <RecipesList
      :loading="loading"
      :has-more="hasMore"
      :total="total"
      :recipes="recipes"
      @load-more="loadMore"
    />
  </div>
</template>

<script lang="ts" setup>
import { useQuery } from '@urql/vue';
import gql from 'graphql-tag';
import { computed, ref } from 'vue';

import { recipeCardFragment } from '@/services/fragments';

import { Query } from '@/gql/graphql';

import usePageTitle from '@/composables/usePageTitle';
import useResult from '@/composables/useResult';

import i18n from '@/i18n';
import store from '@/store';

usePageTitle(i18n.global.t('favorites.title'));

const limit = 20;
const offset = ref(0);

const result = useQuery<Query>({
  query: gql`
    query favoriteRecipes(
      $offset: Int!
      $limit: Int!
      $sort: [String]!
      $filter: users_favorite_recipes_filter
    ) {
      users_favorite_recipes(
        offset: $offset
        limit: $limit
        sort: $sort
        filter: $filter
      ) {
        id
        recipe {
          ...RecipeCard
        }
      }
      users_favorite_recipes_aggregated(sort: $sort, filter: $filter) {
        count {
          id
        }
      }
    }
    ${recipeCardFragment}
  `,
  variables: {
    offset,
    limit,
    sort: '-date_created',
    filter: {
      user: {
        id: {
          _eq: store.state.value.currentUser!.id,
        },
      },
    },
  },
  context: {
    requestPolicy: 'cache-and-network',
  },
});

const total = useResult(
  result.data,
  0,
  (data) => data.users_favorite_recipes_aggregated[0].count.id
);

const recipes = useResult(result.data, [], (data) =>
  data.users_favorite_recipes.map((ufr) => ufr.recipe)
);

const hasMore = computed(() => recipes.value.length < total.value);

const loading = result.fetching;

function loadMore() {
  offset.value += limit;
}
</script>
