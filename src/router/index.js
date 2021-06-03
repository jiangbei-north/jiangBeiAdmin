import { createRouter, createWebHashHistory } from 'vue-router'
import HomeLayout from '@/layout/home.vue'
import SettingLayout from '@/layout/settingLayout/index'
import audioRouter from './modules/audio'
import videoRouter from './modules/video'
export const constantRoutes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    meta: { allowBack: false },
    component: () => import(/* webpackChunkName: "about" */ '@/views/login/index.vue')
  },
  {
    path: '/home',
    name: 'Home',
    redirect: '/home/index',
    component: HomeLayout,
    children: [
      {
        path: 'index',
        name: 'Home-index',
        component: () => import(/* webpackChunkName: "about" */'@/views/home/index.vue'),

      },
    ]
  },
  {
    path:'/setting',
    name:'setting',
    redirect:'/setting/jurisdiction',
    component:SettingLayout,
    children:[
      {
        path:'jurisdiction',
        name:'setting-jurisdistion',
        component:() => import(/* webpackChunkName: "about" */'@/views/setting/jurisdistion.vue')
      }
    ]
  },
  
  {
    path: '/404',
    name: 'Error',
    component: () => import(/* webpackChunkName: "about" */'@/views/errorPage/404.vue')
  },
  // {
  //   path: '/:pathMatch(.*)*', // 页面不存在的情况下会跳到404页面
  //   redirect: '/404',
  //   name: 'not-found',
  //   hidden: true
  // }

]
export const asyncRoutes = [
   audioRouter,
   videoRouter
]



const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})


// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
//原重置路由，现无用
export function resetRouter() {
  const newRouter = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes
  });

  router.matcher = newRouter.matcher; // reset router
  console.log('重置路由', newRouter)
}

export default router
