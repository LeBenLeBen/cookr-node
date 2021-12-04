import { reactive, computed, Ref } from 'vue';
import gql from 'graphql-tag';
import { useQuery } from '@urql/vue';
import useResult from './useResult';

import { recipeCardFragment } from '@/services/fragments';
import { Query, QueryRecipesArgs } from '@/gql/graphql';

export default function useRecipesList(
  params: Ref<Pick<QueryRecipesArgs, 'sort' | 'filters'>>
) {
  const pagination = reactive({
    limit: 20,
    start: 0,
  });

  const result = useQuery<Query, QueryRecipesArgs>({
    query: gql`
      query explore(
        $pagination: PaginationArg
        $sort: [String]
        $filters: RecipeFiltersInput
      ) {
        recipes(pagination: $pagination, sort: $sort, filters: $filters) {
          data {
            id
            attributes {
              ...RecipeCard
            }
          }
          meta {
            pagination {
              total
            }
          }
        }
      }
      ${recipeCardFragment}
    `,
    variables: {
      pagination,
      sort: computed(() => params.value.sort),
      filters: computed(() => params.value.filters),
    },
  });

  const total = useResult(
    result.data,
    0,
    (data) => data.recipes.meta.pagination.total
  );
  const recipes = useResult(result.data, [], (data) => data.recipes.data);
  const hasMore = computed(() => recipes.value?.length < total.value);

  function loadMore() {
    pagination.start += pagination.limit;
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
