import { ref, reactive, computed } from 'vue';
import gql from 'graphql-tag';
import { useQuery } from '@urql/vue';
import useResult from './useResult';

import { recipeCardFragment } from '@/services/fragments';
import { QueryToRecipesArgs } from '@/types/graphqlTypes';

export default function useRecipesList(
  params: Pick<QueryToRecipesArgs, 'sort' | 'where'>
) {
  const limit = 20;
  const start = ref(0);

  const result = useQuery({
    query: gql`
      query explore($limit: Int!, $start: Int!, $sort: String, $where: JSON) {
        recipes(limit: $limit, start: $start, sort: $sort, where: $where) {
          ...RecipeCard
        }
        recipesConnection(sort: $sort, where: $where) {
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
      sort: computed(() => params.sort),
      where: params.where,
    },
  });

  const total = useResult(
    result.data,
    0,
    (data) =>
      data.recipesConnection.aggregate.count ||
      data.recipesConnection.aggregate.totalCount
  );
  const recipes = useResult(result.data, [], (data) => data.recipes);
  const hasMore = computed(() => recipes.value?.length < total.value);

  function loadMore() {
    start.value += limit;
  }

  return reactive({
    state: {
      loading: result.fetching,
      recipes,
      total,
      hasMore,
    },
    loadMore,
  });
}
