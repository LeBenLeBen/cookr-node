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
        <CBtn type="submit" variant="primary block" :disabled="loading">
          {{ $t('auth.login') }}
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

import usePageTitle from '@/composables/usePageTitle';
import { getErrorMessages, StrapiErrors } from '@/helpers/api';
import { useRoute } from 'vue-router';

usePageTitle(i18n.global.t('auth.login'));

const route = useRoute();

const loading = ref(false);
const errors = ref<StrapiErrors | null>(null);
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
  })
    .then((result) => {
      if (result.error) {
        errors.value = getErrorMessages(result.error.graphQLErrors);
        return;
      }

      store.setToken(result.data.login.jwt);
      store.setCurrentUser(result.data.login.user);
      router.push(
        (route.query?.redirectTo as string | undefined) ?? { name: 'home' }
      );
    })
    .finally(() => {
      loading.value = false;
    });
}
</script>
