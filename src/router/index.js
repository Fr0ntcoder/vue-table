import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      layout: "Main"
    },
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/user/:name',
    name: 'User',
    props: true,
    meta: {
      layout: "Empty"
    },
    component: () => import('@/views/User.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
