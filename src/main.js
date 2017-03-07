import Vue from 'vue'
import App from './App'
import router from './router'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import chessboardjs from 'chessboardjs/www/css/chessboard.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
