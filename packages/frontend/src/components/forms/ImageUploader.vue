<template>
  <div class="flex space-x-6">
    <RecipeImage
      :image="image"
      width="200"
      height="134"
      class="rounded-lg bg-alt-200 bg-opacity-50"
    />

    <div class="flex flex-col justify-between items-start">
      <input
        id="image-uploader-input"
        type="file"
        accept="image/jpeg,image/png"
        class="sr-only"
        @change="handleImageChange"
      />
      <label
        for="image-uploader-input"
        class="
          inline-flex
          items-center
          justify-center
          py-3
          px-4
          sm:px-5
          ring-offset-2 ring-offset-alt-100
          font-bold
          leading-tight
          bg-alt-200 bg-opacity-75
          hover:bg-opacity-100
          text-alt-700
          hover:text-alt-900
          rounded-lg
          mb-4
        "
      >
        <CIcon id="folder" class="-my-1 mr-3 text-alt-500" />
        {{ $t('imageUploader.browse') }}
      </label>

      <CBtn
        v-if="modelValue && image"
        class="text-left text-sm text-red-500 hover:text-red-700"
        @click="$emit('update:model-value', null)"
      >
        <CIcon id="bin" class="mr-2" />
        {{ $t('imageUploader.delete') }}
      </CBtn>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import gql from 'graphql-tag';
import { useMutation, useQuery } from '@urql/vue';

import { useResult } from '@/composables/useResult';

const props = defineProps({
  modelValue: {
    type: String,
    default: null,
  },
});

const emit = defineEmits(['update:model-value']);

const result = useQuery({
  query: gql`
    query imageUploaderImage($id: ID!) {
      files(where: { id: $id }) {
        id
        hash
        ext
      }
    }
  `,
  variables: {
    id: computed(() => props.modelValue),
  },
  pause: computed(() => !props.modelValue),
});

const image = useResult(result.data, null, (data) => {
  return props.modelValue ? data?.files?.[0] : null;
});

const { executeMutation: upload } = useMutation(
  gql`
    mutation editUploadImage($file: Upload!) {
      upload(file: $file) {
        id
        hash
        ext
      }
    }
  `
);

function handleImageChange(e) {
  const file = e.target.files[0];

  if (file) {
    upload({ file }).then((response) => {
      emit('update:model-value', response.data.upload.id);
    });
  }
}
</script>
