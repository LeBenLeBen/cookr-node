<template>
  <div>
    <CCollapse v-model="filtersOpen">
      <PageHeader :title="$t('explore.title')">
        <CCollapseBtn variant="default small">
          <CIcon id="controls" class="-m-1 mr-2 text-alt-600" />
          {{ $t('recipes.filters.label') }}
          <CIcon
            :id="filtersOpen ? 'chevron-up' : 'chevron-down'"
            :scale="0.75"
            class="-m-1 ml-2 text-alt-600"
          />
        </CCollapseBtn>
      </PageHeader>
      <CCollapseContent
        class="grid sm:grid-cols-2 gap-6 mb-6 pb-8 border-b border-alt-200"
      >
        <CFormGroup>
          <Label>{{ $t('recipe.tags') }}</Label>
          <TagsSelect v-model="params.tags" />
        </CFormGroup>

        <CFormGroup>
          <Label>
            {{ $t('recipes.filters.sort.label') }}
          </Label>
          <Select
            v-model="params.sort"
            :options="[
              {
                value: Sort.CreatedAtDesc,
                label: $t('recipes.filters.sort.mostRecentFirst'),
              },
              {
                value: Sort.CreatedAtAsc,
                label: $t('recipes.filters.sort.oldestFirst'),
              },
              {
                value: Sort.TimeAsc,
                label: $t('recipes.filters.sort.quickestFirst'),
              },
            ]"
          />
        </CFormGroup>
      </CCollapseContent>
    </CCollapse>

    <RecipesList v-bind="collection.state" @load-more="collection.loadMore" />
  </div>
</template>

<script lang="ts" setup>
import { computed, reactive, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

import { QueryRecipesArgs, Update_Recipes_Tags_Input } from '@/gql/graphql';

import usePageTitle from '@/composables/usePageTitle';
import useRecipesList from '@/composables/useRecipesList';

import i18n from '@/i18n';
import router from '@/router';

usePageTitle(i18n.global.t('explore.title'));

enum Sort {
  CreatedAtDesc = '-date_created',
  CreatedAtAsc = 'date_created',
  TimeAsc = 'time',
}

type FilterParams = {
  sort: Sort;
  tags: Update_Recipes_Tags_Input[];
};

const route = useRoute();
const filtersOpen = ref(!!route.query.sort);
const params = reactive<FilterParams>({
  sort: Sort.CreatedAtDesc,
  tags: [],
});

/**
 * When the route query change, update the filter params
 */
watch(
  () => route.query,
  () => {
    if (route.name !== 'recipes') return;

    let sort = Sort.CreatedAtDesc;
    let tags: Update_Recipes_Tags_Input[] = [];

    if (route.query.sort && typeof route.query.sort === 'string') {
      sort = route.query.sort as Sort;
      filtersOpen.value = true;
    }

    if (route.query.tags) {
      // When there’s a single tag selected, it’s a string
      if (typeof route.query.tags === 'string') {
        tags.push({ tags_id: { id: route.query.tags } });
      }
      // Otherwise it’s an array
      else if (Array.isArray(route.query.tags)) {
        tags = route.query.tags.map((tag) => ({
          tags_id: { id: tag as string },
        }));
      }
      filtersOpen.value = true;
    }

    params.sort = sort;
    params.tags = tags;
  },
  { deep: true, immediate: true }
);

/**
 * When the params change, update the URL query
 */
watch(
  () => params,
  () => {
    let query = {};

    if (params.sort !== Sort.CreatedAtDesc || params.tags?.length) {
      query = {
        sort: params.sort,
        tags: params.tags.map((tag) => tag.tags_id?.id),
      };
    }

    router.replace({
      name: 'recipes',
      query,
    });
  },
  { deep: true }
);

const collection = useRecipesList(
  computed(() => {
    const query: QueryRecipesArgs = {
      sort: [params.sort],
    };

    if (params.tags?.length) {
      query.filter = {
        tags: {
          tags_id: {
            id: {
              _in: params.tags.map((tag) => tag.tags_id?.id),
            },
          },
        },
      };
    }

    return query;
  })
);
</script>
