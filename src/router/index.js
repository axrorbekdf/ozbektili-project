import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'
import guest from '@/middleware/guest'
import auth from '@/middleware/auth'
import isSubscribed from '@/middleware/isSubscribeed'
import middlewarePipeline from './middlewarePipeline'


import {
  HomeView, 
  AboutView, 
  LoginView, 
  RegisterView,
} from '@/views'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: "O'zbek tilini o'qitish bo'yicha innovation ta'lim platformasi."
      }
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: {
        title: "About page"
      }
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {

  document.title = to.meta?.title ?? "O'zbek tilini o'qitish bo'yicha innovation ta'lim platformasi.";

  if (!to.meta.middleware) {
      return next()
  }
  const middleware = to.meta.middleware
  const context = {
      to,
      from,
      next,
      store
  }
  return middleware[0]({
      ...context,
      next: middlewarePipeline(context, middleware, 1)
  })
})

export default router
