<template>
  <div class="toast-container toast__box pe-3">
    <Toast v-for="(msg, key) in messages" :key="key" :msg="msg" />
  </div>
</template>

<script>
import Toast from '@/components/Toast.vue';

export default {
  name: 'ToastMessage',
  components: { Toast },
  data() {
    return {
      messages: [],
    };
  },
  mounted() {
    this.$bus.$on('push-message', (message) => {
      const { style = 'success', title, content } = message;
      this.messages.push({ style, title, content });
    });
  },
  unmounted() {
    this.$bus.$off('push-message', () => {});
  },
};
</script>
