<template>
  <ul>
    <li v-for="(tag, i) in tags" :key="i" class="inline-flex mr-2 my-1">
      <Tag :id="tag.id" v-bind="tag.attributes" />
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { TagEntity } from '@/gql/graphql';
import { PropType } from 'vue';

defineProps({
  tags: {
    type: Array as PropType<TagEntity[]>,
    required: true,
  },
});
</script>
