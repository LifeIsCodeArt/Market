import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {computed} from "vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/about',
      name: 'About',
      component: () => import('../views/AboutUs.vue')
    },

    {
      path: '/retails',
      name: 'RetailCustomers',
      component: () => import('../views/CommonCustomersRules.vue')
    },

  ]
})

export default router
