<template>
  <loading
    :active="isLoading"
    :background-color="loadingConfig.bgColor"
    :color="loadingConfig.color"
    :opacity="loadingConfig.opacity"
    :loader="loadingConfig.loader"
    :z-index="loadingConfig.zIndex"
  ></loading>
  <ToastMessage />
  <router-view />
</template>
<script>
import ToastMessage from '@/components/ToastMessage.vue';

export default {
  components: {
    ToastMessage,
  },
  data() {
    return {
      isLoading: false,
      loadingConfig: {
        bgColor: '#000',
        color: '#fff',
        opacity: 0.5,
        loader: 'dots',
        zIndex: 1200,
      },
    };
  },
  beforeCreate() {
    this.$bus.$on('isLoading', ({ status = true, ms = 0 } = {}) => {
      console.log(`isLoading:${status}`);
      setTimeout(() => {
        this.isLoading = status;
      }, ms);
    });
  },
};
</script>
<style lang="scss">
  @import '@/assets/all';
</style>
