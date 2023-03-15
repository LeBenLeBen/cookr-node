<template>
  <div>
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
import { useMutation } from '@urql/vue';
import gql from 'graphql-tag';
import { ref } from 'vue';

import { GRAPHQL_SYSTEM_URL } from '@/services/apiClient';

import { Mutation, MutationAuth_Password_RequestArgs } from '@/gql/graphql';

import { notify } from '@/composables/useNotifications';
import usePageTitle from '@/composables/usePageTitle';

import i18n from '@/i18n';
import router from '@/router';

usePageTitle(i18n.global.t('forgotPassword.title'));

const loading = ref(false);
const email = ref('');

const { executeMutation: forgotPassword } = useMutation<
  Mutation,
  MutationAuth_Password_RequestArgs
>(
  gql`
    mutation forgotPassword($email: String!, $reset_url: String!) {
      auth_password_request(email: $email, reset_url: $reset_url)
    }
  `
);

function submit() {
  if (!email.value) return;

  loading.value = true;

  forgotPassword(
    {
      email: email.value,
      reset_url: `${window.location.origin}/reset-password`,
    },
    { url: GRAPHQL_SYSTEM_URL }
  )
    .then((response) => {
      if (response.error) {
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
