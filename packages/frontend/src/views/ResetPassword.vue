<template>
  <div>
    <ErrorsList :errors="errors" />

    <form class="space-y-6" @submit.prevent="submit">
      <CFormGroup required>
        <Label for="password">
          {{ $t('resetPassword.password') }}
        </Label>
        <CTextField
          id="password"
          v-model="input.password"
          type="password"
          name="password"
          autocomplete="new-password"
        />
      </CFormGroup>

      <CFormGroup required>
        <Label for="passwordConfirmation">
          {{ $t('resetPassword.passwordConfirmation') }}
        </Label>
        <CTextField
          id="passwordConfirmation"
          v-model="input.passwordConfirmation"
          type="password"
          name="passwordConfirmation"
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
import { reactive, ref } from 'vue';
import { useMutation } from '@urql/vue';
import gql from 'graphql-tag';

import router from '@/router';
import store from '@/store';
import i18n from '@/i18n';

import { currentUserFragment } from '@/services/fragments';

import { notify } from '@/composables/useNotifications';
import usePageTitle from '@/composables/usePageTitle';
import { getErrorMessages, NormalizedApiErrors } from '@/helpers/api';
import { Mutation, MutationResetPasswordArgs } from '@/gql/graphql';

usePageTitle(i18n.global.t('resetPassword.title'));

const loading = ref(false);
const errors = ref<NormalizedApiErrors | null>(null);
const input = reactive({ password: '', passwordConfirmation: '' });

const { executeMutation: resetPassword } = useMutation<
  Mutation,
  MutationResetPasswordArgs
>(
  gql`
    mutation resetPassword(
      $password: String!
      $passwordConfirmation: String!
      $code: String!
    ) {
      resetPassword(
        password: $password
        passwordConfirmation: $passwordConfirmation
        code: $code
      ) {
        jwt
        user {
          ...CurrentUser
        }
      }
    }
    ${currentUserFragment}
  `
);

function submit() {
  loading.value = true;
  errors.value = null;

  resetPassword({
    password: input.password,
    passwordConfirmation: input.passwordConfirmation,
    code: router.currentRoute.value.query.code as string,
  })
    .then((response) => {
      if (response.error) {
        errors.value = getErrorMessages(response.error.graphQLErrors);
        return;
      }

      const token = response.data?.resetPassword?.jwt;
      if (token) {
        store.setToken(token);
      }

      const user = response.data?.resetPassword?.user;
      if (user) {
        store.setCurrentUser(user);
        router.push({ name: 'home' });
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
