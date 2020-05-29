import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 标准化样式
import '@/assets/scss/index.scss'

// 全局判断是否electron
Vue.prototype.$isElectron = window.navigator.userAgent.includes('Electron')

// 引入vue-electron插件
import '../../build/icons/font_892454_t9k3h9fuj7/iconfont.css'
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))

// 接口
import api from '@/api/api'
Vue.prototype.$api = api

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: {
    App
  },
  router,
  store,
  template: '<App/>'
}).$mount('#app')

