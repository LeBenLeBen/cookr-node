<template>
  <CBtn
    :to="{ name: 'tag', params: { slug } }"
    class="py-2 px-4 text-xs sm:text-sm font-medium text-alt-700 hover:text-alt-900 leading-none sm:leading-none bg-alt-200 rounded-full"
  >
    {{ title }}
  </CBtn>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
  },
};
</script>
