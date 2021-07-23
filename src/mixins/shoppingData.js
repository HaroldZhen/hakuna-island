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
};
