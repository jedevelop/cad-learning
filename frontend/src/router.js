import Vue from 'vue'
import Router from 'vue-router'
import Auth from './components/AuthUsers.vue'
import Home from './components/MainPage.vue'
import SignUp from './components/SignUp.vue'
import Learning from './components/Learning.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Auth',
      component: Auth
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/learning',
      name: 'Learning',
      component: Learning
    }
  ]
})
