<template>
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
      <CBtn type="submit" variant="primary block">
        {{ $t('resetPassword.submit') }}
      </CBtn>
    </div>
  </form>
</template>

<script>
import { inject, onMounted, reactive, ref } from 'vue';
import { useMutation } from '@vue/apollo-composable';
import gql from 'graphql-tag';

import router from '../router';
import store from '../store';
import i18n from '@/i18n';

import { currentUserFragment } from '../services/fragments';
import { notify } from '@/composables/useNotifications';

export default {
  setup() {
    const setPageTitle = inject('setPageTitle');
    onMounted(() => {
      setPageTitle(i18n.global.t('resetPassword.title'));
    });

    const errors = ref(null);
    const input = reactive({ password: '', passwordConfirmation: '' });
    const { mutate: resetPassword } = useMutation(
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
      `,
      () => ({
        variables: {
          password: input.password,
          passwordConfirmation: input.passwordConfirmation,
          code: router.currentRoute.value.query.code,
        },
      })
    );

    function submit() {
      errors.value = null;

      resetPassword().then(
        (result) => {
          store.setCurrentUser(result.data.resetPassword.user);
          router.push({ name: 'home' });
          notify({
            type: 'success',
            message: i18n.global.t('resetPassword.success'),
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
      submit,
      input,
      errors,
    };
  },
};
</script>
