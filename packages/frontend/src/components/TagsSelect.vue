<template>
  <Multiselect
    :model-value="modelValue"
    :options="tags"
    mode="tags"
    searchable
    @change="(val) => $emit('update:model-value', val)"
  />
</template>

<script setup>
import gql from 'graphql-tag';
import { useQuery } from '@urql/vue';
import { useResult } from '@/composables/useResult';

defineProps({
  modelValue: {
    type: Array,
    default: () => [],
  },
});

defineEmits(['update:model-value']);

const result = useQuery({
  query: gql`
    query allTags {
      tags {
        id
        title
      }
    }
  `,
});

const tags = useResult(result.data, [], (data) =>
  data.tags.map((tag) => ({
    value: tag.id,
    label: tag.title,
  }))
);
</script>
