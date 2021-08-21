<template>
  <div>
    admin layout home
  </div>
  <DeleteModal></DeleteModal>
  <ProductModal></ProductModal>
</template>
<script>
import DeleteModal from '@/components/admin/DeleteModal.vue';
import ProductModal from '@/components/admin/ProductModal.vue';

export default {
  components: {
    DeleteModal,
    ProductModal,
  },
};
</script>
<style lang="scss"></style>
