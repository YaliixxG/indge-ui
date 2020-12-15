import Vue from 'vue'
import App from './App.vue'
import './assets/reset.css'
import './assets/font/iconfont.css'
import Button from './components/button'
import Dialog from './components/dialog'
import Input from './components/input'

Vue.component(Button.name, Button)
Vue.component(Dialog.name, Dialog)
Vue.component(Input.name, Input)
Vue.config.productionTip = false

/* eslint-disable */
new Vue({
  render: h => h(App)
}).$mount('#app')
