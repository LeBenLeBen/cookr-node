<template>
  <span
    class="py-1 px-3 text-xs sm:text-sm font-medium bg-alt-200 rounded-full"
  >
    {{ label }}
  </span>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
  },
};
</script>
