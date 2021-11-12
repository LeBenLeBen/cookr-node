<template>
  <div v-if="tag">
    <h1 class="h1 mb-6">{{ tag.title }}</h1>

    <RecipesList v-bind="collection.state" @load-more="collection.loadMore" />
  </div>
</template>

<script setup>
import { inject } from 'vue';
import { useQuery } from '@urql/vue';

import gql from 'graphql-tag';
import router from '@/router';

import useRecipesList from '@/composables/useRecipesList';
import { useResult } from '@/composables/useResult';

const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
});

const setPageTitle = inject('setPageTitle');

const result = await useQuery({
  query: gql`
    query getTag($slug: String!) {
      tags(where: { slug: $slug }) {
        id
        title
      }
    }
  `,
  variables: { slug: props.slug },
});

if (result.data.value.tags?.[0]) {
  setPageTitle(result.data.value.tags[0].title);
} else {
  router.replace({ name: 'not-found' });
}

const tag = useResult(result.data, null, (data) => data?.tags?.[0]);

const collection = useRecipesList({
  where: { tags_in: [tag.value?.id] },
});
</script>
