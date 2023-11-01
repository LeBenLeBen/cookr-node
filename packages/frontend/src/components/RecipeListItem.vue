<template>
  <router-link
    :to="{ name: 'recipe', params: { id: recipe.id, slug: recipe.slug } }"
    class="overflow-hidden min-height-150px flex flex-col sm:flex-row text-alt-800 hover:text-alt-800 bg-alt-50 hover:bg-white rounded-xl border-b border-alt-200 ring-offset-2"
  >
    <RecipeImage
      :image="recipe.image"
      width="200"
      height="150"
      class="w-full sm:w-auto flex-shrink-0 bg-alt-200 bg-opacity-75"
    />

    <div class="flex flex-col p-4 sm:px-5 lg:py-5 lg:px-6 w-full">
      <h2 class="h2 mb-1">
        {{ recipe.title }}
      </h2>

      <RecipeAuthor
        v-if="username"
        :username="username"
        class="text-sm text-alt-600"
      />

      <ul
        v-if="recipe.time || recipe.quantity"
        class="flex items-end text-alt-600 text-sm md:text-base leading-none pt-3 mt-auto"
      >
        <li v-if="recipe.time" class="mr-4 sm:mr-6">
          <RecipeTime :time="recipe.time" />
        </li>
        <li v-if="recipe.quantity" class="mr-4 sm:mr-6">
          <RecipeQuantity :quantity="recipe.quantity" />
        </li>
      </ul>
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { Recipes } from '../gql/graphql';

export default defineComponent({
  inheritAttrs: false,
});
</script>

<script lang="ts" setup>
defineProps<{
  recipe: Recipes;
  username: string | null;
}>();
</script>
