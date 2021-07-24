<template>
  <div>
    admin layout home
  </div>
  <DeleteModal></DeleteModal>
  <ProductModal></ProductModal>
</template>
<script>
import DeleteModal from '@/components/DeleteModal.vue';
import ProductModal from '@/components/ProductModal.vue';

export default {
  components: {
    DeleteModal,
    ProductModal,
  },
};
</script>
<style lang="scss"></style>
