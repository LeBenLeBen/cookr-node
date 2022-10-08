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
          <TagsSelect v-model="params.where.tags_in" />
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
import { ref, watch, reactive } from 'vue';

import i18n from '@/i18n';

import useRecipesList from '@/composables/useRecipesList';
import usePageTitle from '@/composables/usePageTitle';
import router from '@/router';
import { useRoute } from 'vue-router';

usePageTitle(i18n.global.t('explore.title'));

enum Sort {
  CreatedAtDesc = 'created_at:desc',
  CreatedAtAsc = 'created_at:asc',
  TimeAsc = 'time:asc',
}

type FilterParams = {
  sort: Sort;
  where: {
    tags_in: string[];
  };
};

const route = useRoute();
const filtersOpen = ref(!!route.query.sort);
const params = reactive<FilterParams>({
  sort: Sort.CreatedAtDesc,
  where: {
    tags_in: [],
  },
});

/**
 * When the route query change, update the filter params
 */
watch(
  () => route.query,
  () => {
    if (route.name !== 'recipes') return;

    let sort = Sort.CreatedAtDesc;
    let tags: string[] = [];

    if (route.query.sort && typeof route.query.sort === 'string') {
      sort = route.query.sort as Sort;
      filtersOpen.value = true;
    }

    if (route.query.tags) {
      // When there’s a single tag selected, it’s a string
      if (typeof route.query.tags === 'string') {
        tags.push(route.query.tags);
      }
      // Otherwise it’s an array
      else if (Array.isArray(route.query.tags)) {
        tags = route.query.tags as string[];
      }
      filtersOpen.value = true;
    }

    params.sort = sort;
    params.where.tags_in = tags;
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

    if (params.sort !== Sort.CreatedAtDesc || params.where.tags_in?.length) {
      query = {
        sort: params.sort,
        tags: params.where.tags_in,
      };
    }

    router.replace({
      name: 'recipes',
      query,
    });
  },
  { deep: true }
);

const collection = useRecipesList(params);
</script>
