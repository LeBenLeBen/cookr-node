<template>
  <template v-if="tag">
    <h1 class="h1 mb-6">{{ tag.title }}</h1>

    <RecipesList :where="{ tags_in: [tag.id] }" />
  </template>
</template>

<script>
import { inject } from 'vue';
import { useQuery, useResult } from '@vue/apollo-composable';
import gql from 'graphql-tag';

export default {
  props: {
    slug: {
      type: String,
      required: true,
    },
  },

  setup(props) {
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
      setPageTitle(response.data?.tags?.[0]?.title);
    });

    return {
      tag,
    };
  },
};
</script>
