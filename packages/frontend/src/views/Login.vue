<template>
  <header class="mb-8 text-center">
    <div class="mb-2 font-display text-5xl text-primary-500">Cookr</div>
    <div
      role="heading"
      aria-level="1"
      class="text-alt-500 text-sm uppercase font-bold"
    >
      {{ $t('auth.login') }}
    </div>
  </header>

  <ErrorsList :errors="errors" />

  <form class="space-y-6" @submit.prevent="login">
    <FormGroup required>
      <Label for="identifier">{{ $t('auth.email') }}</Label>
      <Input
        id="identifier"
        v-model="input.identifier"
        type="email"
        name="identifier"
        autocomplete="email"
        autofocus
      />
    </FormGroup>
    <FormGroup required>
      <Label for="password">{{ $t('auth.password') }}</Label>
      <Input
        id="password"
        v-model="input.password"
        type="password"
        name="password"
        autocomplete="current-password"
      />
    </FormGroup>
    <div>
      <CBtn type="submit" variant="primary block">{{ $t('auth.login') }}</CBtn>
    </div>
  </form>
</template>

<script>
import { reactive, ref } from 'vue';
import { useMutation } from '@vue/apollo-composable';
import gql from 'graphql-tag';

import router from '../router';
import store from '../store';

export default {
  setup() {
    const errors = ref(null);
    const input = reactive({ identifier: '', password: '' });
    const { mutate: authenticate } = useMutation(
      gql`
        mutation login($input: UsersPermissionsLoginInput!) {
          login(input: $input) {
            user {
              email
              username
              user {
                avatar {
                  hash
                  ext
                }
              }
            }
          }
        }
      `,
      () => ({
        variables: {
          input: input,
        },
      })
    );

    function login() {
      errors.value = null;

      authenticate().then(
        (result) => {
          store.setCurrentUser(result.data.login.user);
          router.push({ name: 'home' });
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
      login,
      input,
      errors,
    };
  },
};
</script>
