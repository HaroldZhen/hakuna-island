<template>
  <header>
    <div class="container-fluid fixed-top mt-0 mt-md-3 bg-primary bg-md-transparent">
      <nav class="navbar navbar-expand-md navbar-dark">
        <div class="container d-flex">
          <div class="d-flex align-items-center order-md-last">
            <a class="px-3 d-none d-md-block" href="#">
              <span class="material-icons-outlined text-white fs-3">
                favorite
              </span></a
            >
            <a class="px-3" aria-current="page" href="#">
              <div class="position-relative">
                <span class="cart material-icons text-white">
                  shopping_cart
                </span>
                <span class="shopping__number">9</span>
              </div>
            </a>
          </div>
          <a class="navbar-brand navbar__logo" href="#"><span>Hakuna Island</span></a>
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
              <a class="nav-link px-3 active" aria-current="page" href="#">關於我們</a>
              <a class="nav-link px-3" href="#">最新消息</a>
              <a class="nav-link px-3" href="#">服務項目</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <section class="top__banner mt-8 mt-md-0">
    <div class="top__bg"></div>
    <div class="top__title">
      <p class="mb-8">島上一應俱全，你可以好好休息，也可以盡情玩樂</p>
      <div class="col-10 col-md-6 col-lg-4">
        <img src="@/assets/image/logo01.svg" alt="logo" />
      </div>
      <button type="button" class="btn btn-primary btn-lg text-white mt-8">馬上出發</button>
    </div>
  </section>
  <main class="mb-5">
    <router-view></router-view>
  </main>
  <footer class="bg-primary text-white">
    <div class="col-6 mx-auto">
      <div class="row py-6">
        <div class="col-6">
          <h2 class="text-center">LOGO</h2>
        </div>
        <div class="col-6">
          <p>
            〒904-0404<br />沖縄県国頭郡恩納村瀬良垣1860-4<br />
            TEL：098-982-3811FAX：098-982-3898<br />
            MAIL:loisir-seragaki@solarehotels.com<br />
            アクセス＞
          </p>
        </div>
      </div>
    </div>
    <p class="py-3 text-center mb-0">
    Copyright© 2021 Hakuna Island. All Rights Reserved.
  </p>
  </footer>
</template>
<script>
export default {};
</script>
<style lang="scss"></style>
