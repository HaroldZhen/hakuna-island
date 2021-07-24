<template>
  <div class="container mt-md-5 mt-3 mb-7">
    <div class="mt-3">
      <div class="my-5">
        <h3 class=" text-secondary">{{ title }}</h3>
        <div class="container mt-4 mb-5">
          <div class="row">
            <div class="col-6 col-lg-3" v-for="product in products" :key="product.id">
              <div class="card shadow-sm mb-4 position-relative">
                <div>
                  <img :src="product.imageUrl" class="card-img-top rounded-0" :alt="product.title" />
                </div>
                <a href="#" class="text-dark"> </a>
                <div class="card-body">
                  <h5 class="mb-0">
                    <a href="#">{{ product.title }}</a>
                  </h5>
                  <p class="card-text mb-0">
                    {{ $filters.currency(product.price)
                    }}<span class="text-muted "
                      ><del>{{ $filters.currency(product.origin_price) }}</del></span
                    >
                  </p>
                  <p class="text-muted mt-3"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    num: {
      type: Number,
      default: 4,
    },
    title: {
      type: String,
      default: '您可能也會喜歡',
    },
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    getProduct() {
      this.$hexAxios.get(this.$frontAPI.products.all()).then((res) => {
        const { success, products } = res.data;
        if (success) {
          this.products = products.slice(0, this.num);
        }
      });
    },
  },
  created() {
    this.getProduct();
  },
};
</script>
