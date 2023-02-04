<template>
  <div>
    <form class="space-y-6" @submit.prevent="submit">
      <CFormGroup required>
        <Label for="password">
          {{ $t('resetPassword.password') }}
        </Label>
        <CTextField
          id="password"
          v-model="password"
          type="password"
          name="password"
          autocomplete="new-password"
        />
      </CFormGroup>

      <div>
        <CBtn type="submit" variant="primary block" :disabled="loading">
          {{ $t('resetPassword.submit') }}
        </CBtn>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { useMutation } from '@urql/vue';
import gql from 'graphql-tag';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { GRAPHQL_SYSTEM_URL } from '@/services/apiClient';

import { Mutation, MutationAuth_Password_ResetArgs } from '@/gql/graphql';

import { notify } from '@/composables/useNotifications';
import usePageTitle from '@/composables/usePageTitle';

import i18n from '@/i18n';

usePageTitle(i18n.global.t('resetPassword.title'));

const router = useRouter();
const route = useRoute();

const loading = ref(false);
const password = ref('');

const { executeMutation: resetPassword } = useMutation<
  Mutation,
  MutationAuth_Password_ResetArgs
>(
  gql`
    mutation resetPassword($password: String!, $token: String!) {
      auth_password_reset(password: $password, token: $token)
    }
  `
);

function submit() {
  loading.value = true;

  resetPassword(
    {
      password: password.value,
      token: route.query.token as string,
    },
    { url: GRAPHQL_SYSTEM_URL }
  )
    .then((response) => {
      if (response.data?.auth_password_reset) {
        router.push({ name: 'login' });
        notify({
          type: 'success',
          message: i18n.global.t('resetPassword.success'),
        });
      }
    })
    .finally(() => {
      loading.value = false;
    });
}
</script>
