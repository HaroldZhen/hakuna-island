<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" style="background: rgba(255,255,255,.9);">
      <div class="container">
        <a class="navbar-brand" href="./index.html">Hakuna Island</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link class="nav-item nav-link me-4" :to="{ name: 'front.index' }"
              >首頁<span class="sr-only">(current)</span></router-link
            >
            <router-link :to="{ name: 'front.products' }" class="nav-item nav-link me-4">服務項目</router-link>
            <a class="nav-item nav-link me-4" href="./detail.html">最新消息</a>
            <a class="nav-item nav-link me-4" href="#">關於我們</a>
            <a class="nav-item nav-link" href="#"
              ><span class="material-icons-outlined text-primary fs-3">
                favorite
              </span></a
            >
            <a class="nav-item nav-link" href="./cart.html"
              ><span class="cart material-icons text-primary">
                shopping_cart
              </span></a
            >
          </div>
        </div>
      </div>
    </nav>
  </header>
  <main>
    <router-view></router-view>
  </main>
  <footer class="bg-primary text-white py-5">
    <div class="container">
      <div class="d-flex align-items-center justify-content-between text-white mb-md-7 mb-4">
        <a class="text-white h4" href="./index.html">Hakuna Island</a>
        <ul class="d-flex list-unstyled mb-0 h4">
          <li>
            <a href="#" class="text-white mx-3"><i class="fab fa-facebook"></i></a>
          </li>
          <li>
            <a href="#" class="text-white mx-3"><i class="fab fa-instagram"></i></a>
          </li>
          <li>
            <a href="#" class="text-white ms-3"><i class="fab fa-line"></i></a>
          </li>
        </ul>
      </div>
      <div
        class="d-flex flex-column flex-md-row justify-content-between align-items-md-end align-items-start text-white"
      >
        <div class="mb-md-0 mb-1">
          <p class="mb-0">〒904-0404<br />沖縄県国頭郡恩納村瀬良垣1860-4</p>
          <p class="mb-0">TEL：098-982-3811FAX：098-982-3898<br /></p>
          <p class="mb-0">MAIL:loisir-seragaki@solarehotels.com<br /></p>
        </div>
        <p class="mb-0">Copyright© 2021 Hakuna Island. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style lang="scss">
@import "@/assets/all";
</style>
