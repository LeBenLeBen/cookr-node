<template>
  <template v-if="recipe">
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

    <div v-if="recipe.image" class="-mx-4 sm:-mx-6 lg:-ml-8 mb-6 md:mb-10">
      <RecipeImage
        :image="recipe.image"
        width="792"
        height="528"
        class="md:rounded-xl bg-alt-200"
      />
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 items-start">
      <div v-if="steps.length" class="sm:col-span-2 space-y-10">
        <div
          class="
            bg-white
            hover:text-alt-400
            focus-within:text-alt-400
            rounded-lg
            shadow-lg
          "
          :class="{ '-mt-12 md:-mt-20': recipe.image }"
        >
          <ol class="divide-y divide-alt-100">
            <li
              v-for="(step, i) in steps"
              :key="i"
              class="
                group
                p-6
                hover:text-alt-800
                focus:text-alt-800 focus:ring-0
                cursor-pointer
                transition
              "
              tabindex="0"
            >
              <div class="flex">
                <div
                  class="
                    w-8
                    mr-6
                    text-5xl text-primary-300
                    group-hover:text-primary-500
                    group-focus:text-primary-500
                    text-center
                    transition
                  "
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
        <table class="w-full">
          <tbody class="divide-y divide-alt-200">
            <tr
              v-for="(ingredient, i) in recipe.ingredients"
              :key="i"
              class="align-top"
            >
              <td class="pr-3 py-2 font-bold text-right">
                {{ ingredient.amount }}
              </td>
              <td class="py-2">
                {{ ingredient.title }}
              </td>
            </tr>
          </tbody>
        </table>
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

        <div v-if="recipe.tags.length">
          <h2 class="mb-3 text-alt-600 font-bold text-sm uppercase">
            {{ $t('recipe.tags') }}
          </h2>
          <TagsList :tags="recipe.tags" />
        </div>
      </div>
    </div>
  </template>
</template>

<script>
import { inject } from 'vue';
import { useQuery, useMutation, useResult } from '@vue/apollo-composable';
import gql from 'graphql-tag';

import router from '@/router';
import store from '@/store';
import { recipeFragment } from '@/services/fragments';

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const setPageTitle = inject('setPageTitle');

    const { result, onResult } = useQuery(
      gql`
        query getRecipe($id: ID!) {
          recipe(id: $id) {
            ...RecipeFragment
          }
        }
        ${recipeFragment}
      `,
      () => ({ id: props.id }),
      {
        fetchPolicy: 'network-only',
      }
    );

    const recipe = useResult(result, null, (data) => data.recipe);

    onResult((response) => {
      if (response.data.recipe) {
        setPageTitle(response.data.recipe?.title);
      } else {
        router.replace({ name: 'not-found' });
      }
    });

    const { mutate: deleteRecipe, onDone: onDeleteDone } = useMutation(
      gql`
        mutation deleteRecipe($id: ID!) {
          deleteRecipe(input: { where: { id: $id } }) {
            recipe {
              id
            }
          }
        }
      `,
      () => ({
        update: (cache, { data: { deleteRecipe } }) => {
          cache.evict({ id: cache.identify(deleteRecipe.recipe) });
          cache.gc();
        },
      })
    );

    onDeleteDone(() => {
      router.replace({
        name: 'user',
        params: { username: store.state.currentUser.username },
      });
    });

    return {
      recipe,
      deleteRecipe,
    };
  },

  computed: {
    steps() {
      return this.recipe?.steps?.length
        ? this.recipe.steps.split(/\r?\n/).filter((s) => !!s.trim())
        : [];
    },

    isOwner() {
      return this.recipe.author.id === store.state.currentUser?.id;
    },
  },

  methods: {
    confirmToDelete() {
      if (
        confirm(
          'Êtes-vous sûr·e de vouloir supprimer cette recette? Cette action est irréversible.'
        )
      ) {
        this.deleteRecipe({ id: this.recipe.id });
      }
    },
  },
};
</script>
