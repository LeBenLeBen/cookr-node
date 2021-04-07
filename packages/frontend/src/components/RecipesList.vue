<template>
  <h2 class="mb-4 text-alt-600 font-bold text-sm uppercase">
    {{ total ? $t('recipes.total', total) : '&nbsp;' }}
  </h2>
  <ul v-if="recipes.length || loading" class="space-y-4">
    <template v-if="recipes.length">
      <li v-for="recipe in recipes" :key="recipe.id">
        <RecipeListItem v-bind="recipe" :username="recipe.author?.username" />
      </li>
      <li v-if="hasMore" class="text-center pt-4" role="presentation">
        <CBtn variant="default block" @click="loadMore">
          {{ $t('common.loadMore') }}
        </CBtn>
      </li>
    </template>
    <template v-if="loading">
      <li v-for="placeholder in 6" :key="placeholder">
        <RecipeListItemLoader />
      </li>
    </template>
  </ul>
  <Alert v-else variant="info">
    {{ $t('recipes.empty') }}
  </Alert>
</template>

<script>
import gql from 'graphql-tag';
import { useQuery, useResult } from '@vue/apollo-composable';
import { recipeCardFragment } from '@/services/fragments';
import { computed } from 'vue-demi';

export default {
  props: {
    sort: {
      type: String,
      default: 'created_at:desc',
    },
    where: {
      type: Object,
      default: null,
    },
  },

  setup(props) {
    const { result: aggregatorResult } = useQuery(
      gql`
        query total($sort: String!, $where: JSON) {
          recipesConnection(sort: $sort, where: $where) {
            aggregate {
              count
              totalCount
            }
          }
        }
      `,
      () => ({
        sort: props.sort,
        where: props.where,
      })
    );
    const total = useResult(
      aggregatorResult,
      0,
      (data) =>
        data.recipesConnection.aggregate.count ||
        data.recipesConnection.aggregate.totalCount
    );

    const { result, loading, fetchMore } = useQuery(
      gql`
        query explore($start: Int!, $sort: String!, $where: JSON) {
          recipes(limit: 20, start: $start, sort: $sort, where: $where) {
            ...RecipeCard
          }
        }
        ${recipeCardFragment}
      `,
      () => ({
        start: 0,
        sort: props.sort,
        where: props.where,
      })
    );
    const recipes = useResult(result, [], (data) => data.recipes);

    function loadMore() {
      fetchMore({
        variables: {
          start: recipes.value.length,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return previousResult;
          return {
            ...previousResult,
            recipes: [...previousResult.recipes, ...fetchMoreResult.recipes],
          };
        },
      });
    }

    const hasMore = computed(() => recipes.value.length < total.value);

    return {
      loading,
      recipes,
      total,
      hasMore,
      loadMore,
    };
  },
};
</script>
