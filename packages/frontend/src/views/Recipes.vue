<template>
  <div>
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
          <TagsSelect id="tags" v-model="params.where.tags_in" />
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
                value: 'created_at:desc',
                label: $t('recipes.filters.sort.mostRecentFirst'),
              },
              {
                value: 'created_at:asc',
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

    <RecipesList v-bind="collection.state" @load-more="collection.loadMore" />
  </div>
</template>

<script setup>
import { inject, onMounted, reactive } from 'vue';

import i18n from '@/i18n';
import useRecipesList from '@/composables/useRecipesList';

const setPageTitle = inject('setPageTitle');
onMounted(() => {
  setPageTitle(i18n.global.t('explore.title'));
});

const params = reactive({
  sort: 'created_at:desc',
  where: {
    tags_in: [],
  },
});

const collection = useRecipesList(params);
</script>
