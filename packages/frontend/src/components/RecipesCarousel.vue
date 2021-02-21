<template>
  <div class="carousel-wrapper overflow-hidden">
    <ul
      v-if="recipes.length || loading"
      class="carousel flex space-x-6 pb-8 overflow-x-auto overflow-y-hidden"
    >
      <template v-if="recipes.length">
        <li
          v-for="recipe in recipes"
          :key="recipe.id"
          class="carousel-item w-72 flex-shrink-0"
        >
          <RecipeCard v-bind="recipe" :username="recipe.author.username" />
        </li>
      </template>
      <template v-if="loading">
        <li
          v-for="placeholder in 5"
          :key="placeholder"
          class="carousel-item w-72 flex-shrink-0"
        >
          <RecipeCardLoader />
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    recipes: {
      type: Array,
      default: () => [],
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.carousel-wrapper {
  height: 228px;
}

.carousel {
  scroll-snap-type: x proximity;
}

.carousel-item {
  scroll-snap-align: start;
}
</style>
