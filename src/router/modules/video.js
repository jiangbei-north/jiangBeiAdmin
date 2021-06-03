import videoLayout from '@/layout/videoLayout/index'

const videoRouter = {
  
    path: '/video',
    name: 'video',
    redirect: {name:'video-list'},
    component: videoLayout,
    children: [
      {
        path: '/video/list',
        name: 'video-list',
        component: () => import(/* webpackChunkName: "about" */'@/views/video/videoList.vue'),
      },
      {
        path: '/video/desc',
        name: 'video-desc',
        component: () => import(/* webpackChunkName: "about" */'@/views/video/index.vue'),
      },
    ]
  
}

export default videoRouter