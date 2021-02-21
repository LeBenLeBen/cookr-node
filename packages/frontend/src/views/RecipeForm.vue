<template>
  <div>
    <h1 class="h1 mb-6 md:mb-8">{{ $t('recipe.new.title') }}</h1>

    <Form
      ref="form"
      :validation-schema="schema"
      class="divide-y divide-alt-200 space-y-6"
      @submit="prepareToSave"
    >
      <FormGroup required class="grid sm:grid-cols-4">
        <Label for="title" class="mb-2 sm:mb-0 sm:mt-3">{{
          $t('recipe.title')
        }}</Label>
        <div class="sm:col-span-3">
          <Field v-slot="{ field }" v-model="input.title" name="title">
            <Input id="title" v-bind="field" />
          </Field>
          <div v-if="input.slug" class="mt-2 text-sm text-alt-500">
            /{{ input.slug }}
          </div>
          <Errors name="title" />
        </div>
      </FormGroup>

      <FormGroup class="pt-6 grid sm:grid-cols-4">
        <Label id="ingredients" class="mb-2 sm:mb-0">{{
          $t('recipe.ingredients')
        }}</Label>
        <div class="sm:col-span-3 space-y-4">
          <div class="grid grid-cols-3 gap-4">
            <Label id="ingredients-quantity">{{ $t('recipe.amount') }}</Label>
            <Label id="ingredients-label" class="col-span-2">{{
              $t('recipe.label')
            }}</Label>
          </div>

          <ul aria-labelledby="ingredients" class="space-y-4">
            <li
              v-for="(ingredient, i) in input.ingredients"
              :key="i"
              class="grid grid-cols-3 gap-4"
            >
              <Field v-slot="{ field }" :name="`ingredient[${i}].amount`">
                <Input
                  v-model="ingredient.amount"
                  v-bind="field"
                  aria-labelledby="ingredients-quantity"
                  data-field="ingredient-amount"
                />
              </Field>
              <Field v-slot="{ field }" :name="`ingredient[${i}].title`">
                <Input
                  v-model="ingredient.title"
                  v-bind="field"
                  class="col-span-2"
                  aria-labelledby="ingredients-label"
                />
              </Field>
            </li>
          </ul>

          <CBtn variant="default" class="mt-4" @click="addItem">
            <CIcon id="plus" class="-my-1 -ml-1 mr-2 text-alt-600" />
            {{ $t('recipe.new.addIngredient') }}
          </CBtn>
        </div>
      </FormGroup>

      <FormGroup class="pt-6 grid sm:grid-cols-4">
        <Label for="steps" class="mb-2 sm:mb-0 sm:mt-3">{{
          $t('recipe.steps')
        }}</Label>
        <Textarea
          id="steps"
          v-model="input.steps"
          rows="10"
          class="sm:col-span-3"
        />
      </FormGroup>

      <FormGroup class="pt-6 grid sm:grid-cols-4">
        <Label for="time" class="mb-2 sm:mb-0 sm:mt-3">{{
          $t('recipe.new.time')
        }}</Label>
        <div class="sm:col-span-3">
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 items-center">
            <Field v-slot="{ field }" v-model.number="input.time" name="time">
              <Input
                id="time"
                v-bind="field"
                min="0"
                step="5"
                type="number"
                inputmode="numeric"
              />
            </Field>
            {{ $t('recipe.time', 2) }}
          </div>
          <Errors name="time" />
        </div>
      </FormGroup>

      <FormGroup class="pt-6 grid sm:grid-cols-4">
        <Label for="quantity" class="mb-2 sm:mb-0 sm:mt-3">{{
          $t('recipe.new.quantity')
        }}</Label>
        <div class="sm:col-span-3">
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 items-center">
            <Field
              v-slot="{ field }"
              v-model.number="input.quantity"
              name="quantity"
            >
              <Input
                id="quantity"
                v-bind="field"
                min="1"
                type="number"
                inputmode="numeric"
              />
            </Field>
            {{ $t('recipe.quantity', 2) }}
          </div>
          <Errors name="quantity" />
        </div>
      </FormGroup>

      <FormGroup class="pt-6 grid sm:grid-cols-4">
        <Label for="image" class="mb-2 sm:mb-0 sm:mt-3">{{
          $t('recipe.new.image')
        }}</Label>
        <Input
          id="image"
          type="file"
          accept="image/jpeg,image/png"
          class="sm:col-span-3"
          @change="handleImageChange"
        />
      </FormGroup>

      <FormGroup class="pt-6 grid sm:grid-cols-4">
        <Label for="tags" class="mb-2 sm:mb-0 sm:mt-3">{{
          $t('recipe.tags')
        }}</Label>
        <div class="sm:col-span-3">
          <TagsSelect id="tags" v-model="input.tags" />
        </div>
      </FormGroup>

      <FormGroup class="pt-6 grid sm:grid-cols-4">
        <Label for="notes" class="mb-2 sm:mb-0 sm:mt-3">{{
          $t('recipe.notes')
        }}</Label>
        <Textarea
          id="notes"
          v-model="input.notes"
          rows="3"
          class="sm:col-span-3"
        />
      </FormGroup>

      <div class="pt-6 grid sm:grid-cols-4">
        <CBtn type="submit" variant="primary" class="sm:col-start-2">
          {{ $t('recipe.new.submit') }}
        </CBtn>
      </div>
    </Form>
  </div>
</template>

<script>
import { nextTick, reactive, ref } from 'vue';
import { useMutation } from '@vue/apollo-composable';
import { Form, Field } from 'vee-validate';
import gql from 'graphql-tag';
import deburr from 'lodash/deburr';
import kebabCase from 'lodash/kebabCase';
import omitBy from 'lodash/omitBy';
import isNil from 'lodash/isNil';
import { object, mixed } from 'yup';

import router from '@/router';
import store from '@/store';

export default {
  components: {
    Form,
    Field,
  },

  setup() {
    const schema = object({
      title: mixed().required(),
    });

    const image = ref(null);
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
          slug: result.data.createRecipe.recipe.slug,
        },
      });
    });

    onError(() => {});

    return {
      schema,
      input,
      image,
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
    addItem() {
      this.input.ingredients.push({ title: null, amount: null });

      nextTick(() => {
        Array.from(
          this.$el.querySelectorAll('[data-field="ingredient-amount"]')
        )
          .pop()
          ?.focus();
      });
    },

    handleImageChange(e) {
      const image = e.target.files[0];

      if (image) {
        this.image = image;
      }
    },

    prepareToSave() {
      let data = omitBy(this.input, isNil);
      data = omitBy(data, (i) => typeof i === 'string' && i.trim() === '');
      data.ingredients = data.ingredients.filter((i) => i.title.trim());

      if (this.image) {
        this.upload({ file: this.image }).then((response) => {
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
