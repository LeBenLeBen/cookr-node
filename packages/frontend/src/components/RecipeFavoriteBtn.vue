<template>
  <CBtn
    variant="favorite"
    class="absolute top-4 right-4"
    :title="favoriteRecipe ? $t('favorites.remove') : $t('favorites.add')"
    @click="toggle"
  >
    <CIcon
      id="favourite"
      :style="
        favoriteRecipe
          ? {
              fill: 'currentColor',
            }
          : {}
      "
    />
  </CBtn>
</template>

<script setup>
import { ref } from 'vue';
import { useQuery, useMutation } from '@urql/vue';
import gql from 'graphql-tag';

import store from '@/store';
import { recipeCardFragment } from '@/services/fragments';

const props = defineProps({
  recipeId: {
    type: String,
    required: true,
  },
});

const favoriteRecipe = ref(null);

const result = await useQuery({
  query: gql`
    query favoriteRecipe($where: JSON!) {
      usersFavoriteRecipes(start: 0, limit: 1, where: $where) {
        id
      }
    }
  `,
  variables: {
    where: {
      user: {
        id: store.state.currentUser.id,
      },
      recipe: {
        id: props.recipeId,
      },
    },
  },
});

if (result.data.value.usersFavoriteRecipes?.length) {
  favoriteRecipe.value = result.data.value.usersFavoriteRecipes[0];
}

const { executeMutation: deleteFavoriteRecipe } = useMutation(
  gql`
    mutation deleteFavoriteRecipe($id: ID!) {
      deleteUsersFavoriteRecipe(input: { where: { id: $id } }) {
        usersFavoriteRecipe {
          id
        }
      }
    }
  `
);

const { executeMutation: createFavoriteRecipe } = useMutation(
  gql`
    mutation createFavoriteRecipe($data: UsersFavoriteRecipeInput!) {
      createUsersFavoriteRecipe(input: { data: $data }) {
        usersFavoriteRecipe {
          id
          recipe {
            ...RecipeCard
          }
        }
      }
    }
    ${recipeCardFragment}
  `
);

function toggle() {
  if (favoriteRecipe.value) {
    deleteFavoriteRecipe({
      id: favoriteRecipe.value.id,
    }).then(() => {
      favoriteRecipe.value = null;
    });
  } else {
    createFavoriteRecipe({
      data: {
        user: store.state.currentUser.id,
        recipe: props.recipeId,
      },
    }).then((result) => {
      favoriteRecipe.value =
        result.data.createUsersFavoriteRecipe.usersFavoriteRecipe;
    });
  }
}
</script>
