// electron 的项目文件都在本地，在 electron 项目中用懒加载是毫无意义的

import Vue from 'vue'
import Router from 'vue-router'
// import store from '@/store/index'
import Login from '@/views/login/login'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

export default router
