<template>
  <div>
    <PageHeader :title="$t('profile.title')">
      <CBtn variant="default small" @click="confirmLogout">{{
        $t('auth.logout')
      }}</CBtn>
    </PageHeader>

    <Form class="divide-y divide-alt-200 space-y-6" @submit="prepareToSave">
      <FormGroup required class="grid sm:grid-cols-4 gap-4 sm:gap-4">
        <Label for="title" class="sm:mt-3">{{ $t('auth.username') }}</Label>
        <div class="sm:col-span-3">
          <Field v-slot="{ field }" v-model="data.username" name="username">
            <Input id="username" v-bind="field" />
          </Field>
          <Errors name="username" />
        </div>
      </FormGroup>

      <FormGroup required class="pt-6 grid sm:grid-cols-4 gap-4 sm:gap-4">
        <Label for="title" class="sm:mt-3">{{ $t('auth.email') }}</Label>
        <div class="sm:col-span-3">
          <Field v-slot="{ field }" v-model="data.email" name="email">
            <Input id="email" type="email" v-bind="field" disabled />
          </Field>
          <Errors name="email" />
        </div>
      </FormGroup>

      <FormGroup class="pt-6 grid sm:grid-cols-4 gap-4 sm:gap-4">
        <Label for="title" class="sm:mt-3">{{ $t('auth.password') }}</Label>
        <div class="sm:col-span-3">
          <Field v-slot="{ field }" v-model="data.password" name="password">
            <Input id="password" type="password" v-bind="field" />
          </Field>
          <Errors name="password" />
        </div>
      </FormGroup>

      <div class="pt-6 grid sm:grid-cols-4 gap-4 sm:gap-4">
        <div class="sm:col-start-2 sm:col-span-3">
          <CBtn type="submit" variant="primary" class="w-full sm:w-auto">
            {{ $t('common.save') }}
          </CBtn>
        </div>
      </div>
    </Form>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useMutation } from '@urql/vue';
import gql from 'graphql-tag';
import router from '@/router';
import store from '@/store';
import i18n from '@/i18n';
import { notify } from '@/composables/useNotifications';

const data = reactive({
  username: store.state.currentUser.username,
  email: store.state.currentUser.email,
  password: null,
});

const { executeMutation: save } = useMutation(
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
      where: { id: store.state.currentUser.id },
      data: payload,
    },
  }).then((result) => {
    store.updateCurrentUser(result.data.updateUser.user);
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
