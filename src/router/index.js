import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import ShopView from '../views/ShopView.vue'
// import AboutView from '../views/AboutView.vue'
// import ContactUs from '../views/ContactUs.vue'
// import productDetails from '../views/productDetails.vue'
// import wishList from '../views/wishList.vue'
// import cartPage from '../views/cartPage.vue'
// import checkOut from '@/views/checkOut.vue'
// import NotFound from '@/components/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('../views/ShopView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactUs.vue')
    },
    {
      path: '/productDetails',
      name: 'productDetails',
      component: () => import('../views/productDetails.vue')
    },
    {
      path: '/wishlist',
      name: 'wishList',
      component: () => import('../views/wishList.vue')
    },
    {
      path: '/checkout',
      name: 'checkOut',
      component: () => import('../views/checkOut.vue')
    },
    {
      path: '/cart',
      name: 'cartPage',
      component: () => import('../views/cartPage.vue')
    },
    {
      path: '/:catchAll(.*)', // Matches any path not defined above
      name: 'NotFound',
      component: () => import('@/components/NotFound.vue')
    }
  ]
})

export default router
