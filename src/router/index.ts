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
    redirect: '/home/goods',
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
  routes,
})

router.beforeEach((to, from, next) => {
  const token: string | null = localStorage.getItem("token") || null;
  // token 不存在或者路径不是login
  if (token === null && to.name != "login") {
    next({ name: "login" })
  } else {
    // token 存在，放行
    next();
  }
})

export default router
