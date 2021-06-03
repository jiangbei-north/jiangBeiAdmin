import audioLayout from '@/layout/audioLayout/index'

const audioRouter = {
  
    path: '/audio',
    name: 'audio',
    redirect: {name:'audio-list'},
    component: audioLayout,
    children: [
      {
        path: '/audio/list',
        name: 'audio-list',
        component: () => import(/* webpackChunkName: "about" */'@/views/audio/audioList.vue'),
      },
      {
        path: '/audio/desc',
        name: 'audio-desc',
        component: () => import(/* webpackChunkName: "about" */'@/views/audio/index.vue'),
      },
    ]
  
}

export default audioRouter