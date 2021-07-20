<template>
  <FrontBanner></FrontBanner>
  <FrontProgressStep stepName="cart" ></FrontProgressStep>
  <section class="cart mb-3">
    <div class="container">
      <div class="border border-1">
        <div class="cart__header bg-light border-bottom border-1">
          <h3 class="mb-0 p-2 h5">購物車<span>(3件)</span></h3>
        </div>
        <div class="cart__list">
          <div class="d-flex p-3 d-none d-md-flex ">
            <div class="col-md-4">商品資料</div>
            <div class="col-md-2">單件價格</div>
            <div class="col-md-3">數量</div>
            <div class="col-md-2">小計</div>
            <div class="col-md-1">-</div>
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
              <div class="input-group cart__inputs">
                <button class="btn btn-outline-primary" type="button">-</button>
                <input type="text" class="form-control text-center" placeholder="1" />
                <button class="btn btn-outline-primary" type="button">+</button>
              </div>
            </div>
            <div class="cart__subtotal col-4 col-md-2">
              <span>NT$260</span>
            </div>
            <div class="cart__clear col-4 col-md-1">
              <span class="material-icons">
                clear
              </span>
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
              <div class="input-group cart__inputs">
                <button class="btn btn-outline-primary" type="button">-</button>
                <input type="text" class="form-control text-center" placeholder="1" />
                <button class="btn btn-outline-primary" type="button">+</button>
              </div>
            </div>
            <div class="cart__subtotal col-4 col-md-2">
              <span>NT$260</span>
            </div>
            <div class="cart__clear col-4 col-md-1">
              <span class="material-icons">
                clear
              </span>
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
              <div class="input-group cart__inputs">
                <button class="btn btn-outline-primary" type="button">-</button>
                <input type="text" class="form-control text-center" placeholder="1" />
                <button class="btn btn-outline-primary" type="button">+</button>
              </div>
            </div>
            <div class="cart__subtotal col-4 col-md-2">
              <span>NT$260</span>
            </div>
            <div class="cart__clear col-4 col-md-1">
              <span class="material-icons">
                clear
              </span>
            </div>
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
            <form class="row g-3">
              <div class="col-12">
                <label for="inputAddress" class="form-label">送貨地點</label>
                <select id="inputState" class="form-select">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div class="col-12">
                <label for="inputAddress2" class="form-label">送貨方式</label>
                <select id="inputState" class="form-select">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div class="col-12">
                <label for="inputAddress2" class="form-label">付款方式</label>
                <select id="inputState" class="form-select">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
            </form>
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
                <span class="ms-auto">NT$4,140</span>
              </div>
              <div class="d-flex py-2">
                <span>運費:</span>
                <span class="ms-auto">NT$80</span>
              </div>
              <div class="py-3">
                <a href="#">優惠代碼</a>
              </div>
              <div class="d-flex mb-2 text-danger">
                <span >折扣:</span>
                <span class="ms-auto">NT$0</span>
              </div>
              <div class="d-flex border-top border-1 py-2">
                <span>合計:</span>
                <span class="ms-auto">NT$4,220</span>
              </div>
            </div>
            <button class="btn btn-primary text-white w-100">前往結帳</button>
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
  components: {
    FrontBanner,
    FrontProgressStep,
    FrontProductAdLike,
  },
};
</script>
