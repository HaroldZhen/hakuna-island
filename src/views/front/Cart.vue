<template>
  <FrontBanner pageName="建立訂單" bgImage="https://images.unsplash.com/photo-1495822892661-2ead864e1c7b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1905&q=80"></FrontBanner>
  <FrontProgressStep stepName="cart"></FrontProgressStep>
  <section v-if="isCartEmpty">
    <div class="container mb-3">
      <div class="border border-1">
        <div class="border-bottom border-1 py-3">
          <router-link class="d-flex justify-content-start align-items-center" :to="{ name: 'front.index' }"
            ><span class="material-icons"> chevron_left </span>來去逛逛</router-link
          >
        </div>
        <h2 class="text-center text-secondary py-6 mb-2">您尚未選擇任何服務喔，快去選購吧！</h2>
      </div>
    </div>
  </section>
  <section v-else class="cart mb-3">
    <div class="container">
      <div class="border border-1">
        <div class="cart__header bg-light border-bottom border-1">
          <h3 class="mb-0 p-2 h5">
            購物車<span>({{ shoppingCart.cart.carts.length || 0 }})</span>
          </h3>
        </div>
        <div class="cart__list">
          <div class="d-flex p-3 d-none d-md-flex border-bottom border-1">
            <div class="col-md-4">商品資料</div>
            <div class="col-md-2">單件價格</div>
            <div class="col-md-3">數量</div>
            <div class="col-md-2">小計</div>
            <div class="col-md-1"></div>
          </div>
          <div class="cart__item d-flex p-3" v-for="item in shoppingCart.cart.carts" :key="item.id">
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
              <div class="input-group cart__inputs">
                <button
                  class="btn btn-primary cart__btn"
                  :disabled="item.qty == 0"
                  @click="
                    item.qty--;
                    addToCart(item.product_id, -1);
                  "
                  type="button"
                >
                  <span class="material-icons d-block m-auto">
                    remove
                  </span>
                </button>
                <input
                  type="text"
                  class="form-control text-center"
                  min="0"
                  max="10"
                  v-model.number="item.qty"
                  placeholder="1"
                />
                <button
                  class="btn btn-primary cart__btn"
                  @click="
                    item.qty++;
                    addToCart(item.product_id, 1);
                  "
                  type="button"
                >
                  <span class="material-icons d-block m-auto">
                    add
                  </span>
                </button>
              </div>
            </div>
            <div class="cart__subtotal col-4 col-md-2">
              <span>{{ $filters.currency(item.product.price * item.qty) }}</span>
            </div>
            <a role="button" href="#" class="cart__clear col-4 col-md-1" @click.prevent="delCart(item.id)">
              <span class="material-icons">
                clear
              </span></a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="container mb-3">
    <div class="row">
      <section class="prepayment col-12 col-lg-8 mb-3">
        <div class="border border-1">
          <div class="bg-light border-bottom border-1">
            <h3 class="mb-0 p-2 h5">選擇送貨及付款方式</h3>
          </div>
          <div class="p-3">
            <div class="row g-3">
              <div class="col-12">
                <label for="country" class="form-label">送貨地點</label>
                <select id="country" v-model="users.country" class="form-select">
                  <option value="tw" selected>台灣</option>
                </select>
              </div>
              <div class="col-12">
                <label for="delivery" class="form-label">送貨方式</label>
                <select id="delivery" v-model="users.deliveryMethod" class="form-select">
                  <option value="home" selected>宅配</option>
                </select>
              </div>
              <div class="col-12">
                <label for="paymentMethod" class="form-label">付款方式</label>
                <select id="paymentMethod" v-model="users.paymentMethod" class="form-select">
                  <option value="credit" selected>信用卡</option>
                  <option value="atm" selected>ATM</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="col-12 col-lg-4">
        <section class="ordrer border border-1">
          <div class="bg-light border-bottom border-1">
            <h3 class="mb-0 p-2 h5">訂單資訊</h3>
          </div>
          <div class="p-3">
            <div class="d-flex flex-column justify-content-around">
              <div class="d-flex py-2">
                <span>小計</span>
                <span class="ms-auto">{{ $filters.currency(shoppingCart.cart.total) }}</span>
              </div>
              <div class="d-flex py-2">
                <span>運費:</span>
                <span class="ms-auto">{{ $filters.currency(users.deliveryFeed) }}</span>
              </div>
              <div v-if="coupon">
                <div class="py-2 d-flex mb-2">
                  <span>已套用優惠:</span>
                  <span class="ms-auto">{{ coupon.title }}</span>
                </div>
              </div>
              <div v-else-if="showCouponBtn">
                <div class="py-2 d-flex mb-2">
                  <span>優惠代碼:</span>
                  <span class="ms-auto">
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control coupon__input"
                        placeholder="輸入優惠卷 C0731"
                        aria-label="coupon code"
                        v-model="couponCode"
                      />
                      <button class="btn btn-primary" type="button" @click="activeCoupon" id="coupon-btn">套用</button>
                    </div>
                  </span>
                </div>
              </div>
              <div v-else class="py-3 d-flex mb-2">
                <span v-if="isCartEmpty">優惠代碼</span>
                <a href="#" v-else role="button" @click.prevent="showCouponBtn = true">優惠代碼</a>
              </div>
              <div v-if="shoppingCart.cart.total - shoppingCart.cart.final_total > 0" class="d-flex mb-2">
                <span>折扣:</span>
                <span class="ms-auto text-success">{{
                  $filters.currency(shoppingCart.cart.total - shoppingCart.cart.final_total)
                }}</span>
              </div>
              <div class="d-flex border-top border-1 py-2 mb-2">
                <span>合計:</span>
                <span class="ms-auto">{{ $filters.currency(calcTotal) }}</span>
              </div>
            </div>
            <button class="btn btn-primary w-100" :disabled="isCartEmpty" @click="saveOrderInfo">
              前往結帳
            </button>
          </div>
        </section>
      </div>
    </div>
  </div>
  <FrontProductAdLike></FrontProductAdLike>
</template>
<script>
import FrontBanner from '@/components/FrontBanner.vue';
import FrontProgressStep from '@/components/FrontProgressStep.vue';
import FrontProductAdLike from '@/components/FrontProductAdLike.vue';

export default {
  inject: ['shoppingCart'],
  components: {
    FrontBanner,
    FrontProgressStep,
    FrontProductAdLike,
  },
  data() {
    return {
      showCouponBtn: false,
      couponCode: '',
      users: {
        country: 'tw',
        deliveryMethod: 'home',
        deliveryFeed: 80,
        paymentMethod: 'credit',
      },
    };
  },
  methods: {
    delCart(pid) {
      this.$bus.$emit('cartRemoveItem', pid);
    },
    saveOrderInfo() {
      this.shoppingCart.order.user = { ...this.users };
      this.$router.push({ name: 'front.checkout' });
    },
    addToCart(pid, qty) {
      this.$bus.$emit('isLoading', { status: true });
      const data = {
        data: {
          product_id: pid,
          qty,
        },
      };
      this.$hexAxios
        .post(this.$frontAPI.cart.add(), data)
        .then((res) => {
          this.$bus.$emit('isLoading', { status: false });
          const { success } = res.data;
          const { product, qty: productQty } = res.data.data;
          if (success) {
            this.$bus.$emit('push-message', {
              style: 'success',
              title: '已更新購物車',
              content: `${product.title} x ${productQty}`,
            });
          }
        })
        .then(this.$bus.$emit('cartList', 1500));
    },
    activeCoupon() {
      this.$bus.$emit('isLoading', { status: true });
      const data = {
        data: {
          code: this.couponCode,
        },
      };
      this.$hexAxios
        .post(this.$frontAPI.coupon.coupon(), data)
        .then((res) => {
          this.$bus.$emit('isLoading', { status: false });
          const { success, message } = res.data;
          if (success) {
            this.$bus.$emit('push-message', {
              style: 'success',
              title: '優惠卷',
              content: message,
            });
          }
        })
        .then(this.$bus.$emit('cartList', 1500));
    },
  },
  computed: {
    isCartEmpty() {
      return this.shoppingCart.cart.total <= 0;
    },
    coupon() {
      const { carts } = this.shoppingCart.cart;
      const { coupon } = carts.find((item) => Object.prototype.hasOwnProperty.call(item, 'coupon')) || {};
      return coupon;
    },
    calcTotal() {
      return this.shoppingCart.cart.final_total + this.users.deliveryFeed;
    },
  },
};
</script>
