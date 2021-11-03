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
import { useQuery, useMutation } from '@vue/apollo-composable';
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

const { onResult } = useQuery(
  gql`
    query favoriteRecipe($where: JSON!) {
      usersFavoriteRecipes(where: $where) {
        id
      }
    }
  `,
  () => ({
    where: {
      user: {
        id: store.state.currentUser.id,
      },
      recipe: {
        id: props.recipeId,
      },
    },
  })
);

onResult((result) => {
  if (result.data.usersFavoriteRecipes.length) {
    favoriteRecipe.value = result.data.usersFavoriteRecipes[0];
  }
});

const { mutate: deleteFavoriteRecipe, onDone: onDeletionDone } = useMutation(
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

onDeletionDone(() => {
  favoriteRecipe.value = null;
});

const { mutate: createFavoriteRecipe, onDone: onCreationDone } = useMutation(
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

onCreationDone((result) => {
  favoriteRecipe.value =
    result.data.createUsersFavoriteRecipe.usersFavoriteRecipe;
});

function toggle() {
  if (favoriteRecipe.value) {
    deleteFavoriteRecipe({
      id: favoriteRecipe.value.id,
    });
  } else {
    createFavoriteRecipe({
      data: {
        user: store.state.currentUser.id,
        recipe: props.recipeId,
      },
    });
  }
}
</script>
