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

  ModuleIndexView,
  QollanmaView,
  PlatformaMaqsadi,
  BoglanishView,
  SingleView,
  AlifboView,
  ProfileView,

  SuccessView,
  FailView,
  
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
      component: BoglanishView,
      meta: {
        title: "About page"
      }
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    },

    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        title: "Foydalanuvchi kirish oynasi"
      }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: {
        title: "Ro'yhatdan o'tish oynasi"
      }
    },
    {
      path: '/module-index',
      name: 'module-index',
      component: ModuleIndexView,
      meta: {
        title: "Modul sahifasi!"
      }
    },
    {
      path: '/platforma-maqsadi',
      name: 'platforma-maqsadi',
      component: PlatformaMaqsadi,
      meta: {
        title: "Platforma maqsadi sahifasi!"
      }
    },
    {
      path: '/qollanma',
      name: 'qollanma',
      component: QollanmaView,
      meta: {
        title: "Qo'llanma sahifasi!"
      },
    },
    {
      path: '/news',
      name: 'news',
      component: SingleView,
      meta: {
        title: "Yangiliklar sahifasi!"
      }
    },
    {
      path: '/alifbo',
      name: 'alifbo',
      component: AlifboView,
      meta: {
        title: "Alifbo sahifasi!"
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
      meta: {
        title: "Alifbo sahifasi!"
      }
    },
    {
      path: '/success',
      name: 'success',
      component: SuccessView,
      meta: {
        title: "Alifbo sahifasi!"
      }
    },
    {
      path: '/fail',
      name: 'fail',
      component: FailView,
      meta: {
        title: "Alifbo sahifasi!"
      }
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
