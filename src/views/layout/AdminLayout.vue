<template>
  <div class="admin-wrap">
    <header class="admin-layout">
      <nav class="navbar navbar-light bg-light py-3">
        <div class="container g-0">
          <div class="row w-100">
            <div class="col-2 d-flex align-items-center">
              <a class="navbar-brand h1 align-middle m-0 p-0" href="#">Hakuna Island</a>
            </div>
            <div class="col-10">
              <div class="d-flex">
                <ul class="ms-auto mb-0">
                  <li class="d-inline-block px-2">
                    <div class="rounded-pill border border-light overflow-hidden d-flex align-items-center">
                      <div style="width: 32px;">
                        <img class="img-fluid" src="https://randomuser.me/api/portraits/men/3.jpg" alt="" />
                      </div>
                    </div>
                  </li>
                  <li class="d-inline-block px-2">
                    <a href="" @click.prevent="logout">
                      <i class="bi bi-box-arrow-left" style="font-size: 1.5rem;"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <div class="container g-0">
      <div class="row">
        <div class="col-md-2 bg-white">
          <div class="main">
            <div class="d-flex flex-column p-3 w-100">
              <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <div class="d-flex flex-column align-items-center">
                  <div class="rounded-pill border border-light overflow-hidden">
                    <img class="img-fluid" src="https://randomuser.me/api/portraits/men/3.jpg" alt="" />
                  </div>
                  <h3 class="my-2">管理者</h3>
                </div>
              </a>
              <hr />
              <ul class="nav nav-pills flex flex-md-column mb-auto flex-nowrap">
                <li class="nav-item">
                  <router-link class="nav-link" :to="{ name: 'admin.product' }">
                    <i class="bi bi-house-door-fill p-1" style="font-size: 1.5rem;"></i>
                    <span>產品</span>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link :to="{ name: 'admin.order' }" class="nav-link">
                    <i class="bi bi-award p-1" style="font-size: 1.5rem;"></i>訂單
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link :to="{ name: 'admin.coupon' }" class="nav-link"
                    ><i class="bi bi-bag-check p-1" style="font-size: 1.5rem;"></i>優惠卷
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link :to="{ name: 'admin.article' }" class="nav-link"
                    ><i class="bi bi-bank2 p-1" style="font-size: 1.5rem;"></i>最新消息
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link :to="{ name: 'admin.phoneOrder' }" class="nav-link"
                    ><i class="bi bi-book-fill p-1" style="font-size: 1.5rem;"></i>電話接單
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link :to="{ name: 'front.index' }" class="nav-link"
                    ><i class="bi bi-shop p-1" style="font-size: 1.5rem;"></i>前台</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-10">
          <div class="px-3 bg-white min-vh-100">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { hexAxios, api } from '@/response/hexAxios';

export default {
  created() {
    const authTOKEN = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    hexAxios.defaults.headers.common.Authorization = authTOKEN;
    this.checkUser();
  },
  methods: {
    logout() {
      hexAxios.post(api.logout).then((res) => {
        const { success = false, message } = res.data;
        if (success) {
          this.$swal({
            title: message,
            icon: 'info',
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 1000,
          });
          this.$router.push({ name: 'admin.login' });
        }
      });
    },
    async checkUser() {
      await hexAxios
        .post(api.check)
        .then((res) => {
          const { success } = res.data;
          if (success) {
            this.getProduct();
          } else {
            this.$router.push({ name: 'admin.login' });
          }
        });
    },
  },
};
</script>
<style scoped lang="scss">
.admin-wrap {
  background-color: #f9fafd;
}
.dashborad__input {
  border-color: #d8e2ef;
  &::placeholder {
    color: #d8e2ef;
  }
}
.main {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
}
.b-example-divider {
  width: 1.5rem;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1), inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.bi {
  vertical-align: -0.125em;
  pointer-events: none;
  fill: currentColor;
}

.dropdown-toggle {
  outline: 0;
}

.nav-flush .nav-link {
  border-radius: 0;
}

.scrollarea {
  overflow-y: auto;
}

.fw-semibold {
  font-weight: 600;
}
.lh-tight {
  line-height: 1.25;
}
</style>
