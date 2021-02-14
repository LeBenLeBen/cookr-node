<template>
  <Multiselect
    :model-value="modelValue"
    :options="tags"
    mode="tags"
    searchable
    @change="(val) => $emit('update:modelValue', val)"
  />
</template>

<script>
import Multiselect from '@vueform/multiselect';
import gql from 'graphql-tag';
import { useQuery } from '@vue/apollo-composable';
import { computed } from 'vue';

export default {
  components: {
    Multiselect,
  },

  props: {
    modelValue: {
      type: Array,
      default: () => [],
    },
  },

  emits: ['update:modelValue'],

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
