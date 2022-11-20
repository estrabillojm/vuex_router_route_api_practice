import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/:id',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about/:id',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
