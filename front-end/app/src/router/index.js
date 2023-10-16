import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import { existsAuthToken, attempt } from '@/mixins/auth.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'auth.login',
      component: () => import('./../views/auth/Login.vue'),
      meta: {
        requiresAuth: true
      }
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

router.beforeEach(async (to, from) => {

  console.log(await attempt())

  if (! (to.name === 'auth.login')) {
    return { name: 'auth.login' }
  }

  // verifica se tem o token
    // se n tem, nem tenta

    // se tem, verifica na API a validade

  // console.log(to)
  // console.log(from)
})

export default router
