import Vue from 'vue'
import Router from 'vue-router'
import Routes from './routes'
import beforeEach from './beforeEach'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: Routes,
  linkActiveClass: 'active'
})

router.beforeEach(beforeEach)

export default router
