<template>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
      <h5 id="offcanvasRightLabel" class="d-flex align-items-center text-secondary">
        <span class=" material-icons"> shopping_cart </span><span>購物車({{ cartCount }})</span>
      </h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body pt-0">
      <section class="shopping position-relative" v-if="shoppingCart.cart.carts.length > 0">
        <div class="shopping__list pe-2 mb-2">
          <div
            v-for="item in shoppingCart.cart.carts"
            :key="item.id"
            class="shopping__item d-flex justify-content-between border-bottom border-1 pb-2 mb-2"
          >
            <div class="shopping__image me-2">
              <img class="img-fluid" :src="item.product.imageUrl" />
            </div>
            <div class="flex-grow-1 d-flex flex-column justify-content-around">
              <router-link class="h5 m-0" :to="{ name: 'front.product', params: { id: item.id } }">{{
                item.product.title
              }}</router-link>
              <p class="text-muted m-0">{{ item.qty }} x {{ $filters.currency(item.product.price) }}</p>
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
        <div class="row h5 text-secondary mb-3">
          <div class="ms-auto col-4">小計：</div>
          <div class="col-4">{{ $filters.currency(shoppingCart.cart.total) }}</div>
        </div>
        <router-link
          class="w-100 btn btn-primary py-2 text-white"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          :to="{ name: 'front.cart' }"
          >來去結帳</router-link
        >
      </section>
      <section v-else>
        <h3 class="fs-4 text-center text-secondary py-6 mb-3 border border-1">您尚未選擇任何服務喔</h3>
        <router-link data-bs-dismiss="offcanvas" class="btn btn-outline-primary w-100" :to="{ name: 'front.products' }"
          >來去逛逛</router-link
        >
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FrontSidebar',
  inject: ['shoppingCart'],
  methods: {
    delCart(pid) {
      this.$bus.$emit('cartRemoveItem', pid);
    },
  },
  computed: {
    cartCount() {
      return this.shoppingCart.cart.carts.length;
    },
  },
};
</script>
