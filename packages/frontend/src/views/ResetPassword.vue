<template>
  <div>
    <ErrorsList :errors="errors" />

    <form class="space-y-6" @submit.prevent="submit">
      <FormGroup required>
        <Label for="password" class="mb-2">
          {{ $t('resetPassword.password') }}
        </Label>
        <Input
          id="password"
          v-model="input.password"
          type="password"
          name="password"
          autocomplete="new-password"
        />
      </FormGroup>
      <FormGroup required>
        <Label for="passwordConfirmation" class="mb-2">
          {{ $t('resetPassword.passwordConfirmation') }}
        </Label>
        <Input
          id="passwordConfirmation"
          v-model="input.passwordConfirmation"
          type="password"
          name="passwordConfirmation"
          autocomplete="new-password"
        />
      </FormGroup>
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
import { getErrorMessages, StrapiErrors } from '@/helpers/api';

usePageTitle(i18n.global.t('resetPassword.title'));

const loading = ref(false);
const errors = ref<StrapiErrors | null>(null);
const input = reactive({ password: '', passwordConfirmation: '' });

const { executeMutation: resetPassword } = useMutation(
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
    code: router.currentRoute.value.query.code,
  })
    .then((response) => {
      if (response.error) {
        errors.value = getErrorMessages(response.error.graphQLErrors);
        return;
      }

      store.setCurrentUser(response.data.resetPassword.user);
      router.push({ name: 'home' });
      notify({
        type: 'success',
        message: i18n.global.t('resetPassword.success'),
      });
    })
    .finally(() => {
      loading.value = false;
    });
}
</script>
