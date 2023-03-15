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
import { useMutation, useQuery } from '@urql/vue';
import gql from 'graphql-tag';
import { ref } from 'vue';

import { recipeCardFragment } from '@/services/fragments';

import {
  Mutation,
  MutationCreate_Users_Favorite_Recipes_ItemArgs,
  MutationDelete_Users_Favorite_Recipes_ItemArgs,
  Query,
  Users_Favorite_Recipes,
} from '@/gql/graphql';

import store from '@/store';

const props = defineProps<{
  recipeId: string;
}>();

const favoriteRecipe = ref<Users_Favorite_Recipes | null>(null);

const result = await useQuery<Query>({
  query: gql`
    query favoriteRecipe($filter: users_favorite_recipes_filter!) {
      users_favorite_recipes(offset: 0, limit: 1, filter: $filter) {
        id
      }
    }
  `,
  variables: {
    filter: {
      user: {
        id: {
          _eq: store.state.value.currentUser!.id,
        },
      },
      recipe: {
        id: {
          _eq: props.recipeId,
        },
      },
    },
  },
  context: {
    requestPolicy: 'network-only',
  },
});

if (result.data.value?.users_favorite_recipes?.length) {
  favoriteRecipe.value = result.data.value.users_favorite_recipes[0];
}

const { executeMutation: deleteFavoriteRecipe } = useMutation<
  Mutation,
  MutationDelete_Users_Favorite_Recipes_ItemArgs
>(
  gql`
    mutation deleteFavoriteRecipe($id: ID!) {
      delete_users_favorite_recipes_item(id: $id) {
        id
      }
    }
  `
);

const { executeMutation: createFavoriteRecipe } = useMutation<
  Mutation,
  MutationCreate_Users_Favorite_Recipes_ItemArgs
>(
  gql`
    mutation createFavoriteRecipe($data: create_users_favorite_recipes_input!) {
      create_users_favorite_recipes_item(data: $data) {
        id
        recipe {
          ...RecipeCard
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
    }).then((response) => {
      if (response.error) return;

      favoriteRecipe.value = null;
    });
  } else {
    createFavoriteRecipe({
      data: {
        recipe: {
          id: props.recipeId,
        },
        user: {
          id: store.state.value.currentUser!.id,
        },
      },
    }).then((response) => {
      if (response.error) return;

      const usersFavoriteRecipe =
        response.data?.create_users_favorite_recipes_item;

      if (usersFavoriteRecipe) {
        favoriteRecipe.value = usersFavoriteRecipe;
      }
    });
  }
}
</script>
