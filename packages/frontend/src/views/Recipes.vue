<template>
  <CCollapse v-slot="{ active }">
    <PageHeader :title="$t('explore.title')">
      <CCollapseBtn variant="default small" bare>
        <CIcon id="controls" class="-m-1 mr-2 text-alt-600" />
        {{ $t('recipes.filters.label') }}
        <CIcon
          :id="active ? 'chevron-up' : 'chevron-down'"
          :scale="0.75"
          class="-m-1 ml-2 text-alt-600"
        />
      </CCollapseBtn>
    </PageHeader>

    <CCollapseContent
      class="grid sm:grid-cols-2 gap-6 mb-6 pb-8 border-b border-alt-200"
    >
      <FormGroup>
        <Label for="tags" class="mb-2">{{ $t('recipe.tags') }}</Label>
        <TagsSelect id="tags" v-model="params.tags" />
      </FormGroup>
      <FormGroup>
        <Label for="sort" class="mb-2">
          {{ $t('recipes.filters.sort.label') }}
        </Label>
        <Select
          id="sort"
          v-model="params.sort"
          :options="[
            {
              value: 'created_at:asc',
              label: $t('recipes.filters.sort.mostRecentFirst'),
            },
            {
              value: 'created_at:desc',
              label: $t('recipes.filters.sort.oldestFirst'),
            },
            {
              value: 'time:asc',
              label: $t('recipes.filters.sort.quickestFirst'),
            },
          ]"
        />
      </FormGroup>
    </CCollapseContent>
  </CCollapse>

  <h2 v-if="total" class="mb-4 text-alt-600 font-bold text-sm uppercase">
    {{ $t('recipes.total', total) }}
  </h2>

  <RecipesList
    :recipes="recipes"
    :loading="loading"
    :has-more="hasMore"
    @loadMore="loadMore"
  />
</template>

<script>
import { computed, reactive } from 'vue';
import { useQuery, useResult } from '@vue/apollo-composable';
import gql from 'graphql-tag';

import { recipeCardFragment } from '@/services/fragments';

export default {
  setup() {
    const params = reactive({
      sort: 'created_at:asc',
      tags: [],
    });

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
        sort: params.sort,
        where: {
          tags_in: params.tags,
        },
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
        sort: params.sort,
        where: {
          tags_in: params.tags,
        },
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
      params,
      recipes,
      loading,
      hasMore,
      loadMore,
      total,
    };
  },
};
</script>
