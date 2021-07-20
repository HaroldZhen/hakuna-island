<template>
  <FrontBanner></FrontBanner>
  <FrontProgressStep stepName="order"></FrontProgressStep>
  <div class="container mt-md-5 mt-3 mb-7">
    <div class="position-relative d-flex">
      <div class="container d-flex flex-column" style="min-height: 60vh;">
        <div class="row my-auto pb-7">
          <div class="col-md-4 d-flex flex-column">
            <div class="my-auto">
              <p class="h4">感謝您的訂購，歡迎您再次光臨!</p>
              <p>訂單完成時間:2021-07-19 20:39</p>
              <p>您的訂單編號:-Meyi1wQtuAc5tahi1iF</p>
              <p>您的訂單金額:$57,000</p>
              <div>
                您的訂單將會在3個工作天內處理完成。<br />
                如遇國定連假、寒暑假旺季則在5個工作天內處理完成。<br />
                如有其它變更需求，請致電客服0800-000-000將有專員為您服務。
              </div>

              <a href="./index.html" class="btn btn-outline-primary mt-4 px-5">在去逛逛</a>
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-md-50 w-100 position-absolute opacity-1"
        style="z-index: -1; min-height: 60vh; right: 0; background-image: url(https://images.unsplash.com/photo-1480399129128-2066acb5009e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80);
    background-position: center center;"
      ></div>
    </div>
  </div>
  <FrontProductAdHot></FrontProductAdHot>
</template>
<script>
import FrontBanner from '@/components/FrontBanner.vue';
import FrontProgressStep from '@/components/FrontProgressStep.vue';
import FrontProductAdHot from '@/components/FrontProductAdHot.vue';

export default {
  components: {
    FrontBanner,
    FrontProgressStep,
    FrontProductAdHot,
  },
};
</script>
