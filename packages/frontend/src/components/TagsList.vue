<template>
  <ul>
    <li v-for="tag in tags" :key="tag.slug" class="inline-flex mr-2 my-1">
      <Tag v-bind="tag" />
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      required: true,
    },
  },
};
</script>
