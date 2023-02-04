import { useQuery } from '@urql/vue';
import gql from 'graphql-tag';
import { computed, reactive, ref, unref } from 'vue';

import { recipeCardFragment } from '@/services/fragments';

import { Query, QueryRecipesArgs } from '@/gql/graphql';

import { MaybeRef } from '@/types/utils';

import useResult from './useResult';

export default function useRecipesList(
  params: MaybeRef<Pick<QueryRecipesArgs, 'sort' | 'filter'>>
) {
  const limit = 20;
  const offset = ref(0);

  const result = useQuery<Query>({
    query: gql`
      query explore(
        $limit: Int!
        $offset: Int!
        $sort: [String]
        $filter: recipes_filter
      ) {
        recipes(limit: $limit, offset: $offset, sort: $sort, filter: $filter) {
          ...RecipeCard
        }
        recipes_aggregated(sort: $sort, filter: $filter) {
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
      sort: computed(() => unref(params).sort),
      filter: computed(() => unref(params).filter),
    },
  });

  const total = useResult(
    result.data,
    0,
    (data) => data.recipes_aggregated[0].count.id
  );
  const recipes = useResult(result.data, [], (data) => data.recipes);
  const hasMore = computed(() => recipes.value?.length < total.value);

  function loadMore() {
    offset.value += limit;
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
