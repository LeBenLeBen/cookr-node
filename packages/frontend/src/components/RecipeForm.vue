<template>
  <Form
    ref="form"
    :validation-schema="schema"
    class="divide-y divide-alt-200 space-y-6"
    @submit="$emit('submit')"
  >
    <FormGroup required class="grid sm:grid-cols-4 gap-4 sm:gap-4">
      <Label for="title" class="sm:mt-3">{{ $t('recipe.title') }}</Label>
      <div class="sm:col-span-3">
        <Field
          v-slot="{ field }"
          :model-value="title"
          name="title"
          @update:modelValue="(val) => $emit('update:title', val)"
        >
          <Input id="title" ref="title" v-bind="field" />
        </Field>
        <Errors name="title" />
      </div>
    </FormGroup>

    <FormGroup class="pt-6 grid sm:grid-cols-4 gap-4 sm:gap-4">
      <Label id="ingredients" class="mb-2 sm:mb-0">{{
        $t('recipe.ingredients')
      }}</Label>
      <div class="sm:col-span-3 space-y-4">
        <div class="grid grid-cols-3 gap-4 sm:gap-4">
          <Label id="ingredients-quantity">{{ $t('recipe.amount') }}</Label>
          <Label id="ingredients-label" class="col-span-2">{{
            $t('recipe.label')
          }}</Label>
        </div>

        <RecipeFormIngredients
          :model-value="ingredients"
          @update:modelValue="(val) => $emit('update:ingredients', val)"
        />
      </div>
    </FormGroup>

    <FormGroup class="pt-6 grid sm:grid-cols-4 gap-4 sm:gap-4">
      <div>
        <Label for="steps" class="sm:mt-3">{{ $t('recipe.steps') }}</Label>
        <FieldHelp>{{ $t('recipe.form.steps.help') }}</FieldHelp>
      </div>
      <Textarea
        id="steps"
        :model-value="steps"
        rows="10"
        class="sm:col-span-3"
        @update:modelValue="(val) => $emit('update:steps', val)"
      />
    </FormGroup>

    <FormGroup class="pt-6 grid sm:grid-cols-4 gap-4 sm:gap-4">
      <Label for="time" class="sm:mt-3">{{ $t('recipe.form.time') }}</Label>
      <div class="sm:col-span-3">
        <div class="flex space-x-4 items-center">
          <Field
            v-slot="{ field }"
            :model-value="time"
            name="time"
            @update:modelValue="(val) => $emit('update:time', val, 'number')"
          >
            <Input
              id="time"
              v-bind="field"
              min="0"
              step="5"
              type="text"
              inputmode="numeric"
              class="w-18"
            />
          </Field>
          <span>{{ $t('recipe.time', 2) }}</span>
        </div>
        <Errors name="time" />
      </div>
    </FormGroup>

    <FormGroup class="pt-6 grid sm:grid-cols-4 gap-4 sm:gap-4">
      <Label for="quantity" class="sm:mt-3">{{
        $t('recipe.form.quantity')
      }}</Label>
      <div class="sm:col-span-3">
        <div class="flex space-x-4 items-center">
          <Field
            v-slot="{ field }"
            :model-value="quantity"
            name="quantity"
            @update:modelValue="
              (val) => $emit('update:quantity', val, 'number')
            "
          >
            <Input
              id="quantity"
              v-bind="field"
              min="1"
              type="text"
              inputmode="numeric"
              class="w-18"
            />
          </Field>
          <span>{{ $t('recipe.quantity', 2) }}</span>
        </div>
        <Errors name="quantity" />
      </div>
    </FormGroup>

    <FormGroup class="pt-6 grid sm:grid-cols-4 gap-4 sm:gap-4">
      <div>
        <Label for="image">{{ $t('recipe.form.image.label') }}</Label>
        <FieldHelp>{{ $t('recipe.form.image.help') }}</FieldHelp>
      </div>

      <div class="sm:col-span-3">
        <ImageUploader
          :model-value="image"
          @update:modelValue="(val) => $emit('update:image', val)"
        />
      </div>
    </FormGroup>

    <FormGroup class="pt-6 grid sm:grid-cols-4 gap-4 sm:gap-4">
      <Label for="tags" class="sm:mt-3">{{ $t('recipe.tags') }}</Label>
      <div class="sm:col-span-3">
        <TagsSelect
          id="tags"
          :model-value="tags"
          @update:modelValue="(val) => $emit('update:tags', val)"
        />
      </div>
    </FormGroup>

    <FormGroup class="pt-6 grid sm:grid-cols-4 gap-4 sm:gap-4">
      <Label for="notes" class="sm:mt-3">{{ $t('recipe.notes') }}</Label>
      <Textarea
        id="notes"
        :model-value="notes"
        rows="4"
        class="sm:col-span-3"
        @update:modelValue="(val) => $emit('update:notes', val)"
      />
    </FormGroup>

    <div class="pt-6 grid sm:grid-cols-4 gap-4 sm:gap-4">
      <CBtn type="submit" variant="primary" class="sm:col-start-2">
        {{ $t('common.save') }}
      </CBtn>
    </div>
  </Form>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    ingredients: {
      type: Array,
      required: true,
    },
    steps: {
      type: String,
      required: true,
    },
    time: {
      type: [Number, String],
      default: null,
    },
    quantity: {
      type: [Number, String, null],
      default: null,
    },
    notes: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      required: true,
    },
    image: {
      type: String,
      default: null,
    },
  },

  emits: [
    'update:title',
    'update:ingredients',
    'update:steps',
    'update:time',
    'update:quantity',
    'update:notes',
    'update:tags',
    'update:image',
    'submit',
  ],

  setup() {
    const schema = {
      title: 'required',
      time: 'integer|min_value:1',
      quantity: 'integer|min_value:1',
    };

    return {
      schema,
    };
  },

  mounted() {
    this.$refs?.title?.$el?.focus();
  },
};
</script>
