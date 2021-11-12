<template>
  <div>
    <PageHeader :title="$t('recipe.new.title')" />

    <RecipeForm
      v-model:title.trim="input.title"
      v-model:ingredients="input.ingredients"
      v-model:steps.trim="input.steps"
      v-model:time.number="input.time"
      v-model:quantity.number="input.quantity"
      v-model:notes.trim="input.notes"
      v-model:tags="input.tags"
      v-model:image="input.image"
      @submit="prepareToSave"
    />
  </div>
</template>

<script setup>
import { inject, onMounted, reactive, watch } from 'vue';
import { useMutation } from '@urql/vue';
import gql from 'graphql-tag';
import deburr from 'lodash/deburr';
import kebabCase from 'lodash/kebabCase';
import omitBy from 'lodash/omitBy';
import isNil from 'lodash/isNil';

import router from '@/router';
import store from '@/store';
import i18n from '@/i18n';

const setPageTitle = inject('setPageTitle');

onMounted(() => {
  setPageTitle(i18n.global.t('recipe.new.title'));
});

const input = reactive({
  author: store.state.currentUser.id,
  title: null,
  slug: null,
  ingredients: [{ title: null, amount: null }],
  steps: null,
  time: null,
  quantity: null,
  notes: null,
  tags: [],
  image: null,
});

const { executeMutation: save } = useMutation(
  gql`
    mutation createRecipe($input: createRecipeInput) {
      createRecipe(input: $input) {
        recipe {
          id
          slug
        }
      }
    }
  `
);

watch(
  () => input.title,
  (val) => {
    input.slug = kebabCase(deburr(val));
  }
);

function prepareToSave() {
  let data = omitBy(input, isNil);
  data = omitBy(data, (i) => typeof i === 'string' && i.trim() === '');
  data.ingredients = data.ingredients.filter((i) => i.title?.trim());

  save({ input: { data } }).then((result) => {
    router.push({
      name: 'recipe',
      params: {
        id: result.data.createRecipe.recipe.id,
        slug: result.data.createRecipe.recipe.slug,
      },
    });
  });
}
</script>
