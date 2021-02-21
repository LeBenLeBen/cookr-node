<template>
  <router-link
    :to="{ name: 'recipe', params: { slug: slug } }"
    class="flex flex-col h-full text-alt-800 hover:text-alt-800 rounded-lg"
  >
    <RecipeImage
      :image="image"
      width="288"
      height="192"
      class="w-full sm:w-auto flex-shrink-0 rounded-lg bg-alt-200"
    />

    <h2
      class="mt-2 mx-2 font-display text-lg font-medium text-alt-700 overflow-hidden overflow-ellipsis whitespace-nowrap"
    >
      {{ title }}
    </h2>
  </router-link>
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
    image: {
      type: Object,
      default: null,
    },
  },
};
</script>
