<template>
  <div class="container mt-md-5 mt-3 mb-7">
    <div class="mt-3">
      <div class="my-5">
        <h3 class="fw-bold text-secondary">熱門商品</h3>
        <div class="container mt-4 mb-5">
          <div class="row">
            <div v-for="n in 4" :key="n" class="col">
              <div class="card border-0 mb-4 position-relative position-relative">
                <img
                  src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                  class="card-img-top rounded-0"
                  alt="..."
                />
                <a href="#" class="text-dark"> </a>
                <div class="card-body p-0">
                  <h4 class="mb-0 mt-3">
                    <a href="#">產品名稱 {{ n }}</a>
                  </h4>
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
