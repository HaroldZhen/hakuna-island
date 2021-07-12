import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  // == Front 前台 ==
  // http://localhost:8080/#/
  {
    path: '/',
    component: () => import('@/components/layout/FrontLayout.vue'),
    children: [
      {
        path: '',
        name: 'front.index',
        component: () => import('@/views/front/Home.vue'),
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
