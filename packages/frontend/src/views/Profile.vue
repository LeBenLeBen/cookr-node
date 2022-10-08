<template>
  <div>
    <PageHeader :title="$t('profile.title')">
      <CBtn variant="default small" @click="confirmLogout">{{
        $t('auth.logout')
      }}</CBtn>
    </PageHeader>

    <Form
      class="divide-y divide-alt-200 space-y-6"
      :validation-schema="schema"
      :initial-values="data"
      @submit="prepareToSave"
    >
      <CFormGroup v-slot="{ ids }" variant="grid" required>
        <Label class="sm:mt-3">{{ $t('auth.username') }}</Label>
        <div class="sm:col-span-3">
          <Field v-slot="{ field }" name="username">
            <CTextField
              v-model="data.username"
              :aria-describedby="ids.errors"
              v-bind="field"
            />
          </Field>
          <Errors name="username" />
        </div>
      </CFormGroup>

      <CFormGroup v-slot="{ ids }" variant="grid" required class="pt-6">
        <Label class="sm:mt-3">{{ $t('auth.email') }}</Label>
        <div class="sm:col-span-3">
          <Field v-slot="{ field }" name="email">
            <CTextField
              v-model="data.email"
              :aria-describedby="ids.errors"
              type="email"
              v-bind="field"
              disabled
            />
          </Field>
          <Errors name="email" />
        </div>
      </CFormGroup>

      <CFormGroup v-slot="{ ids }" variant="grid" class="pt-6">
        <Label class="sm:mt-3">{{ $t('auth.password') }}</Label>
        <div class="sm:col-span-3">
          <Field v-slot="{ field }" name="password">
            <CTextField
              v-model="data.password"
              :aria-describedby="ids.errors"
              type="password"
              v-bind="field"
            />
          </Field>
          <Errors name="password" />
        </div>
      </CFormGroup>

      <CFormGroup variant="grid" class="pt-6">
        <div class="sm:col-start-2 sm:col-span-3">
          <CBtn type="submit" variant="primary" class="w-full sm:w-auto">
            {{ $t('common.save') }}
          </CBtn>
        </div>
      </CFormGroup>
    </Form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { useMutation } from '@urql/vue';
import gql from 'graphql-tag';

import router from '@/router';
import store from '@/store';
import i18n from '@/i18n';

import { notify } from '@/composables/useNotifications';
import {
  GQLeditUserInput,
  GQLMutation,
  MutationToUpdateUserArgs,
} from '@/types/graphqlTypes';

const schema = {
  username: 'required',
  email: 'required',
};

const data = reactive<GQLeditUserInput>({
  username: store.state.currentUser!.username,
  email: store.state.currentUser!.email,
  password: undefined,
});

const { executeMutation: save } = useMutation<
  Pick<GQLMutation, 'updateUser'>,
  MutationToUpdateUserArgs
>(
  gql`
    mutation updateProfile($input: updateUserInput!) {
      updateUser(input: $input) {
        user {
          id
          username
          email
        }
      }
    }
  `
);

function prepareToSave() {
  const payload = Object.assign({}, data);

  if (!payload.password) {
    delete payload.password;
  }

  save({
    input: {
      where: { id: store.state.currentUser!.id },
      data: payload,
    },
  }).then((response) => {
    if (response.error) return;

    const user = response?.data?.updateUser?.user;

    if (user) {
      store.updateCurrentUser(user);
    }

    notify({
      id: 'profile-update-success',
      type: 'success',
      message: i18n.global.t('profile.success'),
    });
  });
}

function confirmLogout() {
  if (confirm(i18n.global.t('auth.logoutConfirm'))) {
    logout();
  }
}

function logout() {
  store.setToken(null);
  store.setCurrentUser(null);
  router.push({ name: 'login' });
}
</script>
