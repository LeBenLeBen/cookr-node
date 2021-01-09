<template>
  <div class="inline-flex items-center">
    <CIcon id="timer" class="mr-2 text-alt-500" />
    <strong class="text-alt-700">{{ time }}</strong
    >&nbsp;{{ $t('recipe.time', time) }}
  </div>
</template>

<script>
export default {
  props: {
    time: {
      type: Number,
      required: true,
    },
  },
};
</script>
