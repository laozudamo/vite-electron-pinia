import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home/index.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/index.vue')
  },
  {
    path: '/theClass',
    name: 'theClass',
    component: () => import('@/views/onClass/index.vue')
  },
  {
    path: '/mouseMove',
    name: 'mouseMove',
    component: () => import('@/views/onMouseMove/index.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export function RegisterRouter(app) {
  app.use(router)
}