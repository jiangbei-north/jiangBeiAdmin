import { createRouter, createWebHashHistory } from 'vue-router'
import HomeLayout from '@/layout/home.vue'

const routes = [
  {
    path:'/',
    name:'Login',
    component:() => import(/* webpackChunkName: "about" */ '@/views/login/index.vue')
  },
  {
    path:'/home',
    name:'Home',
    redirect:'/home/index',
    component:HomeLayout,
    children:[
      {
        path: 'index',
        name: 'HomeIndex',
        component: () => import(/* webpackChunkName: "about" */'@/views/home/index.vue'),
        
      },
    ]
  },{
    path:'/video',
    name:'Video',
    component:() => import(/* webpackChunkName: "about" */'@/views/video/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
