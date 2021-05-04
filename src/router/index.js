import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

const mode = 'history'

const router = new VueRouter({
  mode,
  base: process.env.BASE_URL,
  routes
})

export default router
