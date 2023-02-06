import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/dashboard',
    name: 'home',
    component: HomeView
  },
  

  {
    path: '/',
    name: 'signin',
    component: () => import('../views/SignInView')
  },

  {
    path: '/register',
    name: 'signup',
    component: () => import('../views/SignUpView')
  },

  {
    path: '/albums',
    name: 'albums',
    component: () => import('../views/AlbumView')
  },

  {
    path: '/photos',
    name: 'photos',
    component: () => import('../views/PhotoView')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
