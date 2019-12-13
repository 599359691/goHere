import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
import Login from '@/pages/login/Login'
import Regist from '@/pages/regist/Regist'
import Mine from '@/pages/mine/Mine'
import MineText from '@/pages/mineText/MineText'
import EditText from '@/pages/editText/EditText'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/city',
      name: 'City',
      component: City
    }, {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }, {
      path: '/editText/:id',
      name: 'EditText',
      component: EditText
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/regist',
      name: 'Regist',
      component: Regist
    }, {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }, {
      path: '/mineText',
      name: 'MineText',
      component: MineText
    }, {
      path: '/editText',
      name: 'EditText',
      component: EditText
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
