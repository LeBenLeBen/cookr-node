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
import {
  Mutation,
  MutationCreateUserFavoriteRecipeArgs,
  MutationDeleteUserFavoriteRecipeArgs,
  Query,
  UserFavoriteRecipeEntity,
} from '@/gql/graphql';

const props = defineProps({
  recipeId: {
    type: String,
    required: true,
  },
});

const favoriteRecipe = ref<UserFavoriteRecipeEntity | null>(null);

const result = await useQuery<Query>({
  query: gql`
    query favoriteRecipe($filters: UserFavoriteRecipeFiltersInput!) {
      usersFavoriteRecipes(
        pagination: { start: 0, limit: 1 }
        filters: $filters
      ) {
        data {
          id
        }
      }
    }
  `,
  variables: {
    filters: {
      user: {
        id: { eq: store.state.currentUser!.id },
      },
      recipe: {
        id: { eq: props.recipeId },
      },
    },
  },
  context: {
    requestPolicy: 'network-only',
  },
});

if (result.data.value?.usersFavoriteRecipes?.data.length) {
  favoriteRecipe.value = result.data.value.usersFavoriteRecipes.data[0];
}

const { executeMutation: deleteFavoriteRecipe } = useMutation<
  Mutation,
  MutationDeleteUserFavoriteRecipeArgs
>(
  gql`
    mutation deleteFavoriteRecipe($id: ID!) {
      deleteUserFavoriteRecipe(id: $id) {
        data {
          id
        }
      }
    }
  `
);

const { executeMutation: createFavoriteRecipe } = useMutation<
  Mutation,
  MutationCreateUserFavoriteRecipeArgs
>(
  gql`
    mutation createUserFavoriteRecipe($data: UserFavoriteRecipeInput!) {
      createUserFavoriteRecipe(data: $data) {
        data {
          id
        }
      }
    }
  `
);

function toggle() {
  if (favoriteRecipe.value?.id) {
    deleteFavoriteRecipe({ id: favoriteRecipe.value.id }).then((response) => {
      if (response.error) return;

      favoriteRecipe.value = null;
    });
  } else {
    createFavoriteRecipe({
      data: {
        user: store.state.currentUser!.id,
        recipe: props.recipeId,
      },
    }).then((response) => {
      if (response.error) return;

      const usersFavoriteRecipe = response.data?.createUserFavoriteRecipe?.data;

      if (usersFavoriteRecipe) {
        favoriteRecipe.value = usersFavoriteRecipe;
      }
    });
  }
}
</script>
