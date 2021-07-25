<template>
  <FrontBanner pageName="開始美好的度假"></FrontBanner>
  <div class="breadcrumb mt-3">
    <div class="container">
      <FrontBreadcrumb>
        <li class="breadcrumb-item active" aria-current="page">服務項目</li>
      </FrontBreadcrumb>
    </div>
  </div>
  <div class="container mt-3 mb-7" style="min-height: 100vh;">
    <div class="row">
      <!-- <div class="col-md-2">
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
      </div> -->
      <div class="col-12 col-lg-10 mx-auto">
        <div class="d-flex mb-2">
          <h2 class="h3 me-auto">全部商品</h2>
          <!-- <span class="p-2 border-bottom border-1">商品排序</span>
          <span class="p-2 ms-3 border-bottom border-1">每頁顯示</span> -->
        </div>
        <div class="row">
          <div v-for="product in products" :key="product.id" class="col-12 col-md-6 col-lg-4">
            <div class="card mb-3">
              <div class="product__img">
                <img :src="product.imageUrl" class="card-img-top img-fluid" :alt="product.title" />
              </div>
              <div class="text-start px-2">
                <span class="badge bg-success">{{ product.category }}</span>
              </div>
              <div class="card-body">
                <h5 class="card-title">{{ product.title }}</h5>
                <p class="card-text product__description">{{ product.description }}</p>
              </div>
              <div class="card-footer border-0 bg-transparent">
                <router-link
                  class="btn btn-primary stretched-link"
                  :to="{ name: 'front.product', params: { id: product.id } }"
                  >查看更多</router-link
                >
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
        this.$bus.$emit('isLoading', { status: false });
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
    this.$bus.$emit('isLoading', { status: true });
    this.getProduct();
  },
};
</script>
