<template>
  <Multiselect
    :model-value="modelValue"
    :options="tags"
    mode="tags"
    searchable
    @change="(val) => $emit('update:model-value', val)"
  />
</template>

<script>
import gql from 'graphql-tag';
import { useQuery } from '@vue/apollo-composable';
import { computed } from 'vue';

export default {
  props: {
    modelValue: {
      type: Array,
      default: () => [],
    },
  },

  emits: ['update:model-value'],

  setup() {
    const { result } = useQuery(
      gql`
        query allTags {
          tags {
            id
            title
          }
        }
      `
    );

    return {
      tags: computed(() => {
        return (
          result?.value?.tags?.map((tag) => ({
            value: tag.id,
            label: tag.title,
          })) ?? []
        );
      }),
    };
  },
};
</script>
