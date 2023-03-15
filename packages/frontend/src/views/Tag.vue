<template>
  <div v-if="tag">
    <h1 class="h1 mb-6">{{ tag.title }}</h1>

    <RecipesList v-bind="collection.state" @load-more="collection.loadMore" />
  </div>
</template>

<script lang="ts" setup>
import { useQuery } from '@urql/vue';
import gql from 'graphql-tag';
import { computed, watchEffect } from 'vue';

import { QueryRecipesArgs } from '@/gql/graphql';

import usePageTitle from '@/composables/usePageTitle';
import useRecipesList from '@/composables/useRecipesList';
import useResult from '@/composables/useResult';

import router from '@/router';

const props = defineProps<{
  slug: string;
}>();

const result = await useQuery({
  query: gql`
    query getTag($slug: String!) {
      tags(filter: { slug: { _eq: $slug } }) {
        id
        title
      }
    }
  `,
  variables: { slug: props.slug },
});

watchEffect(() => {
  if (result.data.value.tags?.[0]) {
    usePageTitle(result.data.value.tags[0].title);
  } else {
    router.replace({ name: 'not-found' });
  }
});

const tag = useResult(result.data, null, (data) => data?.tags?.[0]);

const collection = useRecipesList(
  computed<QueryRecipesArgs>(() => {
    return {
      sort: ['-date_created'],
      filter: {
        tags: {
          tags_id: {
            id: {
              _eq: tag.value?.id,
            },
          },
        },
      },
    };
  })
);
</script>
