import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueClipboard from 'vue-clipboard2'
import VueLazyload from 'vue-lazyload'

import './components/base-ui/_globals'
import './components/icons/_globals'

Vue.config.productionTip = false

Vue.use(VueClipboard)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'images/pokeball.svg',
  attempt: 1
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
