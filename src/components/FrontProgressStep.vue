<template>
  <section class="process py-6">
    <div class="container">
      <div class="col-12 col-md-10 mx-auto position-relative">
        <ul class="d-flex justify-content-between align-items-center">
          <li
            v-for="item in steps"
            :key="Object.keys(item)"
            class="process__step"
            :class="{ active: currentProgress >= item.progress }"
          >
            <span
              ><span class="text h4">{{ item.icon }}</span></span
            >
            <p class="mb-0">{{ item.text }}</p>
          </li>
        </ul>
        <div class="progress process__wrap">
          <div
            class="progress-bar"
            role="progressbar"
            :style="`width: ${currentProgress}%;`"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ['stepName'],
  data() {
    return {
      steps: {
        cart: {
          text: '購物車',
          icon: '1',
          progress: 0,
        },
        checkout: {
          text: '填寫資料',
          icon: '2',
          progress: 35,
        },
        payment: {
          text: '確認付款',
          icon: '3',
          progress: 65,
        },
        order: {
          text: '完成訂單',
          icon: '4',
          progress: 100,
        },
      },
    };
  },
  computed: {
    currentProgress() {
      return this.steps[this.stepName].progress;
    },
  },
};
</script>
