<template>
  <ul v-if="recipes.length || loading" class="space-y-4">
    <template v-if="recipes.length">
      <li v-for="recipe in recipes" :key="recipe.id">
        <RecipeListItem v-bind="recipe" :username="recipe.author.username" />
      </li>
    </template>
    <template v-if="loading">
      <li v-for="placeholder in 6" :key="placeholder">
        <RecipeListItemLoader />
      </li>
    </template>
  </ul>
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
