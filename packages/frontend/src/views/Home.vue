<template>
  <ul v-if="result && result.recipes" class="space-y-4">
    <li v-for="recipe in result.recipes" :key="recipe.id">
      <RecipeListItem v-bind="recipe" :username="recipe.author.username" />
    </li>
  </ul>
</template>

<script>
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';

export default {
  setup() {
    const { result } = useQuery(gql`
      query getMostRecentRecipes {
        recipes(limit: 10, sort: "created_at:asc") {
          id
          title
          slug
          time
          quantity
          image {
            hash
            ext
          }
          author {
            username
          }
        }
      }
    `);

    return {
      result,
    };
  },
};
</script>
