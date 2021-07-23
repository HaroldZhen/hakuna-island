<template>
  <FrontBanner
    pageName="建立訂單"
    bgImage="https://images.unsplash.com/photo-1585257546151-78041a410c25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1905&q=80"
  ></FrontBanner>
  <FrontProgressStep stepName="checkout"></FrontProgressStep>
  <section class="cart__wrap mb-3">
    <div class="container">
      <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              <div class="ms-auto">
                <p class="text-center h4">合計: {{ $filters.currency(cart.final_total) }}</p>
                <p class="text-center h4">購物車 ({{ cart.carts.length || 0 }})</p>
              </div>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div class="accordion-body p-0">
              <section class="cart">
                <div class="cart__list">
                  <div class="d-flex p-3 d-none d-md-flex ">
                    <div class="col-md-4">商品資料</div>
                    <div class="col-md-2">單件價格</div>
                    <div class="col-md-3">數量</div>
                    <div class="col-md-3 text-end">小計</div>
                  </div>
                  <div class="cart__item d-flex p-3 border-top border-1" v-for="item in cart.carts" :key="item.id">
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
                      <p class="text-decoration-line-through text-muted">
                        {{ $filters.currency(item.product.origin_price) }}
                      </p>
                    </div>
                    <div class="cart__qty col-4 col-md-3">
                      <span class="d-block d-md-none">數量：</span>
                      <span>{{ item.qty }}</span>
                    </div>
                    <div class="cart__subtotal col-4 col-md-3 text-end">
                      <span>{{ $filters.currency(item.product.price * item.qty) }}</span>
                    </div>
                  </div>
                  <div class="cart__total d-flex p-2 border-top border-1">
                    <div class="col-12 col-md-3 ms-auto">
                      <div class="d-flex flex-column justify-content-around">
                        <div class="d-flex py-1">
                          <span>小計:</span>
                          <span class="ms-auto">{{ $filters.currency(cart.total) }}</span>
                        </div>
                        <div class="d-flex py-1">
                          <span>運費:</span>
                          <span class="ms-auto">{{ $filters.currency(deliveryFeed) }}</span>
                        </div>
                        <div class="d-flex py-1">
                          <span>折扣:</span>
                          <span class="ms-auto text-success">{{
                            $filters.currency(cart.total - cart.final_total)
                          }}</span>
                        </div>
                        <div class="d-flex py-1 fw-bold">
                          <span>合計(共{{ calcTotalQty }}項):</span>
                          <span class="ms-auto">{{ $filters.currency(cart.final_total) }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <VForm ref="form" v-slot="{ errors }" @submit="onSubmit">
    <div class="container mb-4">
      <div class="row">
        <div class="col-12 col-md-6">
          <section class="prepayment mb-3">
            <div class="border border-1">
              <div class="bg-light border-bottom border-1">
                <h3 class="mb-0 p-2 h5">顧客資料</h3>
              </div>
              <div class="p-3">
                <div class="row g-3">
                  <div class="col-12">
                    <label for="name" class="form-label">姓名<span class="ms-1 text-danger fs-6">*</span></label>
                    <VField
                      id="name"
                      name="姓名"
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid': errors['姓名'], 'is-valid': !errors['姓名'] && user.name }"
                      rules="required"
                      v-model="user.name"
                    ></VField>

                    <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
                  </div>
                  <div class="col-12">
                    <label for="userTel" class="form-label">電話<span class="ms-1 text-danger fs-6">*</span></label>
                    <VField
                      id="tel"
                      name="電話"
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid': errors['電話'], 'is-valid': !errors['電話'] && user.tel }"
                      :rules="isPhone"
                      v-model="user.tel"
                    ></VField>
                    <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
                  </div>
                  <div class="col-12">
                    <label for="userEmail" class="form-label"
                      >電子信箱<span class="ms-1 text-danger fs-6">*</span></label
                    >
                    <VField
                      id="email"
                      name="電子信箱"
                      type="email"
                      class="form-control"
                      :class="{ 'is-invalid': errors['電子信箱'], 'is-valid': !errors['電子信箱'] && user.email }"
                      rules="email|required"
                      v-model="user.email"
                    ></VField>
                    <ErrorMessage name="電子信箱" class="invalid-feedback"></ErrorMessage>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="prepayment mb-3">
            <div class="border border-1">
              <div class="bg-light border-bottom border-1">
                <h3 class="mb-0 p-2 h5">訂單備註</h3>
              </div>
              <div class="p-3">
                <div class="row g-3">
                  <div class="col-12">
                    <div class="form-floating">
                      <VField id="message" name="message" v-model="message" v-slot="{ field }">
                        <textarea
                          v-bind="field"
                          class="form-control"
                          placeholder="Leave a comment here"
                          id="messageBox"
                          style="height: 100px"
                          v-model="message"
                        ></textarea>
                      </VField>
                      <label for="messageBox" class="text-muted">有什麼想告訴我們的嗎？</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="col-12 col-md-6">
          <section class="ordrer border border-1">
            <div class="bg-light border-bottom border-1">
              <h3 class="mb-0 p-2 d-flex align-items-center">
                <span class="h5 mb-0">送貨資料</span>
                <span class="ms-auto text-muted h6 mb-0">運費: {{ $filters.currency(deliveryFeed) }}</span>
              </h3>
            </div>
            <div class="p-3">
              <div class="d-flex flex-column justify-content-around">
                <div class="py-2">
                  <p class="mb-0">已選擇的送貨方式: 宅配</p>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" v-model="isSameUser" id="same-user" />
                    <label class="form-check-label" for="flexCheckDefault">
                      收件人資料與顧客資料相同
                    </label>
                  </div>
                </div>
                <div class="col-12">
                  <label for="info-name" class="form-label"
                    >收件人名稱<span class="ms-1 text-danger fs-6">*</span></label
                  >
                  <VField
                    id="info-name"
                    :disabled="isSameUser"
                    name="收件人名稱"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors['收件人名稱'], 'is-valid': !errors['收件人名稱'] && info.name }"
                    rules="required"
                    v-model="info.name"
                  ></VField>
                  <ErrorMessage name="收件人名稱" class="invalid-feedback"></ErrorMessage>
                  <p class="text-muted">請填入收件人真實姓名，以確保順利收件</p>
                </div>
                <div class="col-12 mb-3">
                  <label for="info-tel" class="form-label"
                    >收件人電話<span class="ms-1 text-danger fs-6">*</span></label
                  >
                  <VField
                    id="info-tel"
                    :disabled="isSameUser"
                    name="收件人電話"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors['收件人電話'], 'is-valid': !errors['收件人電話'] && info.tel }"
                    :rules="isPhone"
                    v-model="info.tel"
                  ></VField>
                  <ErrorMessage name="收件人電話" class="invalid-feedback"></ErrorMessage>
                </div>
                <div class="col-12 mb-3 border-top border-1 pt-3">
                  <label for="inputAddress2" class="form-label"
                    >收件人地址<span class="ms-1 text-danger fs-6">*</span></label
                  >
                  <div class="row mb-3">
                    <div class="col">
                      <VField
                        id="city"
                        name="城市"
                        class="form-select"
                        :class="{ 'is-invalid': errors['城市'], 'is-valid': !errors['城市'] && info.city }"
                        rules="required"
                        @change="info.area = ''"
                        v-model="info.city"
                        as="select"
                      >
                        <option value="" disabled>請選擇縣市</option>
                        <option :value="key" v-for="(value, key, index) in cityData" :key="index">{{ key }}</option>
                      </VField>
                    </div>
                    <div class="col">
                      <VField
                        id="area"
                        name="鄉鎮市區"
                        class="form-select"
                        :class="{ 'is-invalid': errors['鄉鎮市區'], 'is-valid': !errors['鄉鎮市區'] && info.area }"
                        placeholder="請輸入鄉鎮市區"
                        rules="required"
                        v-model="info.area"
                        as="select"
                      >
                        <option value="" disabled>請選擇鄉鎮市區</option>
                        <option :value="item" v-for="item in cityData[info.city]" :key="item">{{ item }}</option>
                      </VField>
                    </div>
                  </div>
                  <div class="col-12">
                    <input type="text" class="form-control" v-model="info.road" id="road" placeholder="地址" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    <section class="mb-9">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="col border border-1">
              <div class="ms-auto col-12 col-md-6 p-3">
                <div class="form-check mb-2">
                  <VField id="mpolicyessage" rules="required" name="條款及政策" v-slot="{ field }">
                    <input
                      v-bind="field"
                      class="form-check-input"
                      v-model="info.policy"
                      :class="{ 'is-invalid': errors['條款及政策'], 'is-valid': !errors['條款及政策'] && info.policy }"
                      type="checkbox"
                    />
                  </VField>
                  <label class="form-check-label" for="aa">
                    我同意網站服務條款及隱私政策<span class="ms-1 text-danger fs-6">*</span>
                  </label>
                </div>
                <div class="form-check mb-2">
                  <input class="form-check-input" type="checkbox" value="" id="bb" />
                  <label class="form-check-label" for="bb">
                    我想成為你們的會員
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="cc" />
                  <label class="form-check-label" for="cc">
                    我想收到最新資訊及優惠方案
                  </label>
                </div>
              </div>
            </div>
            <div class="col border border-1 border-top-0">
              <div class="d-flex py-3">
                <div class="col-6 d-flex align-items-center">
                  <router-link class="d-flex align-items-center" :to="{ name: 'front.cart' }">
                    <span class="material-icons"> chevron_left </span>返回購物車
                  </router-link>
                </div>
                <div class="col-6 px-4">
                  <button class="btn btn-primary w-100 text-white">提交訂單</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </VForm>
</template>
<script>
import FrontBanner from '@/components/FrontBanner.vue';
import FrontProgressStep from '@/components/FrontProgressStep.vue';
import cityJson from '@/assets/json/city.json';

export default {
  inject: ['shoppingCart'],
  data() {
    return {
      isSameUser: false,
      cityData: cityJson,
      info: {
        city: '',
        area: '',
        road: '',
        name: '',
        tel: '',
        policy: false,
      },
      user: {
        name: '',
        email: '',
        tel: '',
        address: '',
      },
      message: '',
    };
  },
  components: {
    FrontBanner,
    FrontProgressStep,
  },
  watch: {
    isSameUser(newValue) {
      const { name = '', tel = '' } = newValue ? this.user : {};
      this.info.name = name;
      this.info.tel = tel;
    },
    info: {
      handler() {
        this.user.address = this.info.city + this.info.area + this.info.road;
      },
      deep: true,
    },
    user: {
      handler() {
        const { name = '', tel = '' } = this.isSameUser ? this.user : {};
        this.info.name = name;
        this.info.tel = tel;
      },
      deep: true,
    },
  },
  methods: {
    onSubmit() {
      const data = {
        data: {
          user: {
            ...this.user,
            receiver_name: this.info.name,
            receiver_tel: this.info.tel,
          },
          message: this.message,
        },
      };
      this.$bus.$emit('isLoading');
      this.$hexAxios.post(this.$frontAPI.order.create(), data).then((res) => {
        this.$bus.$emit('isLoading', { status: false, ms: 2000 });
        const { success, orderId } = res.data;
        if (success) {
          this.$refs.form.resetForm();
          this.$router.push({ name: 'front.payment', params: { id: orderId } });
        }
      });
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '需要正確的電話號碼';
    },
  },
  computed: {
    cart() {
      return this.shoppingCart.cart;
    },
    order() {
      return this.shoppingCart.order;
    },
    deliveryFeed() {
      return this.order.user.deliveryFeed || 0;
    },
    calcTotal() {
      return this.shoppingCart.cart.final_total + this.deliveryFeed;
    },
    calcTotalQty() {
      let sumTotal = 0;
      const { carts = [] } = this.shoppingCart.cart;
      carts.forEach((item) => {
        sumTotal += item.qty;
      });
      return sumTotal;
    },
  },
};
</script>
