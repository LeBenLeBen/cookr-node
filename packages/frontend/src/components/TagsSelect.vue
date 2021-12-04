<template>
  <Multiselect
    :model-value="modelValue"
    :options="tags"
    mode="tags"
    searchable
    @change="(val: TagOption) => $emit('update:model-value', val)"
  />
</template>

<script lang="ts" setup>
import gql from 'graphql-tag';
import { useQuery } from '@urql/vue';

import { Query } from '@/gql/graphql';

import useResult from '@/composables/useResult';

type TagOption = {
  value: string;
  label: string;
};

defineProps({
  modelValue: {
    type: Array,
    default: () => [],
  },
});

defineEmits(['update:model-value']);

const result = useQuery<Query>({
  query: gql`
    query allTags {
      tags {
        data {
          id
          attributes {
            title
          }
        }
      }
    }
  `,
});

const tags = useResult(result.data, [], (data) =>
  data.tags.data.map(
    (tag) =>
      <TagOption>{
        value: tag.id,
        label: tag.attributes.title,
      }
  )
);
</script>
