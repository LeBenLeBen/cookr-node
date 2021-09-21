<template>
  <CBtn
    :to="slug ? { name: 'tag', params: { slug } } : null"
    class="
      py-2
      px-4
      text-xs
      sm:text-sm
      font-medium
      text-alt-700
      leading-none
      sm:leading-none
      bg-alt-200 bg-opacity-75
      hover:bg-opacity-100
      rounded-full
    "
    :class="{ 'hover:text-alt-900': slug }"
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
      default: null,
    },
  },
};
</script>
