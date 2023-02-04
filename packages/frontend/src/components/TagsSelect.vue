<template>
  <Multiselect
    v-model="normalizedValue"
    :options="tags"
    mode="tags"
    searchable
  />
</template>

<script lang="ts" setup>
import { useQuery } from '@urql/vue';
import gql from 'graphql-tag';
import { computed } from 'vue';

import { Query, Update_Recipes_Tags_Input } from '@/gql/graphql';

import useResult from '@/composables/useResult';

const props = defineProps<{ modelValue: Update_Recipes_Tags_Input[] }>();

const emit = defineEmits(['update:model-value']);

const result = useQuery<Query>({
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

const normalizedValue = computed({
  get() {
    return props.modelValue.map((tag) => tag.tags_id!.id);
  },
  set(newValue) {
    const tags = [];

    while (newValue.length > 0) {
      const tag = newValue.shift();
      const existingTag = props.modelValue.find((t) => {
        return t.tags_id!.id === tag;
      });

      if (existingTag) {
        tags.push(existingTag);
      } else {
        tags.push({
          tags_id: {
            id: tag,
          },
        });
      }
    }

    emit('update:model-value', tags);
  },
});
</script>
