import Vue from 'vue';
import Router from 'vue-router';
import dashboard from 'components/dashboard';
import kataList from 'components/kataList';
import kata from 'components/kata';
import computer from 'components/computer';
import sandbox from 'components/sandbox';
import configurations from 'components/configurations';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/kataList',
      name: 'kataList',
      component: kataList
    },
    {
      path: '/kata',
      name: 'kata',
      component: kata
    },
    {
      path: '/computer',
      name: 'computer',
      component: computer
    },
    {
      path: '/sandbox',
      name: 'sandbox',
      component: sandbox
    },
    {
      path: '/configurations',
      name: 'configurations',
      component: configurations
    }
  ]
})
