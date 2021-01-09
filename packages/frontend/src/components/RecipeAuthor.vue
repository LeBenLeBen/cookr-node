<template>
  <div>
    {{ $t('recipe.author') }}
    <router-link
      :to="{ name: 'user', params: { username: username } }"
      class="font-medium"
    >
      {{ username }}
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true,
    },
  },
};
</script>
