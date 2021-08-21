<template>
  <FrontBanner :pageName="product.category"></FrontBanner>
  <div class="container mt-md-5 mt-3 mb-7">
    <div class="productsDetails">
      <div class="container productsDetails-box mx-auto" v-if="product.title">
        <div class="row productsDetails-main mb-5">
          <div class="col-xl-7 col-lg-8 productsDetails-img mb-lg-0 mb-4">
            <img class="img-fluid" :src="product.imageUrl" alt="" />
          </div>
          <div class="col-xl-5 col-lg-4">
            <FrontBreadcrumb>
              <li class="breadcrumb-item">
                <router-link :to="{ name: 'front.products' }">服務項目</router-link>
              </li>
              <li class="breadcrumb-item text-secondary">{{ product.category }}</li>
              <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
            </FrontBreadcrumb>
            <div class="productsDetails-content">
              <h3 class="mb-3 font-weight-bold">{{ product.title }}</h3>
              <p class="mb-3 text-secondary">{{ product.description }}</p>
              <div class="d-flex justify-content-between align-items-center mb-4">
                <span class="text-secondary text-decoration-line-through"
                  >原價: {{ $filters.currency(product.origin_price) }}</span
                >
                <p class="">優惠價: {{ $filters.currency(product.price) }}</p>
              </div>
              <select name="count" class="form-control mb-3" v-model="tempProduct.qty">
                <option :value="num" v-for="num in 10" :key="num"> 總共 {{ num }} {{ product.unit }} </option>
              </select>
              <div class="d-flex justify-content-end total-price">
                <span class="text-success fs-5d5"
                  >小計 <strong>{{ $filters.currency(tempProduct.qty * product.price) }}</strong></span
                >
              </div>
              <div class="text-right mt-3">
                <button type="button" class="btn btn-primary w-100" @click="addItemToCart(product.id, tempProduct.qty)">
                  加入行程
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FrontProductAdLike></FrontProductAdLike>
</template>
<script>
import FrontBanner from '@/components/front/Banner.vue';
import FrontBreadcrumb from '@/components/front/Breadcrumb.vue';
import FrontProductAdLike from '@/components/front/ProductAdLike.vue';
import _ from 'lodash';

export default {
  components: {
    FrontBanner,
    FrontBreadcrumb,
    FrontProductAdLike,
  },
  data() {
    return {
      product: {},
      tempProduct: {
        qty: 1,
      },
    };
  },
  methods: {
    getProduct(pid) {
      this.product = {};
      this.$hexAxios.get(this.$frontAPI.product.item(pid)).then((res) => {
        const { success, product } = res.data;
        if (success) {
          this.product = {
            ...product,
            qty: 1,
          };
        }
      });
    },
    addItemToCart() {},
    addToCart(pid, qty) {
      this.$bus.$emit('isLoading', { status: true });
      const data = {
        data: {
          product_id: pid,
          qty,
        },
      };
      this.$hexAxios
        .post(this.$frontAPI.cart.add(), data)
        .then((res) => {
          const { success, message } = res.data;
          const { product } = res.data.data;
          this.$bus.$emit('isLoading', { status: false, ms: 2000 });
          if (success) {
            this.$bus.$emit('push-message', {
              style: 'success',
              title: message,
              content: `${product.title} x ${qty}`,
            });
          }
        })
        .then(this.$bus.$emit('cartList', 1500));
    },
  },
  watch: {
    $route() {
      if (this.$route.params.id) {
        const pid = this.$route.params.id;
        this.getProduct(pid);
      }
    },
  },
  created() {
    const pid = this.$route.params.id;
    this.addItemToCart = _.debounce(() => {
      this.addToCart(pid, this.tempProduct.qty);
    }, 1000);
    this.getProduct(pid);
  },
};
</script>
