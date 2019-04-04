import Vue from 'vue';
import App from './App.vue';
import router from './router.js';
import VueLazyLoad from 'vue-lazyload';
Vue.use(VueLazyLoad,{
    error:'./static/error.png',
    loading:'./static/loading.png'
})
Vue.config.productionTip = false
// 引入饿了么ui
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
