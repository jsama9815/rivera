import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home.vue'
import products from '@/views/products.vue'
import ProductsDetails from '@/views/productsDetails.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/products/:categoryId',
      name: 'products',
      component: products
    },
    {
      path: '/products/:categoryId/:productId',
      name: 'productsDetails',
      component: ProductsDetails
    }
  ],
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      }
      if (to.hash) {
        return {
          el: to.hash,
          behavior: 'smooth'
        }
      }
      return { top: 0 }
    }
})

export default router
