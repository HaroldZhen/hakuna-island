<template>
  <FrontBanner></FrontBanner>
  <FrontBreadcrumb>
    <li class="breadcrumb-item active" aria-current="page">Product</li>
  </FrontBreadcrumb>
  <div class="container mt-3 mb-7">
    <div class="row">
      <div class="col-md-2">
        <div class="accordion border border-bottom border-top-0 border-start-0 border-end-0 mb-3" id="accordionExample">
          <div class="card border-0">
            <div
              class="card-header px-0 bg-white"
              id="headingOne"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
            >
              <div class="d-flex justify-content-between align-items-center pe-1">
                <h4 class="mb-0">
                  Lorem ipsum
                </h4>
                <i class="fas fa-chevron-down"></i>
              </div>
            </div>
            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="card-body py-0">
                <ul class="list-unstyled">
                  <li><a href="#" class="py-2 d-block text-muted">Lorem ipsum</a></li>
                  <li><a href="#" class="py-2 d-block text-muted">Lorem ipsum</a></li>
                  <li><a href="#" class="py-2 d-block text-muted">Lorem ipsum</a></li>
                  <li><a href="#" class="py-2 d-block text-muted">Lorem ipsum</a></li>
                  <li><a href="#" class="py-2 d-block text-muted">Lorem ipsum</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="card border-0">
            <div
              class="card-header px-0 py-4 bg-white border border-bottom-0 border-top
              border-start-0 border-end-0 rounded-0"
              id="headingTwo"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
            >
              <div class="d-flex justify-content-between align-items-center pe-1">
                <h4 class="mb-0">
                  Lorem ipsum
                </h4>
                <i class="fas fa-chevron-down"></i>
              </div>
            </div>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="card-body py-0">
                <ul class="list-unstyled">
                  <li><a href="#" class="py-2 d-block text-muted">Lorem ipsum</a></li>
                  <li><a href="#" class="py-2 d-block text-muted">Lorem ipsum</a></li>
                  <li><a href="#" class="py-2 d-block text-muted">Lorem ipsum</a></li>
                  <li><a href="#" class="py-2 d-block text-muted">Lorem ipsum</a></li>
                  <li><a href="#" class="py-2 d-block text-muted">Lorem ipsum</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="card border-0">
            <div
              class="card-header px-0 py-4 bg-white border border-bottom-0 border-top
              border-start-0 border-end-0 rounded-0"
              id="headingThree"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
            >
              <div class="d-flex justify-content-between align-items-center pe-1">
                <h4 class="mb-0">
                  Lorem ipsum
                </h4>
                <i class="fas fa-chevron-down"></i>
              </div>
            </div>
            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div class="card-body py-0">
                <ul class="list-unstyled">
                  <li><a href="#" class="py-2 d-block text-muted">Lorem ipsum</a></li>
                  <li><a href="#" class="py-2 d-block text-muted">Lorem ipsum</a></li>
                  <li><a href="#" class="py-2 d-block text-muted">Lorem ipsum</a></li>
                  <li><a href="#" class="py-2 d-block text-muted">Lorem ipsum</a></li>
                  <li><a href="#" class="py-2 d-block text-muted">Lorem ipsum</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-10">
        <div class="d-flex mb-2">
          <h2 class="h3 me-auto">全部商品</h2>
          <span class="p-2 border-bottom border-1">商品排序</span>
          <span class="p-2 ms-3 border-bottom border-1">每頁顯示</span>
        </div>
        <div class="row">
          <div v-for="product in products" :key="product.id" class="col-md-4">
            <div class="card border-0 mb-4 position-relative position-relative">
              <div style="width: 330px; height:  330px; overflow: hidden;">
                <img :src="product.imageUrl" class="card-img-top rounded-0" :alt="product.title" />
              </div>
              <a href="#" class="text-dark">
                <i class="far fa-heart position-absolute" style="right: 16px; top: 16px"></i>
              </a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3">
                  <router-link :to="{ name: 'front.product', params: { id: product.id } }">{{
                    product.title
                  }}</router-link>
                </h4>
                <p class="card-text mb-0">
                  {{ $filters.currency(product.price) }}
                  <span class="text-muted "
                    ><del>{{ $filters.currency(product.origin_price) }}</del></span
                  >
                </p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div>
        </div>
        <Pagination :pages="pages" :currentPage="currentPage" @toPage="getPage" v-if="pages.total_pages"></Pagination>
      </div>
    </div>
  </div>
</template>
<script>
import FrontBanner from '@/components/FrontBanner.vue';
import FrontBreadcrumb from '@/components/FrontBreadcrumb.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  data() {
    return {
      products: [],
      currentPage: 1,
      pages: {},
    };
  },
  components: {
    FrontBanner,
    FrontBreadcrumb,
    Pagination,
  },
  methods: {
    getProduct() {
      this.$hexAxios.get(this.$frontAPI.products.list(this.currentPage)).then((res) => {
        const { success, products, pagination } = res.data;
        if (success) {
          this.products = products;
          this.pages = { ...pagination };
        }
      });
    },
    getPage(page) {
      this.currentPage = page;
      this.getProduct();
    },
  },
  created() {
    this.getProduct();
  },
};
</script>
