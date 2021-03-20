<template>
  <router-link
    :to="{ name: 'recipe', params: { id: id, slug: slug } }"
    class="overflow-hidden flex flex-col h-full text-alt-800 hover:text-alt-800 bg-alt-50 hover:bg-white rounded-xl border-b border-alt-200"
  >
    <RecipeImage
      :image="image"
      width="288"
      height="192"
      class="w-full sm:w-auto flex-shrink-0 bg-alt-200 bg-opacity-75"
    />

    <div class="py-2 px-4">
      <h2
        class="font-display text-lg font-medium text-alt-700 overflow-hidden overflow-ellipsis whitespace-nowrap"
      >
        {{ title }}
      </h2>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
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
