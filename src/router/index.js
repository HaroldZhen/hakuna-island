import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  // == Front 前台 ==
  // http://localhost:8080/#/
  // http://localhost:8080/#/products
  // http://localhost:8080/#/product
  // http://localhost:8080/#/cart
  // http://localhost:8080/#/checkout
  // http://localhost:8080/#/payment
  // http://localhost:8080/#/order
  {
    path: '/',
    name: 'front.index',
    component: () => import('@/views/front/Home.vue'),
  },
  {
    path: '/',
    component: () => import('@/components/layout/FrontLayout.vue'),
    children: [
      {
        path: 'products',
        name: 'front.products',
        component: () => import('@/views/front/Products.vue'),
      },
      {
        path: 'product/:id',
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
        path: 'order/:id',
        name: 'front.order',
        component: () => import('@/views/front/Order.vue'),
      },
      {
        path: 'payment/:id',
        name: 'front.payment',
        component: () => import('@/views/front/Payment.vue'),
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
    return { top: 0, behavior: 'smooth' };
  },
});

export default router;
