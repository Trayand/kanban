import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import firebase from 'firebase'

Vue.use(firebase)
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
