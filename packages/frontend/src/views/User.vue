<template>
  <h1 class="mb-5">{{ username }}</h1>
  <ul v-if="recipes" class="space-y-4">
    <li v-for="recipe in recipes" :key="recipe.id">
      <RecipeListItem v-bind="recipe" />
    </li>
  </ul>
</template>

<script>
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';

export default {
  props: {
    username: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const { result } = useQuery(
      gql`
        query getRecipesForUser($username: String!) {
          recipes(where: { author: { username: $username } }) {
            title
            slug
            time
            quantity
            image {
              hash
              ext
            }
          }
        }
      `,
      () => ({ username: props.username })
    );

    return {
      result,
    };
  },

  computed: {
    recipes() {
      return this.result?.recipes;
    },
  },
};
</script>
