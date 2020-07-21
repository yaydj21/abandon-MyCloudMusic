import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path:'/',
    name: '发现音乐',
    component: () => import('../views/FindMusic/FindMusic.vue'),
    redirect:'/myrecommend',
    children:[
      {
        path: '/myrecommend',
        name: "个性推荐",
        component: () => import('../views/FindMusic/MyRecommend.vue')
      },
      {
        path: '/playlist',
        name: "歌单",
        component: () => import('../views/FindMusic/PlayList.vue')
      },
      {
        path: '/singer',
        name: "歌手",
        component: () => import('../views/FindMusic/Singer.vue')
      },
    ]
  },
  {
    path: '/personalfm',
    name: '私人FM',
    component: () => import('../views/PersonalFM/index.vue')
  },
  {
    path: '/live',
    name: '直播',
    component: () => import('../views/Live/index.vue')
  },
  {
    path: '/mv',
    name: '视频',
    component: () => import('../views/Live/index.vue')
  },
  {
    path: '/friends',
    name: '朋友',
    component: () => import('../views/Live/index.vue')
  },
  {
    path: '/live',
    name: '本地音乐',
    component: () => import('../views/Live/index.vue')
  },
  {
    path: '/live',
    name: '下载管理',
    component: () => import('../views/Live/index.vue')
  },
  {
    path: '/live',
    name: '我的音乐网盘',
    component: () => import('../views/Live/index.vue')
  },
  
]

const router = new VueRouter({
  routes
})

export default router
