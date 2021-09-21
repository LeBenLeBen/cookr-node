<template>
  <router-link
    :to="{ name: 'recipe', params: { id: id, slug: slug } }"
    class="
      overflow-hidden
      min-height-150px
      flex flex-col
      sm:flex-row
      text-alt-800
      hover:text-alt-800
      bg-alt-50
      hover:bg-white
      rounded-xl
      border-b border-alt-200
      ring-offset-2
    "
  >
    <RecipeImage
      :image="image"
      width="200"
      height="150"
      class="w-full sm:w-auto flex-shrink-0 bg-alt-200 bg-opacity-75"
    />

    <div class="flex flex-col p-4 sm:px-5 lg:py-5 lg:px-6 w-full">
      <h2 class="h2 mb-1">
        {{ title }}
      </h2>

      <RecipeAuthor
        v-if="username"
        :username="username"
        class="text-sm text-alt-600"
      />

      <ul
        v-if="time || quantity"
        class="
          flex
          items-end
          text-alt-600 text-sm
          md:text-base
          leading-none
          pt-3
          mt-auto
        "
      >
        <li v-if="time" class="mr-4 sm:mr-6">
          <RecipeTime :time="time" />
        </li>
        <li v-if="quantity" class="mr-4 sm:mr-6">
          <RecipeQuantity :quantity="quantity" />
        </li>
      </ul>
    </div>
  </router-link>
</template>

<script>
export default {
  inheritAttrs: false,

  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      default: null,
    },
    time: {
      type: Number,
      default: null,
    },
    quantity: {
      type: Number,
      default: null,
    },
    image: {
      type: Object,
      default: null,
    },
  },
};
</script>
