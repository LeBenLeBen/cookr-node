<template>
  <ul v-if="recipes.length || loading" class="space-y-4">
    <template v-if="recipes.length">
      <li v-for="recipe in recipes" :key="recipe.id">
        <RecipeListItem v-bind="recipe" :username="recipe.author?.username" />
      </li>
      <li v-if="hasMore" class="text-center pt-4" role="presentation">
        <CBtn variant="default block" @click="$emit('loadMore')">
          {{ $t('common.loadMore') }}
        </CBtn>
      </li>
    </template>
    <template v-if="loading">
      <li v-for="placeholder in 6" :key="placeholder">
        <RecipeListItemLoader />
      </li>
    </template>
  </ul>
  <div v-else class="text-alt-500">
    {{ $t('recipes.empty') }}
  </div>
</template>

<script>
export default {
  props: {
    recipes: {
      type: Array,
      default: () => [],
    },
    hasMore: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['loadMore'],
};
</script>
