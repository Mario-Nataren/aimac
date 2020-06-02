import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import BootstrapVue from 'bootstrap-vue'
import Buefy from 'buefy'

Vue.config.productionTip = false

// Vue.use(BootstrapVue);
Vue.use(Buefy)

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'buefy/dist/buefy.css'


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
