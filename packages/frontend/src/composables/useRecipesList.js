import { reactive, computed } from 'vue';
import gql from 'graphql-tag';
import { useQuery, useResult } from '@vue/apollo-composable';

import { recipeCardFragment } from '@/services/fragments';

export default function useRecipesList(params) {
  const { result: aggregatorResult } = useQuery(
    gql`
      query total($sort: String, $where: JSON) {
        recipesConnection(sort: $sort, where: $where) {
          aggregate {
            count
            totalCount
          }
        }
      }
    `,
    () => ({
      sort: params.sort,
      where: params.where,
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
      query explore($start: Int!, $sort: String, $where: JSON) {
        recipes(limit: 20, start: $start, sort: $sort, where: $where) {
          ...RecipeCard
        }
      }
      ${recipeCardFragment}
    `,
    () => ({
      start: 0,
      sort: params.sort,
      where: params.where,
    })
  );
  const recipes = useResult(result, [], (data) => data.recipes);

  const hasMore = computed(() => recipes.value?.length < total.value);

  function loadMore() {
    fetchMore({
      variables: {
        start: recipes.value?.length,
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

  return reactive({
    state: {
      loading,
      recipes,
      total,
      hasMore,
    },
    loadMore,
  });
}
