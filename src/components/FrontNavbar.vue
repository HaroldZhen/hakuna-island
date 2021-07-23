<template>
  <nav class="navbar navbar-expand-md fixed-top navbar__custom" :class="navbarStyle">
    <div class="container-fluid container-lg">
      <router-link class="navbar-brand me-auto" :to="{ name: 'front.index' }">Hakuna Island</router-link>
      <div class="navbar-nav d-flex flex-row order-md-last">
        <a class="nav-link nav__icon p-2 me-2" href="#"
          ><span class="material-icons">
            favorite_border
          </span>
          <!-- <span class="material-icons">favorite</span> -->
        </a>
        <a
          class="nav-link nav__icon cart__icon p-2"
          href="#"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
          ><span class=" material-icons">
            shopping_cart
          </span>
          <span class="cart__num"> {{ cartCount }} </span></a
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
          <a class="nav-item nav-link me-4" href="./detail.html">最新消息</a>
          <a class="nav-item nav-link me-4" href="#">關於我們</a>
        </div>
      </div>
    </div>
  </nav>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
      <h5 id="offcanvasRightLabel" class="d-flex align-items-center text-secondary">
        <span class=" material-icons"> shopping_cart </span><span>購物車({{ cartCount }})</span>
      </h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body pt-0">
      <section class="shopping position-relative">
        <div class="shopping__list pe-2 mb-3">
          <div
            v-for="item in shoppingCart.cart.carts"
            :key="item.id"
            class="shopping__item d-flex justify-content-between border-bottom border-1 pb-2 mb-2"
          >
            <a class="shopping__image me-2">
              <img class="img-fluid" :src="item.product.imageUrl" />
            </a>
            <div class="flex-grow-1 d-flex flex-column justify-content-around">
              <a href="#" :data-id="item.id" class="h5 m-0">{{ item.product.title }}</a>
              <p class="text-muted m-0">{{ item.qty }} x NT${{ item.product.price }}</p>
            </div>
            <div class="d-flex align-items-center">
              <button class="btn btn-outline-danger btn-sm" @click="delCart(item.id)">
                <span class="material-icons">
                  delete
                </span>
              </button>
            </div>
          </div>
        </div>
        <div class="row h5 text-secondary">
          <div class="ms-auto col-4">小計：</div>
          <div class="col-4">NT${{ shoppingCart.cart.total }}</div>
        </div>
        <router-link
          class="w-100 btn btn-primary py-2 text-white"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          :to="{ name: 'front.cart' }"
          >來去結帳</router-link
        >
      </section>
    </div>
  </div>
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
</template>
<script>
export default {
  inject: ['shoppingCart'],
  props: {
    isBgLight: {
      default: true,
    },
  },
  data() {
    return {
      isScrollTopActive: false,
      isNavbarLight: this.isBgLight,
      isBgWhite: this.isBgLight,
    };
  },
  computed: {
    navbarStyle() {
      return {
        navbar__light: this.isNavbarLight,
        'bg-white': this.isBgWhite,
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
      if (this.isBgLight) {
        const banner = document.querySelector('.banner');
        this.isBgWhite = windowY < banner.offsetHeight;
      } else {
        const banner = document.querySelector('.hero');
        this.isNavbarLight = windowY > banner.offsetHeight - 110;
      }
    });
  },
};
</script>
