<template>
  <div>
    <PageHeader :title="$t('recipe.new.title')" />

    <RecipeForm
      v-model:title="input.title"
      v-model:ingredients="input.ingredients"
      v-model:steps="input.steps"
      v-model:time.number="input.time"
      v-model:quantity.number="input.quantity"
      v-model:notes="input.notes"
      v-model:tags="input.tags"
      v-model:image="input.image"
      @submit="prepareToSave"
    />
  </div>
</template>

<script lang="ts" setup>
import { reactive, watch } from 'vue';
import { useMutation } from '@urql/vue';
import gql from 'graphql-tag';
import deburr from 'lodash/deburr';
import kebabCase from 'lodash/kebabCase';
import omitBy from 'lodash/omitBy';
import isNil from 'lodash/isNil';

import router from '@/router';
import store from '@/store';
import i18n from '@/i18n';

import usePageTitle from '@/composables/usePageTitle';
import { Mutation, MutationCreateRecipeArgs, RecipeInput } from '@/gql/graphql';

usePageTitle(i18n.global.t('recipe.new.title'));

const input = reactive<RecipeInput>({
  author: store.state.currentUser!.id,
  title: '',
  slug: '',
  ingredients: [{ title: undefined, amount: undefined }],
  steps: undefined,
  time: undefined,
  quantity: undefined,
  notes: undefined,
  tags: [],
  image: undefined,
});

const { executeMutation: save } = useMutation<
  Mutation,
  MutationCreateRecipeArgs
>(
  gql`
    mutation createRecipe($data: RecipeInput!) {
      createRecipe(data: $data) {
        data {
          id
          attributes {
            slug
          }
        }
      }
    }
  `
);

watch(
  () => input.title,
  (title) => {
    input.slug = title ? kebabCase(deburr(title)) : '';
  }
);

function prepareToSave() {
  let data: RecipeInput = omitBy(input, isNil);

  data = omitBy(
    data,
    (val) => typeof val === 'string' && val.trim() === ''
  ) as RecipeInput;

  data.ingredients = data.ingredients?.filter((i) => i?.title?.trim());

  data.publishedAt = new Date().toISOString();

  save({ data }).then((response) => {
    if (response.error) return;

    const recipe = response.data?.createRecipe?.data;

    if (recipe) {
      router.push({
        name: 'recipe',
        params: {
          id: recipe.id,
          slug: recipe.attributes?.slug,
        },
      });
    }
  });
}
</script>
