<template>
  <div class="banner position-relative d-flex align-items-center justify-content-center">
    <div class="banner__wrap" :style="{ backgroundImage: `url(${bgImage})` }"></div>
    <h2 class="banner__title text-white">{{ pageName }}</h2>
  </div>
</template>
<script>
export default {
  props: {
    pageName: {
      type: String,
      default: '建立訂單',
    },
    bgImage: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1573906445622-3e98d4445256?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
    },
  },
};
</script>
