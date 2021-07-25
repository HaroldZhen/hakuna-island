<template>
  <section class="gallery">
    <div class="container-fluid">
      <template v-for="(gallery, index) in galleries" :key="index">
        <swiper
          class="mb-3"
          :slidesPerView="6"
          :space-between="16"
          :loop="true"
          :allowTouchMove="false"
          :autoplay="gallery.option.autoplay"
          :freeMode="true"
          :speed="5500"
          :freeModeMomentum="false"
          :breakpoints="{
            480: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 6,
              spaceBetween: 16,
            },
          }"
        >
          <swiper-slide v-for="(item, index) in gallery.data" class="mx-2" :key="index">
            <div
              class="bg-center bg-cover d-flex gallery__slide"
              :style="{ backgroundImage: 'url(' + item.img + ')' }"
            >
            </div>
          </swiper-slide>
        </swiper>
      </template>
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
      galleries: [
        {
          option: {
            autoplay: {
              delay: 1,
              disableOnInteraction: true,
              reverseDirection: false,
            },
          },
          data: [
            {
              img:
                'https://images.unsplash.com/photo-1571988654190-ef2bfb6fb147?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            },
            {
              img:
                'https://images.unsplash.com/photo-1570023889725-4463e44ef6f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
            },
            {
              img:
                'https://images.unsplash.com/photo-1527142879-95b61a0b8226?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
            },
            {
              img:
                'https://images.unsplash.com/photo-1551105379-6c50b7647c03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
            },
            {
              img:
                'https://images.unsplash.com/photo-1517154868524-c6b5fbd62a1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
            },
            {
              img:
                'https://images.unsplash.com/photo-1596436877314-0091e94a7ce7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
            },
            {
              img:
                'https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            },
            {
              img:
                'https://images.unsplash.com/photo-1596178063511-997e2a0d6f13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
            },
            {
              img:
                'https://images.unsplash.com/photo-1596436876625-091f67351709?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
            },
            {
              img:
                'https://images.unsplash.com/photo-1596948209610-c566ee564ea2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            },
            {
              img:
                'https://images.unsplash.com/photo-1588677240076-c921a6492dc0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            },
            {
              img:
                'https://images.unsplash.com/photo-1583333803672-0403650c86b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
            },
          ],
        },
        {
          option: {
            autoplay: {
              delay: 1,
              disableOnInteraction: true,
              reverseDirection: true,
            },
          },
          data: [
            {
              img:
                'https://images.unsplash.com/photo-1576551453314-a6235dd80f26?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHJlc29ydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            },
            {
              img:
                'https://images.unsplash.com/photo-1580247331145-82d32dbbdcac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
            },
            {
              img:
                'https://images.unsplash.com/photo-1602693680203-a01c07f9dfae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
            },
            {
              img:
                'https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
            },
            {
              img:
                'https://images.unsplash.com/photo-1602002418655-57aef867418e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            },
            {
              img:
                'https://images.unsplash.com/photo-1602002418206-1f0c0ebdaef4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
            },
            {
              img:
                'https://images.unsplash.com/photo-1596178063511-997e2a0d6f13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
            },
            {
              img:
                'https://images.unsplash.com/photo-1596436876625-091f67351709?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
            },
            {
              img:
                'https://images.unsplash.com/photo-1605538032404-d7f061325b90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
            },
            {
              img:
                'https://images.unsplash.com/photo-1605537964076-3cb0ea2ff329?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
            },
            {
              img:
                'https://images.unsplash.com/photo-1601701119533-fde20cecbf4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            },
          ],
        },
        {
          option: {
            autoplay: {
              delay: 1,
              disableOnInteraction: true,
              reverseDirection: false,
            },
          },
          data: [
            {
              img:
                'https://images.unsplash.com/photo-1472586662442-3eec04b9dbda?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            },
            {
              img:
                'https://images.unsplash.com/photo-1496046596374-a16aa8b8ae63?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            },
            {
              img:
                'https://images.unsplash.com/photo-1515726922054-92ae5590aeb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
            },
            {
              img:
                'https://images.unsplash.com/photo-1440756427076-7480f7eab5bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
            },
            {
              img:
                'https://images.unsplash.com/photo-1463694372132-6c267f6ba561?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
            },
            {
              img:
                'https://images.unsplash.com/photo-1583364512105-951b6f7080ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            },
            {
              img:
                'https://images.unsplash.com/photo-1519327567471-ae47752b8089?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
            },
            {
              img:
                'https://images.unsplash.com/photo-1490048865953-06382bff8a3b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            },
            {
              img:
                'https://images.unsplash.com/photo-1527242872458-38892296c21c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            },
            {
              img:
                'https://images.unsplash.com/photo-1583008585590-c4ed0010bed6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            },
            {
              img:
                'https://images.unsplash.com/photo-1555149385-c50f336e28b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
            },
          ],
        },
      ],
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
