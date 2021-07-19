import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  // == Front 前台 ==
  // http://localhost:8080/#/
  // http://localhost:8080/#/products
  // http://localhost:8080/#/product
  // http://localhost:8080/#/cart
  // http://localhost:8080/#/checkout
  // http://localhost:8080/#/order
  // http://localhost:8080/#/payment
  // http://localhost:8080/#/success
  {
    path: '/',
    component: () => import('@/components/layout/FrontLayout.vue'),
    children: [
      {
        path: '',
        name: 'front.index',
        component: () => import('@/views/front/Home.vue'),
      },
      {
        path: 'products',
        name: 'front.products',
        component: () => import('@/views/front/Products.vue'),
      },
      {
        path: 'product',
        name: 'front.product',
        component: () => import('@/views/front/Product.vue'),
      },
      {
        path: 'cart',
        name: 'front.cart',
        component: () => import('@/views/front/Cart.vue'),
      },
      {
        path: 'checkout',
        name: 'front.checkout',
        component: () => import('@/views/front/Checkout.vue'),
      },
      {
        path: 'order',
        name: 'front.order',
        component: () => import('@/views/front/Order.vue'),
      },
      {
        path: 'payment',
        name: 'front.payment',
        component: () => import('@/views/front/Payment.vue'),
      },
      {
        path: 'success',
        name: 'front.success',
        component: () => import('@/views/front/Success.vue'),
      },
    ],
  },

  /* == Admin 管理者後台 == */
  {
    path: '/admin',
    name: 'admin.index',
    component: () => import('@/components/layout/AdminLayout.vue'),
    children: [
      {
        path: '',
        name: 'admin.home',
        component: () => import('@/views/admin/Home.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkExactActiveClass: 'active',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
