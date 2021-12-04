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
import { computed, reactive } from 'vue';
import gql from 'graphql-tag';
import { useQuery } from '@urql/vue';

import { recipeCardFragment } from '@/services/fragments';
import i18n from '@/i18n';
import store from '@/store';
import useResult from '@/composables/useResult';
import usePageTitle from '@/composables/usePageTitle';
import { Query, QueryUsersFavoriteRecipesArgs } from '@/gql/graphql';

usePageTitle(i18n.global.t('favorites.title'));

const pagination = reactive({
  limit: 20,
  start: 0,
});

const result = useQuery<Query, QueryUsersFavoriteRecipesArgs>({
  query: gql`
    query favoriteRecipes(
      $pagination: PaginationArg
      $sort: [String]
      $filters: UserFavoriteRecipeFiltersInput
    ) {
      usersFavoriteRecipes(
        pagination: $pagination
        sort: $sort
        filters: $filters
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
    sort: ['createdAt:desc'],
    filters: {
      user: {
        id: {
          eq: store.state.currentUser!.id,
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
  (data) => data.usersFavoriteRecipes.meta.pagination.total
);

const recipes = useResult(result.data, [], (data) =>
  data.usersFavoriteRecipes.data.map((ufr) => ufr.attributes.recipe.data)
);

const hasMore = computed(() => recipes.value.length < total.value);

const loading = result.fetching;

function loadMore() {
  pagination.start += pagination.limit;
}
</script>
