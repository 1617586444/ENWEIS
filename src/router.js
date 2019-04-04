import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    // 首页导航栏
    {
      path: '/',
      component: () => import('./views/home/home.vue')
    },
    // 品牌视频
    {
      path: '/brandvideo',
      component: () => import('./views/home/brandVideo/brandVideo.vue')
    },
    // 伊品鉴赏
    {
      path: '/appreciate',
      component: () => import('./views/home/appreciate/appreciate.vue'),
    },
    // 伊品鉴赏详情
    {
      path: '/appreciatechild',
      component: () => import('./views/home/appreciatechild/appreciatechild.vue')
    },
    // 伊品鉴赏详情2
    {
      path: '/modemlove',
      component: () => import('./views/home/modenLove/modemlove.vue')
    },
    // 艺术伊维斯
    {
      path: '/art',
      component: () => import('./views/home/art/art.vue')
    },
    // 艺术插画
    {
      path: '/artpainting',
      component: () => import('./views/home/ArtPainting/ArtPainting.vue')
    },
    // 内衣研究院
    {
      path: '/research',
      component: () => import('./views/home/research/research.vue')
    },
    // VIP中心
    {
      path: '/vipcenter',
      component: () => import('./views/home/vipCenter/vipCenter.vue')
    },
    // 门店形象
    {
      path: '/storeimage',
      component: () => import('./views/home/storeImage/storeImage.vue')
    },
    // 导航
    {
      path: '/navigation',
      component: () => import('./views/home/navigation/navigation.vue')
    },
    // 伊人商城
    {
      path: '/yrstore',
      component: () => import('./views/home/yrstore/yrstore.vue')
    }
  ]

})
