<template>
  <router-link
    :to="{ name: 'recipe', params: { slug: slug } }"
    class="flex gap-6 p-3 text-alt-800 hover:text-alt-800 bg-alt-50 hover:bg-white rounded-xl"
  >
    <RecipeImage :image="image" width="180" height="120" class="rounded-lg" />

    <div class="flex flex-col pt-2">
      <h2 class="mb-1 font-display text-2xl text-alt-700">{{ title }}</h2>

      <RecipeAuthor v-if="username" :username="username" class="text-alt-600" />

      <ul class="flex text-alt-600 pt-2 mt-auto">
        <li v-if="time" class="mr-6">
          <RecipeTime :time="time" />
        </li>
        <li v-if="quantity" class="mr-6">
          <RecipeQuantity :quantity="quantity" />
        </li>
      </ul>
    </div>
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
    username: {
      type: String,
      default: null,
    },
    time: {
      type: Number,
      default: null,
    },
    quantity: {
      type: Number,
      default: null,
    },
    image: {
      type: Object,
      default: null,
    },
  },
};
</script>
