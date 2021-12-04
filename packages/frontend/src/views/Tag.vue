<template>
  <div v-if="tag">
    <h1 class="h1 mb-6">{{ tag.attributes.title }}</h1>

    <RecipesList v-bind="collection.state" @load-more="collection.loadMore" />
  </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue';
import { useQuery } from '@urql/vue';

import gql from 'graphql-tag';
import router from '@/router';

import useRecipesList from '@/composables/useRecipesList';
import useResult from '@/composables/useResult';
import usePageTitle from '@/composables/usePageTitle';

import { Query, QueryTagsArgs } from '@/gql/graphql';

const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
});

const result = await useQuery<Query, QueryTagsArgs>({
  query: gql`
    query getTag($filters: TagFiltersInput!) {
      tags(filters: $filters) {
        data {
          id
          attributes {
            title
          }
        }
      }
    }
  `,
  variables: {
    filters: {
      slug: {
        eq: props.slug,
      },
    },
  },
});

const tag = useResult(result.data, null, (data) => data?.tags?.data?.[0]);

watchEffect(() => {
  if (tag.value) {
    usePageTitle(tag.value.attributes?.title);
  } else {
    router.replace({ name: 'not-found' });
  }
});

const params = ref({
  sort: ['createdAt:desc'],
  filters: {
    tags: {
      id: {
        eq: tag.value?.id,
      },
    },
  },
});

const collection = useRecipesList(params);
</script>
