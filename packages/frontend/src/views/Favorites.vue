<template>
  <PageHeader :title="$t('favorites.title')" />
  <RecipesList
    :loading="loading"
    :has-more="hasMore"
    :total="total"
    :recipes="recipes"
    @load-more="loadMore"
  />
</template>

<script setup>
import { inject, onMounted, computed } from 'vue';
import gql from 'graphql-tag';
import { useQuery, useResult } from '@vue/apollo-composable';

import { recipeCardFragment } from '@/services/fragments';
import i18n from '@/i18n';
import store from '@/store';

const setPageTitle = inject('setPageTitle');
onMounted(() => {
  setPageTitle(i18n.global.t('favorites.title'));
});

const { result: aggregatorResult } = useQuery(
  gql`
    query favoriteRecipesTotal($sort: String!, $where: JSON) {
      usersFavoriteRecipesConnection(sort: $sort, where: $where) {
        aggregate {
          count
          totalCount
        }
      }
    }
  `,
  () => ({
    sort: 'created_at:asc',
    where: {
      user: {
        id: store.state.currentUser.id,
      },
    },
  })
);
const total = useResult(
  aggregatorResult,
  0,
  (data) =>
    data.usersFavoriteRecipesConnection.aggregate.count ||
    data.usersFavoriteRecipesConnection.aggregate.totalCount
);

const { result, loading, fetchMore } = useQuery(
  gql`
    query favoriteRecipes($start: Int!, $sort: String!, $where: JSON) {
      usersFavoriteRecipes(
        limit: 20
        start: $start
        sort: $sort
        where: $where
      ) {
        id
        recipe {
          ...RecipeCard
        }
      }
    }
    ${recipeCardFragment}
  `,
  () => ({
    start: 0,
    sort: 'created_at:desc',
    where: {
      'user.id': store.state.currentUser.id,
    },
  })
);
const recipes = useResult(result, [], (data) =>
  data.usersFavoriteRecipes.map((ufr) => ufr.recipe)
);

const hasMore = computed(() => recipes.value.length < total.value);

function loadMore() {
  fetchMore({
    variables: {
      start: recipes.value.length,
    },
    updateQuery: (previousResult, { fetchMoreResult }) => {
      if (!fetchMoreResult) return previousResult;
      return {
        ...previousResult,
        usersFavoriteRecipes: [
          ...previousResult.usersFavoriteRecipes,
          ...fetchMoreResult.usersFavoriteRecipes,
        ],
      };
    },
  });
}
</script>
