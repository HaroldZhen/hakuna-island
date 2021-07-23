<template>
  <FrontBanner></FrontBanner>
  <FrontBreadcrumb>
    <li class="breadcrumb-item">
      <router-link :to="{ name: 'front.products' }">服務項目</router-link>
    </li>
    <li class="breadcrumb-item text-secondary">{{ product.category }}</li>
    <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
  </FrontBreadcrumb>
  <div class="container mt-md-5 mt-3 mb-7">
    <div class="row align-items-center">
      <div class="col-md-7">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img :src="product.imageUrl" class="d-block w-100" :alt="product.title" />
            </div>
          </div>
          <!-- <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a> -->
        </div>
      </div>
      <div class="col-md-5">
        <h2 class="fw-bold h1 mb-1">{{ product.title }}</h2>
        <p class="mb-0 text-muted text-end">
          <del>{{ $filters.currency(product.origin_price) }}</del>
        </p>
        <p class="h4 fw-bold text-end">{{ $filters.currency(product.price) }}</p>
        <div class="row align-items-center">
          <div class="col-6">
            <div class="input-group my-3 bg-light rounded">
              <div class="input-group-prepend">
                <button
                  class="btn btn-outline-primary border-0 py-2"
                  @click="tempProduct.qty--"
                  type="button"
                  id="button-addon1"
                >
                  <i class="fas fa-minus"></i>
                </button>
              </div>
              <input
                type="text"
                class="form-control border-0 text-center my-auto text-secondary shadow-none bg-light"
                placeholder=""
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
                v-model="tempProduct.qty"
              />
              <div class="input-group-append">
                <button
                  class="btn btn-outline-primary border-0 py-2"
                  @click="tempProduct.qty++"
                  type="button"
                  id="button-addon2"
                >
                  <i class="fas fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="col-6">
            <a
              role="button"
              @click.prevent="addItemToCart(product.id, tempProduct.qty)"
              href="#"
              class="text-nowrap btn btn-primary text-white w-100 py-2"
              >放入購物車</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="row my-5">
      <div class="col-md-4">
        <p>
          {{ product.description }}
        </p>
      </div>
      <div class="col-md-3">
        <p class="text-muted">
          {{ product.content }}
        </p>
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
