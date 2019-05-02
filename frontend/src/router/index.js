import Vue from 'vue'
import Router from 'vue-router'
import AuthUsers from '@/components/AuthUsers'
import MainPage from '@/components/MainPage'
import WebCAD from '@/components/WebCAD'
import SignUp from '@/components/SignUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Auth',
      component: AuthUsers
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/learning',
      name: 'MainPage',
      component: MainPage,
      children: [
        {
          path: 'web-cad',
          name: 'WebCAD',
          component: WebCAD
        }
      ]
    }
  ]
})
