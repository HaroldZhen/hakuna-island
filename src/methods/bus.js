/* bus.js */
import mitt from 'mitt';

const bus = {};
const emitter = mitt();
bus.$on = emitter.on;
bus.$off = emitter.off;
bus.$emit = emitter.emit;
export default bus;

// FrontLayout.vue
// this.$bus.$emit('cartList', ms);
// this.$bus.$emit('cartRemoveItem', pid);

// App.vue
// this.$bus.$emit('isLoading', {status, ms}});

// == ToastMessage.vue ==
// this.$bus.emit('push-message', {
//   style: 'success',
//   title: '更新成功',
// });
// === === === === === === === === ===
// this.$bus.emit('push-message', {
//   style: 'danger',
//   title: '更新失敗',
//   content: response.data.message.join(','),
// });
