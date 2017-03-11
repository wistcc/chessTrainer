import Vue from 'vue'
import App from './App'
import store from './store/store'
import router from './router'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import bootstrapjs from 'bootstrap/dist/js/bootstrap.js'
import chessboardjs from 'chessboardjs/www/css/chessboard.css'

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  render: h => h(App)
})
