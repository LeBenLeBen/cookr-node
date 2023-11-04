<template>
  <Form
    ref="form"
    :validation-schema="schema"
    class="divide-y divide-alt-200 space-y-6"
    @submit="$emit('submit')"
  >
    <CFormGroup v-slot="{ ids }" variant="grid" required>
      <Label class="sm:mt-3">{{ $t('recipe.title') }}</Label>
      <div class="sm:col-span-3">
        <Field
          v-slot="{ field }"
          :model-value="title"
          name="title"
          @update:model-value="(val: string) => $emit('update:title', val)"
        >
          <CTextField
            ref="titleNode"
            :model-value="title"
            v-bind="field"
            :aria-describedby="ids.errors"
          />
        </Field>
        <Errors name="title" />
      </div>
    </CFormGroup>

    <CFormGroup v-slot="{ ids }" variant="grid" class="pt-6">
      <Label class="sm:mb-0">{{ $t('recipe.ingredients') }}</Label>
      <fieldset :aria-labelledby="ids.label" class="sm:col-span-3 space-y-2">
        <div class="grid grid-cols-3 gap-4">
          <Label id="ingredients-quantity" for="">{{
            $t('recipe.amount')
          }}</Label>
          <Label id="ingredients-label" for="" class="col-span-2">{{
            $t('recipe.label')
          }}</Label>
        </div>

        <RecipeFormIngredients
          :model-value="ingredients"
          @update:model-value="(val: []) => $emit('update:ingredients', val)"
        />
      </fieldset>
    </CFormGroup>

    <CFormGroup v-slot="{ ids }" variant="grid" class="pt-6">
      <div>
        <Label class="sm:mt-3">{{ $t('recipe.steps') }}</Label>
        <FieldHelp>{{ $t('recipe.form.steps.help') }}</FieldHelp>
      </div>
      <CTextarea
        :model-value="steps"
        rows="10"
        class="sm:col-span-3"
        :aria-describedby="ids.help"
        @update:model-value="(val: string) => $emit('update:steps', val)"
      />
    </CFormGroup>

    <CFormGroup v-slot="{ ids }" variant="grid" class="pt-6">
      <Label class="sm:mt-3">{{ $t('recipe.form.time') }}</Label>
      <div class="sm:col-span-3">
        <div class="flex space-x-4 items-center">
          <Field
            v-slot="{ field }"
            :model-value="time"
            name="time"
            @update:model-value="(val: string) => $emit('update:time', val, 'number')"
          >
            <CTextField
              :model-value="time"
              v-bind="field"
              min="0"
              step="5"
              type="text"
              inputmode="numeric"
              class="w-24"
              :aria-describedby="ids.errors"
            />
          </Field>
          <span>{{ $t('recipe.time', 2) }}</span>
        </div>
        <Errors name="time" />
      </div>
    </CFormGroup>

    <CFormGroup v-slot="{ ids }" variant="grid" class="pt-6">
      <Label class="sm:mt-3">{{ $t('recipe.form.quantity') }}</Label>
      <div class="sm:col-span-3">
        <div class="flex space-x-4 items-center">
          <Field
            v-slot="{ field }"
            :model-value="quantity"
            name="quantity"
            @update:model-value="(val: string) => $emit('update:quantity', val, 'number')"
          >
            <CTextField
              :model-value="quantity"
              v-bind="field"
              min="1"
              type="text"
              inputmode="numeric"
              class="w-24"
              :aria-describedby="ids.errors"
            />
          </Field>
          <span>{{ $t('recipe.quantity', 2) }}</span>
        </div>
        <Errors name="quantity" />
      </div>
    </CFormGroup>

    <CFormGroup v-slot="{ ids }" variant="grid" class="pt-6">
      <div>
        <Label>{{ $t('recipe.form.image.label') }}</Label>
        <FieldHelp>{{ $t('recipe.form.image.help') }}</FieldHelp>
      </div>

      <div class="sm:col-span-3">
        <ImageUploader
          :model-value="image"
          :aria-describedby="ids.help"
          @update:model-value="(val: string) => $emit('update:image', val)"
        />
      </div>
    </CFormGroup>

    <CFormGroup variant="grid" class="pt-6">
      <Label class="sm:mt-3">{{ $t('recipe.tags') }}</Label>
      <div class="sm:col-span-3">
        <TagsSelect
          :model-value="tags"
          @update:model-value="(val: Update_Recipes_Tags_Input[]) => $emit('update:tags', val)"
        />
      </div>
    </CFormGroup>

    <CFormGroup variant="grid" class="pt-6">
      <Label class="sm:mt-3">{{ $t('recipe.notes') }}</Label>
      <CTextarea
        :model-value="notes"
        rows="4"
        class="sm:col-span-3"
        @update:model-value="(val: string) => $emit('update:notes', val)"
      />
    </CFormGroup>

    <CFormGroup variant="grid" class="pt-6">
      <div class="sm:col-start-2 sm:col-span-3">
        <CBtn type="submit" variant="primary" class="w-full sm:w-auto">
          {{ $t('common.save') }}
        </CBtn>
      </div>
    </CFormGroup>
  </Form>
</template>

<script lang="ts">
import { RecipeIngredient } from '@/services/types';

import {
  Update_Directus_Files_Input,
  Update_Recipes_Tags_Input,
} from '@/gql/graphql';

export type RecipeFormInput = {
  title?: string;
  slug?: string;
  ingredients: RecipeIngredient[];
  steps?: string;
  time?: number;
  quantity?: number;
  notes?: string;
  tags: Update_Recipes_Tags_Input[];
  image?: Update_Directus_Files_Input;
};
</script>

<script lang="ts" setup>
import { Field } from 'vee-validate';
import { onMounted, ref } from 'vue';

defineProps<RecipeFormInput>();

defineEmits([
  'update:title',
  'update:ingredients',
  'update:steps',
  'update:time',
  'update:quantity',
  'update:notes',
  'update:tags',
  'update:image',
  'submit',
]);

const titleNode = ref<typeof Field | null>(null);

const schema = {
  title: 'required',
  time: 'integer|min_value:1',
  quantity: 'integer|min_value:1',
};

onMounted(() => {
  titleNode?.value?.$el?.focus();
});
</script>
