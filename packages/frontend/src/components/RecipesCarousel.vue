<template>
  <div class="relative -mx-4 sm:-mx-6 md:-ml-1 lg:-mx-1">
    <CBtn
      class="-sm:hidden py-1 absolute top-20 left-0 z-10 text-alt-600 hover:text-alt-800 bg-white bg-opacity-85 hover:bg-opacity-100 rounded-r"
      :class="{ 'opacity-0': swiper?.isBeginning }"
      @click="swiper?.slidePrev()"
    >
      <CIcon id="chevron-left" :scale="1.5" />
    </CBtn>
    <Swiper
      v-if="recipes.length || loading"
      slides-per-view="auto"
      :space-between="16"
      :slides-offset-before="12"
      :slides-offset-after="12"
      :breakpoints="{
        640: {
          slidesOffsetBefore: 20,
          slidesOffsetAfter: 20,
        },
        768: {
          slidesOffsetBefore: 0,
        },
        1024: {
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
        },
      }"
      mousewheel
      @swiper="onSwiper"
    >
      <template v-if="recipes.length">
        <SwiperSlide
          v-for="recipe in recipes"
          :key="recipe.id"
          class="slide p-1"
        >
          <RecipeCard v-bind="recipe" :username="recipe.author.username" />
        </SwiperSlide>
      </template>
      <template v-if="loading">
        <SwiperSlide
          v-for="placeholder in 5"
          :key="placeholder"
          class="slide p-1"
        >
          <RecipeCardLoader />
        </SwiperSlide>
      </template>
    </Swiper>
    <CBtn
      class="-sm:hidden py-1 absolute top-20 right-0 z-10 text-alt-600 hover:text-alt-800 bg-white bg-opacity-85 hover:bg-opacity-100 rounded-l"
      :class="{ 'opacity-0': swiper?.isEnd }"
      @click="swiper?.slideNext()"
    >
      <CIcon id="chevron-right" :scale="1.5" />
    </CBtn>
  </div>
</template>

<script>
import { ref } from 'vue';

import SwiperCore, { Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.scss';

SwiperCore.use([Mousewheel]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  props: {
    recipes: {
      type: Array,
      default: () => [],
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },

  setup() {
    const swiper = ref(null);

    return {
      swiper,
      onSwiper: (s) => {
        swiper.value = s;
      },
    };
  },
};
</script>

<style scoped>
.slide {
  @apply w-72;
}
</style>
