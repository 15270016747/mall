import Vue from 'vue'
import VueRouter from 'vue-router'
import Body from 'views/body/Body.vue'
Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      redirect: '/body'
    },
    {
      path: '/body',
      component: Body,
      children:[
        {
          path: '/',
          redirect: '/body/home'
        },
        {
          path: '/body/home',
          name: 'home',
          component: () => import('views/home/Home.vue')
        },
        {
          path: '/body/category',
          name: 'category',
          component: () => import('views/category/Category.vue')
        },
        {
          path: '/body/cart',
          name: 'cart',
          component: () => import('views/cart/Cart.vue')
        },
        {
          path: '/body/profile',
          name: 'profile',
          component: () => import('views/profile/Profile.vue')
        }
      ]
    },
    {
      path: '/setting',
      name: 'setting',
      component: () => import('views/settingPage/settingUserinfo.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('views/login/Login.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('views/login/Signin.vue')
    }
    ,
    {
      path: '/detail:iid',
      name: 'detail',
      component: () => import('views/detail/Detail.vue')
    }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
