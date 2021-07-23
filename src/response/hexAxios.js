import Swal from 'sweetalert2';
import axios from 'axios';

const apiPath = process.env.VUE_APP_PATH;

const hexAxios = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});
const authTOKEN = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
hexAxios.defaults.headers.common.Authorization = authTOKEN || '';

hexAxios.interceptors.response.use(
  (response) => {
    const { success: isSuccess = false } = response.data;
    if (!isSuccess) {
      Swal.fire({
        title: response.data.message,
        icon: 'error',
        toast: false,
        position: 'center',
        showCloseButton: true,
        showConfirmButton: false,
      });
    }
    return response;
  },
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 404:
          Swal.fire({
            title: '你要找的頁面不存在',
            icon: 'error',
            toast: false,
            position: 'center',
            showCloseButton: true,
            showConfirmButton: false,
          });
          // go to 404 page
          break;
        case 500:
          Swal.fire({
            title: '程式發生問題',
            icon: 'error',
            toast: false,
            position: 'center',
            showCloseButton: true,
            showConfirmButton: false,
          });
          // go to 500 page
          break;
        default:
          Swal.fire({
            title: error.toString(),
            icon: 'error',
            toast: false,
            position: 'center',
            showCloseButton: true,
            showConfirmButton: false,
          });
      }
    }
    return Promise.reject(error);
  },
);

const api = {
  signin: '/admin/signin',
  logout: '/logout',
  check: '/api/user/check',
  upload: `/api/${apiPath}/admin/upload`,
  product: {
    path: `/api/${apiPath}/admin/product`,
    src: (id) => `/api/${apiPath}/admin/product/${id}`,
    page: (id) => `/api/${apiPath}/admin/products?page=${id}`,
    all: `/api/${apiPath}/admin/products/all`,
  },
  order: {
    src: (id) => `/api/${apiPath}/admin/order/${id}`, // put,delete
    page: (page = 1) => `/api/${apiPath}/admin/orders?page=${page}`, // GET
    all: () => `/api/${apiPath}/admin/orders/all`, // get,delete
  },
  coupon: {
    new: `/api/${apiPath}/admin/coupon`, // post
    src: (id) => `/api/${apiPath}/admin/coupon/${id}`, // put,delete
    page: (page = 1) => `/api/${apiPath}/admin/coupons?page=${page}`, // get
  },
  article: {
    new: `/api/${apiPath}/admin/article`, // post
    src: (id) => `/api/${apiPath}/admin/article/${id}`, // get,put,delete
    page: (page = 1) => `/api/${apiPath}/admin/articles?page=${page}`, // get
  },
};

const frontAPI = {
  products: {
    list: (page = 1) => `/api/${apiPath}/products?page=${page}`, // GET
    all: () => `/api/${apiPath}/products/all`, // GET
  },
  product: {
    item: (id) => `/api/${apiPath}/product/${id}`, // GET
  },
  cart: {
    add: () => `/api/${apiPath}/cart`, // POST
    update: (id) => `/api/${apiPath}/cart/${id}`, // PUT
    delete: (id) => `/api/${apiPath}/cart/${id}`, // DELETE
    list: () => `/api/${apiPath}/cart`, // GET
  },
  carts: {
    delete: () => `/api/${apiPath}/carts`, // DELETE
  },
  coupon: {
    use: () => `/api/${apiPath}/coupon`, // POST
  },
  order: {
    create: () => `/api/${apiPath}/order`, // POST
    item: (id) => `/api/${apiPath}/order/${id}`, // GET
  },
  orders: {
    list: (page = 1) => `/api/${apiPath}/orders?page=${page}`, // GET
  },
  pay: {
    use: (orderId) => `/api/${apiPath}/pay/${orderId}`, // GET
  },
  articles: {
    list: (page = 1) => `/api/${apiPath}/articles?page=${page}`, // GET
  },
  article: {
    item: (id) => `/api/${apiPath}/article/${id}`, // GET
  },
};

export { hexAxios, frontAPI, api };
