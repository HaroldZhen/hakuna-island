<template>
  <nav class="navbar navbar-expand-md fixed-top" :class="navbarStyle">
    <div class="container-fluid container-lg">
      <router-link class="navbar-brand me-auto font-pacifico" :to="{ name: 'front.index' }">Hakuna Island</router-link>
      <div class="navbar-nav d-flex flex-row order-md-last">
        <a class="nav__icon me-2" href="#"
          ><span class="material-icons">
            favorite_border
          </span>
        </a>
        <a
          class="nav__icon position-relative p-2"
          href="#"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
          ><span class=" material-icons">
            shopping_cart
          </span>
          <span class="nav__carts" v-if="cartCount !== 0"> {{ cartCount }} </span></a
        >
      </div>
      <button
        class="navbar-toggler bg-primary ms-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="material-icons text-white">
          menu
        </span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-item nav-link me-4" :to="{ name: 'front.index' }"
            >首頁<span class="sr-only">(current)</span></router-link
          >
          <router-link :to="{ name: 'front.products' }" class="nav-item nav-link me-4">服務項目</router-link>
          <router-link class="nav-item nav-link me-4" :to="{ name: 'front.about' }">關於我們</router-link>
        </div>
      </div>
    </div>
  </nav>
  <FrontSidebar />
  <div class="scroll-top" :class="scrollStyle">
    <a
      href="#"
      @click.prevent="scrollToTop"
      class="d-flex flex-column justify-content-center
      align-items-center position-relative"
    >
      <span class="material-icons scroll-top__icon"> keyboard_arrow_up </span>
      <span class="scroll-top__text fw-bolder">Top</span>
    </a>
  </div>
  <div id="navbar"></div>
</template>
<script>
import FrontSidebar from '@/components/front/Sidebar.vue';

export default {
  name: 'FrontNavbar',
  inject: ['shoppingCart'],
  props: ['isNavbarDark'],
  components: {
    FrontSidebar,
  },
  data() {
    return {
      isNavbarLight: false,
      isScrollTopActive: false,
    };
  },
  computed: {
    navbarStyle() {
      return {
        'navbar-dark': this.isNavbarDark,
        'bg-white': !this.isNavbarDark && !this.isNavbarLight,
        navbar__light: this.isNavbarLight,
      };
    },
    scrollStyle() {
      return {
        active: this.isScrollTopActive,
      };
    },
    cartCount() {
      return this.shoppingCart.cart.carts.length;
    },
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    delCart(pid) {
      this.$bus.$emit('cartRemoveItem', pid);
    },
  },
  mounted() {
    window.addEventListener('scroll', () => {
      const windowY = window.scrollY;
      this.isScrollTopActive = windowY > 300;
      const banner = document.querySelector('#banner');
      this.isNavbarLight = windowY > banner.offsetHeight - 110;
    });
  },
  unmounted() {
    window.removeEventListener('scroll');
  },
};
</script>
