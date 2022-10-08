<template>
  <div>
    <ErrorsList :errors="errors" />

    <form class="space-y-6" @submit.prevent="login">
      <CFormGroup required>
        <Label>{{ $t('auth.email') }}</Label>
        <CTextField
          v-model="input.identifier"
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
import { getErrorMessages, NormalizedApiErrors } from '@/helpers/api';
import { useRoute } from 'vue-router';

usePageTitle(i18n.global.t('auth.login'));

const route = useRoute();

const loading = ref(false);
const errors = ref<NormalizedApiErrors | null>(null);
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
    .then((response) => {
      if (response.error) {
        errors.value = getErrorMessages(response.error.graphQLErrors);
        return;
      }

      store.setToken(response.data.login.jwt);
      store.setCurrentUser(response.data.login.user);
      router.push(
        (route.query?.redirectTo as string | undefined) ?? { name: 'home' }
      );
    })
    .finally(() => {
      loading.value = false;
    });
}
</script>
