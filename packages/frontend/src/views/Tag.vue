<template>
  <h1 class="h1 mb-6">{{ result?.tags?.[0]?.title || (!loading && slug) }}</h1>
  <RecipesList :recipes="result?.tags?.[0]?.recipes" :loading="loading" />
</template>

<script>
import { useQuery } from '@vue/apollo-composable';
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
    const { result, loading } = useQuery(
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

    return {
      result,
      loading,
    };
  },
};
</script>
