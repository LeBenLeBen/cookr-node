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
import { useMutation } from '@urql/vue';
import gql from 'graphql-tag';
import deburr from 'lodash/deburr';
import isNil from 'lodash/isNil';
import kebabCase from 'lodash/kebabCase';
import omitBy from 'lodash/omitBy';
import { reactive, watch } from 'vue';

import { RecipeIngredient } from '@/services/types';

import { Create_Recipes_Input, Mutation } from '@/gql/graphql';

import usePageTitle from '@/composables/usePageTitle';

import { RecipeFormInput } from '../components/RecipeForm.vue';

import i18n from '@/i18n';
import router from '@/router';

import store from '../store';

usePageTitle(i18n.global.t('recipe.new.title'));

const input = reactive<RecipeFormInput>({
  title: '',
  ingredients: [{ title: undefined, amount: undefined }],
  steps: undefined,
  time: undefined,
  quantity: undefined,
  notes: undefined,
  tags: [],
  image: undefined,
});

const { executeMutation: save } = useMutation<Mutation>(
  gql`
    mutation createRecipe($data: create_recipes_input!) {
      create_recipes_item(data: $data) {
        id
        slug
      }
    }
  `
);

watch(
  () => input.title,
  (val) => {
    input.slug = val ? kebabCase(deburr(val)) : '';
  }
);

function prepareToSave() {
  let data: Create_Recipes_Input = {};

  data = omitBy(input, isNil);
  data = omitBy(
    data,
    (val) => typeof val === 'string' && val.trim() === ''
  ) as Create_Recipes_Input;

  data.ingredients = data.ingredients?.filter((i: RecipeIngredient) =>
    i?.title?.trim()
  );

  data.author = { id: store.state.value.currentUser!.id };

  save({ data }).then((response) => {
    if (response.error) return;

    const recipe = response.data?.create_recipes_item;

    if (recipe) {
      router.push({
        name: 'recipe',
        params: {
          id: recipe.id,
          slug: recipe.slug,
        },
      });
    }
  });
}
</script>
