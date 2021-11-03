<template>
  <template v-if="recipes.length">
    <h2 class="mb-4 text-alt-600 font-bold text-sm uppercase">
      {{ total ? $t('recipes.total', total) : '&nbsp;' }}
    </h2>
    <ul class="space-y-4">
      <li v-for="recipe in recipes" :key="recipe.id">
        <RecipeListItem v-bind="recipe" :username="recipe.author?.username" />
      </li>
      <li v-if="hasMore" class="text-center pt-4" role="presentation">
        <CBtn variant="default block" @click="$emit('load-more')">
          {{ $t('common.loadMore') }}
        </CBtn>
      </li>
    </ul>
  </template>
  <Alert v-else-if="!loading" variant="info">
    {{ $t('recipes.empty') }}
  </Alert>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      required: true,
    },
    recipes: {
      type: Array,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    hasMore: {
      type: Boolean,
      required: true,
    },
  },

  emits: ['load-more'],
};
</script>
