<template>
  <router-link
    :to="{ name: 'recipe', params: { slug: slug } }"
    class="flex flex-col sm:flex-row p-3 text-alt-800 hover:text-alt-800 bg-alt-50 hover:bg-white rounded-xl"
  >
    <RecipeImage
      :image="image"
      width="180"
      height="120"
      class="w-full sm:w-auto flex-shrink-0 rounded-lg"
    />

    <div class="flex flex-col mt-4 sm:mt-0 md:mt-2 mx-1 sm:ml-5 sm:mr-0">
      <h2 class="mb-1 font-display text-2xl text-alt-700 leading-tight">
        {{ title }}
      </h2>

      <RecipeAuthor
        v-if="username"
        :username="username"
        class="text-sm text-alt-600 mb-2"
      />

      <ul
        class="flex text-alt-600 text-sm md:text-base leading-none pt-1 mt-auto"
      >
        <li v-if="time" class="mr-4 sm:mr-6">
          <RecipeTime :time="time" />
        </li>
        <li v-if="quantity" class="mr-4 sm:mr-6">
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
