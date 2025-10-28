import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import navBar from '@/components/navBar.vue'
import slider from '@/components/slider.vue'
import Home from '@/views/home.vue'
import contactInformation from '@/views/contact.vue'
import AboutUs from '@/components/aboutUs.vue'
import Bottom from '@/components/bottom.vue'
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
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/nav',
      name: 'navbar',
      component: navBar
    },
        {
      path: '/slider',
      name: 'slider',
      component: slider
    },
    {
      path: '/contact',
      name: 'contact',
      component: contactInformation
    },
    {
      path: '/about' ,
      name: 'about' ,
      component: AboutUs
    },
    {
      path: '/bottom',
      name: 'bottom',
      component: Bottom
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
