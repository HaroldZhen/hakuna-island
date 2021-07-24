<template>
  <FrontBanner :pageName="product.category"></FrontBanner>
  <div class="container mt-md-5 mt-3 mb-7">
    <div class="ProductsDetails">
      <div class="container ProductsDetails-box mx-auto" v-if="product.title">
        <div class="row ProductsDetails-main mb-5">
          <div class="col-xl-7 col-lg-8 ProductsDetails-img mb-lg-0 mb-4">
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
            <div class="ProductsDetails-content">
              <h1 class="mb-0 font-weight-bold">{{ product.title }}</h1>
              <hr />
              <div class="d-flex justify-content-between align-items-center mb-4">
                <span class="text-secondary text-decoration-line-through"
                  >原價: {{ $filters.currency(product.origin_price) }}</span
                >
                <span class="offer">優惠價: {{ $filters.currency(product.price) }}</span>
              </div>
              <select name="count" class="form-control mb-3" v-model="tempProduct.qty">
                <option :value="num" v-for="num in 10" :key="num"> 總共 {{ num }} {{ product.unit }} </option>
              </select>
              <div class="d-flex justify-content-end total-price">
                <span class=""
                  >小計 <strong>{{ $filters.currency(tempProduct.qty * product.price) }}</strong></span
                >
              </div>
              <div class="text-right mt-3">
                <button type="button" class="btn btn-primary w-100" @click="addItemToCart(product.id, tempProduct.qty)">
                  加入計畫
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="ProductsDetails-description pt-3 mb-6">
          <div class="d-flex align-items-center mb-3">
            <h3 class="ml-2 mb-0">特色介紹</h3>
          </div>
          <p class="mb-5 text-secondary">{{ product.description }}</p>
        </div>
      </div>
    </div>
  </div>
  <FrontProductAdLike></FrontProductAdLike>
</template>
<script>
import FrontBanner from '@/components/FrontBanner.vue';
import FrontBreadcrumb from '@/components/FrontBreadcrumb.vue';
import FrontProductAdLike from '@/components/FrontProductAdLike.vue';
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
  created() {
    const pid = this.$route.params.id;
    this.addItemToCart = _.debounce(() => {
      this.addToCart(pid, this.tempProduct.qty);
    }, 1000);
    this.getProduct(pid);
  },
};
</script>
