<template>
  <FrontNavbar></FrontNavbar>
  <main>
    <router-view></router-view>
  </main>
  <FrontFooter></FrontFooter>
</template>
<script>
import FrontFooter from '@/components/FrontFooter.vue';
import FrontNavbar from '@/components/FrontNavbar.vue';

export default {
  components: {
    FrontFooter,
    FrontNavbar,
  },
};
</script>
<style lang="scss">
@import "@/assets/all";
</style>
