<template>
  <div>
    <ErrorsList :errors="errors" />

    <form class="space-y-6" @submit.prevent="login">
      <FormGroup required>
        <Label for="identifier" class="mb-2">{{ $t('auth.email') }}</Label>
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
        <Label for="password" class="mb-2">{{ $t('auth.password') }}</Label>
        <Input
          id="password"
          v-model="input.password"
          type="password"
          name="password"
          autocomplete="current-password"
        />
        <div class="mt-2 text-sm">
          <router-link :to="{ name: 'forgot-password' }">
            {{ $t('auth.forgotPassword') }}
          </router-link>
        </div>
      </FormGroup>
      <div>
        <CBtn type="submit" variant="primary block">{{
          $t('auth.login')
        }}</CBtn>
      </div>
    </form>
  </div>
</template>

<script setup>
import { inject, onMounted, reactive, ref } from 'vue';
import { useMutation } from '@urql/vue';
import gql from 'graphql-tag';

import router from '../router';
import store from '../store';

import { currentUserFragment } from '../services/fragments';
import i18n from '@/i18n';

const setPageTitle = inject('setPageTitle');

onMounted(() => {
  setPageTitle(i18n.global.t('auth.login'));
});

const errors = ref(null);
const input = reactive({ identifier: '', password: '' });

const { executeMutation: authenticate } = useMutation(
  gql`
    mutation login($input: UsersPermissionsLoginInput!) {
      login(input: $input) {
        user {
          ...CurrentUser
        }
        jwt
      }
    }
    ${currentUserFragment}
  `
);

function login() {
  errors.value = null;

  authenticate({
    input,
  }).then((result) => {
    if (result.error) {
      errors.value = result.error.graphQLErrors.flatMap(
        (gqlError) =>
          gqlError.extensions.exception.data?.message?.flatMap(
            (m) => m.messages
          ) ?? [gqlError.extensions.exception.message]
      );

      return;
    }

    store.setToken(result.data.login.jwt);
    store.setCurrentUser(result.data.login.user);
    router.push({ name: 'home' });
  });
}
</script>
