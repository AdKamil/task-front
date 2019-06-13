import Vue from 'vue'
import Router from 'vue-router'

import pagesRoutes from './pages'

Vue.use(Router)

const routesList = []
const routes = routesList.concat(pagesRoutes)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
