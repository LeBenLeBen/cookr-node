<template>
  <form class="space-y-6" @submit.prevent="login">
    <CFormGroup required>
      <Label>{{ $t('auth.email') }}</Label>
      <CTextField
        v-model="input.email"
        type="email"
        name="identifier"
        autocomplete="email"
        autofocus
      />
    </CFormGroup>
    <CFormGroup required>
      <Label>{{ $t('auth.password') }}</Label>
      <CTextField
        v-model="input.password"
        type="password"
        name="password"
        autocomplete="current-password"
      />
      <div class="mt-2 text-sm">
        <RouterLink :to="{ name: 'forgot-password' }">
          {{ $t('auth.forgotPassword') }}
        </RouterLink>
      </div>
    </CFormGroup>
    <div>
      <CBtn type="submit" variant="primary block" :disabled="loading">
        {{ $t('auth.login') }}
      </CBtn>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { useMutation } from '@urql/vue';
import gql from 'graphql-tag';
import { reactive, ref } from 'vue';
import { useRoute } from 'vue-router';

import { GRAPHQL_SYSTEM_URL } from '@/services/apiClient';

import { Mutation, MutationAuth_LoginArgs } from '@/gql/graphql';

import { clear } from '@/composables/useNotifications';
import usePageTitle from '@/composables/usePageTitle';

import i18n from '@/i18n';
import router from '@/router';
import store from '@/store';

usePageTitle(i18n.global.t('auth.login'));

const route = useRoute();

const loading = ref(false);
const input = reactive({ email: '', password: '' });

const { executeMutation: authenticate } = useMutation<
  Mutation,
  MutationAuth_LoginArgs
>(
  gql`
    mutation login($email: String!, $password: String!) {
      auth_login(email: $email, password: $password, mode: json) {
        access_token
        refresh_token
        expires
      }
    }
  `
);

function login() {
  authenticate(input, { url: GRAPHQL_SYSTEM_URL })
    .then((response) => {
      if (
        response?.data?.auth_login?.access_token &&
        response?.data?.auth_login?.refresh_token &&
        response?.data?.auth_login?.expires
      ) {
        store.setAuth(
          response.data.auth_login.access_token,
          response.data.auth_login.refresh_token,
          response.data.auth_login.expires
        );

        clear();

        router.push(
          (route.query?.redirectTo as string | undefined) ?? { name: 'home' }
        );
      }
    })
    .finally(() => {
      loading.value = false;
    });
}
</script>
