<template>
  <div>
    <ErrorsList :errors="errors" />

    <form class="space-y-6" @submit.prevent="submit">
      <FormGroup required>
        <Label for="email" class="mb-2">{{ $t('auth.email') }}</Label>
        <Input
          id="email"
          v-model="email"
          type="email"
          name="email"
          autocomplete="email"
          autofocus
        />
      </FormGroup>

      <div>
        <CBtn type="submit" variant="primary block" :disabled="loading">
          {{ $t('forgotPassword.submit') }}
        </CBtn>
      </div>
    </form>
  </div>
</template>

<script setup>
import { inject, onMounted, ref } from 'vue';
import { useMutation } from '@urql/vue';
import gql from 'graphql-tag';

import i18n from '@/i18n';
import { notify } from '@/composables/useNotifications';
import router from '@/router';

const setPageTitle = inject('setPageTitle');

onMounted(() => {
  setPageTitle(i18n.global.t('forgotPassword.title'));
});

const loading = ref(false);
const errors = ref(null);
const email = ref(null);

const { executeMutation: forgotPassword } = useMutation(
  gql`
    mutation forgotPassword($email: String!) {
      forgotPassword(email: $email) {
        ok
      }
    }
  `
);

function submit() {
  loading.value = true;
  errors.value = null;

  forgotPassword({
    email: email.value,
  }).then((result) => {
    loading.value = false;

    if (result.error) {
      errors.value = result.error.graphQLErrors.flatMap(
        (gqlError) =>
          gqlError.extensions.exception.data?.message?.flatMap(
            (m) => m.messages
          ) ?? [gqlError.extensions.exception.message]
      );

      return;
    }

    router.push({ name: 'login' });
    notify({
      type: 'success',
      message: i18n.global.t('forgotPassword.success'),
    });
  });
}
</script>
