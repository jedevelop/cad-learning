import Vue from 'vue'
import Router from 'vue-router'
import Auth from './components/AuthUsers.vue'
import Home from './components/MainPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'Auth',
      component: Auth
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
