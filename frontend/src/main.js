import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
Vue.use(Vuetify)
import 'vuetify/dist/vuetify.min.css'
import './assets/scss/index.scss';

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
