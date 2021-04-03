<template>
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
</template>

<script>
import { inject, onMounted, ref } from 'vue';
import { useMutation } from '@vue/apollo-composable';
import gql from 'graphql-tag';

import i18n from '@/i18n';
import { notify } from '@/composables/useNotifications';
import router from '@/router';

export default {
  setup() {
    const setPageTitle = inject('setPageTitle');
    onMounted(() => {
      setPageTitle(i18n.global.t('forgotPassword.title'));
    });

    const errors = ref(null);
    const email = ref(null);
    const { mutate: forgotPassword, loading } = useMutation(
      gql`
        mutation forgotPassword($email: String!) {
          forgotPassword(email: $email) {
            ok
          }
        }
      `,
      () => ({
        variables: {
          email: email.value,
        },
      })
    );

    function submit() {
      errors.value = null;

      forgotPassword().then(
        () => {
          router.push({ name: 'login' });
          notify({
            type: 'success',
            message: i18n.global.t('forgotPassword.success'),
          });
        },
        ({ graphQLErrors }) => {
          errors.value = graphQLErrors.flatMap(
            (gqlError) =>
              gqlError.extensions.exception.data?.message?.flatMap(
                (m) => m.messages
              ) ?? [gqlError.extensions.exception.message]
          );
        }
      );
    }

    return {
      email,
      submit,
      loading,
      errors,
    };
  },
};
</script>
