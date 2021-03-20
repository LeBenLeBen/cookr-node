<template>
  <Form
    ref="form"
    :validation-schema="schema"
    class="divide-y divide-alt-200 space-y-6"
    @submit="$emit('submit')"
  >
    <FormGroup required class="grid sm:grid-cols-4">
      <Label for="title" class="mb-2 sm:mb-0 sm:mt-3">{{
        $t('recipe.title')
      }}</Label>
      <div class="sm:col-span-3">
        <Field
          v-slot="{ field }"
          :model-value="title"
          name="title"
          @update:modelValue="(val) => $emit('update:title', val)"
        >
          <Input id="title" ref="title" v-bind="field" />
        </Field>
        <div v-if="slug" class="mt-2 text-sm text-alt-500">/{{ slug }}</div>
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

        <RecipeFormIngredients
          :model-value="ingredients"
          @update:modelValue="(val) => $emit('update:ingredients', val)"
        />
      </div>
    </FormGroup>

    <FormGroup class="pt-6 grid sm:grid-cols-4">
      <Label for="steps" class="mb-2 sm:mb-0 sm:mt-3">{{
        $t('recipe.steps')
      }}</Label>
      <Textarea
        id="steps"
        :model-value="steps"
        rows="10"
        class="sm:col-span-3"
        @update:modelValue="(val) => $emit('update:steps', val)"
      />
    </FormGroup>

    <FormGroup class="pt-6 grid sm:grid-cols-4">
      <Label for="time" class="mb-2 sm:mb-0 sm:mt-3">{{
        $t('recipe.new.time')
      }}</Label>
      <div class="sm:col-span-3">
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 items-center">
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

      <div class="sm:col-span-3">
        <img
          v-if="previewImage"
          :src="previewImage"
          alt=""
          class="mb-4 rounded-lg shadow-lg"
          width="200"
        />
        <Input
          id="image"
          type="file"
          accept="image/jpeg,image/png"
          @change="handleImageChange"
        />
      </div>
    </FormGroup>

    <FormGroup class="pt-6 grid sm:grid-cols-4">
      <Label for="tags" class="mb-2 sm:mb-0 sm:mt-3">{{
        $t('recipe.tags')
      }}</Label>
      <div class="sm:col-span-3">
        <TagsSelect
          id="tags"
          :model-value="tags"
          @update:modelValue="(val) => $emit('update:tags', val)"
        />
      </div>
    </FormGroup>

    <FormGroup class="pt-6 grid sm:grid-cols-4">
      <Label for="notes" class="mb-2 sm:mb-0 sm:mt-3">{{
        $t('recipe.notes')
      }}</Label>
      <Textarea
        id="notes"
        :model-value="notes"
        rows="3"
        class="sm:col-span-3"
        @update:modelValue="(val) => $emit('update:notes', val)"
      />
    </FormGroup>

    <div class="pt-6 grid sm:grid-cols-4">
      <CBtn type="submit" variant="primary" class="sm:col-start-2">
        {{ $t('recipe.new.submit') }}
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
    slug: {
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
    imageFile: {
      type: Object,
      default: null,
    },
  },

  emits: [
    'update:title',
    'update:slug',
    'update:ingredients',
    'update:steps',
    'update:time',
    'update:quantity',
    'update:notes',
    'update:tags',
    'update:imageFile',
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

  computed: {
    previewImage() {
      return this.imageFile ? URL.createObjectURL(this.imageFile) : null;
    },
  },

  mounted() {
    this.$refs?.title?.$el?.focus();
  },

  methods: {
    handleImageChange(e) {
      const image = e.target.files[0];
      if (image) {
        this.$emit('update:imageFile', image);
      }
    },
  },
};
</script>
