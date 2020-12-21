import Vue from 'vue'
import App from './App.vue'
// import './assets/reset.css'
// import './assets/font/iconfont.css'
// import './components'
import IndgeUI from '../packages'

Vue.config.productionTip = false
Vue.use(IndgeUI)

/* eslint-disable */
new Vue({
  render: h => h(App)
}).$mount('#app')
