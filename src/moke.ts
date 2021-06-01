//模拟数据
export const OasyncRoutes = [
  {
    path:'/audio',
    name:'Audio',
    component:() => import(/* webpackChunkName: "about" */'@/views/audio/index.vue')
  },
  // {
  //   path:'/video',
  //   name:'Video',
  //   component:() => import(/* webpackChunkName: "about" */'@/views/video/index.vue')
  // },
  
]