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
import shoppingData from '@/mixins/shoppingData';

export default {
  mixins: [shoppingData],
  components: {
    FrontFooter,
    FrontNavbar,
  },
  beforeCreate() {
    this.$bus.$on('cartList', (ms = 0) => {
      setTimeout(() => {
        this.getCart();
      }, ms);
    });
    this.$bus.$on('cartRemoveItem', (pid) => {
      this.delCart(pid);
    });
  },
  created() {
    this.getCart();
  },
  methods: {
    getCart() {
      this.$bus.$emit('isLoading');
      this.$hexAxios.get(this.$frontAPI.cart.list()).then((res) => {
        this.$bus.$emit('isLoading', { status: false });
        const { success, data } = res.data;
        if (success) {
          this.shopping.cart = data;
        }
      });
    },
    delCart(pid) {
      this.$hexAxios
        .delete(this.$frontAPI.cart.delete(pid))
        .then((res) => {
          const { success, message } = res.data;
          if (success) {
            this.$swal({
              title: message,
              icon: 'success',
              showConfirmButton: false,
              timer: 1000,
            });
          }
        })
        .then(() => this.getCart());
    },
  },
};
</script>
<style lang="scss">
@import '@/assets/all';
</style>
