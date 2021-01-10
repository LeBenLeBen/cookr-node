<template>
  <ul>
    <li v-for="(tag, i) in tags" :key="i" class="inline mr-2 my-1">
      <Tag :label="tag" />
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
