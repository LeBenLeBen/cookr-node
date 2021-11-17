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
import { ref, computed } from 'vue';
import gql from 'graphql-tag';
import { useQuery } from '@urql/vue';

import { recipeCardFragment } from '@/services/fragments';
import i18n from '@/i18n';
import store from '@/store';
import useResult from '@/composables/useResult';
import usePageTitle from '@/composables/usePageTitle';
import { GQLQuery } from '@/types/graphqlTypes';

usePageTitle(i18n.global.t('favorites.title'));

const limit = 20;
const start = ref(0);

const result = useQuery<
  Pick<GQLQuery, 'usersFavoriteRecipes' | 'usersFavoriteRecipesConnection'>
>({
  query: gql`
    query favoriteRecipes(
      $limit: Int!
      $start: Int!
      $sort: String!
      $where: JSON
    ) {
      usersFavoriteRecipes(
        limit: $limit
        start: $start
        sort: $sort
        where: $where
      ) {
        id
        recipe {
          ...RecipeCard
        }
      }
      usersFavoriteRecipesConnection(sort: $sort, where: $where) {
        aggregate {
          count
          totalCount
        }
      }
    }
    ${recipeCardFragment}
  `,
  variables: {
    start,
    limit,
    sort: 'created_at:desc',
    where: {
      user: {
        id: store.state.currentUser!.id,
      },
    },
  },
});

const total = useResult(
  result.data,
  0,
  (data) =>
    data.usersFavoriteRecipesConnection.aggregate.count ||
    data.usersFavoriteRecipesConnection.aggregate.totalCount
);

const recipes = useResult(result.data, [], (data) =>
  data.usersFavoriteRecipes.map((ufr) => ufr.recipe)
);

const hasMore = computed(() => recipes.value.length < total.value);

const loading = result.fetching;

function loadMore() {
  start.value += limit;
}
</script>
