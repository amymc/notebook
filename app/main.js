import Vue from 'vue'
import store from './store'
import App from './app'

/* eslint-disable no-new */
new Vue({
  store,
  el: 'body',
  components: { App }
})
