<template>
  <template v-if="tag">
    <h1 class="h1 mb-6">{{ tag.title }}</h1>

    <RecipesList
      v-if="collection"
      v-bind="collection.state"
      @load-more="collection.loadMore"
    />
  </template>
</template>

<script setup>
import { ref, inject, watch } from 'vue';
import { useQuery, useResult } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import router from '@/router';
import useRecipesList from '@/composables/useRecipesList';

const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
});

const setPageTitle = inject('setPageTitle');

const { result, onResult } = useQuery(
  gql`
    query getTag($slug: String!) {
      tags(where: { slug: $slug }) {
        id
        title
      }
    }
  `,
  () => ({ slug: props.slug })
);

const tag = useResult(result, null, (data) => data?.tags?.[0]);

onResult((response) => {
  if (response.data.tags?.[0]) {
    setPageTitle(response.data.tags[0].title);
  } else {
    router.replace({ name: 'not-found' });
  }
});

const collection = ref(null);

watch(tag, () => {
  if (tag.value) {
    collection.value = useRecipesList({
      where: { tags_in: [tag.value.id] },
    });
  }
});
</script>
