<template>
  <FrontNavbar v-model:isNavbarDark="isNavbarDark"></FrontNavbar>
  <main>
    <router-view v-model:isNavbarDark="isNavbarDark"></router-view>
  </main>
  <footer class="bg-primary text-white py-6">
    <div class="container">
      <div class="d-flex align-items-center justify-content-between text-white mb-md-7 mb-4">
        <router-link class="text-white h4 font-pacifico" :to="{ name: 'front.index' }">Hakuna Island</router-link>
        <ul class="d-flex list-unstyled mb-0 h4">
          <li>
            <a href="#" class="text-white mx-3"><i class="fab fa-facebook"></i></a>
          </li>
          <li>
            <a href="#" class="text-white mx-3"><i class="fab fa-instagram"></i></a>
          </li>
          <li>
            <a href="#" class="text-white ms-3"><i class="fab fa-line"></i></a>
          </li>
        </ul>
      </div>
      <div
        class="d-flex flex-column flex-md-row justify-content-between align-items-md-end align-items-start text-white"
      >
        <div class="mb-md-0 mb-1">
          <p class="mb-0">777-6666<br />哈庫島馬躂市天堂路101號</p>
          <p class="mb-0">TEL：098-989-3333 FAX：098-989-2222<br /></p>
          <p class="mb-0">MAIL:service@hakuna-island.org<br /></p>
        </div>
        <p class="mb-0">Copyright© 2021 Hakuna Island. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>
<script>
import FrontNavbar from '@/components/front/Navbar.vue';
import shoppingData from '@/mixins/shoppingData';

export default {
  mixins: [shoppingData],
  components: {
    FrontNavbar,
  },
  data() {
    return {
      isNavbarDark: false,
    };
  },
};
</script>
<style lang="scss">
/* @import '@/assets/all'; */
</style>
