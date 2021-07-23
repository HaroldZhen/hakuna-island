<template>
  <loading :active="isLoading"></loading>
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
