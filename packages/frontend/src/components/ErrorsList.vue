<template>
  <Alert v-if="errors" variant="error" class="mb-4">
    <ul>
      <li v-for="error in errors" :key="error.id">
        {{ error.id ? $t(`api.${error.id.toLowerCase()}`) : error }}
      </li>
    </ul>
  </Alert>
</template>

<script>
export default {
  props: {
    errors: {
      type: Array,
      default: null,
    },
  },
};
</script>
