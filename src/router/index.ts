import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    // name: 'home',
    // component: HomeView,
    redirect: '/login',
  }, {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    children: [
      {
        path: 'goods',
        name: 'goods',
        meta: {
          // 路由时控制是否展示
          isShow: true,
          title: "商品列表"
        },
        component: () => import('../components/HomeViewComponents/GoodsView.vue')
      },
      {
        path: 'users',
        name: 'users',
        meta: {
          // 路由时控制是否展示
          isShow: true,
          title: "用户列表"
        },
        component: () => import('../components/HomeViewComponents/UsersView.vue')
      }
    ]
  }, {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }, {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
