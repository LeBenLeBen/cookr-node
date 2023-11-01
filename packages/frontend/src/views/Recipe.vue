<template>
  <div v-if="recipe">
    <header class="flex space-x-2 mb-6 md:mb-8">
      <div class="flex-grow">
        <h1 class="h1 mb-1 sm:mb-2 md:mb-3">{{ recipe.title }}</h1>
        <ul class="flex flex-wrap items-center text-alt-600">
          <li class="w-full mb-2 sm:w-auto sm:mb-0 mr-6">
            <RecipeAuthor :username="recipe.author.username" />
          </li>
          <li v-if="recipe.time" class="inline-flex items-center mr-6">
            <RecipeTime :time="recipe.time" />
          </li>
          <li v-if="recipe.quantity" class="inline-flex items-center mr-6">
            <RecipeQuantity :quantity="recipe.quantity" />
          </li>
        </ul>
      </div>
      <ul v-if="isOwner" class="flex flex-col justify-end items-end space-y-2">
        <li>
          <CBtn
            variant="link"
            :to="{ name: 'edit-recipe', params: { id: recipe.id } }"
            class="text-sm font-bold align-middle"
          >
            <span class="hidden md:inline">{{ $t('common.edit') }}</span>
            <CIcon id="edit" class="md:ml-2 text-alt-500" />
          </CBtn>
        </li>
        <li>
          <CBtn
            variant="link"
            class="text-sm font-bold align-middle"
            @click="confirmToDelete"
          >
            <span class="hidden md:inline">{{ $t('common.delete') }}</span>
            <CIcon id="bin" class="md:ml-2 text-alt-500" />
          </CBtn>
        </li>
      </ul>
    </header>

    <div class="relative -mx-4 sm:-mx-6 lg:-ml-8 mb-6 md:mb-10">
      <RecipeImage
        :image="recipe.image"
        width="792"
        height="528"
        class="md:rounded-xl bg-alt-200"
      />

      <Suspense>
        <RecipeFavoriteBtn :recipe-id="recipe.id" />
      </Suspense>
    </div>

    <div class="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-10 items-start">
      <div v-if="steps.length" class="sm:col-span-2 space-y-10">
        <div
          class="bg-white hover:text-alt-400 focus-within:text-alt-400 rounded-lg shadow-lg -mt-12 md:-mt-20"
        >
          <ol class="divide-y divide-alt-100">
            <li
              v-for="(step, i) in steps"
              :key="i"
              class="group p-6 hover:text-alt-800 focus:text-alt-800 focus:ring-0 cursor-pointer transition"
              tabindex="0"
            >
              <div class="flex">
                <div
                  class="w-8 mr-6 text-5xl text-primary-300 group-hover:text-primary-500 group-focus:text-primary-500 text-center transition"
                >
                  {{ i + 1 }}
                </div>
                <div class="w-full">{{ step }}</div>
              </div>
            </li>
          </ol>
        </div>
      </div>

      <div v-if="recipe.ingredients.length" class="row-span-2">
        <h2 class="mb-3 text-alt-600 font-bold text-sm uppercase">
          {{ $t('recipe.ingredients') }}
        </h2>
        <div class="-mx-4 sm:mx-0">
          <table class="w-full">
            <tbody class="divide-y divide-alt-200">
              <tr
                v-for="(ingredient, i) in recipe.ingredients"
                :key="i"
                class="align-top"
              >
                <td class="pl-4 sm:pl-0 pr-3 py-2 font-bold text-right">
                  {{ ingredient.amount }}
                </td>
                <td class="py-2 pr-4 sm:pr-0">
                  {{ ingredient.title }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="grid gap-10 lg:col-span-2">
        <div v-if="recipe.notes">
          <h2 class="mb-3 text-alt-600 font-bold text-sm uppercase">
            {{ $t('recipe.notes') }}
          </h2>
          <div class="text-sm break-words">
            {{ recipe.notes }}
          </div>
        </div>

        <div v-if="tags?.length">
          <h2 class="mb-3 text-alt-600 font-bold text-sm uppercase">
            {{ $t('recipe.tags') }}
          </h2>
          <TagsList :tags="tags" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMutation, useQuery } from '@urql/vue';
import gql from 'graphql-tag';
import { computed, watchEffect } from 'vue';

import { recipeFragment } from '@/services/fragments';

import {
  Mutation,
  MutationDelete_Recipes_ItemArgs,
  Query,
} from '@/gql/graphql';

import usePageTitle from '@/composables/usePageTitle';
import useResult from '@/composables/useResult';

import router from '@/router';
import store from '@/store';

const props = defineProps<{
  id: string;
  slug: string;
}>();

const { executeMutation: deleteRecipe } = useMutation<
  Mutation,
  MutationDelete_Recipes_ItemArgs
>(
  gql`
    mutation deleteRecipe($id: ID!) {
      delete_recipes_item(id: $id) {
        id
      }
    }
  `
);

const result = await useQuery<Query>({
  query: gql`
    query getRecipe($id: ID!) {
      recipes_by_id(id: $id) {
        ...RecipeFragment
      }
    }
    ${recipeFragment}
  `,
  variables: { id: computed(() => props.id) },
});

watchEffect(() => {
  if (result.data.value?.recipes_by_id) {
    usePageTitle(result.data.value.recipes_by_id.title);
  } else {
    router.replace({ name: 'not-found' });
  }
});

const recipe = useResult(result.data, null, (data) => data.recipes_by_id);

const steps = useResult(result.data, [], (data) => {
  return data.recipes_by_id.steps.length
    ? data.recipes_by_id.steps.split(/\r?\n/).filter((s) => !!s.trim())
    : [];
});

const tags = useResult(result.data, [], (data) => {
  return data.recipes_by_id.tags.map((t) => t.tags_id);
});

const isOwner = useResult(result.data, false, (data) => {
  return data.recipes_by_id.author.id === store.state.value.currentUser!.id;
});

function confirmToDelete() {
  if (
    recipe.value &&
    confirm(
      'Êtes-vous sûr·e de vouloir supprimer cette recette? Cette action est irréversible.'
    )
  ) {
    if (store.state.value.currentUser) {
      router.push({
        name: 'user',
        params: { username: store.state.value.currentUser.username },
      });
    }

    // Delete after redirecting, to prevent a 404 triggered by the view watching the recipe data
    deleteRecipe({ id: recipe.value.id });
  }
}
</script>
