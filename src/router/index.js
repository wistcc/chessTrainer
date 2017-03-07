import Vue from 'vue'
import Router from 'vue-router'
import dashboard from 'components/dashboard'
import index from 'components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: dashboard
    }
  ]
})
