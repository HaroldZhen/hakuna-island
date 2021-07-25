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
    component: () => import('@/views/layout/FrontLayout.vue'),
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
  // http://localhost:8080/#/admin/login
  {
    path: '/login',
    name: 'admin.login',
    component: () => import('@/views/admin/Login.vue'),
  },
  /* == Admin 管理者後台 == */
  {
    path: '/admin',
    name: 'admin.index',
    component: () => import('@/views/layout/AdminLayout.vue'),
    children: [
      {
        path: '',
        name: 'admin.product',
        component: () => import('@/views/admin/Product.vue'),
      },
      {
        path: 'order',
        name: 'admin.order',
        component: () => import('@/views/admin/Order.vue'),
      },
      {
        path: 'coupon',
        name: 'admin.coupon',
        component: () => import('@/views/admin/Coupon.vue'),
      },
      {
        path: 'article',
        name: 'admin.article',
        component: () => import('@/views/admin/Article.vue'),
      },
      {
        path: 'phoneorder',
        name: 'admin.phoneOrder',
        component: () => import('@/views/admin/PhoneOrder.vue'),
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
