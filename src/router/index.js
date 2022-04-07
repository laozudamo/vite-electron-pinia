import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home/index.vue'),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export function RegesterRouter(app) {
  app.use(router)
}