<template>
  <div class="position-relative d-flex align-items-center justify-content-center mt-9" style="min-height: 400px;">
    <div
      class="position-absolute"
      style="top:0; bottom: 0; left: 0; right: 0; background-image: url(https://images.unsplash.com/photo-1573906445622-3e98d4445256?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80); background-position: center center; opacity: 0.5;"
    ></div>
    <h2 class="fw-bold">Cart 購物車</h2>
  </div>
  <section class="process py-6">
    <div class="container">
      <div class="col-12 col-md-8 mx-auto position-relative">
        <ul class="d-flex justify-content-between align-items-center">
          <li class="process__step active">
            <span><span class="text h4">1</span></span>
            <p class="mb-0">購物車</p>
          </li>
          <li class="process__step">
            <span><span class="text h4">2</span></span>
            <p class="mb-0">填寫資料</p>
          </li>
          <li class="process__step">
            <span><span class="text h4">3</span></span>
            <p class="mb-0">確認付款</p>
          </li>
          <li class="process__step">
            <span><span class="text h4">4</span></span>
            <p class="mb-0">完成訂單</p>
          </li>
        </ul>
        <div class="progress process__wrap">
          <div
            class="progress-bar"
            role="progressbar"
            style="width: 0%;"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
  </section>
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
  <div class="container mt-md-5 mt-3 mb-7">
    <div class="mt-3">
      <div class="my-5">
        <h3 class="fw-bold">你可能會喜歡</h3>
        <div class="container mt-4 mb-5">
          <div class="row">
            <div class="col-4">
              <div class="card border-0 mb-4 position-relative position-relative">
                <img
                  src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                  class="card-img-top rounded-0"
                  alt="..."
                />
                <a href="#" class="text-dark"> </a>
                <div class="card-body p-0">
                  <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                  <p class="card-text mb-0">
                    NT$1,080 <span class="text-muted "><del>NT$1,200</del></span>
                  </p>
                  <p class="text-muted mt-3"></p>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="card border-0 mb-4 position-relative position-relative">
                <img
                  src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                  class="card-img-top rounded-0"
                  alt="..."
                />
                <a href="#" class="text-dark"> </a>
                <div class="card-body p-0">
                  <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                  <p class="card-text mb-0">
                    NT$1,080 <span class="text-muted "><del>NT$1,200</del></span>
                  </p>
                  <p class="text-muted mt-3"></p>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="card border-0 mb-4 position-relative position-relative">
                <img
                  src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                  class="card-img-top rounded-0"
                  alt="..."
                />
                <a href="#" class="text-dark"> </a>
                <div class="card-body p-0">
                  <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                  <p class="card-text mb-0">
                    NT$1,080 <span class="text-muted "><del>NT$1,200</del></span>
                  </p>
                  <p class="text-muted mt-3"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
