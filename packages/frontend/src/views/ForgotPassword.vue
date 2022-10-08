<template>
  <div>
    <ErrorsList :errors="errors" />

    <form class="space-y-6" @submit.prevent="submit">
      <CFormGroup required>
        <Label>{{ $t('auth.email') }}</Label>
        <CTextField
          v-model="email"
          type="email"
          name="email"
          autocomplete="email"
          autofocus
        />
      </CFormGroup>

      <div>
        <CBtn type="submit" variant="primary block" :disabled="loading">
          {{ $t('forgotPassword.submit') }}
        </CBtn>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useMutation } from '@urql/vue';
import gql from 'graphql-tag';

import i18n from '@/i18n';
import router from '@/router';

import { notify } from '@/composables/useNotifications';
import usePageTitle from '@/composables/usePageTitle';
import { getErrorMessages, StrapiErrors } from '@/helpers/api';

import {
  GQLUserPermissionsPasswordPayload,
  MutationToForgotPasswordArgs,
} from '@/types/graphqlTypes';

usePageTitle(i18n.global.t('forgotPassword.title'));

const loading = ref(false);
const errors = ref<StrapiErrors | null>(null);
const email = ref(null);

const { executeMutation: forgotPassword } = useMutation<
  GQLUserPermissionsPasswordPayload,
  MutationToForgotPasswordArgs
>(
  gql`
    mutation forgotPassword($email: String!) {
      forgotPassword(email: $email) {
        ok
      }
    }
  `
);

function submit() {
  if (!email.value) return;

  loading.value = true;
  errors.value = null;

  forgotPassword({
    email: email.value,
  })
    .then((response) => {
      if (response.error) {
        errors.value = getErrorMessages(response.error.graphQLErrors);
        return;
      }

      router.push({ name: 'login' });
      notify({
        type: 'success',
        message: i18n.global.t('forgotPassword.success'),
      });
    })
    .finally(() => {
      loading.value = false;
    });
}
</script>
