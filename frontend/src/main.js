import Vue from 'vue'
import './plugins/vuetify'
import router from './router'
import store from './store'
import App from './App.vue'
import './assets/scss/index.scss';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
