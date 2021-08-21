<template>
  <FrontBanner></FrontBanner>
  <FrontProgressStep stepName="payment"></FrontProgressStep>
  <div class="container mb-3">
    <div class="row">
      <div class="col-12 col-md-6">
        <section class="prepayment mb-3">
          <div class="border border-1">
            <div class="bg-light border-bottom border-1">
              <h3 class="mb-0 p-2 h5">顧客資料</h3>
            </div>
            <div class="p-3">
              <div class="pb-3"><span class="order__header">聯絡人姓名:</span>{{ order.user.name }}</div>
              <div class="pb-3"><span class="order__header">電話:</span> {{ order.user.tel }}</div>
              <div class="pb-3"><span class="order__header">電子信箱:</span> {{ order.user.email }}</div>
              <div class="pb-3"><span class="order__header">地址:</span> {{ order.user.address }}</div>
              <div class="mb-6"><span class="order__header">訂單備註:</span> {{ order.message }}</div>
            </div>
          </div>
        </section>
      </div>
      <div class="col-12 col-md-6 order-first order-md-0">
        <section class="mb-3">
          <div class="border border-1">
            <div class="bg-light border-bottom border-1">
              <h3 class="mb-0 p-2 h5">訂單資料</h3>
            </div>
            <div class="p-3">
              <div class="pb-3">
                <span class="order__header">訂單成立時間:</span>
                {{ $filters.date(order.create_at) }}
              </div>
              <div class="pb-3"><span class="order__header">訂單編號:</span>{{ order.id }}</div>
              <div class="pb-3">
                <span class="order__header">總金額:</span
                ><span class="text-danger">{{ $filters.currency(order.total) }}</span>
              </div>
              <div class="pb-3"><span class="order__header">付款方式:</span>信用卡</div>
            </div>
          </div>
        </section>
        <section class="prepayment">
          <VForm ref="form" v-slot="{ errors }" @submit="onSubmit">
            <div class="border border-1">
              <div class="bg-light border-bottom border-1">
                <h3 class="mb-0 p-2 h5">付款資訊</h3>
              </div>
              <div class="p-3">
                <div class="row">
                  <div class="col-12 col-md-12 mb-3">
                    <label for="credit-number" class="form-label">信用卡卡號:</label>
                    <VField
                      id="card-number"
                      name="信用卡卡號"
                      type="text"
                      class="form-control credit__input"
                      :class="{
                        'is-invalid': errors['信用卡卡號'],
                        'is-valid': !errors['信用卡卡號'] && credit.number,
                      }"
                      rules="required|length:16"
                      v-model="credit.number"
                      maxlength="16"
                      placeholder="請輸入16碼"
                    ></VField>
                  </div>
                  <div class="col-6 mb-3">
                    <label for="credit-expiry-date" class="form-label">有效期限: </label>
                    <VField
                      id="credit-expiry-date"
                      name="有效期限"
                      type="text"
                      class="form-control credit__input"
                      :class="{ 'is-invalid': errors['有效期限'], 'is-valid': !errors['有效期限'] && credit.date }"
                      rules="required"
                      v-model="credit.date"
                      maxlength="7"
                      placeholder="05/2021"
                    ></VField>
                  </div>
                  <div class="col-6 ms-auto mb-3">
                    <label for="credit-cvc" class="form-label">背後三碼:</label>
                    <VField
                      id="credit-cvc"
                      name="背後三碼"
                      type="text"
                      class="form-control credit__input"
                      :class="{ 'is-invalid': errors['背後三碼'], 'is-valid': !errors['背後三碼'] && credit.cvc }"
                      rules="required|length:3"
                      v-model="credit.cvc"
                      maxlength="3"
                      placeholder="cvc"
                    ></VField>
                  </div>
                  <div class="col-12 ms-auto col-md-6">
                    <button class="btn btn-primary text-white w-100">確認付款</button>
                  </div>
                </div>
              </div>
            </div>
          </VForm>
        </section>
      </div>
    </div>
  </div>
  <section class="cart__wrap mb-8">
    <div class="container">
      <section class="cart">
        <div class="cart__list border border-1">
          <div class="d-flex p-2 d-none d-md-flex ">
            <div class="col-md-4">商品資料</div>
            <div class="col-md-2">單件價格</div>
            <div class="col-md-3">數量</div>
            <div class="col-md-3 text-end">小計</div>
          </div>
          <div class="cart__item d-flex p-2 border-top border-1" v-for="(item, index) in order.products" :key="index">
            <div class="cart__product col-8 col-md-4">
              <div class="d-flex">
                <div class="col-auto">
                  <img class="cart__img img-thumbnail" :src="item.product.imageUrl" />
                </div>
                <div class="col px-3">{{ item.product.title }}</div>
              </div>
            </div>
            <div class="cart__price col-4 col-md-2">
              <p class="mb-0">{{ $filters.currency(item.product.price) }}</p>
            </div>
            <div class="cart__qty col-4 col-md-3">
              <span class="d-block d-md-none">數量：</span>
              <span>{{ item.qty }}</span>
            </div>
            <div class="cart__subtotal col-4 col-md-3 text-end">
              <span>{{ $filters.currency(item.total) }}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>
<script>
import FrontBanner from '@/components/front/Banner.vue';
import FrontProgressStep from '@/components/front/ProgressStep.vue';

export default {
  components: {
    FrontBanner,
    FrontProgressStep,
  },
  data() {
    return {
      order: {
        user: {},
      },
      credit: {
        number: '',
        date: '',
        cvd: '',
      },
    };
  },
  methods: {
    onSubmit() {
      const orderId = this.order.id;
      this.$bus.$emit('isLoading');
      this.$hexAxios.post(this.$frontAPI.pay.use(orderId)).then((res) => {
        this.$bus.$emit('isLoading', { status: false, ms: 2000 });
        const { success } = res.data;
        if (success) {
          this.$refs.form.resetForm();
          this.$router.push({ name: 'front.order', params: { id: orderId } });
        }
      });
    },
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
