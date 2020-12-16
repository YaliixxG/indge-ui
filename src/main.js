import Vue from 'vue'
import App from './App.vue'
import './assets/reset.css'
import './assets/font/iconfont.css'
import './components'

Vue.config.productionTip = false

/* eslint-disable */
new Vue({
  render: h => h(App)
}).$mount('#app')
