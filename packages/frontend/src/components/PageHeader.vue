<template>
  <div class="flex items-center mb-6">
    <h1 v-if="title" class="h1 mr-4">{{ title }}</h1>

    <div v-if="$slots.default" class="ml-auto">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
  },
};
</script>
