<template>
  <div class="inline-flex items-center align-middle">
    <CIcon id="timer" class="mr-2 text-alt-500" />
    <strong class="text-alt-700">{{ time }}</strong>
    <span class="max-sm:sr-only">&nbsp;{{ $t('recipe.time', time) }}</span>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  time: number;
}>();
</script>
