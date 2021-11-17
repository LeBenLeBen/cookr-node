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

<script lang="ts" setup>
import { ref } from 'vue';
import { useQuery, useMutation } from '@urql/vue';
import gql from 'graphql-tag';

import store from '@/store';
import { recipeCardFragment } from '@/services/fragments';
import {
  GQLMutation,
  GQLQuery,
  GQLUsersFavoriteRecipes,
  MutationToCreateUsersFavoriteRecipeArgs,
  MutationToDeleteUsersFavoriteRecipeArgs,
  QueryToUsersFavoriteRecipesArgs,
} from '@/types/graphqlTypes';

const props = defineProps({
  recipeId: {
    type: String,
    required: true,
  },
});

const favoriteRecipe = ref<GQLUsersFavoriteRecipes | null>(null);

const result = await useQuery<
  Pick<GQLQuery, 'usersFavoriteRecipes'>,
  QueryToUsersFavoriteRecipesArgs
>({
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
        id: store.state.currentUser!.id,
      },
      recipe: {
        id: props.recipeId,
      },
    },
  },
});

if (result.data.value?.usersFavoriteRecipes?.length) {
  favoriteRecipe.value = result.data.value.usersFavoriteRecipes[0];
}

const { executeMutation: deleteFavoriteRecipe } = useMutation<
  Pick<GQLMutation, 'deleteUsersFavoriteRecipe'>,
  MutationToDeleteUsersFavoriteRecipeArgs
>(
  gql`
    mutation deleteFavoriteRecipe($input: deleteUsersFavoriteRecipeInput!) {
      deleteUsersFavoriteRecipe(input: $input) {
        usersFavoriteRecipe {
          id
        }
      }
    }
  `
);

const { executeMutation: createFavoriteRecipe } = useMutation<
  Pick<GQLMutation, 'createUsersFavoriteRecipe'>,
  MutationToCreateUsersFavoriteRecipeArgs
>(
  gql`
    mutation createFavoriteRecipe($input: createUsersFavoriteRecipeInput!) {
      createUsersFavoriteRecipe(input: $input) {
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
      input: {
        where: {
          id: favoriteRecipe.value.id,
        },
      },
    }).then((response) => {
      if (response.error) return;

      favoriteRecipe.value = null;
    });
  } else {
    createFavoriteRecipe({
      input: {
        data: {
          user: store.state.currentUser!.id,
          recipe: props.recipeId,
        },
      },
    }).then((response) => {
      if (response.error) return;

      const usersFavoriteRecipe =
        response.data?.createUsersFavoriteRecipe?.usersFavoriteRecipe;

      if (usersFavoriteRecipe) {
        favoriteRecipe.value = usersFavoriteRecipe;
      }
    });
  }
}
</script>
