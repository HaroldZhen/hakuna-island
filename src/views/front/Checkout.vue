<template>
  <div class="position-relative d-flex align-items-center justify-content-center mt-9" style="min-height: 400px;">
    <div
      class="position-absolute"
      style="top:0; bottom: 0; left: 0; right: 0; background-image: url(https://images.unsplash.com/photo-1573906445622-3e98d4445256?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80); background-position: center center; opacity: 0.5;"
    ></div>
    <h2 class="fw-bold">Checkout</h2>
  </div>
  <section class="process py-6">
    <div class="container">
      <div class="col-12 col-md-8 mx-auto position-relative">
        <ul class="d-flex justify-content-between align-items-center">
          <li class="process__step active">
            <span><span class="text h4">1</span></span>
            <p class="mb-0">購物車</p>
          </li>
          <li class="process__step active">
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
            style="width: 35%;"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
  </section>
  <section class="cart__wrap mb-3">
    <div class="container">
      <div class="accordion bg-white" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button
              class="accordion-button collapsed bg-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              <div class="ms-auto">
                <p class="text-center h4">合計: NT$4,220</p>
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
                  <label for="inputAddress" class="form-label">聯絡人姓名</label>
                  <input type="text" class="form-control" id="inputAddress2" />
                </div>
                <div class="col-12">
                  <label for="inputAddress2" class="form-label">電話</label>
                  <input type="text" class="form-control" id="inputAddress2" />
                </div>
                <div class="col-12">
                  <label for="inputAddress2" class="form-label">電子信箱</label>
                  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
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
                <label for="inputAddress2" class="form-label">收件人名稱</label>
                <input type="text" class="form-control" id="inputAddress2" placeholder="地址" />
                <p class="text-muted">請填入收件人真實姓名，以確保順利收件</p>
              </div>
              <div class="col-12 mb-3">
                <label for="inputAddress2" class="form-label">收件人電話</label>
                <input type="text" class="form-control" id="inputAddress2" placeholder="地址" />
              </div>
              <div class="col-12 mb-3 border-top border-1 pt-3">
                <label for="inputAddress2" class="form-label">地址</label>
                <p>送貨地點:台灣</p>
                <div class="row mb-3">
                  <div class="col">
                    <select id="inputState" class="form-select">
                      <option selected>城市/縣市</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div class="col">
                    <select id="inputState" class="form-select">
                      <option selected>地區</option>
                      <option>...</option>
                    </select>
                  </div>
                </div>
                <div class="col-12">
                  <input type="text" class="form-control" id="inputAddress2" placeholder="地址" />
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
export default {};
</script>
