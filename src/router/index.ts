import { createRouter, createWebHistory } from 'vue-router'
import ViewRotas from '@/views/ViewRotas.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'rota',
      component: ViewRotas
    }
  ]
})

export default router
