import { createRouter, createWebHistory } from 'vue-router'
import Signup from '../views/SignupView.vue'
import Login from '../views/LoginView.vue'
import Home from '../views/HomeView.vue'
import Video from '../views/VideoView.vue'
import Subs from '../views/SubsView.vue'
import Favs from '../views/FavsView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    // {
    //   path: '/home',
    //   name: 'home',
    //   component: () => import('../views/HomeView.vue')
    // },
    {
      path: '/favs',
      name: 'Favs',
      component: () => import('../views/FavsView.vue')
    },
    {
      path: '/subs',
      name: 'Subs',
      component: () => import('../views/SubsView.vue')
    },
    {
      path: '/video/:videoYtId',
      name: 'Video',
      component: () => import('../views/VideoView.vue')
    },
  ]
})

export default router
