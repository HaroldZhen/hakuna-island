<template>
  <section class="my-3">
    <div class="container-fluid">
      <swiper
        class="row"
        :slidesPerView="6"
        :space-between="0"
        :loop="true"
        :allowTouchMove="false"
        :autoplay="swiperOption.autoplay"
        :freeMode="true"
        :speed="5500"
        :freeModeMomentum="false"
      >
        <swiper-slide v-for="(item, index) in galleryData" class="ms-1" :key="index">
          <div
            class="col d-flex justify-content-center align-items-center"
            style="height: 200px; background-position: center; background-size: cover;"
            :style="{ backgroundImage: 'url(' + item.img + ')' }"
          >
            <div class="h3 w-100 h-100 text-white mb-0 text-center" :class="item.class" >{{ item.text }}</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.scss';
// import Swiper core and required modules
import SwiperCore, { Autoplay } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Autoplay]);

export default {
  props: {
    isReverseDirection: {
      default: false,
    },
    galleryData: {
      default: {},
    },
  },
  data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 1,
          disableOnInteraction: true,
          reverseDirection: this.isReverseDirection,
        },
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>
<style lang="scss">
.swiper-slide {
  margin-left: 5px !important;
  margin-right: 5px !important;
}
.swiper-wrapper {
  transition-timing-function: linear !important;
}
</style>
