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
        :id="id"
        type="file"
        accept="image/jpeg,image/png"
        class="sr-only"
        v-bind="$attrs"
        @change="handleImageChange"
      />
      <label
        :for="id"
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

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import { computed, inject, useAttrs } from 'vue';
import gql from 'graphql-tag';
import { useMutation, useQuery } from '@urql/vue';
import { FormGroupSymbol } from 'chusho';

import useResult from '@/composables/useResult';
import {
  Mutation,
  MutationUploadArgs,
  Query,
  QueryUploadFileArgs,
} from '@/gql/graphql';

const props = defineProps({
  modelValue: {
    type: String,
    default: null,
  },
});

const attrs = useAttrs();

const formGroup = inject(FormGroupSymbol);
const id = computed(
  () => formGroup?.ids.field ?? attrs.id?.toString() ?? 'image-uploader-input'
);

const emit = defineEmits(['update:model-value']);

const result = useQuery<Query, QueryUploadFileArgs>({
  query: gql`
    query imageUploaderImage($id: ID!) {
      uploadFile(id: $id) {
        data {
          id
          attributes {
            hash
            ext
          }
        }
      }
    }
  `,
  variables: {
    id: computed(() => props.modelValue),
  },
  pause: computed(() => !props.modelValue),
});

const image = useResult(result.data, null, (data) => {
  return props.modelValue ? data?.uploadFile : null;
});

const { executeMutation: upload } = useMutation<Mutation, MutationUploadArgs>(
  gql`
    mutation editUploadImage($file: Upload!) {
      upload(file: $file) {
        data {
          id
          attributes {
            hash
            ext
          }
        }
      }
    }
  `
);

function handleImageChange(e: Event) {
  const file = (e.target as HTMLInputElement)?.files?.[0];

  if (file) {
    upload({ file }).then((response) => {
      emit('update:model-value', response.data?.upload.data?.id);
    });
  }
}
</script>
