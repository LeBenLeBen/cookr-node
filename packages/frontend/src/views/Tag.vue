<template>
  <template v-if="tag">
    <h1 class="h1 mb-6">{{ tag.title }}</h1>
    <RecipesList :recipes="tag.recipes" :loading="loading" />
  </template>
</template>

<script>
import { inject } from 'vue';
import { useQuery, useResult } from '@vue/apollo-composable';
import gql from 'graphql-tag';

import { recipeCardFragment } from '@/services/fragments';

export default {
  props: {
    slug: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const setPageTitle = inject('setPageTitle');

    const { result, loading, onResult } = useQuery(
      gql`
        query getTag($slug: String!) {
          tags(where: { slug: $slug }) {
            title
            recipes(sort: "created_at:asc") {
              ...RecipeCard
            }
          }
        }
        ${recipeCardFragment}
      `,
      () => ({ slug: props.slug })
    );

    const tag = useResult(result, null, (data) => data?.tags?.[0]);

    onResult((response) => {
      setPageTitle(response.data?.tags?.[0]?.title);
    });

    return {
      tag,
      loading,
    };
  },
};
</script>
