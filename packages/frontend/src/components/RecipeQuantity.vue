<template>
  <div class="inline-flex items-center align-middle">
    <CIcon id="people" class="mr-2 text-alt-500" />
    <strong class="text-alt-700">{{ quantity }}</strong
    >&nbsp;{{ $t('recipe.quantity', quantity) }}
  </div>
</template>

<script>
export default {
  props: {
    quantity: {
      type: Number,
      required: true,
    },
  },
};
</script>
