<template>
  <FrontBanner></FrontBanner>
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
                <p class="text-center h4">購物車 (3件)</p>
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
                          <span>小計</span>
                          <span class="ms-auto">{{ $filters.currency(cart.total) }}</span>
                        </div>
                        <div class="d-flex py-1">
                          <span>運費:</span>
                          <span class="ms-auto">$80</span>
                        </div>
                        <div class="d-flex py-1">
                          <span>折扣:</span>
                          <span class="ms-auto text-warning">{{
                            $filters.currency(shoppingCart.cart.total - shoppingCart.cart.final_total)
                          }}</span>
                        </div>
                        <div class="d-flex py-1 fw-bold">
                          <span>合計(共0件):</span>
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
  <div class="container mb-4">
    <div class="row">
      <div class="col-12 col-md-6">
        <section class="prepayment mb-3">
          <div class="border border-1">
            <div class="bg-light border-bottom border-1">
              <h3 class="mb-0 p-2 h5">顧客資料</h3>
            </div>
            <div class="p-3">
              <form class="row g-3">
                <div class="col-12">
                  <label for="userName" class="form-label">聯絡人姓名</label>
                  <input type="text" class="form-control" id="userName" />
                </div>
                <div class="col-12">
                  <label for="userTel" class="form-label">電話</label>
                  <input type="text" class="form-control" id="userTel" />
                </div>
                <div class="col-12">
                  <label for="userEmail" class="form-label">電子信箱</label>
                  <input type="email" class="form-control" id="userEmail" placeholder="name@example.com" />
                </div>
              </form>
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
                    <textarea
                      class="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                      style="height: 100px"
                    ></textarea>
                    <label for="floatingTextarea2" class="text-muted">有什麼想告訴我們的嗎？</label>
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
              <span class="ms-auto text-muted h6 mb-0">運費: NT$80</span>
            </h3>
          </div>
          <div class="p-3">
            <div class="d-flex flex-column justify-content-around">
              <div class="py-2">
                <p class="mb-0">已選擇的送貨方式: 郵寄</p>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label class="form-check-label" for="flexCheckDefault">
                    收件人資料與顧客資料相同
                  </label>
                </div>
              </div>
              <div class="col-12">
                <label for="receiverName" class="form-label">收件人名稱</label>
                <input type="text" class="form-control" id="receiverName" placeholder="" />
                <p class="text-muted">請填入收件人真實姓名，以確保順利收件</p>
              </div>
              <div class="col-12 mb-3">
                <label for="receiverTel" class="form-label">收件人電話</label>
                <input type="text" class="form-control" id="receiverTel" placeholder="" />
              </div>
              <div class="col-12 mb-3 border-top border-1 pt-3">
                <label for="inputAddress2" class="form-label">地址</label>
                <p>送貨地點:台灣</p>
                <div class="row mb-3">
                  <div class="col">
                    <select id="city" class="form-select">
                      <option selected>城市/縣市</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div class="col">
                    <select id="area" class="form-select">
                      <option selected>地區</option>
                      <option>...</option>
                    </select>
                  </div>
                </div>
                <div class="col-12">
                  <input type="text" class="form-control" id="address" placeholder="地址" />
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
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                  我同意網站服務條款及隱私政策
                </label>
              </div>
              <div class="form-check mb-2">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                  我想成為你們的會員
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
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
</template>
<script>
import FrontBanner from '@/components/FrontBanner.vue';
import FrontProgressStep from '@/components/FrontProgressStep.vue';

export default {
  inject: ['shoppingCart'],
  data() {
    return {};
  },
  components: {
    FrontBanner,
    FrontProgressStep,
  },
  computed: {
    cart() {
      return this.shoppingCart.cart;
    },
  },
};
</script>
