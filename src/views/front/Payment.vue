<template>
  <FrontBanner></FrontBanner>
  <FrontProgressStep stepName="payment" ></FrontProgressStep>
  <div class="container mb-3">
    <div class="row">
      <div class="col-12 col-md-6">
        <section class="prepayment mb-3">
          <div class="border border-1">
            <div class="bg-light border-bottom border-1">
              <h3 class="mb-0 p-2 h5">顧客資料</h3>
            </div>
            <div class="p-3">
              <div class="pb-3">
                聯絡人姓名: 王小明
              </div>
              <div class="pb-3">
                電話: 04-23456789
              </div>
              <div class="pb-3">
                電子信箱: user@gmail.com
              </div>
              <div class="pb-3">
                地址: 臺中市南屯區大統里大進街七蒿
              </div>
              <div class="mb-6">
                訂單備註: 好想要拉拉拉拉
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="col-12 col-md-6 order-first order-md-0">
        <section class="prepayment mb-3">
          <div class="border border-1">
            <div class="bg-light border-bottom border-1">
              <h3 class="mb-0 p-2 h5">訂單資料</h3>
            </div>
            <div class="p-3">
              <div class="pb-3">
                訂單成立時間:2021-07-19 19:58
              </div>
              <div class="pb-3">
                訂單編號:-MeycKpdUB6XywXdIlLF
              </div>
              <div class="pb-3">
                總金額:$57,000
              </div>
              <div class="pb-3">
                付款方式: 信用卡
              </div>
            </div>
          </div>
        </section>
        <section class="prepayment mb-3">
          <div class="border border-1">
            <div class="bg-light border-bottom border-1">
              <h3 class="mb-0 p-2 h5">付款資訊</h3>
            </div>
            <div class="p-3">
              <div class="row">
                <div class="col-12 col-md-12 mb-3">
                  <label for="inputAddress" class="form-label">信用卡卡號:</label>
                  <input type="text" class="form-control" id="inputAddress" placeholder="請輸入16碼">
                </div>
                <div class="col-6 mb-3">
                  <label for="inputEmail4" class="form-label">有效期限: </label>
                  <input type="email" class="form-control" id="inputEmail4">
                </div>
                <div class="col-6 ms-auto mb-3">
                  <label for="inputPassword4" class="form-label">背後三碼:</label>
                  <input type="password" class="form-control" id="inputPassword4">
                </div>
                <div class="col-12 ms-auto col-md-6">
                  <button class="btn btn-primary text-white w-100">確認付款</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
  <section class="cart__wrap mb-3">
    <div class="container">
      <section class="cart border border-1">
        <div class="cart__list">
          <div class="d-flex p-3 d-none d-md-flex border-bottom border-1">
            <div class="col-md-4">商品資料</div>
            <div class="col-md-2">單件價格</div>
            <div class="col-md-3">數量</div>
            <div class="col-md-3 text-end">小計</div>
          </div>
          <div class="cart__item d-flex p-3">
            <div class="cart__product col-8 col-md-4">
              <div class="d-flex">
                <div class="col-auto">
                  <img class="cart__img img-thumbnail" src="https://fakeimg.pl/300x300/" />
                </div>
                <div class="col px-3">花磚小鏡子---花見幸運花磚小鏡子---花見幸運</div>
              </div>
            </div>
            <div class="cart__price col-4 col-md-2">
              <p class="mb-0">NT$260</p>
              <p class="text-decoration-line-through text-muted">NT$300</p>
            </div>
            <div class="cart__qty col-4 col-md-3">
              <span class="d-block d-md-none">數量：</span>
              <span>1</span>
            </div>
            <div class="cart__subtotal col-4 col-md-3 text-end">
              <span>NT$260</span>
            </div>
          </div>
          <div class="cart__item d-flex p-3 border-top border-1">
            <div class="cart__product col-8 col-md-4">
              <div class="d-flex">
                <div class="col-auto">
                  <img class="cart__img img-thumbnail" src="https://fakeimg.pl/300x300/" />
                </div>
                <div class="col px-3">花磚小鏡子---花見幸運花磚小鏡子---花見幸運</div>
              </div>
            </div>
            <div class="cart__price col-4 col-md-2">
              <p class="mb-0">NT$260</p>
              <p class="text-decoration-line-through text-muted">NT$300</p>
            </div>
            <div class="cart__qty col-4 col-md-3">
              <span class="d-block d-md-none">數量：</span>
              <span>1</span>
            </div>
            <div class="cart__subtotal col-4 col-md-3 text-end">
              <span>NT$260</span>
            </div>
          </div>
          <div class="cart__item d-flex p-3 border-top border-1">
            <div class="cart__product col-8 col-md-4">
              <div class="d-flex">
                <div class="col-auto">
                  <img class="cart__img img-thumbnail" src="https://fakeimg.pl/300x300/" />
                </div>
                <div class="col px-3">花磚小鏡子---花見幸運花磚小鏡子---花見幸運</div>
              </div>
            </div>
            <div class="cart__price col-4 col-md-2">
              <p class="mb-0">NT$260</p>
              <p class="text-decoration-line-through text-muted">NT$300</p>
            </div>
            <div class="cart__qty col-4 col-md-3">
              <span class="d-block d-md-none">數量：</span>
              <span>1</span>
            </div>
            <div class="cart__subtotal col-4 col-md-3 text-end">
              <span>NT$260</span>
            </div>
          </div>
          <div class="cart__total d-flex p-2 border-top border-1">
            <div class="col-12 col-md-3 ms-auto">
              <div class="d-flex flex-column justify-content-around">
                <div class="d-flex py-1">
                  <span>小計</span>
                  <span class="ms-auto">NT$4,140</span>
                </div>
                <div class="d-flex py-1">
                  <span>運費:</span>
                  <span class="ms-auto">NT$80</span>
                </div>
                <div class="d-flex py-1 fw-bold">
                  <span>合計(共3件):</span>
                  <span class="ms-auto">NT$4,220</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>
<script>
import FrontBanner from '@/components/FrontBanner.vue';
import FrontProgressStep from '@/components/FrontProgressStep.vue';

export default {
  components: {
    FrontBanner,
    FrontProgressStep,
  },
};
</script>
