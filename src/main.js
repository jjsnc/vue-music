import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import 'common/stylus/index.styl'

//  移动端调试用

/* eslint-disable no-unused-vars */

import vConsole from 'vconsole'

console.log('test')
// 去除移动端300ms 的延迟
fastclick.attach(document.body)
Vue.use(VueLazyload, {
  loading: require('common/image/default.png')
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
