import Vue from 'vue'
import App from './App.vue'
import router from './router'
//vuex
import store from './store.js'
//bootstrap vue
import BootstrapVue from 'bootstrap-vue'
import './style/style.scss'
//font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faQuestion } from '@fortawesome/free-solid-svg-icons'
library.add(faLinkedin)
library.add(faGithub)
library.add(faEnvelope);
library.add(faQuestion);

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(BootstrapVue)
Vue.config.productionTip = false





new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
