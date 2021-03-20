<template>
  <h1 class="h1 mb-6 md:mb-8">{{ $t('recipe.new.title') }}</h1>

  <RecipeForm
    v-model:title="input.title"
    v-model:slug="input.slug"
    v-model:ingredients="input.ingredients"
    v-model:steps="input.steps"
    v-model:time.number="input.time"
    v-model:quantity.number="input.quantity"
    v-model:notes="input.notes"
    v-model:tags="input.tags"
    v-model:imageFile="imageFile"
    @submit="prepareToSave"
  />
</template>

<script>
import { reactive, ref } from 'vue';
import { useMutation } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import deburr from 'lodash/deburr';
import kebabCase from 'lodash/kebabCase';
import omitBy from 'lodash/omitBy';
import isNil from 'lodash/isNil';

import router from '@/router';
import store from '@/store';

export default {
  setup() {
    const imageFile = ref(null);
    const input = reactive({
      author: store.state.currentUser.id,
      title: '',
      slug: '',
      ingredients: [{ title: '', amount: '' }],
      steps: '',
      time: null,
      quantity: null,
      notes: '',
      tags: [],
      image: '',
    });

    const { mutate: upload } = useMutation(
      gql`
        mutation uploadImage($file: Upload!) {
          upload(file: $file) {
            id
          }
        }
      `
    );

    const { mutate: save, onDone, onError } = useMutation(
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

    onDone((result) => {
      router.push({
        name: 'recipe',
        params: {
          id: result.data.createRecipe.recipe.id,
          slug: result.data.createRecipe.recipe.slug,
        },
      });
    });

    onError(() => {});

    return {
      input,
      imageFile,
      save,
      upload,
    };
  },

  watch: {
    'input.title'(val) {
      this.input.slug = kebabCase(deburr(val));
    },
  },

  methods: {
    prepareToSave() {
      let data = omitBy(this.input, isNil);
      data = omitBy(data, (i) => typeof i === 'string' && i.trim() === '');
      data.ingredients = data.ingredients.filter((i) => i.title?.trim());

      if (this.imageFile) {
        this.upload({ file: this.imageFile }).then((response) => {
          data.image = response.data.upload.id;
          this.save({ input: { data } });
        });
      } else {
        this.save({ input: { data } });
      }
    },
  },
};
</script>
