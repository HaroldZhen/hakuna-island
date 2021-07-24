export default {
  data() {
    return {
      shopping: {
        cart: {
          carts: [],
        },
        order: {
          user: {},
        },
        product: {
          products: {},
        },
      },
    };
  },
  provide() {
    return {
      shoppingCart: this.shopping,
    };
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
      // this.$bus.$emit('isLoading');
      this.$hexAxios.get(this.$frontAPI.cart.list()).then((res) => {
        // this.$bus.$emit('isLoading', { status: false });
        const { success, data } = res.data;
        if (success) {
          this.shopping.cart = data;
        }
      });
    },
    delCart(pid) {
      this.$bus.$emit('isLoading');
      this.$hexAxios
        .delete(this.$frontAPI.cart.delete(pid))
        .then((res) => {
          this.$bus.$emit('isLoading', { status: false });
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
