<template>
  <template v-if="recipes.length || loading">
    <h2 class="mb-4 text-alt-600 font-bold text-sm uppercase">
      {{
        total
          ? $t('recipes.total', total)
          : loading
          ? $t('common.loading')
          : '&nbsp;'
      }}
    </h2>

    <ul class="space-y-4">
      <li v-for="recipe in recipes" :key="recipe.id">
        <RecipeListItem v-bind="recipe" :username="recipe.author?.username" />
      </li>

      <template v-if="!recipes.length && loading">
        <li v-for="placeholder in 6" :key="placeholder">
          <RecipeListItemLoader />
        </li>
      </template>

      <li v-if="hasMore" class="text-center pt-4" role="presentation">
        <CBtn
          variant="default block"
          :disabled="loading"
          @click="$emit('load-more')"
        >
          {{ $t(loading ? 'common.loading' : 'common.loadMore') }}
        </CBtn>
      </li>
    </ul>
  </template>

  <Alert v-else variant="info">
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
