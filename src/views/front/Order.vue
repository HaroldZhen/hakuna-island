<template>
  <FrontBanner pageName="付款成功" bgImage="https://images.unsplash.com/photo-1617868634099-47f2f38d6be9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1905&q=80"></FrontBanner>
  <FrontProgressStep stepName="order"></FrontProgressStep>
  <div class="container mt-md-5 mt-3 mb-7">
    <div class="position-relative d-flex">
      <div class="container d-flex flex-column" style="min-height: 60vh;">
        <div class="row my-auto pb-7">
          <div class="col-md-4 d-flex flex-column">
            <div class="my-auto">
              <p class="h4">感謝您的訂購，歡迎您再次光臨!</p>
              <p><span class="order__header">訂單完成時間:</span>{{ $filters.date(order.paid_date) }}</p>
              <p><span class="order__header">您的訂單編號:</span> {{ order.id }}</p>
              <p><span class="order__header">您的訂單金額:</span> {{ $filters.currency(order.total) }}</p>
              <div>
                您的訂單將會在3個工作天內處理完成。<br />
                如遇國定連假、寒暑假旺季則在5個工作天內處理完成。<br />
                如有其它變更需求，請致電客服0800-123-123將有專員為您服務。
              </div>

              <router-link class="btn btn-outline-primary mt-4 px-5" :to="{ name: 'front.index' }">來去逛逛</router-link>
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-md-50 w-100 position-absolute opacity-1"
        style="z-index: -1; min-height: 60vh; right: 0; background-image: url(https://images.unsplash.com/photo-1501698335706-90b736210a61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80);
    background-position: center center;"
      ></div>
    </div>
  </div>
  <FrontProductAdLike title="熱賣商品"></FrontProductAdLike>
</template>
<script>
import FrontBanner from '@/components/front/Banner.vue';
import FrontProgressStep from '@/components/front/ProgressStep.vue';
import FrontProductAdLike from '@/components/front/ProductAdLike.vue';

export default {
  inject: ['shoppingCart'],
  components: {
    FrontBanner,
    FrontProgressStep,
    FrontProductAdLike,
  },
  data() {
    return {
      order: {
        user: {},
      },
    };
  },
  methods: {
    getOrder(orderId) {
      this.$bus.$emit('isLoading');
      this.$hexAxios.get(this.$frontAPI.order.item(orderId)).then((res) => {
        this.$bus.$emit('isLoading', { status: false });
        const { success, order } = res.data;
        if (success) {
          this.order = order;
        }
      });
    },
  },
  created() {
    const orderId = this.$route.params.id;
    this.getOrder(orderId);
  },
};
</script>
